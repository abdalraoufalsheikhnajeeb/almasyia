"use client";

import { useSyncExternalStore } from "react";

const getTime = (tz: string) =>
  new Date().toLocaleString("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  });

const subscribe = (callback: () => void) => {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
};

export default function ClockTicker({ tz }: { tz: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => getTime(tz),
    () => "--:--:--"
  );

  return <p className="text-xl text-litePrimary ">{time}</p>;
}
