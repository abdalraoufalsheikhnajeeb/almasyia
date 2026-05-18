"use client";
import { useEffect, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import "./Slider.css";
import AnTitle from "./AnTitle";

interface LocationCardProps {
  flagSrc: string;
  images: string[];
  googleMapsUrl: string;
  locationName: string;
  locationDetails: string;
  phoneNumber: string;
  addClass: string;
  whatsLink: string;
}

const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: "next" | "prev";
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md ring-1 ring-slate-200 backdrop-blur transition-all hover:scale-110 hover:bg-white ${
      direction === "next" ? "right-3" : "left-3"
    }`}
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "next" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
      />
    </svg>
  </button>
);

const LocationCard: React.FC<LocationCardProps> = ({
  flagSrc,
  images,
  googleMapsUrl,
  locationName,
  locationDetails,
  phoneNumber,
  addClass,
  whatsLink,
}) => {
  const autoplay = useMemo(() => Autoplay({ delay: 2000 }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", () => emblaApi.plugins().autoplay.stop());
    emblaApi.on("pointerUp", () => emblaApi.plugins().autoplay.play());

    return () => {
      if (emblaApi) emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <div className={`w-screen ${addClass}`}>
      <div className="lg:max-w-7xl mx-auto my-4 overflow-hidden max-w-[90vw]">
        <div className="flex justify-center items-center gap-4">
          <AnTitle title={locationName} />
          <Image
            width={64}
            height={64}
            quality={1}
            src={flagSrc}
            alt={`${locationName} flag`}
            className="w-16 mb-2 rounded-[100%] object-fill aspect-square"
          />
        </div>
        <div className="flex flex-col mb-8 lg:ms-4">
          <Link target="_blank" href={googleMapsUrl} rel="noopener noreferrer">
            <div className="flex items-center py-4">
              <Image
                width={64}
                height={64}
                quality={1}
                src={`/images/${addClass}.svg`}
                alt={`${addClass} flag`}
                className="w-16 me-4"
              />
              <p className="text-2xl text-primary font-bold">
                {locationDetails}
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            href={whatsLink}
            rel="noopener noreferrer"
            aria-label={`WhatsApp for ${locationName}`}
          >
            <div className="flex items-center">
              <Image
                width={400}
                height={200}
                quality={1}
                src="/images/phone.svg"
                alt={`${locationName} flag`}
                className="w-16 me-4"
              />
              <p className="text-2xl text-primary font-bold">{phoneNumber}</p>
            </div>
          </Link>
        </div>
        <div dir="ltr" className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide px-2 flex-shrink-0 w-1/3"
                >
                  <Image
                    width={400}
                    height={200}
                    quality={60}
                    src={image}
                    alt={`Office ${index + 1}`}
                    className="w-full h-64 object-cover shadow-lg rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <ArrowButton direction="prev" onClick={scrollPrev} />
          <ArrowButton direction="next" onClick={scrollNext} />
        </div>
        <div className="p-4 flex justify-center items-center">
          <Link
            target="_blank"
            href={googleMapsUrl}
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.7a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            Find Us on Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
