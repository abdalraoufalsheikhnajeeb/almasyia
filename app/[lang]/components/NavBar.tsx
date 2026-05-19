"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { Locale } from "../../../i18n-config";

type NavLabels = {
  home: string;
  aboutUs: string;
  worldClock: string;
  contactUs: string;
};

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
};

const NavItem = ({
  href,
  label,
  active,
  onClick,
  variant = "desktop",
}: NavItemProps) => {
  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
          active
            ? "bg-litePrimary/10 text-primary"
            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-block rounded-md px-3 py-2 text-base lg:text-lg font-medium transition-colors ${
        active ? "text-primary" : "text-slate-600 hover:text-primary"
      }`}
    >
      <span>{label}</span>
      <span
        className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 origin-center ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
};

const Navbar = ({ lang, labels }: { lang: Locale; labels: NavLabels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname() ?? "";

  const isActive = (path: string) => {
    if (path === `/${lang}`) {
      return pathName === `/${lang}` || pathName === `/${lang}/`;
    }
    return pathName === path || pathName.startsWith(path + "/");
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/85 backdrop-blur-xl backdrop-saturate-150 shadow-[0_2px_16px_rgba(36,75,107,0.06)]"
      aria-label="Primary"
    >
      {/* ===== Top bar ===== */}
      <div className="flex w-full items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-[5vw]">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex-shrink-0"
          aria-label="Alnujoom Almasiya home"
        >
          <Image
            quality={70}
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
            priority
            width={200}
            height={136}
            src="/images/logo.webp"
            alt="Alnujoom Almasiya logo"
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
          <NavItem
            href={`/${lang}`}
            label={labels.home}
            active={isActive(`/${lang}`)}
          />
          <NavItem
            href={`/${lang}/about-us`}
            label={labels.aboutUs}
            active={isActive(`/${lang}/about-us`)}
          />
          <NavItem
            href={`/${lang}/WorldClock`}
            label={labels.worldClock}
            active={isActive(`/${lang}/WorldClock`)}
          />
          <NavItem
            href={`/${lang}/contact`}
            label={labels.contactUs}
            active={isActive(`/${lang}/contact`)}
          />
        </div>

        {/* Right side: Locale (desktop) + Burger (mobile) */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <div className="hidden md:flex md:items-center">
            <LocaleSwitcher />
          </div>

          {/* Burger Button (Mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-slate-100 md:hidden"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu (sibling of inner row — spans full nav width) ===== */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="animate-fade-in w-full border-t border-slate-200/70 bg-white px-4 py-3 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            <li>
              <NavItem
                variant="mobile"
                href={`/${lang}`}
                label={labels.home}
                active={isActive(`/${lang}`)}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                variant="mobile"
                href={`/${lang}/about-us`}
                label={labels.aboutUs}
                active={isActive(`/${lang}/about-us`)}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                variant="mobile"
                href={`/${lang}/WorldClock`}
                label={labels.worldClock}
                active={isActive(`/${lang}/WorldClock`)}
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <NavItem
                variant="mobile"
                href={`/${lang}/contact`}
                label={labels.contactUs}
                active={isActive(`/${lang}/contact`)}
                onClick={() => setIsOpen(false)}
              />
            </li>
          </ul>

          <div className="mt-3 border-t border-slate-200/70 pt-3">
            <LocaleSwitcher variant="mobile" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
