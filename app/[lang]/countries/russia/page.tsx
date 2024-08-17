import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Russia } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Russia.map((item, index) => {
        const {
          nameEN,
          nameAR,
          nameRU,
          src,
          descriptionAR,
          descriptionEN,
          descriptionRU,
        } = item;
        const title = lang === "en" ? nameEN : lang === "ar" ? nameAR : nameRU;
        const description =
          lang === "en"
            ? descriptionEN
            : lang === "ar"
            ? descriptionAR
            : descriptionRU;

        if (!description && !src) {
          return (
            <div key={index}>
              <h2 className="text-center text-accent text-2xl font-bold mb-4">
                {title}
              </h2>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="mb-8 box"
          >
            <div className="flex flex-col  gap-4 lg:flex-row items-center ">
            <div className="flex flex-col lg:w-2/3">
              <h2 className="text-center text-accent text-2xl font-bold mb-6">
                {title}
              </h2>
                <p className=" text-start text-lg">
                  {description}
                </p>
            </div>

              {src && (
                <div className="lg:w-1/3 w-full mt-4 lg:mt-0 self-end">
                  <Image
                    src={src}
                    quality={50}
                    alt={title}
                    width={500}
                    height={300}
                    className=" w-full  rounded-ee-2xl rounded-es-2xl rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}

<div className="container mx-auto p-4 mb-8 pt-6 lg:ps-4 bg-[#34689447] rounded-2xl border-white border shadow-xl overflow-hidden">
      <div className="mb-8">
        <h2 className="text-center text-accent text-2xl font-bold mb-4">
          {lang === "en" ? "Notes:" : lang === "ar" ? "ملاحظات:" : "Примечания:"}
        </h2>
        <p>
          {lang === "en"
            ? "The best time to visit Russia is the end of spring to mid-September."
            : lang === "ar"
            ? "أفضل وقت لزيارة روسيا هو نهاية الربيع إلى منتصف سبتمبر."
            : "Лучшее время для посещения России - конец весны до середины сентября."}
        </p>
        <p>
          {lang === "en"
            ? "Currency: Ruble"
            : lang === "ar"
            ? "العملة: الروبل"
            : "Валюта: рубль"}
        </p>
        <p>
          {lang === "en"
            ? "Language: Russian"
            : lang === "ar"
            ? "اللغة: الروسية"
            : "Язык: русский"}
        </p>
      </div>

      <h2 className="text-center text-accent text-2xl font-bold mb-4">
        {lang === "en" ? "Main Markets:" : lang === "ar" ? "أهم الأسواق:" : "Основные рынки:"}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-2xl">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Saint Petersburg" : lang === "ar" ? "سانت بطرسبرغ" : "Санкт-Петербург"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Moscow" : lang === "ar" ? "موسكو" : "Москва"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Kazan" : lang === "ar" ? "قازان" : "Казань"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Sochi" : lang === "ar" ? "سوتشي" : "Сочи"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Detsky", "Admiralteysky", "Petrogradsky", "Vasilievsky Island", "Liteny", "Nevsky", "Gorkovskaya"][index]
                    : lang === "ar"
                    ? ["دينسكي", "أدميرالتيسكي", "بيتروغرادسكي", "جزيرة فاسيليفسكي", "ليتني", "نيفيسكي", "غوركوفيسكايا"][index]
                    : ["Детский", "Адмиралтейский", "Петроградский", "Васильевский остров", "Литейный", "Невский", "Горьковская"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Ismailovsky Market", "Danilovsky Market", "Dorogomilovsky Market", "Leningradsky Market", "Tverskoy Market", "Yaroslavsky Market", "Kievsky Market"][index]
                    : lang === "ar"
                    ? ["سوق إسمايلوف", "سوق دانيلوف", "سوق دوروغوميليفسكي", "سوق لينينغرادسكي", "سوق تفيرسكوي", "سوق ياروسلافسكي", "سوق كييفسكي"][index]
                    : ["Измайловский рынок", "Даниловский рынок", "Дорогомиловский рынок", "Ленинградский рынок", "Тверской рынок", "Ярославский рынок", "Киевский рынок"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Mega Kazan", "Central Market", "Bauman Street", "Kolco Mall", "GUM Mall", "Suvar Plaza", "Park House"][index]
                    : lang === "ar"
                    ? ["ميجا قازان", "السوق المركزي", "شارع باومان", "مركز كولكو", "مجمع جوم", "سوفار بلازا", "بارك هاوس"][index]
                    : ["Мега Казань", "Центральный рынок", "Улица Баумана", "Торговый центр Колцо", "ГУМ", "Сувар Плаза", "Парк Хаус"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Adler Market", "Central Market", "MoreMall", "Plaza Mall", "Svetlana", "Gorky Gorod", "Akvaloo"][index]
                    : lang === "ar"
                    ? ["سوق أدلر", "السوق المركزي", "مول مور", "مول بلازا", "سفيتلانا", "غوركي غورو", "أكفالوو"][index]
                    : ["Рынок Адлер", "Центральный рынок", "Моремолл", "Плаза Молл", "Светлана", "Горки Город", "Аквалоо"][index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Page;
