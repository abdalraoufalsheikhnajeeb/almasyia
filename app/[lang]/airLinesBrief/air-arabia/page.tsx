import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Air Arabia</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/arabia.webp"
            alt="Air Arabia"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Air Arabia is a low-cost airline headquartered in Sharjah, United
            Arab Emirates. Founded in 2003, it operates scheduled flights to
            over 170 destinations across the Middle East, North Africa, Asia,
            and Europe.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            Established as the first low-cost carrier in the Middle East, Air
            Arabia has grown to become a major player in the regions aviation
            industry. The airline focuses on providing affordable travel options
            while maintaining high safety and service standards.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            Air Arabias fleet consists primarily of Airbus A320 aircraft, known
            for their efficiency and reliability. The airline continually
            updates and maintains its fleet to ensure passenger safety and
            comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            Air Arabia serves a wide range of destinations, including major
            cities and popular tourist spots in the Middle East, North Africa,
            Asia, and Europe. Key destinations include Cairo, Mumbai, Istanbul,
            Moscow, and Nairobi.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, meal options, and
            comfortable seating. Air Arabia also provides additional services
            such as travel insurance, hotel booking, and car rental through its
            website.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-primary mb-4">
            Passengers can enjoy a range of in-flight entertainment options,
            including movies, TV shows, music, and games. The airline also
            offers a buy-on-board menu with a selection of meals, snacks, and
            beverages.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-primary mb-4">
            Air Arabias frequent flyer program, Airewards, allows members to
            earn points with every flight and redeem them for a variety of
            rewards, including free flights, seat upgrades, and additional
            services.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-primary mb-4">
            Booking flights with Air Arabia is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers online check-in and a
            mobile boarding pass option.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-primary mb-4">
            Air Arabia is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official Air
            Arabia website or contact their customer service at +971545866066.
            Follow them on social media for the latest updates and promotions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            General Information about Air Arabia
          </h2>
          <table className="w-fit text-start text-primary">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">G9</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">ABY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">
                  Sharjah - State of United Arab Emirates
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The main operating main hub Airport
                </td>
                <td className="py-2">Sharjah International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">130 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Date of establishment</td>
                <td className="py-2">2003</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airarabia.com"
                    className="text-blue-500"
                  >
                    https://www.airarabia.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (lang === "ar") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">العربية للطيران</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/arabia.webp"
            alt="العربية للطيران"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            العربية للطيران هي شركة طيران منخفضة التكلفة مقرها في الشارقة،
            الإمارات العربية المتحدة. تأسست في عام 2003، وتشغل رحلات منتظمة إلى
            أكثر من 170 وجهة عبر الشرق الأوسط وشمال أفريقيا وآسيا وأوروبا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست كأول شركة طيران منخفضة التكلفة في الشرق الأوسط، ونمت العربية
            للطيران لتصبح لاعبًا رئيسيًا في صناعة الطيران في المنطقة. تركز
            الشركة على توفير خيارات سفر ميسورة التكلفة مع الحفاظ على معايير
            السلامة والخدمة العالية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            يتكون أسطول العربية للطيران في الأساس من طائرات إيرباص A320،
            المعروفة بكفاءتها وموثوقيتها. تقوم الشركة بتحديث وصيانة أسطولها بشكل
            مستمر لضمان سلامة وراحة الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم العربية للطيران مجموعة واسعة من الوجهات، بما في ذلك المدن
            الرئيسية وأماكن الجذب السياحي الشهيرة في الشرق الأوسط وشمال أفريقيا
            وآسيا وأوروبا. تشمل الوجهات الرئيسية القاهرة، مومباي، إسطنبول،
            موسكو، ونيروبي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، خيارات الوجبات، والمقاعد المريحة. توفر
            العربية للطيران أيضًا خدمات إضافية مثل التأمين على السفر، حجز
            الفنادق، وتأجير السيارات من خلال موقعها الإلكتروني.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة الطيران</h2>
          <p className="text-primary mb-4">
            يمكن للركاب الاستمتاع بمجموعة من خيارات الترفيه على متن الطائرة، بما
            في ذلك الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب. تقدم الشركة
            أيضًا قائمة طعام على متن الطائرة تحتوي على مجموعة من الوجبات،
            الوجبات الخفيفة، والمشروبات.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج المسافر الدائم</h2>
          <p className="text-primary mb-4">
            يتيح برنامج المسافر الدائم الخاص بالعربية للطيران، Airewards،
            للأعضاء كسب النقاط مع كل رحلة واستبدالها بمجموعة متنوعة من المكافآت،
            بما في ذلك الرحلات المجانية، ترقيات المقاعد، والخدمات الإضافية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يعد حجز الرحلات مع العربية للطيران سهلاً من خلال موقعهم الرسمي،
            التطبيق المحمول، ووكلاء السفر المعتمدين. يتوفر فريق خدمة العملاء
            لمساعدتك في الحجوزات، الاستفسارات، والطلبات الخاصة. كما توفر الشركة
            خيار تسجيل الوصول عبر الإنترنت وبطاقة الصعود المتنقلة.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            المسؤولية الاجتماعية للشركات
          </h2>
          <p className="text-primary mb-4">
            تلتزم العربية للطيران بالممارسات المستدامة ودعم المجتمعات المحلية.
            تشارك الشركة في مبادرات المسؤولية الاجتماعية للشركات المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للعربية
            للطيران أو اتصل بخدمة العملاء على +971545866066. تابعهم على وسائل
            التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            معلومات عامة عن العربية للطيران
          </h2>
          <table className="w-fit text-start text-primary">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">G9</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">ABY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">
                  الشارقة - دولة الإمارات العربية المتحدة
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار الشارقة الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">130 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                <td className="py-2">2003</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airarabia.com"
                    className="text-blue-500"
                  >
                    https://www.airarabia.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (lang === "ru") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Эйр Арабия</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/arabia.webp"
            alt="Эйр Арабия"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Эйр Арабия — бюджетная авиакомпания, штаб-квартира которой находится
            в Шардже, ОАЭ. Основанная в 2003 году, она выполняет регулярные
            рейсы более чем в 170 направлений на Ближнем Востоке, в Северной
            Африке, Азии и Европе.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Будучи первой бюджетной авиакомпанией на Ближнем Востоке, Эйр Арабия
            выросла до значимого игрока в авиационной отрасли региона.
            Авиакомпания сосредоточена на предоставлении доступных вариантов
            путешествий при сохранении высоких стандартов безопасности и
            обслуживания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Флот Эйр Арабии состоит в основном из самолетов Airbus A320,
            известных своей эффективностью и надежностью. Авиакомпания постоянно
            обновляет и поддерживает свой флот для обеспечения безопасности и
            комфорта пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-primary mb-4">
            Эйр Арабия обслуживает широкий спектр направлений, включая крупные
            города и популярные туристические места на Ближнем Востоке, в
            Северной Африке, Азии и Европе. Ключевые направления включают Каир,
            Мумбаи, Стамбул, Москву и Найроби.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает разнообразные услуги для улучшения
            впечатлений от полета, включая развлечения на борту, варианты
            питания и комфортные сиденья. Эйр Арабия также предоставляет
            дополнительные услуги, такие как страхование путешествий,
            бронирование отелей и аренда автомобилей через свой веб-сайт.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления от полета</h2>
          <p className="text-primary mb-4">
            Пассажиры могут наслаждаться разнообразными вариантами развлечений
            на борту, включая фильмы, телепередачи, музыку и игры. Авиакомпания
            также предлагает меню покупки на борту с выбором блюд, закусок и
            напитков.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-primary mb-4">
            Программа лояльности Эйр Арабии, Airewards, позволяет участникам
            зарабатывать баллы за каждый полет и обменивать их на различные
            награды, включая бесплатные полеты, улучшенные места и
            дополнительные услуги.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-primary mb-4">
            Бронирование рейсов с Эйр Арабией легко осуществляется через их
            официальный веб-сайт, мобильное приложение и авторизованных
            туристических агентов. Служба поддержки клиентов доступна для помощи
            с бронированием, запросами и специальными запросами. Авиакомпания
            также предлагает онлайн-регистрацию и возможность мобильного
            посадочного талона.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-primary mb-4">
            Эйр Арабия привержена устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный веб-сайт Эйр Арабии или свяжитесь с их службой
            поддержки клиентов по телефону +971545866066. Следите за ними в
            социальных сетях для получения последних новостей и акций.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Общая информация об Эйр Арабии
          </h2>
          <table className="w-fit text-start text-primary">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">G9</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">ABY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Шарджа, ОАЭ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной хаб</td>
                <td className="py-2">Международный аэропорт Шарджа</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">130 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Дата основания</td>
                <td className="py-2">2003</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airarabia.com"
                    className="text-blue-500"
                  >
                    https://www.airarabia.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default page;
