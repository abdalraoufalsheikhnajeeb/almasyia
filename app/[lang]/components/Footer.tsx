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

const SocialLink = ({ title, href, src, alt, quality = 80 }: LinkProps) => (
  <a title={title} target="_blank" href={href} rel="noopener noreferrer">
    <Image
      loading="lazy"
      quality={quality}
      className="transform transition-transform duration-300 ease-in-out hover:scale-110"
      src={src}
      width={100}
      height={100}
      alt={alt}
    />
  </a>
);

export default async function Footer({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  const links = [
    {
      title: "facebook",
      href: "https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL",
      src: "/images/facebook.svg",
      alt: "facebook icon",
      quality: 1,
    },
    {
      title: "instagram",
      href: "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr",
      src: "/images/insta.svg",
      alt: "instagram link",
    },
    {
      title: "UAE location",
      href: "https://maps.app.goo.gl/7qC5aEFBgittwxY68",
      src: "/images/uaeLocation.svg",
      alt: "UAE location",
    },
    {
      title: "SAR location",
      href: "https://maps.app.goo.gl/AURZZ5qdu8yfD9NH9",
      src: "/images/sarLocation.svg",
      alt: "SAR location",
    },
    {
      title: "email Farouk Dakkak",
      href: "mailto:farouk@alnujoomalmasiya.com",
      src: "/images/email.svg",
      alt: "email icon",
    },
  ];

  return (
    <footer className="footer pt-10 flex pb-4 justify-center items-center flex-col w-full mt-auto">
      <span className="text-3xl text-primary">{dic?.followUs}</span>
      <div className="flex gap-4 items-center justify-center lg:mb-8 mb-14">
        {links.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </footer>
  );
}
