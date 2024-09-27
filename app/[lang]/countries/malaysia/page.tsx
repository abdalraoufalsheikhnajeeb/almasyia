import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Malaysia } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Malaysia.map((item, index) => {
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
      <div className="container mx-auto p-4 mb-8 pt-6 lg:ps-4 bg-[#34689447] rounded-2xl border-white border shadow-xl overflow-hidden">
        <div className="mb-8">
          <h2 className="text-center text-accent text-2xl font-bold mb-4">
            {lang === "en"
              ? "Best time to visit Malaysia:"
              : lang === "ar"
              ? "أفضل وقت للسفر إلى ماليزيا:"
              : "Лучшее время для посещения Малайзии:"}
          </h2>
          <p>
            {lang === "en"
              ? "June, July, August, and September"
              : lang === "ar"
              ? "خلال الأشهر: حزيران، تموز، آب، وأيلول"
              : "июнь, июль, август и сентябрь"}
          </p>
          <p>
            {lang === "en"
              ? "Currency: Malaysian Ringgit"
              : lang === "ar"
              ? "العملة: الرينغيت الماليزي"
              : "Валюта: малайзийский ринггит"}
          </p>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4">
          {lang === "en"
            ? "Main Attractions:"
            : lang === "ar"
            ? "معالم مقترحة للفندق:"
            : "Основные достопримечательности:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Kuala Lumpur"
                    : lang === "ar"
                    ? "كوالا لمبور"
                    : "Куала-Лумпур"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Penang"
                    : lang === "ar"
                    ? "بينانغ"
                    : "Пенанг"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Langkawi"
                    : lang === "ar"
                    ? "لنكاوي"
                    : "Лангкави"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Petronas Twin Towers",
                          "Batu Caves",
                          "Menara Kuala Lumpur",
                          "Sunway Lagoon",
                          "Perdana Botanical Gardens",
                        ][index]
                      : lang === "ar"
                      ? [
                          "أبراج بتروناس التوأم",
                          "كهوف باتو",
                          "منارة كوالالمبور",
                          "صنواي لاجون",
                          "حدائق بردانا النباتية",
                        ][index]
                      : [
                          "Башни Петронас",
                          "Пещеры Бату",
                          "Менара Куала-Лумпур",
                          "Санвэй Лагун",
                          "Ботанические сады Пердана",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Penang Hill",
                          "Kek Lok Si Temple",
                          "Cheong Fatt Tze Mansion",
                          "Penang National Park",
                          "Penang Bridge",
                        ][index]
                      : lang === "ar"
                      ? [
                          "تلة بينانغ",
                          "معبد كيك لوك سي",
                          "قصر تشيونغ فات تزي",
                          "حديقة بينانغ الوطنية",
                          "جسر بينانغ",
                        ][index]
                      : [
                          "Холм Пенанг",
                          "Храм Кек Лок Си",
                          "Особняк Чеонг Фат Тзе",
                          "Национальный парк Пенанг",
                          "Мост Пенанг",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Langkawi Sky Bridge",
                          "Eagle Square",
                          "Pantai Cenang",
                          "Tanjung Rhu Beach",
                          "Langkawi Wildlife Park",
                        ][index]
                      : lang === "ar"
                      ? [
                          "جسر السماء لنكاوي",
                          "ساحة النسر",
                          "شاطئ سينانج",
                          "شاطئ تانجونغ رو",
                          "منتزه الحياة البرية لنكاوي",
                        ][index]
                      : [
                          "Мост в небо Лангкави",
                          "Площадь Орла",
                          "Пляж Пантай Ченанг",
                          "Пляж Танджунг Ру",
                          "Парк дикой природы Лангкави",
                        ][index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
          {lang === "en"
            ? "Recommended Markets:"
            : lang === "ar"
            ? "أسواق مقترحة للزيارة:"
            : "Рекомендуемые рынки:"}
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Kuala Lumpur"
                    : lang === "ar"
                    ? "كوالا لمبور"
                    : "Куала-Лумпур"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Penang"
                    : lang === "ar"
                    ? "بينانغ"
                    : "Пенанг"}
                </th>
                <th className="px-4 py-2 text-center bg-blue-600 text-white">
                  {lang === "en"
                    ? "Langkawi"
                    : lang === "ar"
                    ? "لنكاوي"
                    : "Лангкави"}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Suria KLCC",
                          "Pavilion Kuala Lumpur",
                          "Mid Valley Megamall",
                          "Central Market",
                          "Petaling Street Market",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سوريا كي إل سي سي",
                          "جناح كوالالمبور",
                          "ميغامول الوادي الأوسط",
                          "السوق المركزي",
                          "سوق بيتالينغ ستريت",
                        ][index]
                      : [
                          "Сурия КЛСС",
                          "Павильон Куала-Лумпур",
                          "Мид Вэлли Мегамолл",
                          "Центральный рынок",
                          "Рынок Петалинг-стрит",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Queensbay Mall",
                          "Gurney Plaza",
                          "Penang Times Square",
                          "Prangin Mall",
                          "Komtar",
                        ][index]
                      : lang === "ar"
                      ? [
                          "كوينسباي مول",
                          "غورني بلازا",
                          "بينانغ تايمز سكوير",
                          "برانجين مول",
                          "كومتار",
                        ][index]
                      : [
                          "Куинсбей Молл",
                          "Герни Плаза",
                          "Пенанг Таймс Сквер",
                          "Прангин Молл",
                          "Комтар",
                        ][index]}
                  </td>
                  <td className="px-4 text-center py-2">
                    {lang === "en"
                      ? [
                          "Cenang Mall",
                          "The Zon Duty-Free",
                          "Langkawi Fair Shopping Mall",
                          "Langkawi Parade",
                          "Jetty Point Duty-Free Complex",
                        ][index]
                      : lang === "ar"
                      ? [
                          "سينانغ مول",
                          "ذا زون ديوتي فري",
                          "مول لنكاوي فير",
                          "موكب لنكاوي",
                          "مجمع جيتي بوينت ديوتي فري",
                        ][index]
                      : [
                          "Сенанг Молл",
                          "The Zon Duty-Free",
                          "Торговый центр Лангкави Фэр",
                          "Парад Лангкави",
                          "Комплекс беспошлинной торговли Джетти Пойнт",
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
