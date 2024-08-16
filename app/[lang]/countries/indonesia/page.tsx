import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Indonesia } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Indonesia.map((item, index) => {
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
            className="mb-8 pt-6  lg:ps-4 bg-[#34689447] rounded-2xl border-white border shadow-xl overflow-hidden"
          >
            <h2 className="text-center text-accent text-2xl font-bold mb-4">
              {title}
            </h2>
            <div className="flex flex-col lg:flex-row items-center ">
              <p className=" lg:w-2/3 lg:pe-4 text-start max-w-[90%] mx-auto">
                {description}
              </p>

              {src && (
                <div className="lg:w-1/3 w-full mt-4 lg:mt-0">
                  <Image
                    src={src}
                    quality={100}
                    alt={title}
                    width={500}
                    height={300}
                    className=" w-full  rounded-ee-2xl rounded-es-2xl lg:rounded-ee-none lg:rounded-es-none lg:rounded-ss-2xl"
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
            ? "Currency: Indonesian Rupiah"
            : lang === "ar"
            ? "العملة المتداولة: الروبية"
            : "Валюта: индонезийская рупия"}
        </p>
        <p>
          {lang === "en"
            ? "Official Language: Indonesian"
            : lang === "ar"
            ? "اللغة الرسمية: لغة إندونيسيا"
            : "Официальный язык: индонезийский"}
        </p>
        <p>
          {lang === "en"
            ? "Best time to visit: January, February, June, July, August"
            : lang === "ar"
            ? "أفضل وقت للزيارة: يناير، فبراير، يونيو، يوليو، أغسطس"
            : "Лучшее время для посещения: январь, февраль, июнь, июль, август"}
        </p>
      </div>

      <h2 className="text-center text-accent text-2xl font-bold mb-4">
        {lang === "en" ? "Recommended Markets:" : lang === "ar" ? "أسواق مقترحة للزيارة:" : "Рекомендуемые рынки:"}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-2xl">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Jakarta" : lang === "ar" ? "جاكرتا" : "Джакарта"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Bali" : lang === "ar" ? "جزيرة بالي" : "Бали"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Tanah Abang Market", "Pasar Baru", "Mangga Dua Square", "Thamrin City", "Plaza Indonesia", "Grand Indonesia Shopping Town"][index]
                    : lang === "ar"
                    ? ["سوق تانه أبانغ", "بازار بارو", "مانغا دوا سكوير", "تامرين سيتي", "بلازا إندونيسيا", "جراند إندونيسيا شوبينغ تاون"][index]
                    : ["Рынок Тана Абанг", "Пасар Бару", "Мангга Дуа Сквер", "Тамрин Сити", "Плаза Индонезия", "Гранд Индонезия Шоппинг Таун"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Ubud Market", "Kuta Art Market", "Beachwalk Shopping Center", "Discovery Shopping Mall", "Bali Collection", "Mal Bali Galeria"][index]
                    : lang === "ar"
                    ? ["سوق أوبود", "سوق فن كوتا", "مركز بيشوالك للتسوق", "ديسكفري شوبينغ مول", "مجمع بالي", "مال بالي غاليريا"][index]
                    : ["Рынок Убуд", "Кута Арт Маркет", "Торговый центр Бичволк", "Торговый центр Дискавери", "Бали Коллекшн", "Мал Бали Галерея"][index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
        {lang === "en" ? "Recommended Restaurants:" : lang === "ar" ? "مطاعم مقترحة للزيارة:" : "Рекомендуемые рестораны:"}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-2xl">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Jakarta" : lang === "ar" ? "جاكرتا" : "Джакарта"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Bali" : lang === "ar" ? "جزيرة بالي" : "Бали"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Lara Djonggrang", "Bunga Rampai", "Seribu Rasa", "Plataran Menteng", "Kembang Goela", "Bunga Pepaya"][index]
                    : lang === "ar"
                    ? ["لارا جونغراغ", "بونغا رامباي", "سيريبو راسا", "بلاتاران منتينغ", "كمبانغ غويلا", "بونغا بيبايا"][index]
                    : ["Лара Джонггранг", "Бунга Рампаи", "Серибу Раса", "Платаран Менгтенг", "Кембанг Гоела", "Бунга Папайя"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Locavore", "Mozaic", "Mama San", "Merah Putih", "Barbacoa", "Sarong"][index]
                    : lang === "ar"
                    ? ["لوكافور", "موزاييك", "ماما سان", "ميره بوتيه", "بارباكوا", "سارونغ"][index]
                    : ["Локавор", "Мозаик", "Мама Сан", "Мерах Путих", "Барбакоа", "Саронг"][index]}
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
