import Image from "next/image";
import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import HotelReservationForm from "../../components/HotelReservationForm";
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
    path: "/Services/hotelsReservation",
    title: SERVICES_SEO.hotelsReservation.title,
    description: SERVICES_SEO.hotelsReservation.description,
    imageUrl: "/images/hotelhero.webp",
  });
}

const hotelDescription: Record<Locale, string> = {
  en: "Enjoy a luxurious hotel experience with AlNujoom AlMasiya, offering the best accommodation options in 3, 4, and 5-star hotels with exceptional services and stunning views.",
  ar: "استمتعوا بتجربة فندقية راقية مع شركة النجوم الماسية، التي تقدم أفضل خيارات الإقامة من فنادق 3,4,5 نجوم، مع خدمات متميزة وإطلالات رائعة.",
  ru: "Наслаждайтесь роскошным гостиничным опытом с AlNujoom AlMasiya, предлагающим лучшие варианты размещения в 3, 4 и 5-звездочных отелях с исключительным обслуживанием и потрясающими видами.",
};

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const jsonLd = buildServiceJsonLd({
    name: SERVICES_SEO.hotelsReservation.title[lang],
    description: SERVICES_SEO.hotelsReservation.description[lang],
    serviceType: "Hotel Reservation",
    pageUrl: `${SITE_URL}/${lang}/Services/hotelsReservation`,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.hotelsReservation.title[lang]}</h1>

      <AnTitle title={dic.hotelReservation} />
      <p className="mx-auto max-w-3xl text-center text-base lg:text-lg text-slate-600 mb-8">
        {dic.hoteltext}
      </p>

      <div className="grid gap-6 lg:grid-cols-5 items-start">
        <div className="card-elegant overflow-hidden lg:col-span-3">
          <Image
            loading="lazy"
            quality={75}
            className="w-full h-auto object-cover"
            width={840}
            height={480}
            src="/images/hotelhero.webp"
            alt="Hotel Reservation"
          />
          <p className="p-6 text-base lg:text-lg text-slate-700 leading-relaxed">
            {hotelDescription[lang]}
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-center">
          <HotelReservationForm lang={lang} />
        </div>
      </div>
    </main>
  );
}
