import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Maldives } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto p-4">
      {Maldives.map((item, index) => {
        const {
          nameEN,
          nameAR,
          nameRU,
          src,
          descriptionAR,
          descriptionEN,
          descriptionRU,
        } = item;
        const title = lang === "en" ? nameEN : lang === "ar" ? nameAR : nameRU;
        const description =
          lang === "en"
            ? descriptionEN
            : lang === "ar"
            ? descriptionAR
            : descriptionRU;

        if (!description && !src) {
          return (
            <div key={index}>
              <h2 className="text-center text-accent text-2xl font-bold mb-4">
                {title}
              </h2>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="mb-8 pt-6 bg-[#34689447] rounded-3xl border-white border shadow-xl"
          >
            <h2 className="text-center text-accent text-2xl font-bold mb-4">
              {title}
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pe-4">
                <p className="text-start">{description}</p>
              </div>
              {src && (
                <div className="md:w-1/3 mt-4 md:mt-0">
                  <Image
                    src={src}
                    quality={40}
                    alt={title}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
