"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { i18n, type Locale } from "../../../i18n-config";
import Image from "next/image";

const LOCALE_META: Record<Locale, { label: string; native: string; flag: string }> = {
  en: { label: "English", native: "English", flag: "/images/en.svg" },
  ar: { label: "Arabic", native: "العربية", flag: "/images/ar.svg" },
  ru: { label: "Russian", native: "Русский", flag: "/images/ru.svg" },
};

type Variant = "desktop" | "mobile";

export default function LocaleSwitcher({
  variant = "desktop",
}: {
  variant?: Variant;
} = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = ((): Locale => {
    if (!pathName) return "en";
    const seg = pathName.split("/")[1];
    return (i18n.locales as readonly string[]).includes(seg)
      ? (seg as Locale)
      : "en";
  })();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (variant === "mobile") {
    // Inline mobile list — no popover, no overflow risks
    return (
      <div className="w-full">
        <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Language
        </p>
        <ul className="grid grid-cols-3 gap-2">
          {i18n.locales.map((locale) => {
            const meta = LOCALE_META[locale as Locale];
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <Link
                  href={redirectedPathName(locale as Locale)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 transition-all ${
                    isActive
                      ? "border-litePrimary/40 bg-litePrimary/10 text-primary shadow-sm"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <Image
                    quality={75}
                    width={24}
                    height={24}
                    className="rounded-full object-cover ring-1 ring-white shadow-sm"
                    alt={`${meta.label} flag`}
                    src={meta.flag}
                  />
                  <span className="text-xs font-semibold">{meta.native}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur-md px-3 py-1.5 text-sm font-medium text-primary shadow-sm transition-all hover:border-white/80 hover:bg-white/80 hover:shadow"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Image
          quality={75}
          width={20}
          height={20}
          className="rounded-full object-cover"
          alt={`${LOCALE_META[currentLocale].label} flag`}
          src={LOCALE_META[currentLocale].flag}
        />
        <span className="hidden sm:inline">
          {LOCALE_META[currentLocale].native}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="animate-fade-in absolute end-0 mt-2 w-44 overflow-hidden rounded-xl border border-white/50 glass-strong py-1 shadow-lg z-50"
        >
          {i18n.locales.map((locale) => {
            const meta = LOCALE_META[locale as Locale];
            const isActive = locale === currentLocale;
            return (
              <li key={locale} role="option" aria-selected={isActive}>
                <Link
                  href={redirectedPathName(locale as Locale)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white/50 font-semibold text-primary"
                      : "text-slate-700 hover:bg-white/40"
                  }`}
                >
                  <Image
                    quality={75}
                    width={22}
                    height={22}
                    className="rounded-full object-cover"
                    alt={`${meta.label} flag`}
                    src={meta.flag}
                  />
                  <span>{meta.native}</span>
                  {isActive && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ms-auto text-accent"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
