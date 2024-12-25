// app/[lang]/components/Footer.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

interface LinkProps {
  title: string;
  href: string;
  src: string;
  alt: string;
  quality?: number;
}

const SocialLink = ({ title, href, src, alt }: LinkProps) => (
  <a title={title} target="_blank" href={href} rel="noopener noreferrer">
    <Image
      loading="lazy"
      quality={1}
      className="transform transition-transform duration-300 ease-in-out hover:scale-110"
      src={src}
      width={70}
      height={70}
      alt={alt}
    />
  </a>
);

const Footer = ({ lang }: { lang: Locale }) => {
  const [dic, setDic] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setDic(dictionary);
    };
    fetchDictionary();
  }, [lang]);

  if (!dic) return null; // or a loading indicator

  const links = [
    {
      title: "facebook",
      href: "https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL",
      src: "/images/facebook.svg",
      alt: "facebook icon",
    },
    {
      title: "instagram",
      href: "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr",
      src: "/images/insta.svg",
      alt: "instagram link",
    },
    {
      title: "Alnujoom Almasiya youtube",
      href: "https://youtube.com/@alnujoomalmasiya?si=NJz3MMf4d65aRUhV",
      src: "/images/youtube.svg",
      alt: "youtube icon",
    },
    {
      title: "email Farouk Dakkak",
      href: "mailto:farouk@alnujoomalmasiya.com",
      src: "/images/email.svg",
      alt: "email icon",
    },
    {
      title: "VK Account",
      href: "https://vk.com/id871743840",
      src: "/images/vk.svg",
      alt: "vk icon",
    },
  ];

  return (
    <footer className="footer pt-10 flex pb-4 justify-center items-center flex-col w-full mt-auto">
      <span className="text-3xl text-primary">{dic?.followUs}</span>
      <div className="flex gap-4 items-center justify-center lg:mb-8 mb-14 ">
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
