import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

const Navbar = async ({ lang }: { lang: Promise<Locale> }) => {
  const resolvedLang = await lang; 
  const dic = await getDictionary(resolvedLang);

  const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-primary text-xl relative hover:bg-primary-500/40 rounded-lg"
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white h-20 w-full px-[5vw] py-2 flex items-center top-0 justify-between z-[100] fixed">
      <Link href={`/${resolvedLang}`}>
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

      <div className="flex gap-6">
        <NavItem href={`/${resolvedLang}`} label={dic?.Home} />
        <NavItem href={`/${resolvedLang}/about-us`} label={dic?.aboutUs} />
        <NavItem href={`/${resolvedLang}/WorldClock`} label={dic.worldClock} />
      </div>

      <div className="flex items-center h-14 gap-4">
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
