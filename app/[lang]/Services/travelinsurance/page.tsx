import Image from "next/image";
import type { Metadata } from "next";
import TravelInsuranceForm from "../../components/TravelInsuranceForm";
import AnTitle from "../../components/AnTitle";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
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
    path: "/Services/travelinsurance",
    title: SERVICES_SEO.travelinsurance.title,
    description: SERVICES_SEO.travelinsurance.description,
    imageUrl: "/images/travelInsurancehero.webp",
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
    name: SERVICES_SEO.travelinsurance.title[lang],
    description: SERVICES_SEO.travelinsurance.description[lang],
    serviceType: "Travel Insurance",
    schemaType: SERVICES_SEO.travelinsurance.schemaType ?? "Service",
    pageUrl: `${SITE_URL}/${lang}/Services/travelinsurance`,
  });

  return (
    <main className="max-w-[95vw] mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.travelinsurance.title[lang]}</h1>
      <AnTitle title={dic.travelInsurance} />
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        {dic.insuranceText}
      </h2>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <div className="relative lg:w-2/3">
          <Image
            loading="lazy"
            quality={100}
            className="w-full h-full rounded-lg"
            width={840}
            height={480}
            src="/images/travelInsurancehero.webp"
            alt="Travel Insurance"
          />
        </div>
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <TravelInsuranceForm lang={lang} />
        </div>
      </div>
    </main>
  );
}
