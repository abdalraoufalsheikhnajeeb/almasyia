"use client";
import { useEffect, useState } from "react";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import LocationCard from "./LocationCard";

interface LocationsProps {
  params: {
    lang: Locale;
  };
}

const Locations: React.FC<LocationsProps> = ({ params: { lang } }) => {
  const [dictionary, setDictionary] = useState<any | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dic = await getDictionary(lang);
      setDictionary(dic);
    };

    fetchDictionary();
  }, [lang]);

  if (!dictionary) {
    return <div>Loading...</div>;
  }
  const uaeLocation = {
    flagSrc: "/images/emirate-flag.svg",
    images: [
      "/images/uae1.webp",
      "/images/uae2.webp",
      "/images/uae4.webp",
      "/images/uae6.webp",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/place/alnujoom+almasiya+%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85+%D8%A7%D9%84%D9%85%D8%A7%D8%B3%D9%8A%D8%A9%E2%80%AD/@25.2541872,55.335827,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5d328fdaf569:0xb1ec00ad0b686aa8!8m2!3d25.2541872!4d55.335827!16s%2Fg%2F11w1cmy0t4?hl=en-GB&authuser=0&entry=ttu",
    locationName: dictionary.uaeB,
    locationDetails: dictionary.locationUAE,
    phoneNumber: "+971545866066",
    addClass: "uaeLocation",
    whatsLink: "https://wa.me/971545866066",
  };

  const syriaLocation = {
    flagSrc: "/images/syria-flag.svg",
    images: [
      "/images/sar1.webp",
      "/images/sar2.webp",
      "/images/sar3.webp",
      "/images/sar4.webp",
      "/images/sar5.webp",
      "/images/sar6.webp",
      "/images/sar7.webp",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/place/Alnujoom+almassiya/@33.5094846,36.2872032,20z/data=!4m6!3m5!1s0x1518e1007e7b3d0f:0x5bb217509e73d66c!8m2!3d33.5095899!4d36.2871568!16s%2Fg%2F11vx6_sb7t?entry=ttu",
    locationName: dictionary.sarB,
    locationDetails: dictionary.locationSAR,
    phoneNumber: "+963950026610",
    addClass: "sarLocation",
    whatsLink: "https://wa.me/971545866066",
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] py-2 bg-[#67a7da6a]">
      <LocationCard {...uaeLocation} />
      <br />
      <br />
      <LocationCard {...syriaLocation} />
    </main>
  );
};

export default Locations;
