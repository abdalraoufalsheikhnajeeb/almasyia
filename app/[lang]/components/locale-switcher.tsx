"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { type Locale } from "../../../i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" onClick={toggleDropdown} ref={dropdownRef}>
      <button className="focus:outline-none">
        <Image
          priority
          quality={1}
          width={37}
          className="object-cover mt-2"
          height={37}
          alt="Globe icon"
          src={`/images/globFlaf.svg`}
        />
      </button>
      {isOpen && (
        <div className="absolute -start-2 -top-2 w-14 pt-14 h-52 bg-[#34689447] cursor-pointer border rounded-full shadow-lg z-10">
          <div className="flex flex-col items-center gap-2 p-2">
            <Link
              href={redirectedPathName("en")}
              onClick={() => setIsOpen(false)}
            >
              <Image
                priority
                quality={1}
                width={40}
                height={25}
                className="object-cover hover:scale-110 transition-all"
                alt="English flag"
                src={`/images/en.svg`}
              />
            </Link>

            <Link
              href={redirectedPathName("ar")}
              onClick={() => setIsOpen(false)}
            >
              <Image
                priority
                quality={60}
                width={40}
                height={25}
                className="object-cover hover:scale-110 transition-all"
                alt="Arabic flag"
                src={`/images/ar.svg`}
              />
            </Link>

            <Link
              href={redirectedPathName("ru")}
              onClick={() => setIsOpen(false)}
            >
              <Image
                priority
                quality={1}
                width={40}
                height={25}
                className="object-cover hover:scale-110 transition-all"
                alt="Russian flag"
                src={`/images/ru.svg`}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
