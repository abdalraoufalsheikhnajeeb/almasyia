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
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.taxis.title[lang]}</h1>
      <AnTitle title={dic.airportTaxi} />
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        {dic.airportTaxiText}
      </h2>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <Image
          loading="lazy"
          quality={100}
          className="lg:w-2/3 w-full rounded-lg"
          width={840}
          height={480}
          src="/images/taxihero.webp"
          alt="Airport Taxi"
        />
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <TaxiDeliveryForm lang={lang} />
        </div>
      </div>
    </main>
  );
};
export default page;
