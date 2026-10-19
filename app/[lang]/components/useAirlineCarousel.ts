"use client";

import { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function useAirlineCarousel() {
  // Airline cards use autoplay and dragging only, without visible controls.
  const autoplay = useMemo(() => Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    breakpoints: {
      "(prefers-reduced-motion: reduce)": { active: false },
    },
  }), []);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);

  return { emblaRef };
}
