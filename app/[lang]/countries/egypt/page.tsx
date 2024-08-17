import Image from "next/image";

import { Locale } from "../../../../i18n-config";
import { Egypt } from "../../data";

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="container mx-auto pt-28 p-4">
      {Egypt.map((item, index) => {
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
            ? "The best times to visit are from October to April. Alexandria is ideal for winter trips with its mild weather, while Cairo offers a variety of tourist attractions year-round."
            : lang === "ar"
            ? "أفضل الأوقات للزيارة: تعتبر الفترة من أكتوبر إلى أبريل مثالية للرحلات الإسكندنافية في الهواء الطلق. ولكن القاهرة مليئة بالمعالم السياحية المتنوعة لذلك يمكنك زيارتها على مدار العام."
            : "Лучшее время для посещения: с октября по апрель. Александрия идеальна для зимних поездок благодаря мягкому климату, в то время как Каир предлагает разнообразные туристические достопримечательности круглый год."}
        </p>
        <p>
          {lang === "en"
            ? "Currency: Egyptian Pound"
            : lang === "ar"
            ? "العملة المتداولة: الجنيه المصري"
            : "Валюта: Египетский фунт"}
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
                {lang === "en" ? "Cairo" : lang === "ar" ? "القاهرة" : "Каир"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Alexandria" : lang === "ar" ? "الإسكندرية" : "Александрия"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Hurghada" : lang === "ar" ? "شرم الشيخ" : "Хургада"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Khan El Khalili", "Souk Al Gomaa", "El Ataba", "Al Moski", "Talaat Harb Street", "City Stars Mall"][index]
                    : lang === "ar"
                    ? ["خان الخليلي", "سوق الجمعة", "العتبة", "الموسكي", "شارع طلعت حرب", "سيتي ستارز مول"][index]
                    : ["Хан-эль-Халили", "Сук Аль Гомаа", "Эль Атаба", "Аль Моски", "Улица Талаат Харб", "Торговый центр Сити Старс"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Zanqat Al-Sittat", "Al Attareen", "El Manshiya", "Raml Station", "San Stefano Grand Plaza", "Green Plaza Mall"][index]
                    : lang === "ar"
                    ? ["زنقة الستات", "العطارين", "المنشية", "محطة الرمل", "سان ستيفانو جراند بلازا", "جرين بلازا مول"][index]
                    : ["Занкат аль-Ситтат", "Аттарин", "Эль-Маншия", "Станция Рамл", "Сан-Стефано Гранд Плаза", "Грин Плаза Молл"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Senzo Mall", "Hurghada Marina", "Cleopatra Bazar", "Sheraton Street", "El Dahar", "Hurghada City Center"][index]
                    : lang === "ar"
                    ? ["سينزو مول", "مارينا الغردقة", "بازار كليوباترا", "شارع الشيراتون", "الدهار", "سيتي سنتر الغردقة"][index]
                    : ["Сенцо Молл", "Марина Хургады", "Базар Клеопатры", "Улица Шератон", "Эль Дахар", "Центр города Хургада"][index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-center text-accent text-2xl font-bold mb-4 mt-8">
        {lang === "en" ? "Recommended Places to Visit:" : lang === "ar" ? "أماكن مقترحة للزيارة:" : "Рекомендуемые места для посещения:"}
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-2xl">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Cairo" : lang === "ar" ? "القاهرة" : "Каир"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Alexandria" : lang === "ar" ? "الإسكندرية" : "Александрия"}
              </th>
              <th className="px-4 py-2 text-center bg-blue-600 text-white">
                {lang === "en" ? "Hurghada" : lang === "ar" ? "شرم الشيخ" : "Хургада"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["The Egyptian Museum", "Al Azhar Park", "The Citadel", "Cairo Tower", "Khan El Khalili", "The Coptic Museum"][index]
                    : lang === "ar"
                    ? ["المتحف المصري", "حديقة الأزهر", "القلعة", "برج القاهرة", "خان الخليلي", "المتحف القبطي"][index]
                    : ["Египетский музей", "Парк Аль-Азхар", "Цитадель", "Каирская башня", "Хан-эль-Халили", "Коптский музей"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Library of Alexandria", "Qaitbay Citadel", "Montaza Palace", "Alexandria National Museum", "Stanley Bridge", "Kom El Shoqafa Catacombs"][index]
                    : lang === "ar"
                    ? ["مكتبة الإسكندرية", "قلعة قايتباي", "قصر المنتزه", "المتحف القومي بالإسكندرية", "كوبري ستانلي", "سراديب الموتى بكوم الشقافة"][index]
                    : ["Библиотека Александрина", "Цитадель Кайтбей", "Дворец Монтаза", "Национальный музей Александрии", "Мост Стэнли", "Катакомбы Ком эль-Шукафа"][index]}
                </td>
                <td className="px-4 text-center py-2">
                  {lang === "en"
                    ? ["Giftun Island", "Mahmya Island", "Hurghada Grand Aquarium", "El Gouna", "Makadi Water World", "Desert Safari"][index]
                    : lang === "ar"
                    ? ["جزيرة الجفتون", "جزيرة محمية", "الأكواريوم الكبير بالغردقة", "الجونة", "ملاهي مائي مكادي", "رحلات السفاري الصحراوية"][index]
                    : ["Остров Гифтун", "Остров Махмия", "Гранд аквариум Хургады", "Эль-Гуна", "Аквапарк Макади", "Пустынное сафари"][index]}
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
