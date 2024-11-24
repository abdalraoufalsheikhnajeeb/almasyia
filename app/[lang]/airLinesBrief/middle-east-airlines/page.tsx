import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const MiddleEastAirlines = async ({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) => {
    const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">
            Middle East Airlines (MEA)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/middleeastairlines.webp"
            alt="Middle East Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Middle East Airlines, also known as MEA, is the national flag
            carrier of Lebanon. Founded in 1945, MEA operates scheduled
            international flights to over 30 destinations in Europe, the Middle
            East, and Africa from its base at Beirut Rafic Hariri International
            Airport.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Established in 1945, Middle East Airlines has grown to become a
            significant player in the aviation industry, known for its reliable
            service and extensive network. MEA joined the SkyTeam alliance in
            2012, enhancing its global connectivity.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline fleet consists of modern Airbus aircraft, including the
            A320, A321, and A330. MEA focuses on maintaining a young and
            efficient fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Middle East Airlines serves a range of destinations across Europe,
            the Middle East, and Africa. Key destinations include Paris, London,
            Dubai, Cairo, and Lagos.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers various services to enhance the travel
            experience, including in-flight entertainment, gourmet meals, and
            comfortable seating. Business Class passengers enjoy additional
            perks such as lie-flat seats, premium dining, and exclusive lounge
            access.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a state-of-the-art in-flight entertainment
            system with a wide selection of movies, TV shows, music, and games.
            The airline also offers Wi-Fi on many of its flights, enabling
            passengers to stay connected.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Middle East Airlines frequent flyer program, Cedar Miles, rewards
            loyal customers with miles that can be redeemed for flights,
            upgrades, and other benefits. Members enjoy perks such as priority
            check-in, extra baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with MEA is easy through their official website,
            mobile app, and authorized travel agents. The customer service team
            is available to assist with reservations, inquiries, and special
            requests. The airline also offers convenient online check-in and
            mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            MEA is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Middle
            East Airlines website or contact their customer service at +961 1
            629 999. Follow them on social media for the latest updates and
            promotions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            General Information about Middle East Airlines
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">ME</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">MEA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">The owner</td>
                <td className="py-2">The Lebanese government</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">Beirut - Lebanon</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The main operating main hub Airport
                </td>
                <td className="py-2">Rafic Hariri International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">32 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Date of establishment</td>
                <td className="py-2">1945</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a href="https://www.mea.com.lb" className="text-blue-500">
                    https://www.mea.com.lb
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
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">
            الخطوط الجوية الشرق أوسطية (MEA)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/middleeastairlines.webp"
            alt="الخطوط الجوية الشرق أوسطية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية الشرق أوسطية، المعروفة أيضًا باسم MEA، هي الناقل
            الوطني للبنان. تأسست في عام 1945، وتقوم MEA بتشغيل رحلات دولية
            مجدولة إلى أكثر من 30 وجهة في أوروبا، الشرق الأوسط، وأفريقيا من
            مقرها في مطار رفيق الحريري الدولي في بيروت.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية الشرق أوسطية في عام 1945، ونمت لتصبح لاعبًا
            رئيسيًا في صناعة الطيران، معروفة بخدماتها الموثوقة وشبكتها الواسعة.
            انضمت MEA إلى تحالف سكاي تيم في عام 2012، مما عزز من اتصالها
            العالمي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتكون أسطول الشركة من طائرات إيرباص الحديثة، بما في ذلك A320، A321،
            وA330. تركز MEA على الحفاظ على أسطول حديث وفعال لضمان سلامة وراحة
            الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية الشرق أوسطية مجموعة من الوجهات عبر أوروبا، الشرق
            الأوسط، وأفريقيا. تشمل الوجهات الرئيسية باريس، لندن، دبي، القاهرة،
            ولاغوس.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد المريحة. يتمتع
            ركاب درجة رجال الأعمال بمزايا إضافية مثل المقاعد المسطحة، الطعام
            الفاخر، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيه حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب. توفر
            الشركة أيضًا خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب
            البقاء متصلين.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            برنامج الولاء من الخطوط الجوية الشرق أوسطية، Cedar Miles، يكافئ
            العملاء المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات،
            ومزايا أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة
            إضافي، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية الشرق أوسطية بسهولة عبر موقعها
            الرسمي، التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح
            للمساعدة في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة
            أيضًا خدمة تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية الشرق أوسطية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية الشرق أوسطية أو اتصل بخدمة العملاء على الرقم +961 1 629 999.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            معلومات عامة عن الخطوط الجوية الشرق أوسطية
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">ME</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">MEA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المالك</td>
                <td className="py-2">الحكومة اللبنانية</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">بيروت - لبنان</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار رفيق الحريري الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">32 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                <td className="py-2">1945</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a href="https://www.mea.com.lb" className="text-blue-500">
                    https://www.mea.com.lb
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
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">
            Middle East Airlines (MEA)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/middleeastairlines.webp"
            alt="Middle East Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Middle East Airlines, также известная как MEA, является национальной
            авиакомпанией Ливана. Основанная в 1945 году, MEA выполняет
            регулярные международные рейсы в более чем 30 пунктов назначения в
            Европе, на Ближнем Востоке и в Африке из своего основного хаба в
            Международном аэропорту имени Рафика Харири в Бейруте.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Основанная в 1945 году, Middle East Airlines стала значимым игроком
            в авиационной отрасли, известная своей надежностью и обширной сетью
            маршрутов. MEA присоединилась к альянсу SkyTeam в 2012 году, что
            улучшило ее глобальную связанность.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании состоит из современных самолетов Airbus, включая
            A320, A321 и A330. MEA сосредоточена на поддержании молодого и
            эффективного флота для обеспечения безопасности и комфорта
            пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Middle East Airlines обслуживает ряд направлений по всей Европе, на
            Ближнем Востоке и в Африке. Ключевые пункты назначения включают
            Париж, Лондон, Дубай, Каир и Лагос.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, изысканные
            блюда и удобные сиденья. Пассажиры бизнес-класса пользуются
            дополнительными удобствами, такими как раскладывающиеся сиденья,
            премиальное питание и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться современными развлекательными системами
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предоставляет Wi-Fi на многих своих рейсах,
            позволяя пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Middle East Airlines, Cedar Miles,
            вознаграждает лояльных клиентов милями, которые можно обменять на
            билеты, апгрейды и другие преимущества. Участники пользуются такими
            привилегиями, как приоритетная регистрация, дополнительный багаж и
            доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с MEA легко осуществляется через их официальный
            сайт, мобильное приложение и авторизованных туристических агентов.
            Команда обслуживания клиентов доступна для помощи с бронированием,
            запросами и специальными запросами. Авиакомпания также предлагает
            удобные варианты онлайн-регистрации и мобильные посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            MEA стремится к устойчивым практикам и поддержке местных сообществ.
            Авиакомпания участвует в различных инициативах КСО, включая усилия
            по сохранению окружающей среды, образовательные программы и
            благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Middle East Airlines или свяжитесь с их
            службой поддержки клиентов по телефону +961 1 629 999. Следите за
            ними в социальных сетях, чтобы получать последние обновления и
            акции.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Общая информация о Middle East Airlines
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">ME</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">MEA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Владелец</td>
                <td className="py-2">Правительство Ливана</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Бейрут - Ливан</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной хаб</td>
                <td className="py-2">
                  Международный аэропорт имени Рафика Харири
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">32 направления</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Дата основания</td>
                <td className="py-2">1945</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a href="https://www.mea.com.lb" className="text-blue-500">
                    https://www.mea.com.lb
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

export default MiddleEastAirlines;
