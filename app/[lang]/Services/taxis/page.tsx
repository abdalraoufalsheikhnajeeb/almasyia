import Image from "next/image";
import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import TaxiDeliveryForm from "../../components/TaxiDeliveryForm";
import { getDictionary } from "../../../../get-dictionary";
import AnTitle from "../../components/AnTitle";
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
    path: "/Services/taxis",
    title: SERVICES_SEO.taxis.title,
    description: SERVICES_SEO.taxis.description,
    imageUrl: "/images/taxihero.webp",
  });
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const jsonLd = buildServiceJsonLd({
    name: SERVICES_SEO.taxis.title[lang],
    description: SERVICES_SEO.taxis.description[lang],
    serviceType: "Airport Transfer",
    schemaType: SERVICES_SEO.taxis.schemaType ?? "Service",
    pageUrl: `${SITE_URL}/${lang}/Services/taxis`,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.taxis.title[lang]}</h1>
      <AnTitle title={dic.airportTaxi} />
      <p className="mx-auto max-w-3xl text-center text-base lg:text-lg text-slate-600 mb-8">
        {dic.airportTaxiText}
      </p>
      <div className="grid gap-6 lg:grid-cols-5 items-start">
        <div className="card-elegant overflow-hidden lg:col-span-3">
          <Image
            loading="lazy"
            quality={75}
            className="w-full h-auto object-cover"
            width={840}
            height={480}
            src="/images/taxihero.webp"
            alt="Airport Taxi"
          />
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <TaxiDeliveryForm lang={lang} />
        </div>
      </div>
    </main>
  );
};
export default page;
