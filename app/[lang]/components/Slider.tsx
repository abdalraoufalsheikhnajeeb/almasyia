"use client";
import { useEffect, useMemo } from "react";
import AnTitle from "./AnTitle.tsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "./Slider.css";
import Link from "next/link";
import { getDictionary } from "../../../get-dictionary.ts";
import Autoplay from "embla-carousel-autoplay";

type SliderCard = {
  id: number;
  src: string;
  titleen: string;
  titlear: string;
  titleru: string;
  route: string;
};

type SliderProps = {
  dic: Awaited<ReturnType<typeof getDictionary>>;
  data: SliderCard[];
  title: string;
};

const Slider = ({ dic, data, title }: SliderProps) => {
  const autoplay = useMemo(() => Autoplay({ delay: 3000 }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", () => emblaApi.plugins().autoplay.stop());
    emblaApi.on("pointerUp", () => emblaApi.plugins().autoplay.play());
    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  const isRTL = dic.currLang === "ar";

  return (
    <section
      dir="ltr"
      className="mx-auto w-full max-w-7xl px-4 py-6"
    >
      <AnTitle title={title} />
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {data.map((card) => {
            const cardTitle =
              dic.currLang === "ar"
                ? card.titlear
                : dic.currLang === "ru"
                ? card.titleru
                : card.titleen;

            return (
              <div
                key={card.id}
                className="embla__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
              >
                <Link
                  href={`/${dic.currLang}/airLinesBrief/${card.route}`}
                  className="group block h-full"
                >
                  <article className="card-elegant flex h-full flex-col overflow-hidden">
                    <div className="relative flex h-32 items-center justify-center bg-slate-50/60 p-4 lg:h-40">
                      <Image
                        loading="lazy"
                        quality={70}
                        width={300}
                        height={140}
                        className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        src={card.src}
                        alt={cardTitle}
                      />
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="flex flex-1 flex-col justify-between gap-3 p-4"
                    >
                      <h3 className="text-base font-bold leading-snug text-primary lg:text-lg">
                        {cardTitle}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 ${
                          isRTL
                            ? "group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      >
                        {dic.learnMore}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          <path d="M13.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                        </svg>
                      </span>
                    </div>
                  </article>
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
