import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import VisaForm from "../../components/VisasForm";
import { visas } from "../../data";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <div className="container mx-auto pt-28 px-4 lg:px-28 flex flex-col">
      <AnTitle title={dic.viasa} />
      <div className="flex flex-col gap-8">
        {visas.map((visa, index) => {
          const {
            countryAR,
            countryEN,
            countryRU,
            durationAR,
            durationEN,
            durationRU,
            requirementsAR,
            requirementsEN,
            requirementsRU,
            descriptionAR,
            descriptionEN,
            descriptionRU,
            image,
          } = visa;

          const country =
            lang === "ar" ? countryAR : lang === "en" ? countryEN : countryRU;
          const duration =
            lang === "ar" ? durationAR : lang === "en" ? durationEN : durationRU;
          const requirements =
            lang === "ar"
              ? requirementsAR
              : lang === "en"
              ? requirementsEN
              : requirementsRU;
          const description =
            lang === "ar"
              ? descriptionAR
              : lang === "en"
              ? descriptionEN
              : descriptionRU;

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row-reverse gap-4 bg-white bg-opacity-80 p-4 rounded-lg"
            >
              <hr className="w-full" />
              <h2 className="text-primary text-5xl font-bold text-center">
                {country}
              </h2>
              <div className="flex flex-col lg:flex-row-reverse w-full justify-between items-center">
                <Image
                  width={445}
                  height={260}
                  quality={10}
                  src={image}
                  alt={country}
                  className="lg:h-96 w-full lg:w-1/2 object-contain"
                />
                <div className="p-4 flex flex-col gap-3 lg:w-1/2">
                  {duration && (
                    <div className="text-primary text-3xl font-bold list-disc mb-4">
                      {dic.duration}:
                      <p className="text-gray-500 font-normal text-xl mt-2">
                        {duration}
                      </p>
                    </div>
                  )}
                  {requirements && (
                    <div className="text-primary text-3xl font-bold list-disc mb-4">
                      {dic.requirements}:
                      <div className="text-gray-500 font-normal text-xl mt-2 ml-6 list-disc">
                        {requirements.map((req, i) => (
                          <div key={i}>{req}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  {description && (
                    <div className="text-primary text-3xl font-bold list-disc mb-4">
                      {dic.description}:
                      <p className="text-gray-500 font-normal text-xl mt-2">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <VisaForm dic={dic} />
    </div>
  );
}
