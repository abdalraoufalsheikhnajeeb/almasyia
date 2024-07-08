import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import { visas } from "../../data";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <div className="flex flex-col container mx-auto  pt-28 px-4 lg:p-28">
      <AnTitle title={dic.viasa} />
      <div className="flex flex-col gap-8 ">
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
              className=" flex justify-center items-center lg:ps-4 flex-col gap-4 bg-white bg-opacity-70 "
            >
              <hr />
              <AnTitle title={country} />

              <div className="flex flex-col lg:flex-row-reverse justify-between">
                <Image
                  width={445}
                  height={260}
                  quality={10}
                  src={image}
                  alt={country}
                  className=" lg:h-96 w-full   object-fill"
                />
                <div className="p-4 flex flex-col gap-3">
                  {duration && (
                    <p className="text-primary text-3xl flex gap-2 items-center font-bold">
                      <Image
                        loading="lazy"
                        quality={1}
                        src="/images/point.png"
                        className={`w-10 h-10 ${
                          lang == "ar" ? "-scale-x-100" : ""
                        } `}
                        alt="pointer"
                        width={40}
                        height={40}
                      />{" "}
                      <span>{duration}</span>
                    </p>
                  )}
                  {requirements && (
                    <p className="text-primary flex gap-2 mt-2 text-3xl font-bold">
                      {" "}
                      <Image
                        loading="lazy"
                        quality={1}
                        src="/images/point.png"
                        className={`w-10 h-10 ${
                          lang == "ar" ? "-scale-x-100" : ""
                        } `}
                        alt="pointer"
                        width={40}
                        height={40}
                      />{" "}
                      <span> {requirements}</span>
                    </p>
                  )}
                  {description && (
                    <p className="text-primary flex gap-2 mt-2 text-3xl  font-bold">
                      {" "}
                      <Image
                        loading="lazy"
                        quality={1}
                        src="/images/point.png"
                        className={`w-10 h-10 ${
                          lang == "ar" ? "-scale-x-100" : ""
                        } `}
                        alt="pointer"
                        width={40}
                        height={40}
                      />{" "}
                      <span>{description}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
