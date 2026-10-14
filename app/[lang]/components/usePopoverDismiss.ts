"use client";

import { useEffect, type RefObject } from "react";

/** Shared dismissal for pointer, touch and keyboard navigation. */
export function usePopoverDismiss({
  open,
  setOpen,
  containerRef,
  triggerRef,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  containerRef: RefObject<HTMLElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  useEffect(() => {
    if (!open) return;

    const dismissOutside = (event: Event) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const dismissEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !(event.target instanceof Node) || !containerRef.current?.contains(event.target)) return;
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("focusin", dismissOutside);
    // Handle the popover before an enclosing mobile navigation menu.
    document.addEventListener("keydown", dismissEscape, true);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("focusin", dismissOutside);
      document.removeEventListener("keydown", dismissEscape, true);
    };
  }, [open, setOpen, containerRef, triggerRef]);
}
