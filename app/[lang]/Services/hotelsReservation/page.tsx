import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import HotelReservationForm from "../../components/HotelReservationForm";
import AnTitle from "../../components/AnTitle";
import { getDictionary } from "../../../../get-dictionary";
export default async function page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return (
    <div className="max-w-[95vw] mx-auto">
      <AnTitle title={dic.hotelReservation} />
      <h3 className="text-3xl font-bold text-center mb-4">{dic.hoteltext}</h3>
      <div className=" flex flex-col-reverse lg:flex-row gap-4 box">
        <div className="flex flex-col lg:w-2/3">
          <p className="text-center text-2xl">
            {lang === "en" && (
              <>
                Enjoy a luxurious hotel experience with Al-Nujoom Al-Masiya,
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
                Наслаждайтесь роскошным гостиничным опытом с Al-Nujoom
                Al-Masiya, предлагающим лучшие варианты размещения в 3, 4 и
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
    </div>
  );
}
