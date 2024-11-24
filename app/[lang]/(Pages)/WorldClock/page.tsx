"use client";
import { use, useEffect, useState } from "react";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import { timeZones } from "../../data";

interface Time {
  [key: string]: string;
}

const getTime = (tz: string) => {
  return new Date().toLocaleString("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h24",
  });
};

const WorldClock = ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = use(params); // Unwrap the params promise

  const [times, setTimes] = useState<Time>({});

  useEffect(() => {
    const updateTime = () => {
      const newTimes: Time = {};
      timeZones.forEach(({ nameEN, tz }) => {
        newTimes[nameEN] = getTime(tz);
      });
      setTimes(newTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-16 pt-28">
      <AnTitle title="World Clock" />
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {timeZones.map((zone) => (
          <div
            key={zone.nameEN}
            className="box flex flex-col justify-center items-center mx-1"
          >
            <div className="flex items-center justify-center ps-8">
              <h2 className="text-2xl font-bold text-primary">
                {lang === "en"
                  ? zone.nameEN
                  : lang === "ar"
                  ? zone.nameAR
                  : zone.nameRU}
                <span className="text-[#b9d2e7] text-xl ms-2">{zone.flag}</span>
              </h2>
            </div>
            <p className="text-xl text-litePrimary">{times[zone.nameEN]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
