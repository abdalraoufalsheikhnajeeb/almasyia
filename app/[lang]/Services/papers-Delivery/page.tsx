import Image from "next/image";
import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import DeliveryForm from "../../components/DeliveryForm";
import AnTitle from "../../components/AnTitle";
import { getDictionary } from "../../../../get-dictionary";
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
    path: "/Services/papers-Delivery",
    title: SERVICES_SEO["papers-Delivery"].title,
    description: SERVICES_SEO["papers-Delivery"].description,
  });
}

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const jsonLd = buildServiceJsonLd({
    name: SERVICES_SEO["papers-Delivery"].title[lang],
    description: SERVICES_SEO["papers-Delivery"].description[lang],
    serviceType: "Document Delivery",
    pageUrl: `${SITE_URL}/${lang}/Services/papers-Delivery`,
  });

  return (
    <main className="max-w-[95vw] mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO["papers-Delivery"].title[lang]}</h1>
      <AnTitle title={dic.delivery} />
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        {dic.deliveryText}
      </h2>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <Image
          loading="lazy"
          quality={60}
          className="lg:w-2/3 w-full rounded-lg"
          width={840}
          height={480}
          src="/images/papersDelivery.webp"
          alt="Papers Delivery"
        />

        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <DeliveryForm lang={lang} />
        </div>
      </div>
    </main>
  );
};
export default page;
