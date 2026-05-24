"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookingFab({
  lang,
  label,
}: {
  lang: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isRTL = lang === "ar";

  return (
    <Link
      href={`/${lang}/Services/airLines`}
      aria-label={label}
      className={[
        "fixed top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2",
        "rounded-xl px-2 py-4 shadow-xl",
        "bg-accent text-white",
        "transition-all duration-500",
        "hover:px-3 hover:shadow-2xl hover:brightness-110",
        isRTL
          ? "left-0 rounded-s-none"
          : "right-0 rounded-e-none",
        visible
          ? "translate-x-0 opacity-100"
          : isRTL
          ? "-translate-x-full opacity-0 pointer-events-none"
          : "translate-x-full opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Plane icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M2.5 19h19v2h-19v-2zm19.07-9.94c-.21-.79-1.02-1.26-1.81-1.05L14.92 9.2 8.46 3.17 6.53 3.68l3.87 6.7-4.66 1.24-1.85-1.45-1.45.39 1.96 3.39.78 1.34 1.6-.43 5.31-1.42 4.31-1.16 5.65-1.51c.79-.22 1.26-1.03 1.05-1.81z" />
      </svg>

      {/* Vertical label */}
      <span
        className="text-[11px] font-bold uppercase tracking-widest leading-none"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: isRTL ? "rotate(180deg)" : "none" }}
      >
        {label}
      </span>
    </Link>
  );
}
