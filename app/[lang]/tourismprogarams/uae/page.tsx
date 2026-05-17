import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import { UAE } from "../../programs";
import { buildPageMetadata, buildTouristTripJsonLd, SITE_URL } from "../../seo";
import { TOURISM_PROGRAMS_SEO } from "../../seo-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/tourismprogarams/uae",
    title: TOURISM_PROGRAMS_SEO.uae.title,
    description: TOURISM_PROGRAMS_SEO.uae.description,
  });
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const jsonLd = buildTouristTripJsonLd({
    name: TOURISM_PROGRAMS_SEO.uae.title[lang],
    description: TOURISM_PROGRAMS_SEO.uae.description[lang],
    pageUrl: `${SITE_URL}/${lang}/tourismprogarams/uae`,
  });
  return (
    <main className="container mx-auto  min-h-screen">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{TOURISM_PROGRAMS_SEO.uae.title[lang]}</h1>
      <div className="bg-white rounded-xl p-8 shadow-xl">
        {UAE.map((item, index) => {
          const {
            nameEN,
            nameAR,
            nameRU,
            descriptionAR,
            descriptionEN,
            descriptionRU,
          } = item;
          const title =
            lang === "en" ? nameEN : lang === "ar" ? nameAR : nameRU;
          const description =
            lang === "en"
              ? descriptionEN
              : lang === "ar"
              ? descriptionAR
              : descriptionRU;
          if (!description) {
            return (
              <div key={index} className="mt-6 text-center">
                <h2 className="text-accent text-2xl font-bold mb-4">{title}</h2>
              </div>
            );
          }
          return (
            <div key={index} className="p-4">
              <div className="flex box flex-col lg:flex-row items-center gap-4">
                <h2 className="text-center whitespace-nowrap text-accent text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight group-hover:underline">
                  {title}
                </h2>
                <p className="text-start text-base lg:text-lg text-litePrimary leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default page;
