import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import AnTitle from "./AnTitle";
import LocationCard from "./LocationCard";

interface LocationsProps {
  params: {
    lang: Locale;
  };
}

const Locations = async ({ params: { lang } }: LocationsProps) => {
  const dictionary = await getDictionary(lang);

  const uaeLocation = {
    flagSrc: "/images/emirate-flag.svg",
    images: [
      "/images/uae1.webp",
      "/images/uae2.webp",
      "/images/uae4.webp",
      "/images/uae6.webp",
    ],
    googleMapsUrl:
      "https://www.google.com/maps/place/alnujoom+almasiya+%D8%A7%D9%84%D9%86%D8%AC%D9%88%D9%85+%D8%A7%D9%84%D9%85%D8%A7%D8%B3%D9%8A%D8%A9%E2%80%AD/@25.2541872,55.335827,17z",
    locationName: dictionary.uaeB,
    locationDetails: dictionary.locationUAE,
    phoneNumber: "+971 54 586 6066",
    addClass: "uaeLocation",
    whatsLink: "https://wa.me/971545866066",
    findUsLabel: dictionary.FindUs,
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
      "https://www.google.com/maps/place/Alnujoom+almassiya/@33.5094846,36.2872032,20z",
    locationName: dictionary.sarB,
    locationDetails: dictionary.locationSAR,
    phoneNumber: "+963 950 026 610",
    addClass: "sarLocation",
    whatsLink: "https://wa.me/963950026610",
    findUsLabel: dictionary.FindUs,
  };

  return (
    <section className="bg-ambient relative w-full py-12">
      <div className="mx-auto max-w-7xl px-4">
        <AnTitle title={dictionary.OurLocations} />
        <div className="mt-8 flex flex-col gap-8">
          <LocationCard {...uaeLocation} />
          <LocationCard {...syriaLocation} />
        </div>
      </div>
    </section>
  );
};

export default Locations;
