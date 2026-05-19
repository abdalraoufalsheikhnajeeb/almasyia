// app/[lang]/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

interface LinkProps {
  title: string;
  href: string;
  src: string;
  alt: string;
}

const socialLinks: LinkProps[] = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL",
    src: "/images/facebook.svg",
    alt: "Facebook",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr",
    src: "/images/insta.svg",
    alt: "Instagram",
  },
  {
    title: "YouTube",
    href: "https://youtube.com/@alnujoomalmasiya?si=NJz3MMf4d65aRUhV",
    src: "/images/youtube.svg",
    alt: "YouTube",
  },
  {
    title: "Email",
    href: "mailto:farouk@alnujoomalmasiya.com",
    src: "/images/email.svg",
    alt: "Email",
  },
  {
    title: "VK",
    href: "https://vk.com/id871743840",
    src: "/images/vk.svg",
    alt: "VK",
  },
];

const SocialLink = ({ title, href, src, alt }: LinkProps) => (
  <a
    title={title}
    target="_blank"
    href={href}
    rel="noopener noreferrer"
    className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-sm ring-1 ring-white/60 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md"
    aria-label={title}
  >
    <Image
      loading="lazy"
      quality={50}
      className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
      src={src}
      width={40}
      height={40}
      alt={alt}
    />
  </a>
);

const Footer = async ({ lang }: { lang: Locale }) => {
  const dic = await getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/40 bg-gradient-to-b from-white/60 to-slate-50/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo.webp"
              alt="Alnujoom Almasiya"
              width={140}
              height={95}
              quality={70}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-3 max-w-xs text-center text-sm text-slate-600 md:text-start">
              Alnujoom Almasiya — Travel & Tourism Services worldwide.
            </p>
          </div>

          {/* Quick links */}
          <nav
            className="flex flex-col items-center text-sm md:items-start"
            aria-label="Footer navigation"
          >
            <h3 className="mb-3 text-base font-semibold text-primary">
              {dic.Home}
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href={`/${lang}/about-us`}
                  className="text-slate-600 transition-colors hover:text-primary"
                >
                  {dic.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="text-slate-600 transition-colors hover:text-primary"
                >
                  {dic.contact_us}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/WorldClock`}
                  className="text-slate-600 transition-colors hover:text-primary"
                >
                  {dic.worldClock}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Follow us */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="mb-3 text-base font-semibold text-primary">
              {dic?.followUs}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            &copy; {year} Alnujoom Almasiya. All rights reserved.
          </p>
          <p>
            Travel agency led by <span className="font-medium">Farouk Dakkak</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
