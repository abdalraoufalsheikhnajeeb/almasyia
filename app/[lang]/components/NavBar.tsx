import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

const Navbar = async ({ lang }: { lang: Locale }) => {
  const dic = await getDictionary(lang);

  const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={
        "text-primary text-xl relative hover:bg-primary-500/40  rounded-md "
      }
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-100 backdrop-brightness-125 h-20 w-full px-[5vw] py-2 flex items-center  top-0 justify-between z-[100] fixed">
      <Link href={`/${lang}`}>
        <Image
          quality={80}
          className="hidden md:flex  md:flex-shrink-0 h-16 w-24 object-cover"
          priority
          width={200}
          height={136}
          src="/images/logo.webp"
          alt="Logo"
        />
      </Link>

      <div className="flex gap-6">
        <NavItem href={`/${lang}`} label={dic?.Home} />
        <NavItem href={`/${lang}/about-us`} label={dic?.aboutUs} />
        <NavItem href={`/${lang}/WorldClock`} label={dic.worldClock} />
      </div>

      <div className="flex items-center h-14 gap-4">
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
