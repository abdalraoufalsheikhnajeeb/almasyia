"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  onClick?: () => void;
};

const NavItem = ({ href, label, onClick }: NavItemProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-primary text-xl hover:bg-primary-500/20 rounded-md px-3 py-2"
  >
    {label}
  </Link>
);

const Navbar = ({ lang, labels }: { lang: Locale; labels: NavLabels }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full px-[5vw] py-2 flex items-center top-0 justify-between z-50 fixed shadow-sm">
      {/* Logo */}
      <Link href={`/${lang}`}>
        <Image
          quality={60}
          className="hidden md:flex md:flex-shrink-0 h-16 w-24 object-cover"
          priority
          width={200}
          height={136}
          src="/images/logo.webp"
          alt="Logo"
        />
      </Link>

      {/* Burger Button (Mobile) */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
        >
          {/* Simple bars icon */}
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Bars icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex md:items-center md:gap-4">
        <NavItem href={`/${lang}`} label={labels.home} />
        <NavItem href={`/${lang}/about-us`} label={labels.aboutUs} />
        <NavItem href={`/${lang}/WorldClock`} label={labels.worldClock} />
        <NavItem href={`/${lang}/contact`} label={labels.contactUs} />
      </div>

      {/* Locale Switcher (Desktop & maybe mobile) */}
      <div className="hidden md:flex items-center h-14 gap-4">
        <LocaleSwitcher />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-4 py-4 gap-2 z-40">
          <NavItem
            href={`/${lang}`}
            label={labels.home}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/about-us`}
            label={labels.aboutUs}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/WorldClock`}
            label={labels.worldClock}
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            href={`/${lang}/contact`}
            label={labels.contactUs}
            onClick={() => setIsOpen(false)}
          />

          {/* Locale Switcher (show in mobile menu as well, if desired) */}
          <div className="mt-2">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
