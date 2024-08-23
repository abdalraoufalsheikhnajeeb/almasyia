"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
export default function PhoneCall() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed bottom-4 start-4 cursor-pointer z-50"
      onClick={toggleDropdown}
      ref={dropdownRef}
    >
      <div
        className={`rounded-full  ${
          !isOpen && "animate-bounce"
        } p-1 lg:p-4  w-10 h-10 lg:w-20 lg:h-20 flex-shrink-0 flex justify-center items-center bg-[#3b86ff]`}
      >
        <Image
          priority
          quality={1}
          width={50}
          className="object-cover w-full h-full"
          height={50}
          alt="phone icon"
          src={`/images/phone_ic.svg`}
        />
      </div>
      {isOpen && (
        <div className="absolute -start-2 -bottom-2 w-14 lg:w-24 lg:pb-24 pb-12  bg-white cursor-pointer border rounded-full shadow-lg -z-10">
          <div className="flex  flex-col items-center gap-2 p-2">
            <Link target="_blank" href="+971545866066">
              <Image
                priority
                quality={1}
                width={78}
                height={78}
                className="object-cover  hover:scale-110 transition-all w-10 h-10 lg:w-20 lg:h-20"
                alt="uae flag"
                src="/images/emirate-flag.svg"
              />
            </Link>

            <Link target="_blank" href="+963950026610">
              <Image
                priority
                quality={1}
                width={78}
                height={78}
                className="object-cover  hover:scale-110 transition-all w-10 h-10 lg:w-20 lg:h-20"
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