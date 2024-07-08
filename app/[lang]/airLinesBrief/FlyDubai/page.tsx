import Image from "next/image";
import React from "react";
import { Locale } from "../../../../i18n-config";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Flydubai</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/flyDubai.webp"
            alt="Flydubai"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            Flydubai, legally known as Dubai Aviation Corporation, is a
            government-owned low-cost airline in Dubai, United Arab Emirates.
            Established in 2008, Flydubai operates flights to over 90
            destinations across the Middle East, Africa, Asia, and Europe.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Flydubai was founded to support Dubai's commercial and tourism
            sectors by providing accessible and affordable air travel options.
            Since its inception, the airline has rapidly expanded its route
            network and fleet.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet primarily consists of Boeing 737-800 and Boeing
            737 MAX aircraft. These modern planes are equipped with advanced
            safety features and provide a comfortable travel experience.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Flydubai serves a wide range of destinations, including major cities
            and popular holiday spots in the Middle East, Africa, Asia, and
            Europe. Key destinations include Dubai, Beirut, Baku, Kathmandu,
            Tbilisi, and Zanzibar.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            Flydubai offers a variety of services to enhance the travel
            experience, including in-flight entertainment, meal options, and
            comfortable seating. Business class passengers enjoy additional
            amenities such as spacious seats, premium meals, and priority
            boarding.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a range of in-flight entertainment options,
            including movies, TV shows, music, and games. The airline also
            provides Wi-Fi on select flights, allowing passengers to stay
            connected during their journey.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Flydubai's frequent flyer program, OPEN, rewards loyal customers
            with points that can be redeemed for flights, upgrades, and other
            benefits. Members enjoy perks such as priority check-in, additional
            baggage allowance, and exclusive offers.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Flydubai is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers online check-in and a
            mobile boarding pass option.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Flydubai is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official
            Flydubai website or contact their customer service at +971 600 544
            445. Follow them on social media for the latest updates and
            promotions.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            General Information on Flydubai
          </h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">FZ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">FDB</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Owner</td>
                <td className="py-2">Government of Dubai</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The company’s headquarter
                </td>
                <td className="py-2">Dubai - United Arab Emirates</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Main Operating Airport</td>
                <td className="py-2">Dubai International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">More than 85 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Year of Operation</td>
                <td className="py-2">2009</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Website</td>
                <td className="py-2">
                  <a href="https://www.flydubai.com" className="text-blue-500">
                    www.flydubai.com
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Customer Service Number</td>
                <td className="py-2">
                  <a href="tel:+971600544445" className="text-blue-500">
                    +971600544445
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
        <div className="bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">فلاي دبي</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/flyDubai.webp"
            alt="فلاي دبي"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            فلاي دبي، المعروفة قانونيًا باسم مؤسسة دبي للطيران، هي شركة طيران
            منخفضة التكلفة مملوكة للحكومة في دبي، الإمارات العربية المتحدة.
            تأسست في عام 2008، وتقوم فلاي دبي بتشغيل رحلات إلى أكثر من 90 وجهة
            عبر الشرق الأوسط، إفريقيا، آسيا، وأوروبا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست فلاي دبي لدعم القطاعات التجارية والسياحية في دبي من خلال توفير
            خيارات سفر جوية ميسورة التكلفة. منذ إنشائها، توسعت شبكة خطوط الشركة
            وأساطيلها بسرعة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتكون أسطول الشركة بشكل أساسي من طائرات بوينغ 737-800 وبوينغ 737
            ماكس. تم تجهيز هذه الطائرات الحديثة بميزات أمان متقدمة وتوفر تجربة
            سفر مريحة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تقدم فلاي دبي مجموعة واسعة من الوجهات، بما في ذلك المدن الرئيسية
            والمواقع السياحية الشهيرة في الشرق الأوسط، إفريقيا، آسيا، وأوروبا.
            تشمل الوجهات الرئيسية دبي، بيروت، باكو، كاتماندو، تبليسي، وزنجبار.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم فلاي دبي مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في
            ذلك الترفيه على متن الطائرة، خيارات الوجبات، والمقاعد المريحة. يتمتع
            ركاب درجة رجال الأعمال بمزايا إضافية مثل المقاعد الفسيحة، الوجبات
            الفاخرة، وأولوية الصعود إلى الطائرة.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بمجموعة متنوعة من خيارات الترفيه على متن
            الطائرة، بما في ذلك الأفلام، البرامج التلفزيونية، الموسيقى،
            والألعاب. كما توفر الشركة الواي فاي على بعض الرحلات، مما يسمح للركاب
            بالبقاء متصلين أثناء رحلتهم.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            برنامج الولاء من فلاي دبي، "OPEN"، يكافئ العملاء المخلصين بالنقاط
            التي يمكن استبدالها برحلات، ترقيات، ومزايا أخرى. يتمتع الأعضاء
            بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي، وعروض حصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع فلاي دبي بسهولة عبر موقعها الرسمي، التطبيق
            المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة في
            الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة تسجيل
            الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم فلاي دبي بالممارسات المستدامة ودعم المجتمعات المحلية. تشارك
            الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك جهود
            الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لفلاي دبي
            أو اتصل بخدمة العملاء على الرقم +971 600 544 445. تابعهم على وسائل
            التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">معلومات عامة عن فلاي دبي</h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">FZ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">FDB</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المالك</td>
                <td className="py-2">حكومة دبي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">دبي - الإمارات العربية المتحدة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار دبي الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">أكثر من 85 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">سنة التشغيل</td>
                <td className="py-2">2009</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">الموقع الإلكتروني</td>
                <td className="py-2">
                  <a href="https://www.flydubai.com" className="text-blue-500">
                    www.flydubai.com
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رقم خدمة العملاء</td>
                <td className="py-2">
                  <a href="tel:+971600544445" className="text-blue-500">
                    +971600544445
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
        <div className="bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Flydubai</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/flyDubai.webp"
            alt="Flydubai"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            Flydubai, официально известная как Dubai Aviation Corporation,
            является государственной авиакомпанией с низкими тарифами в Дубае,
            Объединенные Арабские Эмираты. Основана в 2008 году, Flydubai
            выполняет рейсы более чем в 90 пунктов назначения на Ближнем
            Востоке, в Африке, Азии и Европе.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Flydubai была основана для поддержки коммерческих и туристических
            секторов Дубая предоставлением доступных и недорогих вариантов
            авиаперелетов. С момента своего создания авиакомпания быстро
            расширила свою маршрутную сеть и флот.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании в основном состоит из самолетов Boeing 737-800 и
            Boeing 737 MAX. Эти современные самолеты оснащены передовыми
            функциями безопасности и обеспечивают комфортные условия для
            путешествий.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Flydubai обслуживает широкий спектр пунктов назначения, включая
            крупные города и популярные места для отдыха на Ближнем Востоке, в
            Африке, Азии и Европе. Ключевые пункты назначения включают Дубай,
            Бейрут, Баку, Катманду, Тбилиси и Занзибар.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Flydubai предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, варианты
            питания и удобные сиденья. Пассажиры бизнес-класса пользуются
            дополнительными удобствами, такими как просторные сиденья,
            премиальные блюда и приоритетная посадка.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться различными развлекательными программами
            на борту, включая фильмы, телешоу, музыку и игры. Авиакомпания также
            предоставляет Wi-Fi на некоторых рейсах, позволяя пассажирам
            оставаться на связи во время путешествия.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Flydubai, OPEN, вознаграждает лояльных клиентов
            баллами, которые можно обменять на билеты, апгрейды и другие
            преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и эксклюзивные
            предложения.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Flydubai легко осуществляется через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна для
            помощи с бронированием, запросами и специальными запросами.
            Авиакомпания также предлагает онлайн-регистрацию и мобильные
            посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Flydubai стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Flydubai или свяжитесь с их службой
            поддержки клиентов по телефону +971 600 544 445. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Общая информация о Flydubai
          </h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">FZ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">FDB</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Владелец</td>
                <td className="py-2">Правительство Дубая</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Дубай - Объединенные Арабские Эмираты</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">Международный аэропорт Дубая</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">Более 85 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Год начала операций</td>
                <td className="py-2">2009</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Вебсайт</td>
                <td className="py-2">
                  <a href="https://www.flydubai.com" className="text-blue-500">
                    www.flydubai.com
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Номер службы поддержки</td>
                <td className="py-2">
                  <a href="tel:+971600544445" className="text-blue-500">
                    +971600544445
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
