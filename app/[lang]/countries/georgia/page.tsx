import Image from "next/image";
import type { Metadata } from "next";

import { Locale } from "../../../../i18n-config";
import { Georgia } from "../../destinations/Georgia";
import Link from "next/link";
import { buildPageMetadata, buildCountryJsonLd, SITE_URL } from "../../seo";
import { COUNTRIES_SEO } from "../../seo-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/countries/georgia",
    title: COUNTRIES_SEO.georgia.title,
    description: COUNTRIES_SEO.georgia.description,
    imageUrl: "/images/georgia.webp",
  });
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const jsonLd = buildCountryJsonLd({
    name: COUNTRIES_SEO.georgia.title[lang],
    description: COUNTRIES_SEO.georgia.description[lang],
    imageUrl: "/images/georgia.webp",
    pageUrl: `${SITE_URL}/${lang}/countries/georgia`,
  });
  const heading =
    lang === "ar" ? "السفر إلى جورجيا" : lang === "ru" ? "Путешествие в Грузию" : "Travel to Georgia";
  return (
    <main className="container mx-auto pt-4 p-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-center text-accent text-3xl lg:text-4xl font-bold my-4">
        {heading}
      </h1>
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
