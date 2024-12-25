import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Georgia } from "../../destinations/Georgia";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  return (
    <div className="container mx-auto pt-4 p-4">
      {Georgia.map((item, index) => {
        const {
          nameEN,
          nameAR,
          nameRU,
          src,
          url,
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
          <div key={index} className="mb-8 box">
            <div className="flex flex-col  gap-4 lg:flex-row items-center ">
              <div className="flex flex-col lg:w-2/3">
                <h2 className="text-center text-accent text-2xl font-bold mb-6">
                  {title}
                </h2>
                <p className=" text-start text-lg">{description}</p>
                <Link
                  href={url}
                  target="_blank"
                  className="text-blue-600 text-start text-sm"
                >
                  {url}
                </Link>
              </div>

              {src && (
                <div className="lg:w-1/3 w-full mt-4 lg:mt-0 self-end">
                  <Image
                    src={src}
                    quality={60}
                    alt={title}
                    width={500}
                    height={300}
                    className=" w-full  rounded-ee-2xl rounded-es-2xl rounded-lg"
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

export default page;
