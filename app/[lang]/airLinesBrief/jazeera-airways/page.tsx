import Image from "next/image";
import type { Metadata } from "next";

import { Locale } from "../../../../i18n-config";
import { buildPageMetadata } from "../../seo";
import { AIRLINES_SEO } from "../../seo-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/airLinesBrief/jazeera-airways",
    title: AIRLINES_SEO["jazeera-airways"].title,
    description: AIRLINES_SEO["jazeera-airways"].description,
    imageUrl: "/images/jazeera.webp",
  });
}

const JazeeraAirways = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const lang = (await params).lang as Locale;

  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Jazeera Airways</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jazeera.webp"
            alt="Jazeera Airways"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Jazeera Airways is a Kuwaiti low-cost airline headquartered in
            Kuwait City, with its main hub at Kuwait International Airport.
            Founded in 2004, it was the first non-government-owned airline in
            the Middle East, operating scheduled passenger services to
            destinations across the region, the Indian subcontinent, Europe,
            and Africa.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            Established in 2004 by a group of Kuwaiti investors, Jazeera Airways
            launched its first commercial flight in 2005. As a pioneer of
            private aviation in the Middle East, it has continuously expanded
            its network and built a reputation for reliable, affordable air
            travel and quality service.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            Jazeera Airways operates a modern fleet of Airbus A320 and A320neo
            aircraft, optimized for fuel efficiency and passenger comfort. The
            airline regularly invests in fleet renewal to maintain a
            young, technologically advanced operation.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            Jazeera Airways serves over 60 destinations from Kuwait,
            including cities across the Gulf, the wider Middle East, the Indian
            subcontinent, Egypt, Türkiye, the Caucasus, and Europe — with
            popular routes to Dubai, Cairo, Istanbul, Mumbai, and London
            Gatwick.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers an unbundled fare model that lets passengers
            customize their journey with options such as extra baggage, seat
            selection, and onboard meals. A premium &ldquo;Business&rdquo; cabin is
            available on most routes, featuring wider seats and enhanced
            services.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-primary mb-4">
            Passengers enjoy comfortable cabins with leather seating, a
            curated selection of meals and beverages available for purchase,
            and friendly service from a multilingual crew. Business class
            travelers receive priority boarding and complimentary dining.
          </p>
          <h2 className="text-2xl font-bold mb-2">Booking and Customer Service</h2>
          <p className="text-primary mb-4">
            Flights can be booked easily via the official Jazeera Airways
            website, mobile app, or through authorized agents like Alnujoom
            Almasiya. The customer support team is available to assist with
            bookings, changes, and special requests.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official
            Jazeera Airways website or contact us at Alnujoom Almasiya for
            assistance and the best fares.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">J9</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">JZR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Company</td>
                  <td className="py-2">Jazeera Airways K.S.C.P.</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Kuwait City, Kuwait</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Hub</td>
                  <td className="py-2">Kuwait International Airport</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of operation</td>
                  <td className="py-2">2004</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Fleet</td>
                  <td className="py-2">Airbus A320 / A320neo</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.jazeeraairways.com"
                      className="text-blue-500"
                    >
                      https://www.jazeeraairways.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (lang === "ar") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">طيران الجزيرة</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jazeera.webp"
            alt="طيران الجزيرة"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            طيران الجزيرة هي شركة طيران اقتصادية كويتية مقرها الرئيسي في مدينة
            الكويت، ومركزها الرئيسي مطار الكويت الدولي. تأسست عام 2004، وكانت
            أول شركة طيران غير حكومية في منطقة الشرق الأوسط، وتقدم رحلات
            منتظمة إلى وجهات عبر المنطقة وشبه القارة الهندية وأوروبا
            وأفريقيا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست طيران الجزيرة عام 2004 على يد مجموعة من المستثمرين
            الكويتيين، وانطلقت أولى رحلاتها التجارية في عام 2005. وبوصفها
            رائدة الطيران الخاص في الشرق الأوسط، وسّعت شبكتها باستمرار وبنت
            سمعتها على السفر الجوي الموثوق والميسور بجودة عالية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            تشغّل طيران الجزيرة أسطولاً حديثاً من طائرات إيرباص A320
            وA320neo، مُحسّنة لكفاءة الوقود وراحة الركاب. وتستثمر الشركة
            بشكل مستمر في تجديد الأسطول للحفاظ على عمليات حديثة ومتطورة
            تقنياً.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم طيران الجزيرة أكثر من 60 وجهة انطلاقاً من الكويت، تشمل مدناً
            في دول الخليج والشرق الأوسط وشبه القارة الهندية ومصر وتركيا
            ومنطقة القوقاز وأوروبا، مع رحلات شهيرة إلى دبي والقاهرة وإسطنبول
            ومومباي ولندن غاتويك.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة نموذج تذاكر مرن يتيح للركاب تخصيص رحلتهم باختيارات
            مثل أمتعة إضافية، اختيار المقاعد، والوجبات على متن الطائرة. كما
            تتوفر درجة &laquo;Business&raquo; المميزة على معظم الرحلات بمقاعد أوسع
            وخدمات معززة.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر على متن الطائرة</h2>
          <p className="text-primary mb-4">
            يستمتع الركاب بمقصورات مريحة بمقاعد جلدية، ومجموعة منتقاة من
            الوجبات والمشروبات المتاحة للشراء، وخدمة ودودة من طاقم متعدد
            اللغات. ويحظى ركاب درجة رجال الأعمال بأولوية الصعود ووجبات
            مجانية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يمكن حجز الرحلات بسهولة عبر الموقع الرسمي لطيران الجزيرة، أو
            تطبيق الهاتف، أو من خلال الوكلاء المعتمدين مثل النجوم الماسية.
            ويتوفر فريق خدمة العملاء للمساعدة في الحجوزات والتعديلات والطلبات
            الخاصة.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لطيران
            الجزيرة أو تواصل معنا في النجوم الماسية للحصول على المساعدة
            وأفضل الأسعار.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">معلومات عن شركة الطيران</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">J9</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكاو</td>
                  <td className="py-2">JZR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشركة الرئيسية</td>
                  <td className="py-2">طيران الجزيرة ش.م.ك.ع</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">مدينة الكويت، الكويت</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المركز الرئيسي</td>
                  <td className="py-2">مطار الكويت الدولي</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التشغيل</td>
                  <td className="py-2">2004</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الأسطول</td>
                  <td className="py-2">إيرباص A320 / A320neo</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.jazeeraairways.com"
                      className="text-blue-500"
                    >
                      https://www.jazeeraairways.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (lang === "ru") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Jazeera Airways</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jazeera.webp"
            alt="Jazeera Airways"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Jazeera Airways — кувейтская бюджетная авиакомпания со штаб-квартирой
            в Эль-Кувейте, основной хаб расположен в Международном аэропорту
            Кувейта. Основана в 2004 году и стала первой негосударственной
            авиакомпанией на Ближнем Востоке, выполняя регулярные пассажирские
            рейсы в направления по региону, Индийскому субконтиненту, Европе и
            Африке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Основанная в 2004 году группой кувейтских инвесторов, Jazeera Airways
            выполнила свой первый коммерческий рейс в 2005 году. Как пионер
            частной авиации на Ближнем Востоке, компания постоянно расширяет
            свою сеть и зарекомендовала себя как надёжный и доступный
            перевозчик с качественным сервисом.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Jazeera Airways эксплуатирует современный флот самолётов Airbus
            A320 и A320neo, оптимизированных для топливной эффективности и
            комфорта пассажиров. Компания регулярно обновляет флот, поддерживая
            молодой и технологичный парк.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-primary mb-4">
            Jazeera Airways обслуживает более 60 направлений из Кувейта,
            включая города в странах Персидского залива, Ближнем Востоке,
            Индийском субконтиненте, Египте, Турции, на Кавказе и в Европе — с
            популярными маршрутами в Дубай, Каир, Стамбул, Мумбаи и Лондон
            (Гатвик).
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает гибкую модель тарифов, позволяющую
            пассажирам настраивать поездку с дополнительными опциями: багаж,
            выбор места, бортовое питание. Премиальный класс &laquo;Business&raquo; доступен
            на большинстве маршрутов и предлагает более широкие кресла и
            расширенный сервис.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления от полёта</h2>
          <p className="text-primary mb-4">
            Пассажиры наслаждаются комфортабельными салонами с кожаными
            креслами, разнообразным выбором блюд и напитков за дополнительную
            плату, а также дружелюбным обслуживанием многоязычного экипажа.
            Пассажиры бизнес-класса получают приоритетную посадку и бесплатное
            питание.
          </p>
          <h2 className="text-2xl font-bold mb-2">Бронирование и обслуживание клиентов</h2>
          <p className="text-primary mb-4">
            Рейсы можно легко забронировать через официальный сайт Jazeera
            Airways, мобильное приложение или через авторизованных агентов,
            таких как Alnujoom Almasiya. Служба поддержки клиентов готова
            помочь с бронированиями, изменениями и специальными запросами.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Jazeera Airways или свяжитесь с нами в
            Alnujoom Almasiya для получения помощи и лучших цен.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">Информация об авиакомпании</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">J9</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">JZR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основная компания</td>
                  <td className="py-2">Jazeera Airways K.S.C.P.</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                  <td className="py-2">Эль-Кувейт, Кувейт</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основной хаб</td>
                  <td className="py-2">Международный аэропорт Кувейта</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">2004</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Флот</td>
                  <td className="py-2">Airbus A320 / A320neo</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.jazeeraairways.com"
                      className="text-blue-500"
                    >
                      https://www.jazeeraairways.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default JazeeraAirways;
