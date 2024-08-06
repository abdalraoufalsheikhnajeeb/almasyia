import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Maldives } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
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
            className="mb-8 pt-6  lg:ps-4 bg-[#34689447] rounded-2xl border-white border shadow-xl overflow-hidden"
          >
            <h2 className="text-center text-accent text-2xl font-bold mb-4">
              {title}
            </h2>
            <div className="flex flex-col lg:flex-row items-center ">
              <p className=" lg:w-2/3 lg:pe-4 text-start max-w-[90%] mx-auto">
                {description}
              </p>

              {src && (
                <div className="lg:w-1/3 w-full mt-4 lg:mt-0">
                  <Image
                    src={src}
                    quality={40}
                    alt={title}
                    width={500}
                    height={300}
                    className=" w-full  rounded-ee-2xl rounded-es-2xl lg:rounded-ee-none lg:rounded-es-none lg:rounded-ss-2xl"
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
