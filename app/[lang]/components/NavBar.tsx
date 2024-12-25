"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

const Navbar = ({ lang }: { lang: Locale }) => {
  const [dic, setDic] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setDic(dictionary);
    };
    fetchDictionary();
  }, [lang]);

  if (!dic) return null;

  const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="block text-primary text-xl hover:bg-primary-500/20 rounded-md px-3 py-2"
    >
      {label}
    </Link>
  );

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
        <NavItem href={`/${lang}`} label={dic?.Home} />
        <NavItem href={`/${lang}/about-us`} label={dic?.aboutUs} />
        <NavItem href={`/${lang}/WorldClock`} label={dic.worldClock} />
        <NavItem href={`/${lang}/contact`} label={dic.contact_us} />
      </div>

      {/* Locale Switcher (Desktop & maybe mobile) */}
      <div className="hidden md:flex items-center h-14 gap-4">
        <LocaleSwitcher />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-start px-4 py-4 gap-2 z-40">
          <NavItem href={`/${lang}`} label={dic?.Home} />
          <NavItem href={`/${lang}/about-us`} label={dic?.aboutUs} />
          <NavItem href={`/${lang}/WorldClock`} label={dic.worldClock} />
          <NavItem href={`/${lang}/contact`} label={dic.contact_us} />

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
