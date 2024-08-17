"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
export default function Whatsapp() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed bottom-4 end-4 cursor-pointer z-50"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <div
        className={`rounded-full  ${
          !isOpen && "animate-bounce"
        } p-4 flex-shrink-0 flex justify-center items-center bg-[#25d366]`}
      >
        <Image
          priority
          quality={1}
          width={50}
          className="object-cover"
          height={50}
          alt="Globe icon"
          src={`/images/whats.svg`}
        />
      </div>
      {isOpen && (
        <div className="absolute -start-2 -bottom-2 w-24 pb-24 bg-white cursor-pointer border rounded-full shadow-lg -z-10">
          <div className="flex  flex-col items-center gap-2 p-2">
            <Link target="_blank" href="https://wa.me/971545866066">
              <Image
                priority
                quality={1}
                width={78}
                height={78}
                className="object-cover w-full hover:scale-110 transition-all"
                alt="uae flag"
                src="/images/emirate-flag.svg"
              />
            </Link>

            <Link target="_blank" href="https://wa.me/963950026610">
              <Image
                priority
                quality={1}
                width={78}
                height={78}
                className="object-cover w-full hover:scale-110 transition-all"
                alt="syria flag"
                src="/images/syria-flag.svg"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
