import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { i18n, type Locale } from "./i18n-config";

const LOCALE_COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Pick the best locale for this request.
 * Priority:
 *   1. User's saved choice from the NEXT_LOCALE cookie.
 *   2. The browser's Accept-Language header, matched against our supported set.
 *   3. The configured default ("en").
 */
function detectLocale(request: NextRequest): Locale {
  const supported = i18n.locales as readonly string[];

  // 1. Persisted user choice
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && supported.includes(cookieLocale)) {
    return cookieLocale as Locale;
  }

  // 2. Browser preference (Accept-Language)
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  let languages: string[] = [];
  try {
    languages = new Negotiator({ headers }).languages();
  } catch {
    languages = [];
  }

  // intl-localematcher needs at least one candidate; fall back to default
  if (languages.length === 0 || languages[0] === "*") {
    return i18n.defaultLocale;
  }

  try {
    return matchLocale(languages, supported, i18n.defaultLocale) as Locale;
  } catch {
    return i18n.defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip when the path already starts with a supported locale
  const hasLocalePrefix = i18n.locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Otherwise, detect and redirect (preserve the rest of the URL + query)
  const locale = detectLocale(request);
  const newPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const url = new URL(newPath + search, request.url);

  const response = NextResponse.redirect(url);

  // Refresh the locale cookie so the choice persists for future visits.
  // If there's no cookie yet, store the detected one so we don't run the
  // Accept-Language negotiation on every cold request.
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  // Run on every path except static files, image optimizer, and known SEO assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|opengraph-image.png|robots.txt|sitemap.xml|sitemap-.*\\.xml|images/).*)",
  ],
};
