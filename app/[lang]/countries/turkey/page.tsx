import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Turkey } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Turkey.map((item, index) => {
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
                    quality={80}
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
            {lang === "en"
              ? "Best time to visit Turkey:"
              : lang === "ar"
              ? "أفضل وقت لزيارة تركيا:"
              : "Лучшее время для посещения Турции:"}
          </h2>
          <p>
            {lang === "en"
              ? "Turkey can be quite hot and humid in the summer, while spring and autumn (April, May, and mid-September to October) are the best times to visit."
              : lang === "ar"
              ? "نظرًا لأن تركيا تشهد صيفًا حارًا ورطبًا، فإن فصل الربيع والخريف (أبريل ومايو ومنتصف سبتمبر وأكتوبر) هي أفضل وقت للزيارة."
              : "Турция может быть довольно жаркой и влажной летом, поэтому весна и осень (апрель, май и середина сентября до октября) - лучшее время для посещения."}
          </p>
          <p>
            {lang === "en"
              ? "Currency: Turkish Lira"
              : lang === "ar"
              ? "العملة: الليرة التركية"
              : "Валюта: турецкая лира"}
          </p>
          <p>
            {lang === "en"
              ? "Language: Turkish"
              : lang === "ar"
              ? "اللغة: التركية"
              : "Язык: турецкий"}
          </p>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4">
          {lang === "en"
            ? "Recommended Markets:"
            : lang === "ar"
            ? "أسواق مقترحة:"
            : "Рекомендуемые рынки:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Istanbul"
                    : lang === "ar"
                    ? "إسطنبول"
                    : "Стамбул"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Ankara"
                    : lang === "ar"
                    ? "أنقرة"
                    : "Анкара"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en" ? "Izmir" : lang === "ar" ? "إزمير" : "Измир"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Trabzon"
                    : lang === "ar"
                    ? "طرابزون"
                    : "Трабзон"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Grand Bazaar",
                          "Mısır Çarşısı",
                          "Istinye Park",
                          "Kanyon",
                          "City's Nisantasi",
                          "Zorlu Center",
                          "Aqua Florya",
                        ][index]
                      : lang === "ar"
                      ? [
                          "البازار الكبير",
                          "سوق مصر",
                          "إستينيه بارك",
                          "كانيون",
                          "سيتيز نيشانتاشي",
                          "زورلو سنتر",
                          "أكوا فلوريا",
                        ][index]
                      : [
                          "Гранд базар",
                          "Египетский рынок",
                          "Истинье Парк",
                          "Каньон",
                          "Ситиз Нишанташи",
                          "Центр Зорлу",
                          "Аква Флория",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Atakule",
                          "AnkaMall",
                          "Armada",
                          "Panora",
                          "Kentpark",
                          "Next Level",
                          "One Tower",
                        ][index]
                      : lang === "ar"
                      ? [
                          "أتاكول",
                          "أنكا مول",
                          "أرمادا",
                          "بانورا",
                          "كينتبارك",
                          "المستوى التالي",
                          "برج واحد",
                        ][index]
                      : [
                          "Атакуле",
                          "АнкаМолл",
                          "Армада",
                          "Панора",
                          "Кентпарк",
                          "Следующий уровень",
                          "Одна башня",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Forum Bornova",
                          "Kemeralti Bazaar",
                          "Agora",
                          "Konak Pier",
                          "Optimum",
                          "MaviBahce",
                          "Park Bornova",
                        ][index]
                      : lang === "ar"
                      ? [
                          "منتدى بورنوفا",
                          "بازار كيميرالتي",
                          "أغورا",
                          "كوناك بير",
                          "أوبتيموم",
                          "مابي بهجة",
                          "بارك بورنوفا",
                        ][index]
                      : [
                          "Форум Борнова",
                          "Кемералти Базар",
                          "Агора",
                          "Конак Пир",
                          "Оптимум",
                          "МавиБахче",
                          "Парк Борнова",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Forum Trabzon",
                          "Varlıbaş",
                          "Cevahir Outlet",
                          "Trabzon Meydan",
                          "Sera Gölü",
                          "Avrasya Pazarı",
                          "Trabzon Hali",
                        ][index]
                      : lang === "ar"
                      ? [
                          "منتدى طرابزون",
                          "فارليباش",
                          "سوق جواهر",
                          "طرابزون ميدان",
                          "سيرا غولو",
                          "بازار أفراسيا",
                          "طرابزون هالي",
                        ][index]
                      : [
                          "Форум Трабзон",
                          "Варлыбаш",
                          "Аутлет Джевахир",
                          "Трабзон Мейдан",
                          "Сера Гёлу",
                          "Аврасья Пазары",
                          "Трабзон Хали",
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

export default Page;
