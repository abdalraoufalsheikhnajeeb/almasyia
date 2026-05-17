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
    <main className="max-w-[95vw] mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">{SERVICES_SEO.hotelsReservation.title[lang]}</h1>
      <AnTitle title={dic.hotelReservation} />
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        {dic.hoteltext}
      </h2>
      <div className=" flex flex-col-reverse lg:flex-row gap-4 box">
        <div className="flex flex-col lg:w-2/3">
          <p className="text-center text-2xl mb-6 flex flex-col lg:flex-row items-center gap-4">
            {lang === "en" && (
              <>
                Enjoy a luxurious hotel experience with AlNujoom AlMasiya,
                offering the best accommodation options in 3, 4, and 5-star
                hotels with exceptional services and stunning views.
              </>
            )}
            {lang === "ar" && (
              <>
                استمتعوا بتجربة فندقية راقية مع شركة النجوم الماسية، التي تقدم
                أفضل خيارات الإقامة من فنادق 3,4,5 نجوم، مع خدمات متميزة
                وإطلالات رائعة.
              </>
            )}
            {lang === "ru" && (
              <>
                Наслаждайтесь роскошным гостиничным опытом с AlNujoom
                AlMasiya, предлагающим лучшие варианты размещения в 3, 4 и
                5-звездочных отелях с исключительным обслуживанием и
                потрясающими видами.
              </>
            )}
          </p>
          <Image
            loading="lazy"
            quality={100}
            className="w-full h-full rounded-lg"
            width={840}
            height={480}
            src="/images/hotelhero.webp"
            alt="Hotel Reservation"
          />
        </div>
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <HotelReservationForm lang={lang} />
        </div>
      </div>
      <div className="bg-white  w-full opacity-80 py-16 px-8 bottom-0 h-auto"></div>
    </main>
  );
}
