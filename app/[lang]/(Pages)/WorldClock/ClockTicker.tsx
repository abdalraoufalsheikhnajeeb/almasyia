"use client";

import { useMemo, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
let now = Date.now();
let interval: ReturnType<typeof setInterval> | undefined;
const getSnapshot = () => now;
const getServerSnapshot = () => null;

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  if (listeners.size === 1) {
    now = Date.now();
    interval = setInterval(() => {
      now = Date.now();
      listeners.forEach((listener) => listener());
    }, 1000);
  }
  return () => {
    listeners.delete(callback);
    if (!listeners.size) {
      clearInterval(interval);
      interval = undefined;
    }
  };
};

export default function ClockTicker({ tz }: { tz: string }) {
  const timestamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const formatter = useMemo(
    () => new Intl.DateTimeFormat("en-US-u-nu-latn", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    }),
    [tz]
  );

  return <span>{timestamp === null ? "--:--:--" : formatter.format(timestamp)}</span>;
}
