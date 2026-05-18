"use client";
import { useEffect, useCallback, useMemo } from "react";
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
    className={`absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-md ring-1 ring-slate-200 backdrop-blur transition-all hover:scale-110 hover:bg-white ${
      direction === "next" ? "right-3" : "left-3"
    }`}
  >
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d={direction === "next" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
      />
    </svg>
  </button>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.7a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

const IconPhone = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.33.03.7-.24 1.02l-2.21 2.2z" />
  </svg>
);

const LocationCard: React.FC<LocationCardProps> = ({
  flagSrc,
  images,
  googleMapsUrl,
  locationName,
  locationDetails,
  phoneNumber,
  whatsLink,
}) => {
  const autoplay = useMemo(() => Autoplay({ delay: 3000 }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  );

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
    <article className="card-elegant overflow-hidden">
      {/* Header: flag + country name */}
      <header className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
        <Image
          width={40}
          height={40}
          quality={70}
          src={flagSrc}
          alt={`${locationName} flag`}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <h3 className="text-2xl font-bold text-primary">{locationName}</h3>
      </header>

      <div className="grid gap-6 p-6 lg:grid-cols-5">
        {/* Info side */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          {/* Address */}
          <Link
            target="_blank"
            href={googleMapsUrl}
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-litePrimary/30 hover:shadow-sm"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-litePrimary/10 text-litePrimary">
              <IconMapPin className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-slate-700 group-hover:text-primary">
              {locationDetails}
            </p>
          </Link>

          {/* Phone */}
          <Link
            target="_blank"
            href={whatsLink}
            rel="noopener noreferrer"
            aria-label={`WhatsApp for ${locationName}`}
            className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-litePrimary/30 hover:shadow-sm"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <IconPhone className="h-5 w-5" />
            </span>
            <p
              dir="ltr"
              className="text-base font-semibold tabular-nums text-slate-700 group-hover:text-primary"
            >
              {phoneNumber}
            </p>
          </Link>

          {/* Google Maps button */}
          <Link
            target="_blank"
            href={googleMapsUrl}
            rel="noopener noreferrer"
            className="btn-primary mt-2 justify-center"
          >
            <IconMapPin className="h-5 w-5" />
            Find Us on Google Maps
          </Link>
        </div>

        {/* Gallery side */}
        <div className="relative lg:col-span-3" dir="ltr">
          <div
            className="embla overflow-hidden rounded-xl"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="embla__slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 px-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      width={600}
                      height={450}
                      quality={70}
                      src={image}
                      alt={`${locationName} office ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {images.length > 2 && (
            <>
              <ArrowButton direction="prev" onClick={scrollPrev} />
              <ArrowButton direction="next" onClick={scrollNext} />
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default LocationCard;
