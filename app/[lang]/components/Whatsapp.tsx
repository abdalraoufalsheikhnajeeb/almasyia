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
    <>
      <style jsx>{`
        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7),
              0 0 0 5px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0),
              0 0 0 25px rgba(37, 211, 102, 0);
          }
        }

        .animate-ripple {
          position: relative;
          animation: ripple 1.5s infinite;
        }
      `}</style>

      <div
        className="animate-bounce fixed bottom-4 end-4 cursor-pointer z-50"
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <div
          className={`rounded-full ${
            !isOpen && "animate-bounce animate-ripple"
          } p-2 lg:p-4 w-12 h-12 lg:w-20 lg:h-20 flex-shrink-0 flex justify-center items-center bg-[#25d366]`}
        >
          <Image
            priority
            quality={1}
            width={50}
            className="object-cover w-full h-full"
            height={50}
            alt="Whatsapp icon"
            src={`/images/whats.svg`}
          />
        </div>
        {isOpen && (
          <div className="absolute -start-2 -bottom-2 w-14 lg:w-24 lg:pb-24 pb-12 bg-white cursor-pointer border rounded-full shadow-lg -z-10">
            <div className="flex flex-col items-center gap-2 p-2">
              <Link target="_blank" href="https://wa.me/971545866066">
                <Image
                  priority
                  quality={1}
                  width={78}
                  height={78}
                  className="object-cover hover:scale-110 transition-all w-10 h-10 lg:w-20 lg:h-20"
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
                  className="object-cover hover:scale-110 transition-all w-10 h-10 lg:w-20 lg:h-20"
                  alt="syria flag"
                  src="/images/syria-flag.svg"
                />
              </Link>
              <Link target="_blank" href="https://wa.me/79189239693">
                <Image
                  priority
                  quality={1}
                  width={78}
                  height={78}
                  className="object-cover hover:scale-110 transition-all w-10 h-10 lg:w-20 lg:h-20"
                  alt="syria flag"
                  src="/images/ru.svg"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
