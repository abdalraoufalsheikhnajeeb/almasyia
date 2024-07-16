import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary.ts";
import { Locale } from "../../../../i18n-config.ts";
import AnTitle from "../../components/AnTitle.tsx";
import VisaForm from "../../components/VisasForm.tsx"; 
import { visas } from "../../data.ts";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <div className="flex flex-col container mx-auto pt-28 px-4 lg:p-28">
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
            lang === "ar"
              ? durationAR
              : lang === "en"
              ? durationEN
              : durationRU;
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
              className="flex justify-center items-center lg:ps-4 flex-col gap-4 bg-white bg-opacity-80 p-2 rounded-lg"
            >
              <hr />
              <h2 className="text-primary text-5xl font-bold">{country}</h2>
              <div className="flex flex-col lg:flex-row-reverse w-full justify-between">
                <Image
                  width={445}
                  height={260}
                  quality={10}
                  src={image}
                  alt={country}
                  className="lg:h-96 w-full lg:w-1/2 object-contain"
                />
                <ul className="p-4 flex flex-col gap-3">
                  {duration && (
                    <li className="text-primary text-3xl items-center font-bold list-style ms-6 mb-4">
                      {dic.duration}:
                      <p className="text-gray-500 font-normal text-xl mt-2">
                        {duration}
                      </p>
                    </li>
                  )}
                  {requirements && (
                    <li className="text-primary list-style ms-6 text-3xl items-center font-bold mb-4">
                      {dic.requirements}:
                      <ul className="text-gray-500 font-normal text-xl mt-2">
                        {requirements.map((req, i) => (
                          <li key={i}>
                            {i + 1}. {req}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                  {description && (
                    <li className="text-primary list-style   ms-6 text-3xl items-center font-bold mb-4">
                      {dic.description}:
                      <p className="text-gray-500 font-normal text-xl mt-2">
                        {description}
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <VisaForm dic={dic} />
    </div>
  );
}
