import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";
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
  const dic = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGES_SEO.worldClock.title[locale],
    description: PAGES_SEO.worldClock.description[locale],
    url: `${SITE_URL}/${lang}/WorldClock`,
  };

  return (
    <main className="container mx-auto px-4 lg:px-16 py-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{PAGES_SEO.worldClock.title[locale]}</h1>
      <AnTitle title={dic.worldClock} />
      <section className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {timeZones.map((zone) => (
          <article
            key={zone.nameEN}
            className="card-elegant flex flex-col items-start gap-2 p-5"
          >
            <span className="text-2xl" aria-hidden="true">
              {zone.flag}
            </span>
            <h2 className="text-base font-semibold text-primary">
              {locale === "en"
                ? zone.nameEN
                : locale === "ar"
                ? zone.nameAR
                : zone.nameRU}
            </h2>
            <div
              className="text-2xl font-bold tracking-tight text-litePrimary tabular-nums"
              dir="ltr"
            >
              <ClockTicker tz={zone.tz} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
