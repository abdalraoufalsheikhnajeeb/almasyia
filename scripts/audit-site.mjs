import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://localhost:3100";
const siteUrl = "https://www.alnujoomalmasiya.com";
const manifest = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
const routes = Object.keys(manifest.routes).filter((route) => /^\/(en|ar|ru)(\/|$)/.test(route));
const knownRoutes = new Set(routes);
const assets = new Set((await readdir("public", { recursive: true })).map((file) => "/" + file.replaceAll("\\", "/")));
const failures = [];
const internalLinks = new Set();
const checkedImages = new Set();

function checkAsset(url, route) {
  if (!url?.startsWith("/images/")) return;
  assert(assets.has(decodeURIComponent(url)), `${route}: missing or incorrectly cased image ${url}`);
  checkedImages.add(url);
}

async function auditPage(route) {
  const response = await fetch(baseUrl + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const locale = route.split("/")[1];
  assert(html.includes(`<html lang="${locale}"`), `${route}: document language`);
  assert.equal((html.match(/<main[\s>]/g) ?? []).length, 1, `${route}: main landmark`);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${route}: page heading`);
  assert(html.includes(`rel="canonical" href="${siteUrl}${route}"`), `${route}: canonical`);
  assert(/<meta name="description" content="[^"]+"/.test(html), `${route}: description`);
  for (const language of ["en", "ar", "ru", "x-default"]) {
    assert(html.includes(`hrefLang="${language}"`), `${route}: missing alternate ${language}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
  }
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("/") && !href.startsWith("//")) {
      internalLinks.add(new URL(href, baseUrl).pathname);
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*src="([^"]*)"/g)) {
    const url = new URL(match[1].replaceAll("&amp;", "&"), baseUrl);
    checkAsset(url.pathname === "/_next/image" ? url.searchParams.get("url") : url.pathname, route);
  }
  assert.equal(response.headers.get("x-content-type-options"), "nosniff", route);
}

const queue = [...routes];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const route = queue.shift();
    try {
      await auditPage(route);
    } catch (error) {
      failures.push(error.message);
    }
  }
}));

for (const route of internalLinks) {
  if (route !== "/" && !knownRoutes.has(route) && !assets.has(route)) failures.push("Unknown internal link: " + route);
}

for (const [path, headers, status, destination] of [
  ["/", { "Accept-Language": "ar" }, 307, "/ar"],
  ["/", { Cookie: "NEXT_LOCALE=ru", "Accept-Language": "ar" }, 307, "/ru"],
  ["/ar/airLinesBrief/ChamWingsAirlines", {}, 308, "/ar/airLinesBrief/FlyChamAirlines"],
  ["/en/__audit_missing_page", {}, 404, null],
]) {
  const response = await fetch(baseUrl + path, { headers, redirect: "manual" });
  if (response.status !== status) failures.push(`${path}: expected ${status}, got ${response.status}`);
  if (destination && new URL(response.headers.get("location"), baseUrl).pathname !== destination) failures.push(path + ": incorrect redirect");
}

const sitemap = await (await fetch(baseUrl + "/sitemap-0.xml")).text();
for (const route of routes) {
  if (!sitemap.includes(`<loc>${siteUrl}${route}</loc>`)) failures.push("Missing sitemap route: " + route);
}
const optimized = await fetch(baseUrl + "/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=70");
if (optimized.status !== 200 || !optimized.headers.get("content-type")?.startsWith("image/")) failures.push("Image optimizer failed");

console.log(JSON.stringify({ routes: routes.length, imagePaths: checkedImages.size, internalLinks: internalLinks.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
