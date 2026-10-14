"use client";
import Link from "next/link";
import { useState, useRef, useId } from "react";
import { usePopoverDismiss } from "./usePopoverDismiss";
import Image from "next/image";
import { tr } from "./i18n-util";

export default function PhoneCall({ lang }: { lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  usePopoverDismiss({ open: isOpen, setOpen: setIsOpen, containerRef: dropdownRef, triggerRef });

  return (
    <div
      ref={dropdownRef}
      className="fixed bottom-5 start-5 z-50 flex flex-col-reverse items-start gap-3"
    >
      {/* Modern FAB toggle */}
      <span className="fab-modern-wrap">
        <button
          ref={triggerRef}
          type="button"
          aria-controls={isOpen ? panelId : undefined}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={tr(lang, "خيارات الاتصال الهاتفي", "Open phone contact options", "Варианты связи по телефону")}
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

      {/* Country options */}
      {isOpen && (
        <div id={panelId} className="animate-fade-in flex flex-col gap-2 glass-strong p-2 rounded-2xl shadow-lg">
          <Link
            href="tel:+971545866066"
            aria-label={tr(lang, "اتصل بالإمارات", "Call UAE", "Позвонить в ОАЭ") + " +971 54 586 6066"}
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <Image
              quality={75}
              width={28}
              height={28}
              className="rounded-full object-cover"
              alt="UAE flag"
              src="/images/emirate-flag.svg"
            />
            <span dir="ltr" className="text-sm font-medium text-primary tabular-nums">
              +971 54 586 6066
            </span>
          </Link>
          <Link
            href="tel:+963950026610"
            aria-label={tr(lang, "اتصل بسوريا", "Call Syria", "Позвонить в Сирию") + " +963 950 026 610"}
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <Image
              quality={75}
              width={28}
              height={28}
              className="rounded-full object-cover"
              alt="Syria flag"
              src="/images/syria-flag.svg"
            />
            <span dir="ltr" className="text-sm font-medium text-primary tabular-nums">
              +963 950 026 610
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
