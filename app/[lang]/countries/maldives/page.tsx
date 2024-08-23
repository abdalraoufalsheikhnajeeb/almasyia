import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Maldives } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Maldives.map((item, index) => {
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
              ? "Notes:"
              : lang === "ar"
              ? "ملاحظات:"
              : "Примечания:"}
          </h2>
          <p>
            {lang === "en"
              ? "The official language of the Maldives is Dhivehi, but English is widely spoken."
              : lang === "ar"
              ? "اللغة الرسمية في جزر المالديف هي الديفيهي، ولكن الإنجليزية تُستخدم على نطاق واسع."
              : "Официальный язык на Мальдивах - дивехи, но английский язык широко распространен."}
          </p>
          <p>
            {lang === "en"
              ? "Currency: Maldivian Rufiyaa"
              : lang === "ar"
              ? "العملة المتداولة: الروفيا المالديفية"
              : "Валюта: Мальдивская руфия"}
          </p>
          <p>
            {lang === "en"
              ? "The working hours are generally from 8 AM to 5 PM. The best time to visit is during the dry season from November to April."
              : lang === "ar"
              ? "ساعات العمل الرسمية تكون عموماً من الساعة 8 صباحاً وحتى الساعة 5 مساءً. أفضل وقت للسفر هو خلال موسم الجفاف من نوفمبر إلى أبريل."
              : "Рабочие часы обычно с 8 утра до 5 вечера. Лучшее время для посещения - сухой сезон с ноября по апрель."}
          </p>

          <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
            {lang === "en"
              ? "Main Activities and Events:"
              : lang === "ar"
              ? "أهم الأنشطة والفعاليات:"
              : "Основные мероприятия и события:"}
          </h2>
          <ul className="list-disc list-inside">
            {lang === "en" ? (
              <>
                <li>Scuba Diving</li>
                <li>Sunset Watching</li>
                <li>Couple's Spa</li>
                <li>Swimming in the Clear Lagoon Waters</li>
                <li>Fishing with Locals</li>
                <li>Excursions to Local Islands</li>
                <li>Water Sports</li>
                <li>Snorkeling</li>
              </>
            ) : lang === "ar" ? (
              <>
                <li>رياضة الغوص</li>
                <li>مشاهدة غروب الشمس</li>
                <li>ركوب الأمواج</li>
                <li>الاستحمام في مياه البحيرة الصافية</li>
                <li>الصيد مع السكان المحليين</li>
                <li>رحلات إلى الجزر المحلية</li>
                <li>الرياضات المائية</li>
                <li>الغوص</li>
              </>
            ) : (
              <>
                <li>Дайвинг</li>
                <li>Наблюдение за закатом</li>
                <li>Спа для пар</li>
                <li>Плавание в чистых лагунах</li>
                <li>Рыбалка с местными жителями</li>
                <li>Экскурсии на местные острова</li>
                <li>Водные виды спорта</li>
                <li>Сноркелинг</li>
              </>
            )}
          </ul>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
          {lang === "en"
            ? "Best Places for Shopping:"
            : lang === "ar"
            ? "أفضل أماكن للتسوق:"
            : "Лучшие места для шопинга:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en" ? "Place" : lang === "ar" ? "المكان" : "Место"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Description"
                    : lang === "ar"
                    ? "الوصف"
                    : "Описание"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Le Cute",
                          "Chaandhanee Magu",
                          "Centro Mall",
                          "Oevaali Art Shop & Studio",
                          "Male Local Market",
                          "Majeedhee Magu",
                        ][index]
                      : lang === "ar"
                      ? [
                          "لو كيوت",
                          "شانادانا ماجو",
                          "سنترو مول",
                          "متجر واستوديو أوفالي للفن",
                          "سوق ماليه المحلي",
                          "ماجيده ماجو",
                        ][index]
                      : [
                          "Le Cute",
                          "Chaandhanee Magu",
                          "Centro Mall",
                          "Oevaali Art Shop & Studio",
                          "Male Local Market",
                          "Majeedhee Magu",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "A popular gift shop",
                          "A street with numerous souvenir shops",
                          "A modern shopping mall",
                          "An art shop with local crafts",
                          "The main market for fresh produce",
                          "A bustling street with various shops",
                        ][index]
                      : lang === "ar"
                      ? [
                          "متجر هدايا شهير",
                          "شارع يضم العديد من محلات الهدايا التذكارية",
                          "مول تسوق حديث",
                          "متجر فنون وحرف محلية",
                          "السوق الرئيسي للمنتجات الطازجة",
                          "شارع مزدحم بالعديد من المحلات التجارية",
                        ][index]
                      : [
                          "Популярный сувенирный магазин",
                          "Улица с множеством сувенирных магазинов",
                          "Современный торговый центр",
                          "Магазин искусств с местными ремеслами",
                          "Основной рынок свежих продуктов",
                          "Оживленная улица с разнообразными магазинами",
                        ][index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
          {lang === "en"
            ? "Best Restaurants:"
            : lang === "ar"
            ? "أفضل المطاعم:"
            : "Лучшие рестораны:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Restaurant"
                    : lang === "ar"
                    ? "المطعم"
                    : "Ресторан"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Description"
                    : lang === "ar"
                    ? "الوصف"
                    : "Описание"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Marrybrown",
                          "Sea House Restaurant",
                          "Asian Wok",
                          "Symphony Restaurant",
                          "The Manhattan Fish Market",
                          "Salt Cafe & Restaurant",
                        ][index]
                      : lang === "ar"
                      ? [
                          "ماري براون",
                          "مطعم بيت البحر",
                          "مطعم ووك الآسيوي",
                          "مطعم سيمفوني",
                          "مطعم سوق سمك مانهاتن",
                          "مطعم وكافيه سولت",
                        ][index]
                      : [
                          "Marrybrown",
                          "Sea House Restaurant",
                          "Asian Wok",
                          "Symphony Restaurant",
                          "The Manhattan Fish Market",
                          "Salt Cafe & Restaurant",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "A popular fast food chain",
                          "A seafood restaurant with ocean views",
                          "A restaurant serving Asian cuisine",
                          "A restaurant with live music",
                          "A famous seafood restaurant",
                          "A cafe and restaurant with a cozy atmosphere",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سلسلة مطاعم وجبات سريعة شهيرة",
                          "مطعم مأكولات بحرية بإطلالة على المحيط",
                          "مطعم يقدم المأكولات الآسيوية",
                          "مطعم مع موسيقى حية",
                          "مطعم مأكولات بحرية شهير",
                          "كافيه ومطعم بأجواء مريحة",
                        ][index]
                      : [
                          "Популярная сеть быстрого питания",
                          "Ресторан морепродуктов с видом на океан",
                          "Ресторан азиатской кухни",
                          "Ресторан с живой музыкой",
                          "Знаменитый ресторан морепродуктов",
                          "Кафе и ресторан с уютной атмосферой",
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
