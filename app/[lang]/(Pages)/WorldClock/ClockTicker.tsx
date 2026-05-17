"use client";

import { useEffect, useState } from "react";

const getTime = (tz: string) =>
  new Date().toLocaleString("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  });

export default function ClockTicker({ tz }: { tz: string }) {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    setTime(getTime(tz));
    const interval = setInterval(() => setTime(getTime(tz)), 1000);
    return () => clearInterval(interval);
  }, [tz]);

  return <p className="text-xl text-litePrimary ">{time}</p>;
}
