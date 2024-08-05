"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { type Locale } from "../../../i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-14 " onClick={toggleDropdown}>
      <button  className="focus:outline-none">
        <Image
          loading="lazy"
          quality={1}
          width={37}
          className="object-cover"
          height={37}
          alt="Globe icon"
          src={`/images/globFlaf.svg`}
        />
      </button>
      {isOpen && (
        <div className="absolute -start-2 -top-2 w-14 pt-12 bg-[#34689447]  cursor-pointer border rounded-3xl  shadow-lg z-10">
          <div className="flex flex-col items-center gap-2 p-2">
            <Link href={redirectedPathName("en")} onClick={() => setIsOpen(false)}>
              <Image
                loading="lazy"
                quality={1}
                width={40}
                height={25}
                className="object-cover hover:-scale-110 transition-all"
                alt="English flag"
                src={`/images/en.svg`}
              />
            </Link>

            <Link href={redirectedPathName("ar")} onClick={() => setIsOpen(false)}>
              <Image
                loading="lazy"
                quality={100}
                width={40}
                height={25}
                className="object-cover hover:-scale-110 transition-all"
                alt="Arabic flag"
                src={`/images/ar.webp`}
              />
            </Link>

            <Link href={redirectedPathName("ru")} onClick={() => setIsOpen(false)}>
              <Image
                loading="lazy"
                quality={1}
                width={40}
                height={25}
                className="object-cover hover:-scale-110 transition-all"
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
