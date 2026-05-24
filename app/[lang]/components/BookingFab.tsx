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

  return (
    <Link
      href={`/${lang}/Services/airLines`}
      aria-label={label}
      title={label}
      data-visible={visible || undefined}
      className={[
        // Position: vertically centered, snug against the edge
        "group fixed top-1/2 z-40 -translate-y-1/2",
        // Layout: vertical stack on desktop, compact on mobile
        "flex flex-col items-center justify-center gap-1.5 sm:gap-2",
        // Sizing
        "px-2 py-3 sm:px-2.5 sm:py-4",
        // Visuals: gold gradient with subtle ring
        "bg-gradient-to-b from-accent to-[#c89e4f] text-white",
        "ring-1 ring-white/30",
        "shadow-[0_8px_28px_rgba(211,177,103,0.45)]",
        // Shape — rounded on inside edge only, flush to viewport edge
        isRTL ? "left-0 rounded-r-2xl" : "right-0 rounded-l-2xl",
        // Smooth transitions
        "transition-[transform,opacity,box-shadow] duration-500 ease-out",
        // Hover micro-interaction
        "hover:shadow-[0_10px_36px_rgba(211,177,103,0.6)] hover:brightness-105",
        // Show/hide animation
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 pointer-events-none " +
            (isRTL ? "-translate-x-full" : "translate-x-full"),
      ].join(" ")}
    >
      {/* Subtle inner highlight */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0",
          isRTL ? "rounded-r-2xl" : "rounded-l-2xl",
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

      {/* Vertical label — hidden on very small screens */}
      <span
        className="relative hidden text-[10px] font-bold uppercase tracking-[0.2em] leading-none sm:inline sm:text-[11px]"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: isRTL ? "rotate(180deg)" : "none",
        }}
      >
        {label}
      </span>

      {/* Pulse indicator dot */}
      <span
        aria-hidden="true"
        className="relative mt-0.5 flex h-1.5 w-1.5"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
    </Link>
  );
}
