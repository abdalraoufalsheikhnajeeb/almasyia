"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import "./Slider.css";

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

const SampleNextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer  p-2 bg-accent rounded-full hover:scale-110 transition-all"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const SamplePrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer  p-2 bg-accent rounded-full hover:scale-110 transition-all"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
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
  const autoplayOptions = { delay: 2000 };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

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
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden my-4">
        <div className="flex justify-center items-center gap-4">
          <Image
            width={400}
            height={200}
            quality={20}
            src={flagSrc}
            alt={`${locationName} flag`}
            className="w-20 mr-4"
          />
          <h2 className="text-5xl font-bold">{locationName}</h2>
        </div>
        <Link
          target="_blank"
          href={googleMapsUrl}
          
          rel="noopener noreferrer"
        >
          <div className="flex items-center pt-12">
            <Image
              width={400}
              height={200}
              quality={20}
              src="/images/location.webp"
              alt={`${locationName} flag`}
              className="w-16 mr-4"
            />
            <p className="text-2xl text-primary font-bold">{locationDetails}</p>
          </div>
        </Link>
        <Link target="_blank" href={whatsLink}>
          <div className="flex items-center">
            <Image
              width={400}
              height={200}
              quality={20}
              src="/images/phone.webp"
              alt={`${locationName} flag`}
              className="w-16 mr-4"
            />
            <p className="text-2xl text-primary font-bold">{phoneNumber}</p>
          </div>
        </Link>
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
                    quality={20}
                    src={image}
                    alt={`Office ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <SamplePrevArrow onClick={scrollPrev} />
          <SampleNextArrow onClick={scrollNext} />
        </div>
        <div className="p-4 flex justify-center items-center">
          <Link
            target="_blank"
            href={googleMapsUrl}
            
            rel="noopener noreferrer"
            className=" w-auto   text-center mt-4 bg-litePrimary text-white font-bold py-4 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Find Us on Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
