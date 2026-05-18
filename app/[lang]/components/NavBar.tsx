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
};

const NavItem = ({ href, label, active, onClick }: NavItemProps) => (
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
      className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/90 px-[5vw] py-2 backdrop-blur-md shadow-sm"
      aria-label="Primary"
    >
      {/* Logo */}
      <Link
        href={`/${lang}`}
        className="flex-shrink-0"
        aria-label="Alnujoom Almasiya home"
      >
        <Image
          quality={70}
          className="h-14 w-auto object-contain md:h-16"
          priority
          width={200}
          height={136}
          src="/images/logo.webp"
          alt="Alnujoom Almasiya logo"
        />
      </Link>

      {/* Burger Button (Mobile) */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-slate-100"
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

      {/* Locale Switcher (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <LocaleSwitcher />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="animate-fade-in absolute start-0 top-[100%] z-40 flex w-full flex-col items-start gap-1 border-t border-slate-100 bg-white px-4 py-4 shadow-md md:hidden">
          <NavItem
            href={`/${lang}`}
            label={labels.home}
            active={isActive(`/${lang}`)}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/about-us`}
            label={labels.aboutUs}
            active={isActive(`/${lang}/about-us`)}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/WorldClock`}
            label={labels.worldClock}
            active={isActive(`/${lang}/WorldClock`)}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/contact`}
            label={labels.contactUs}
            active={isActive(`/${lang}/contact`)}
            onClick={() => setIsOpen(false)}
          />

          <div className="mt-3">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
