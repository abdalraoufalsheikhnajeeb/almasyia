"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { type getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "./locale-switcher";
import useMediaQuery from "./useMediaQuery";

const Navbar = ({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const lang = dic?.currLang;
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const pathname = usePathname();

  useEffect(() => {
    const storedPageIndex = localStorage.getItem("selectedPageIndex");
    if (storedPageIndex !== null) {
      setSelectedPageIndex(parseInt(storedPageIndex, 10));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        setIsBurgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const [selectedPageIndex, setSelectedPageIndex] = useState(0);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerOpen(false);
  };

  const NavItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`text-primary text-xl z-20 relative hover:bg-primary-500/40 px-3 py-2 rounded-md ${
        pathname === href ? "underline underline-offset-[12px] font-bold" : ""
      }`}
      onClick={closeBurgerMenu}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-gray-100 backdrop-brightness-125 h-20 w-full px-[5vw] py-2 flex items-center top-0 justify-between z-[100] fixed">
      <Link href={`/${lang}`}>
        <Image
          loading="lazy"
          quality={50}
          className="flex-shrink-0 h-14 w-24 object-cover"
         
          width={226}
          height={122}
          src="/images/logo.png"
          alt="Logo"
        />
      </Link>

      <div className="hidden lg:flex ms-10 items-baseline space-x-4">
        <NavItem href={`/${lang}`} label={dic?.Home} />
        <NavItem href={`/${lang}/about-us`} label={dic?.aboutUs} />
        <NavItem href={`/${lang}/WorldClock`} label={dic.worldClock} />
      </div>

      <div className="flex items-center h-14 gap-4">
        <LocaleSwitcher />

        <Image
          loading="lazy"
          quality={1}
          className="cursor-pointer h-10 shrink-0 z-10 -me-2 flex lg:hidden"
          onClick={toggleBurger}
          src={isBurgerOpen ? "/images/Cart.svg" : "/images/burger_menu.svg"}
          width={50}
          height={50}
          alt="Toggle menu"
        />
      </div>

      {isBurgerOpen && (
        <div className="flex bg-white w-screen h-screen flex-col fixed top-[60vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 justify-center items-center z-50">
          <NavItem href={`/${lang}`} label={dic?.Home} />
          <NavItem href={`/${lang}/about-us`} label={dic?.aboutUs} />
          <NavItem href={`/${lang}/WorldClock`} label={dic.worldClock} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
