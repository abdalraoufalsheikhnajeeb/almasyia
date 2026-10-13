import type { Metadata } from "next";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import FlightBookingForm from "../../components/FlightBookingForm";
import ServiceGuide from "../../components/ServiceGuide";
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
    <div className="flex flex-col items-center gap-3 pb-12 pt-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.airLines.title[lang]}</h1>
      <div className="w-full flex justify-center px-4">
        <FlightBookingForm dic={dic} />
      </div>
      <Slider dic={dic} title={dic.agents} data={agents} compact />
      <div aria-hidden="true" className="mx-auto flex w-full max-w-3xl items-center gap-4 px-6 text-primary">
        <span className="h-px flex-1 bg-slate-300" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M2.5 19h19v2h-19v-2zm19.07-9.94c-.21-.79-1.02-1.26-1.81-1.05L14.92 9.2 8.46 3.17 6.53 3.68l3.87 6.7-4.66 1.24-1.85-1.45-1.45.39 1.96 3.39.78 1.34 1.6-.43 5.31-1.42 4.31-1.16 5.65-1.51c.79-.22 1.26-1.03 1.05-1.81z" />
        </svg>
        <span className="h-px flex-1 bg-slate-300" />
      </div>
      <Slider dic={dic} title={dic.OurPartners} data={partners} compact />
      <ServiceGuide lang={lang} service="travel" />
    </div>
  );
}
