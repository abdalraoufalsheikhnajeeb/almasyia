import Image from "next/image";
import type { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import VisaForm from "../../components/VisasForm";
import { visas } from "../../data";
import { buildPageMetadata, buildServiceJsonLd, SITE_URL } from "../../seo";
import { SERVICES_SEO } from "../../seo-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/Services/visas",
    title: SERVICES_SEO.visas.title,
    description: SERVICES_SEO.visas.description,
  });
}

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const jsonLd = buildServiceJsonLd({
    name: SERVICES_SEO.visas.title[lang],
    description: SERVICES_SEO.visas.description[lang],
    serviceType: "Visa Assistance",
    pageUrl: `${SITE_URL}/${lang}/Services/visas`,
  });

  const isRTL = lang === "ar";

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.visas.title[lang]}</h1>
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
            <article
              key={index}
              className="card-elegant overflow-hidden"
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[20rem]">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={75}
                    src={image}
                    alt={country}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5 p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <Image
                      width={56}
                      height={56}
                      quality={75}
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-14 flex-shrink-0 rounded-lg object-cover"
                    />
                    <h2 className="text-3xl font-bold text-accent lg:text-4xl">
                      {country}
                    </h2>
                  </div>

                  {duration && (
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {dic.duration}
                      </h3>
                      <p className="mt-1 text-base text-litePrimary lg:text-lg">
                        {duration}
                      </p>
                    </div>
                  )}

                  {requirements && requirements.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {dic.requirements}
                      </h3>
                      <ul className="mt-2 ms-5 list-disc space-y-1 text-base text-litePrimary lg:text-lg">
                        {requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {description && (
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {dic.description}
                      </h3>
                      <p className="mt-1 text-base text-litePrimary lg:text-lg">
                        {description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <VisaForm dic={dic} />
    </main>
  );
}
