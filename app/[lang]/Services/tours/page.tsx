import type { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import CountrySlider from "../../components/CountrySlider";
import { countries } from "../../data";
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
    path: "/Services/tours",
    title: SERVICES_SEO.tours.title,
    description: SERVICES_SEO.tours.description,
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
    name: SERVICES_SEO.tours.title[lang],
    description: SERVICES_SEO.tours.description[lang],
    serviceType: "Tourist Destinations",
    pageUrl: `${SITE_URL}/${lang}/Services/tours`,
  });

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.tours.title[lang]}</h1>
      <CountrySlider
        dic={dic}
        title={dic.ourTours}
        subtitle={dic.ourToursText}
        data={countries}
      />
    </main>
  );
}
