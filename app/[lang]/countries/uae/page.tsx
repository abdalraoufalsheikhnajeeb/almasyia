import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { UAE } from "../../data";

const page = ({ params: { lang } }: { params: Promise<{ lang: Locale }> }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {UAE.map((item, index) => {
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
              ? "The tourist season usually starts in February and ends in March."
              : lang === "ar"
              ? "يبدأ موسم الذروة السياحي عموماً في فبراير وينتهي في مارس."
              : "Туристический сезон обычно начинается в феврале и заканчивается в марте."}
          </p>
          <p>
            {lang === "en"
              ? "Official language: Arabic"
              : lang === "ar"
              ? "اللغة الرسمية: اللغة العربية"
              : "Официальный язык: арабский"}
          </p>
          <p>
            {lang === "en"
              ? "Currency: UAE Dirham"
              : lang === "ar"
              ? "العملة المتداولة: الدرهم الإماراتي"
              : "Валюта: дирхам ОАЭ"}
          </p>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4">
          {lang === "en"
            ? "Main Markets:"
            : lang === "ar"
            ? "أهم الأسواق:"
            : "Основные рынки:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Sharjah"
                    : lang === "ar"
                    ? "الشارقة"
                    : "Шарджа"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Abu Dhabi"
                    : lang === "ar"
                    ? "أبوظبي"
                    : "Абу-Даби"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en" ? "Dubai" : lang === "ar" ? "دبي" : "Дубай"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Central Market",
                          "Al Jubail Market",
                          "Al Muwaihat Market",
                          "Al Qurain Market",
                          "Mega Mall",
                          "Sahara Centre",
                          "Safeer Mall",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سوق المركزي",
                          "سوق الجبيل",
                          "سوق المويهات",
                          "سوق القريين",
                          "ميجا مول",
                          "مركز صحارى",
                          "سفير مول",
                        ][index]
                      : [
                          "Центральный рынок",
                          "Рынок Аль Джубайл",
                          "Рынок Аль Мувайхат",
                          "Рынок Аль Курейн",
                          "Мега Молл",
                          "Сахара Центр",
                          "Молл Сафер",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Central Market",
                          "Al Zafra Market",
                          "Fish Market",
                          "Vegetables and Fruits Market",
                          "Al Zafra Market",
                          "Al Wathba Market",
                          "Galleria Mall",
                          "Dana Mall",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سوق المركزي",
                          "سوق الظفرة",
                          "سوق السمك",
                          "سوق الفواكه والخضار",
                          "سوق الظفرة",
                          "سوق الوثبة",
                          "غاليريا مول",
                          "دانا مول",
                        ][index]
                      : [
                          "Центральный рынок",
                          "Рынок Аль Зафра",
                          "Рыбный рынок",
                          "Рынок фруктов и овощей",
                          "Рынок Аль Зафра",
                          "Рынок Аль Ватба",
                          "Галерея Молл",
                          "Дана Молл",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Gold Souk",
                          "Spice Souk",
                          "Fish Souk",
                          "Textile Souk",
                          "Perfume Souk",
                          "Burjuman Centre",
                          "Deira City Centre",
                          "Wafi Mall",
                          "Dubai Mall",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سوق الذهب",
                          "سوق التوابل",
                          "سوق السمك",
                          "سوق النسيج",
                          "سوق العطور",
                          "برجمان سنتر",
                          "ديرة سيتي سنتر",
                          "وافي مول",
                          "دبي مول",
                        ][index]
                      : [
                          "Рынок золота",
                          "Рынок специй",
                          "Рыбный рынок",
                          "Текстильный рынок",
                          "Рынок парфюмерии",
                          "Торговый центр Бурджуман",
                          "Торговый центр Дейра",
                          "Вафи Молл",
                          "Дубай Молл",
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
