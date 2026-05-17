import type { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import CountrySlider from "../../components/CountrySlider";
import { tourismProgarams } from "../../data";
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
    path: "/Services/tourismProgarams",
    title: SERVICES_SEO.tourismProgarams.title,
    description: SERVICES_SEO.tourismProgarams.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const jsonLd = buildServiceJsonLd({
    name: SERVICES_SEO.tourismProgarams.title[lang],
    description: SERVICES_SEO.tourismProgarams.description[lang],
    serviceType: "Tourism Program",
    pageUrl: `${SITE_URL}/${lang}/Services/tourismProgarams`,
  });

  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.tourismProgarams.title[lang]}</h1>
      <CountrySlider
        dic={dic}
        title={dic.tourismProgarams}
        subtitle={dic.tourismProgaramsText}
        data={tourismProgarams}
      />
    </main>
  );
}
