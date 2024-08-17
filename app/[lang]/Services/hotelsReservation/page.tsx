import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import HotelReservationForm from "../../components/HotelReservationForm";
import AnTitle from "../../components/AnTitle";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <AnTitle title="" />
      <div className="lg:pt-20  flex flex-col-reverse lg:flex-row gap-4 box">
        <div className="relative lg:w-2/3">
          <Image
            loading="lazy"
            quality={1}
            className="w-full h-full object-cover"
            width={1280}
            height={720}
            src="/images/hotelhero.jpg"
            alt="Hotel Reservation"
          />
        </div>
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <HotelReservationForm lang={lang} />
        </div>
      </div>
      <div className="bg-white  w-full opacity-80 py-16 px-8 bottom-0 h-auto">
        <p className="text-center text-2xl">
          {lang === "en" && (
            <>
            Enjoy a luxurious hotel experience with Al-Nujoom Al-Masiya, offering the best accommodation options in 3, 4, and 5-star hotels with exceptional services and stunning views.
            </>
          )}
          {lang === "ar" && (
            <>
      استمتعوا بتجربة فندقية راقية مع شركة النجوم الماسية، التي تقدم أفضل خيارات الإقامة من فنادق 3,4,5 نجوم، مع خدمات متميزة وإطلالات رائعة.
            </>
          )}
          {lang === "ru" && (
            <>
           Наслаждайтесь роскошным гостиничным опытом с Al-Nujoom Al-Masiya, предлагающим лучшие варианты размещения в 3, 4 и 5-звездочных отелях с исключительным обслуживанием и потрясающими видами.
            </>
          )}
        </p>
      </div>
    </>
  );
}
