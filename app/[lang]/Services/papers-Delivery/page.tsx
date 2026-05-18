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
    <main className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO["papers-Delivery"].title[lang]}</h1>
      <AnTitle title={dic.delivery} />
      <p className="mx-auto max-w-3xl text-center text-base lg:text-lg text-slate-600 mb-8">
        {dic.deliveryText}
      </p>
      <div className="grid gap-6 lg:grid-cols-5 items-start">
        <div className="card-elegant overflow-hidden lg:col-span-3">
          <Image
            loading="lazy"
            quality={75}
            className="w-full h-auto object-cover"
            width={840}
            height={480}
            src="/images/papersDelivery.webp"
            alt="Papers Delivery"
          />
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <DeliveryForm lang={lang} />
        </div>
      </div>
    </main>
  );
};
export default page;
