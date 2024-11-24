import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Thailand } from "../../data";

const page = ({ params: { lang } }: { params: Promise<{ lang: Locale }> }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Thailand.map((item, index) => {
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
          <div key={index} className="mb-8 box">
            <div className="flex flex-col  gap-4 lg:flex-row items-center ">
              <div className="flex flex-col lg:w-2/3">
                <h2 className="text-center text-accent text-2xl font-bold mb-6">
                  {title}
                </h2>
                <p className=" text-start text-lg">{description}</p>
              </div>

              {src && (
                <div className="lg:w-1/3 w-full mt-4 lg:mt-0 self-end">
                  <Image
                    src={src}
                    quality={60}
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

      <div className="container mx-auto p-4 mb-8 pt-6 lg:ps-4 bg-[#34689447] rounded-lg border-white border shadow-xl overflow-hidden">
        <div className="mb-8">
          <h2 className="text-center text-accent text-2xl font-bold mb-4">
            {lang === "en"
              ? "Notes:"
              : lang === "ar"
              ? "ملاحظات:"
              : "Примечания:"}
          </h2>
          <p>
            {lang === "en"
              ? "You can visit Thailand all year round, but the best months to visit are November, December, January, and February."
              : lang === "ar"
              ? "يمكن زيارة تايلاند على مدار العام، ولكن أفضل الأشهر للزيارة: نوفمبر، ديسمبر، يناير، فبراير."
              : "Вы можете посетить Таиланд в любое время года, но лучшее время для посещения - ноябрь, декабрь, январь и февраль."}
          </p>
          <p>
            {lang === "en"
              ? "Currency: Thai Baht"
              : lang === "ar"
              ? "العملة: البات التايلاندي"
              : "Валюта: тайский бат"}
          </p>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4">
          {lang === "en"
            ? "Recommended Markets:"
            : lang === "ar"
            ? "أسواق مقترحة للزيارة:"
            : "Рекомендуемые рынки:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Bangkok"
                    : lang === "ar"
                    ? "بانكوك"
                    : "Бангкок"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Phuket"
                    : lang === "ar"
                    ? "بوكيت"
                    : "Пхукет"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Chatuchak Market",
                          "Siam Paragon",
                          "CentralWorld",
                          "Platinum Fashion Mall",
                          "Asiatique The Riverfront",
                          "Terminal 21",
                          "China Town",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سوق شاتوشاك",
                          "مجمع سيام باراجون",
                          "سنترالوورلد",
                          "مول بلاتينيوم",
                          "آسياتيك",
                          "تيرمنال 21",
                          "الحي الصيني",
                        ][index]
                      : [
                          "Рынок Чатучак",
                          "Сиам Парагон",
                          "СентралВорлд",
                          "Платинум Фэшн Молл",
                          "Азиатик Набережная",
                          "Терминал 21",
                          "Чайна Таун",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Jungceylon",
                          "Phuket Weekend Market",
                          "Chillva Market",
                          "Malin Plaza",
                          "Premium Outlet Phuket",
                          "Central Festival Phuket",
                          "Boat Avenue Mall Phuket",
                        ][index]
                      : lang === "ar"
                      ? [
                          "جونغسيلون",
                          "سوق نهاية الأسبوع في بوكيت",
                          "سوق تشيلفا",
                          "مالين بلازا",
                          "المنافذ الفاخرة في بوكيت",
                          "سنترال فستيفال بوكيت",
                          "مول بوت أفينيو بوكيت",
                        ][index]
                      : [
                          "Джунгцейлон",
                          "Уикенд-рынок Пхукет",
                          "Чиллва Маркет",
                          "Малин Плаза",
                          "Премиум Аутлет Пхукет",
                          "Централ Фестиваль Пхукет",
                          "Боат Авеню Молл Пхукет",
                        ][index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
          {lang === "en"
            ? "Recommended Restaurants:"
            : lang === "ar"
            ? "مطاعم مقترحة للزيارة:"
            : "Рекомендуемые рестораны:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Bangkok"
                    : lang === "ar"
                    ? "بانكوك"
                    : "Бангкок"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Phuket"
                    : lang === "ar"
                    ? "بوكيت"
                    : "Пхукет"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Gaggan",
                          "Bo.Lan",
                          "Nahm",
                          "Issaya Siamese Club",
                          "Eat Me",
                          "Le Du",
                          "Sorn",
                        ][index]
                      : lang === "ar"
                      ? [
                          "جاجان",
                          "بو لان",
                          "نهام",
                          "إيسايا سياميزي كلوب",
                          "إيت مي",
                          "لو دو",
                          "سورن",
                        ][index]
                      : [
                          "Гагган",
                          "Бо.Лан",
                          "Нам",
                          "Иссая Сиамес Клаб",
                          "Ит Ми",
                          "Ле Ду",
                          "Сорн",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Blue Elephant",
                          "Bampot Kitchen & Bar",
                          "Ka Jok See",
                          "Raya Restaurant",
                          "Tu Kab Khao Restaurant",
                          "Kan Eang @ Pier",
                          "Black Ginger",
                        ][index]
                      : lang === "ar"
                      ? [
                          "بلو إليفانت",
                          "بامبوت كيتشن آند بار",
                          "كا جوك سي",
                          "مطعم رايا",
                          "مطعم تو كاب كاو",
                          "كان إينغ آت بير",
                          "بلاك جينجر",
                        ][index]
                      : [
                          "Блу Элефант",
                          "Бампот Кухня и Бар",
                          "Ка Джок Си",
                          "Райя Ресторан",
                          "Ту Каб Кхао Ресторан",
                          "Кан Еанг @ Пирс",
                          "Блэк Джинджер",
                        ][index]}
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

export default page;
