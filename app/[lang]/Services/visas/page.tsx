import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import VisaForm from "../../components/VisasForm";
import { visas } from "../../data";

export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const resolvedLang = await lang;
  const dic = await getDictionary(resolvedLang);

  return (
    <div className="mx-auto px-4 lg:px-28 flex flex-col">
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
            icon,
          } = visa;

          const country =
            resolvedLang === "ar"
              ? countryAR
              : resolvedLang === "en"
              ? countryEN
              : countryRU;
          const duration =
            resolvedLang === "ar"
              ? durationAR
              : resolvedLang === "en"
              ? durationEN
              : durationRU;
          const requirements =
            resolvedLang === "ar"
              ? requirementsAR
              : resolvedLang === "en"
              ? requirementsEN
              : requirementsRU;
          const description =
            resolvedLang === "ar"
              ? descriptionAR
              : resolvedLang === "en"
              ? descriptionEN
              : descriptionRU;

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-col gap-4 box w-full"
            >
              <div className="flex flex-col lg:flex-row-reverse w-full justify-between items-center">
                <Image
                  width={445}
                  height={260}
                  quality={60}
                  src={image}
                  alt={country}
                  className="lg:h-96 w-full lg:w-1/2 object-cover rounded-lg "
                />
                <div className="p-4 flex flex-col gap-3 lg:w-1/2">
                  <div className="p-4 flex flex-col h-full flex-grow justify-between gap-3 ">
                    <div className="flex gap-3 justify-center items-center">
                      <h2 className="text-accent text-5xl font-bold text-center">
                        {country}
                      </h2>
                      <Image
                        width={60}
                        height={60}
                        quality={10}
                        src={icon}
                        alt={country}
                        className="w-16 h-16 object-cover rounded-lg "
                      />
                    </div>
                  </div>
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
                      <div className="text-gray-500 font-normal text-xl mt-2 ms-6 list-disc">
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
