"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { type Locale } from "../../../i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-3">
      <Link href={redirectedPathName("en")}>
        <Image
          loading="lazy"
          quality={1}
          width={50}
          className="w-14 h-9 object-cover"
          height={50}
          alt="flag"
          src={`/images/en.svg`}
        />
      </Link>

      <Link href={redirectedPathName("ar")}>
        <Image
          loading="lazy"
          quality={40}
          width={50}
          height={50}
          alt="flag"
          className="w-14 h-9 object-cover"
          src={`/images/ar.webp`}
        />
      </Link>

      <Link href={redirectedPathName("ru")}>
        <Image
          loading="lazy"
          quality={1}
          width={50}
          height={50}
          className="w-14 h-9 object-cover"
          alt="flag"
          src={`/images/ru.svg`}
        />
      </Link>
    </div>
  );
}
