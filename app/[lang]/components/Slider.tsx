"use client";
import React, { useEffect } from "react";
import AnTitle from "./AnTitle.tsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./Slider.css";
import Link from "next/link";
import { getDictionary } from "../../../get-dictionary.ts";
import Autoplay from "embla-carousel-autoplay";

type Slider = {
  id: number;
  src: string;
  titleen: string;
  titlear: string;
  titleru: string;
  route: string;
};

type SliderProps = {
  dic: Awaited<ReturnType<typeof getDictionary>>;
  data: Slider[];
  title: string;
};

const Slider = ({ dic, data, title }: SliderProps) => {
  const autoplayOptions = { delay: 2000 }; // Delay in milliseconds
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("pointerDown", () => emblaApi.plugins().autoplay.stop()); // Stop autoplay on interaction
    emblaApi.on("pointerUp", () => emblaApi.plugins().autoplay.play()); // Resume autoplay after interaction

    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <section dir="ltr" className="lg:max-w-7xl max-w-[95vw] mt-16 px-2 ">
      <AnTitle title={title} />
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {data.map((card, index) => {
            let cardTitle;

            if (dic.currLang === "ar") {
              cardTitle = card.titlear;
            } else if (dic.currLang === "ru") {
              cardTitle = card.titleru;
            } else {
              cardTitle = card.titleen;
            }

            return (
              <div key={index} className="embla__slide p-4 flex-shrink-0 w-1/3">
                <Link href={`/${dic.currLang}/airLinesBrief/${card.route}`}>
                  <div className="bg-gray-200 relative border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-center items-center overflow-hidden">
                    <div className="bg-white flex justify-center items-center w-full">
                      <Image
                        loading="lazy"
                        quality={10}
                        width={400}
                        height={200}
                        className="rounded-t-lg aspect-video w-full object-cover"
                        src={card.src}
                        alt={cardTitle}
                      />
                    </div>
                    <div className="p-4 pb-7 flex-grow flex flex-col justify-between h-28">
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary text-center">
                        {cardTitle}
                      </h2>
                      <span
                        className={`flex items-center justify-center font-bold mt-4 absolute ${
                          dic.currLang == "ar"
                            ? `left-2 flex-row-reverse`
                            : `right-2`
                        } bottom-2`}
                      >
                        {dic.learnMore}
                        <Image
                          width={50}
                          height={50}
                          quality={1}
                          src="/images/arrow.svg"
                          alt="arrow"
                          className={`ms-2 h-10 w-10 aspect-square transition-transform  duration-300 hover:translate-x-1 ${
                            dic.currLang == "ar" ? `rotate-180` : ``
                          }  `}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
