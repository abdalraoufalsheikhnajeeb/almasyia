"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingFab({
  lang,
  label,
}: {
  lang: string;
  label: string;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;
  const isAirlinesPage = pathname === `/${lang}/Services/airLines`;

  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const visible = !isAirlinesPage && (!isHomePage || pastHero);
  const isRTL = lang === "ar";
  if (!visible) return null;

  return (
    <Link
      href={`/${lang}/Services/airLines`}
      aria-label={label}
      title={label}
      data-visible={visible || undefined}
      className={[
        // Keep the middle of small screens clear for form fields and text.
        "group fixed bottom-5 left-1/2 z-40 -translate-x-1/2 sm:bottom-auto sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2",
        "flex flex-row items-center justify-center gap-1.5 sm:flex-col sm:gap-2",
        // Sizing
        "min-h-11 min-w-11 max-w-[calc(100vw-10rem)] px-3 py-2 sm:max-w-none sm:px-2.5 sm:py-4",
        // Visuals: gold gradient with subtle ring
        "bg-gradient-to-b from-accent to-[#c89e4f] text-[#172b3a]",
        "ring-1 ring-white/30",
        "shadow-[0_8px_28px_rgba(211,177,103,0.45)]",
        // Mobile pill; rounded on the inside edge of the desktop tab.
        isRTL
          ? "rounded-full sm:left-0 sm:rounded-l-none sm:rounded-r-2xl"
          : "rounded-full sm:left-auto sm:right-0 sm:rounded-r-none sm:rounded-l-2xl",
        // Smooth transitions
        "transition-[transform,opacity,box-shadow] duration-500 ease-out",
        // Hover micro-interaction
        "hover:shadow-[0_10px_36px_rgba(211,177,103,0.6)] hover:brightness-105",
      ].join(" ")}
    >
      {/* Subtle inner highlight */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0",
          "rounded-[inherit]",
          "bg-gradient-to-b from-white/25 via-transparent to-transparent",
        ].join(" ")}
      />

      {/* Plane icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative h-5 w-5 flex-shrink-0 drop-shadow-sm sm:h-6 sm:w-6"
        aria-hidden="true"
      >
        <path d="M2.5 19h19v2h-19v-2zm19.07-9.94c-.21-.79-1.02-1.26-1.81-1.05L14.92 9.2 8.46 3.17 6.53 3.68l3.87 6.7-4.66 1.24-1.85-1.45-1.45.39 1.96 3.39.78 1.34 1.6-.43 5.31-1.42 4.31-1.16 5.65-1.51c.79-.22 1.26-1.03 1.05-1.81z" />
      </svg>

      {/* Keep the booking action readable on mobile too. */}
      <span
        className={`relative text-xs font-bold leading-snug [writing-mode:horizontal-tb] sm:[writing-mode:vertical-rl] ${isRTL ? "sm:rotate-180" : ""}`}
      >
        {label}
      </span>

      {/* Pulse indicator dot */}
      <span
        aria-hidden="true"
        className="relative mt-0.5 hidden h-1.5 w-1.5 sm:flex"
      >
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    </Link>
  );
}
