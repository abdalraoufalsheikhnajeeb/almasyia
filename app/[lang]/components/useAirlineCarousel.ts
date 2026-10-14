"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (callback: () => void) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const reducedMotion = () => window.matchMedia(motionQuery).matches;
const serverMotion = () => false;

export function useAirlineCarousel() {
  // Automatic airline cards are a client requirement; retain pause controls.
  const prefersReducedMotion = useSyncExternalStore(subscribeMotion, reducedMotion, serverMotion);
  // An explicit play/pause choice takes priority over the initial OS preference.
  const [playChoice, setPlayChoice] = useState<boolean | null>(null);
  const enabled = playChoice ?? !prefersReducedMotion;
  const autoplay = useMemo(() => Autoplay({
    delay: 3000,
    playOnInit: false,
    stopOnInteraction: true,
    stopOnFocusIn: false,
  }), []);
  const [emblaRef, api] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);

  useEffect(() => {
    if (!api) return;
    const viewport = api.rootNode();
    let hovered = window.matchMedia("(any-hover: hover)").matches && viewport.matches(":hover");
    let focused = viewport.contains(document.activeElement);
    let dragging = false;
    const mayPlay = () => enabled && !document.hidden && !hovered && !focused && !dragging;
    const sync = () => mayPlay() ? autoplay.play() : autoplay.stop();
    const enter = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      hovered = true;
      sync();
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      hovered = false;
      sync();
    };
    const focusIn = () => { focused = true; sync(); };
    const focusOut = (event: FocusEvent) => {
      focused = event.relatedTarget instanceof Node && viewport.contains(event.relatedTarget);
      sync();
    };
    const dragStart = () => { dragging = true; sync(); };
    const dragEnd = () => { dragging = false; sync(); };

    viewport.addEventListener("pointerenter", enter);
    viewport.addEventListener("pointerleave", leave);
    viewport.addEventListener("focusin", focusIn);
    viewport.addEventListener("focusout", focusOut);
    document.addEventListener("visibilitychange", sync);
    api.on("pointerDown", dragStart).on("pointerUp", dragEnd).on("reInit", sync);
    sync();
    return () => {
      viewport.removeEventListener("pointerenter", enter);
      viewport.removeEventListener("pointerleave", leave);
      viewport.removeEventListener("focusin", focusIn);
      viewport.removeEventListener("focusout", focusOut);
      document.removeEventListener("visibilitychange", sync);
      api.off("pointerDown", dragStart).off("pointerUp", dragEnd).off("reInit", sync);
      autoplay.stop();
    };
  }, [api, autoplay, enabled]);

  return {
    emblaRef,
    api,
    automatic: {
      enabled,
      onToggle: () => setPlayChoice(!enabled),
      onNavigate: () => autoplay.reset(),
    },
  };
}
