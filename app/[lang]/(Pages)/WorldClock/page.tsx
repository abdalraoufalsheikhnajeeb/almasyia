import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import AnTitle from "../../components/AnTitle";
import { timeZones } from "../../data";
import { buildPageMetadata, SITE_URL } from "../../seo";
import { PAGES_SEO } from "../../seo-data";
import ClockTicker from "./ClockTicker";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/WorldClock",
    title: PAGES_SEO.worldClock.title,
    description: PAGES_SEO.worldClock.description,
  });
}

export default async function WorldClock({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGES_SEO.worldClock.title[locale],
    description: PAGES_SEO.worldClock.description[locale],
    url: `${SITE_URL}/${lang}/WorldClock`,
  };

  return (
    <main className="container mx-auto px-4 lg:px-16 pt-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{PAGES_SEO.worldClock.title[locale]}</h1>
      <AnTitle title="World Clock" />
      <section className="flex flex-wrap gap-4 items-center justify-center">
        {timeZones.map((zone) => (
          <article
            key={zone.nameEN}
            className="box flex flex-col justify-center items-center mx-1"
          >
            <div className="flex items-center justify-center ps-8">
              <h2 className="text-2xl font-bold text-litePrimary">
                {locale === "en"
                  ? zone.nameEN
                  : locale === "ar"
                  ? zone.nameAR
                  : zone.nameRU}
                <span className="text-litePrimary text-xl ms-2">
                  {zone.flag}
                </span>
              </h2>
            </div>
            <ClockTicker tz={zone.tz} />
          </article>
        ))}
      </section>
    </main>
  );
}
