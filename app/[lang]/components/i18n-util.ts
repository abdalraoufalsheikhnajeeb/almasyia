import type { Locale } from "../../../i18n-config";

/**
 * Inline translator for the three supported locales.
 * Use for one-off strings local to a component when you don't want
 * to add them to the dictionary files.
 *
 *   tr(lang, "مرحبا", "Hello", "Привет")
 */
export const tr = (
  lang: Locale | string,
  ar: string,
  en: string,
  ru: string
): string => (lang === "ar" ? ar : lang === "ru" ? ru : en);

/**
 * Local-time YYYY-MM-DD (avoids UTC drift from toISOString()).
 * SAFE TO CALL on client only — produces SSR-mismatch when used in render.
 */
export const todayISO = (): string => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
