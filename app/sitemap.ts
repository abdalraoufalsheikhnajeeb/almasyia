import type { MetadataRoute } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { i18n } from "../i18n-config";

const siteUrl = "https://www.alnujoomalmasiya.com";
export const dynamic = "force-static";

// Build from the page tree so newly added static pages are not forgotten.
async function pagePaths(directory: string, segments: string[] = []): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes: string[] = [];
  if (entries.some((entry) => entry.isFile() && /^page\.(tsx?|jsx?)$/.test(entry.name))) {
    routes.push(segments.length ? "/" + segments.join("/") : "");
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_") || entry.name.startsWith("@")) continue;
    if (entry.name.startsWith("[")) {
      throw new Error(`Add generated parameter values to the sitemap for ${entry.name}`);
    }
    const group = entry.name.startsWith("(") && entry.name.endsWith(")");
    routes.push(...await pagePaths(path.join(directory, entry.name), group ? segments : [...segments, entry.name]));
  }
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [...new Set(await pagePaths(path.join(process.cwd(), "app", "[lang]")))].sort();
  return routes.flatMap((route) => {
    const languages = Object.fromEntries([
      ...i18n.locales.map((locale) => [locale, `${siteUrl}/${locale}${route}`]),
      ["x-default", `${siteUrl}/${i18n.defaultLocale}${route}`],
    ]);
    return i18n.locales.map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      alternates: { languages },
    }));
  });
}
