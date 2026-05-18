import type { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import FlightBookingForm from "../../components/FlightBookingForm";
import Slider from "../../components/Slider";
import { partners, agents } from "../../data";
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
    path: "/Services/airLines",
    title: SERVICES_SEO.airLines.title,
    description: SERVICES_SEO.airLines.description,
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
    name: SERVICES_SEO.airLines.title[lang],
    description: SERVICES_SEO.airLines.description[lang],
    serviceType: "Flight Booking",
    pageUrl: `${SITE_URL}/${lang}/Services/airLines`,
  });

  return (
    <main className="flex flex-col items-center gap-4 pb-12 pt-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.airLines.title[lang]}</h1>
      <Slider dic={dic} title={dic.agents} data={agents} />
      <Slider dic={dic} title={dic.OurPartners} data={partners} />
      <div className="mt-6 w-full flex justify-center px-4">
        <FlightBookingForm dic={dic} />
      </div>
    </main>
  );
}
