"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldDark = theme === "dark" || (theme === "system" && systemDark);
  root.classList.toggle("dark", shouldDark);
};

const readSaved = (): Theme => {
  if (typeof window === "undefined") return "system";
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "light" || v === "dark" || v === "system") return v;
  return "system";
};

// Icons
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
  </svg>
);

const SystemIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const LABELS: Record<
  string,
  { light: string; dark: string; system: string; aria: string }
> = {
  en: { light: "Light", dark: "Dark", system: "System", aria: "Change theme" },
  ar: { light: "فاتح", dark: "داكن", system: "النظام", aria: "تغيير المظهر" },
  ru: {
    light: "Светлая",
    dark: "Тёмная",
    system: "Система",
    aria: "Сменить тему",
  },
};

export default function ThemeToggle({ lang = "en" }: { lang?: string }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // After mount, sync state with what the inline script already applied.
  // Intentional mount-time state sync — the brief cascade is desired so we
  // can swap from the SSR-stable placeholder to the real toggle.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(readSaved());
    setMounted(true);
  }, []);

  // When user changes preference, persist and apply
  const update = useCallback((next: Theme) => {
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* no-op (private mode etc.) */
    }
    applyTheme(next);
    setOpen(false);
  }, []);

  // Follow OS changes when in "system" mode
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  // Close popover on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const labels = LABELS[lang] ?? LABELS.en;
  const ActiveIcon =
    theme === "dark" ? MoonIcon : theme === "system" ? SystemIcon : SunIcon;

  // Avoid hydration mismatch — render a stable button until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label={labels.aria}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/60 text-primary shadow-sm backdrop-blur-md"
      >
        <SystemIcon className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={labels.aria}
        title={labels.aria}
        className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white/60 text-primary shadow-sm backdrop-blur-md transition-all hover:border-white/80 hover:bg-white/80 hover:shadow"
      >
        {/* Animated icon transition */}
        <span
          key={theme}
          className="animate-fade-in flex items-center justify-center"
        >
          <ActiveIcon className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={labels.aria}
          className="animate-fade-in glass-strong absolute end-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/50 py-1 shadow-lg"
        >
          {(
            [
              { value: "light" as Theme, label: labels.light, Icon: SunIcon },
              { value: "dark" as Theme, label: labels.dark, Icon: MoonIcon },
              {
                value: "system" as Theme,
                label: labels.system,
                Icon: SystemIcon,
              },
            ] as const
          ).map((opt) => {
            const active = theme === opt.value;
            return (
              <li key={opt.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => update(opt.value)}
                  className={`flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-white/50 font-semibold text-primary"
                      : "text-slate-700 hover:bg-white/40"
                  }`}
                >
                  <opt.Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="flex-1 text-start">{opt.label}</span>
                  {active && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
