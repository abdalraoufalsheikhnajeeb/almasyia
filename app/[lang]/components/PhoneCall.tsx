"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function PhoneCall() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-5 start-5 z-50 flex flex-col items-start gap-3"
    >
      {/* Country options */}
      {isOpen && (
        <div className="animate-fade-in flex flex-col gap-2 glass-strong p-2 rounded-2xl shadow-lg">
          <Link
            href="tel:+971545866066"
            aria-label="Call UAE"
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <Image
              priority
              quality={1}
              width={28}
              height={28}
              className="rounded-full object-cover"
              alt="UAE flag"
              src="/images/emirate-flag.svg"
            />
            <span className="text-sm font-medium text-primary tabular-nums">
              +971 54 586 6066
            </span>
          </Link>
          <Link
            href="tel:+963950026610"
            aria-label="Call Syria"
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <Image
              priority
              quality={1}
              width={28}
              height={28}
              className="rounded-full object-cover"
              alt="Syria flag"
              src="/images/syria-flag.svg"
            />
            <span className="text-sm font-medium text-primary tabular-nums">
              +963 950 026 610
            </span>
          </Link>
        </div>
      )}

      {/* Modern FAB toggle */}
      <span className="fab-modern-wrap">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open phone contact options"
          aria-expanded={isOpen}
          className="fab-modern fab-call"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 lg:w-6 lg:h-6"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.33.03.7-.24 1.02l-2.21 2.2z" />
          </svg>
          {!isOpen && <span className="fab-badge" aria-hidden="true" />}
        </button>
      </span>
    </div>
  );
}
