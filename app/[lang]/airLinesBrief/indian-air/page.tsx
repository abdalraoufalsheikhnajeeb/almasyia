import Image from "next/image";
import React from "react";
import { Locale } from "../../../../i18n-config";

const AirIndia = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Air India</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/indianair.webp"
            alt="Air India"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Air India is the flag carrier airline of India, headquartered in New
            Delhi. Established in 1932, it operates a fleet of Airbus and Boeing
            aircraft serving domestic and international destinations across
            Asia, Europe, North America, and Australia.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Air India was founded by J. R. D. Tata in 1932 as Tata Airlines. It
            became Air India in 1946 and was nationalized in 1953. The airline
            has played a key role in connecting India to the world and has
            undergone several transformations over the decades.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A321, Boeing 777, and
            Boeing 787 Dreamliner. Air India focuses on maintaining a reliable
            and efficient fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Air India serves a wide range of destinations across Asia, Europe,
            North America, and Australia. Key destinations include Delhi,
            Mumbai, London, New York, Sydney, and Tokyo.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, gourmet meals, and
            comfortable seating. First and Business Class passengers enjoy
            additional perks such as lie-flat seats, premium dining, and access
            to exclusive lounges.
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
            Air India's frequent flyer program, Flying Returns, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Air India is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Air India is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Air
            India website or contact their customer service at +91 124 2641407.
            Follow them on social media for the latest updates and promotions.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            General Information about Air India
          </h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Code "IATA"</td>
                <td className="py-2">AI</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">AIC</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">New Delhi</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Main Operating Airport</td>
                <td className="py-2">Indira Gandhi International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">More than 94</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Fleets Size</td>
                <td className="py-2">118 Aircraft</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Date of Establishment</td>
                <td className="py-2">1932</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airindia.com"
                    className="text-blue-500"
                  >
                    www.airindia.com
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
            الخطوط الجوية الهندية
          </h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/indianair.webp"
            alt="الخطوط الجوية الهندية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية الهندية هي الناقل الوطني للهند، ويقع مقرها الرئيسي في
            نيودلهي. تأسست في عام 1932، وتدير أسطولاً من طائرات إيرباص وبوينغ
            التي تخدم الوجهات المحلية والدولية عبر آسيا، أوروبا، أمريكا
            الشمالية، وأستراليا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية الهندية من قبل ج. ر. د. تاتا في عام 1932 تحت اسم
            طيران تاتا. أصبحت الخطوط الجوية الهندية في عام 1946 وتم تأميمها في
            عام 1953. لعبت الشركة دوراً رئيسياً في ربط الهند بالعالم وخضعت
            للعديد من التحولات على مر العقود.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة مزيجاً من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص
            A320، إيرباص A321، بوينغ 777، وبوينغ 787 دريملاينر. تركز الخطوط
            الجوية الهندية على الحفاظ على أسطول موثوق وفعال لضمان سلامة وراحة
            الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية الهندية مجموعة واسعة من الوجهات عبر آسيا، أوروبا،
            أمريكا الشمالية، وأستراليا. تشمل الوجهات الرئيسية دلهي، مومباي،
            لندن، نيويورك، سيدني، وطوكيو.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد المريحة. يتمتع
            ركاب الدرجة الأولى ودرجة رجال الأعمال بمزايا إضافية مثل المقاعد
            المسطحة، الطعام الفاخر، والوصول إلى الصالات الحصرية.
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
            برنامج الولاء من الخطوط الجوية الهندية، "Flying Returns"، يكافئ
            العملاء المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات،
            ومزايا أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة
            إضافي، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية الهندية بسهولة عبر موقعها الرسمي،
            التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة
            في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة
            تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية الهندية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية الهندية أو اتصل بخدمة العملاء على الرقم +91 124 2641407.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            معلومات عامة عن الخطوط الجوية الهندية
          </h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">AI</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">AIC</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">نيودلهي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار أنديرا غاندي الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">أكثر من 94</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">حجم الأسطول</td>
                <td className="py-2">118 طائرة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                <td className="py-2">1932</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">الموقع الإلكتروني</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airindia.com"
                    className="text-blue-500"
                  >
                    www.airindia.com
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
          <h1 className="text-4xl text-center font-bold">Air India</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/indianair.webp"
            alt="Air India"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Air India является национальной авиакомпанией Индии, со
            штаб-квартирой в Нью-Дели. Основана в 1932 году, она управляет
            флотом из самолетов Airbus и Boeing, обслуживающих внутренние и
            международные направления по всей Азии, Европе, Северной Америке и
            Австралии.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Air India была основана Дж. Р. Д. Тата в 1932 году как Tata
            Airlines. В 1946 году она стала Air India и была национализирована в
            1953 году. Авиакомпания сыграла ключевую роль в соединении Индии с
            миром и за прошедшие десятилетия претерпела несколько трансформаций.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает в себя смесь современных самолетов Airbus
            и Boeing, таких как Airbus A320, Airbus A321, Boeing 777 и Boeing
            787 Dreamliner. Air India сосредоточена на поддержании надежного и
            эффективного флота для обеспечения безопасности и комфорта
            пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Air India обслуживает широкий спектр направлений по всей Азии,
            Европе, Северной Америке и Австралии. Ключевые пункты назначения
            включают Дели, Мумбаи, Лондон, Нью-Йорк, Сидней и Токио.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, изысканные
            блюда и удобные сиденья. Пассажиры первого и бизнес-класса
            пользуются дополнительными удобствами, такими как раскладывающиеся
            сиденья, премиальное питание и доступ в эксклюзивные залы ожидания.
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
            Программа лояльности Air India, Flying Returns, вознаграждает
            лояльных клиентов милями, которые можно обменять на билеты, апгрейды
            и другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Air India легко осуществляется через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна для
            помощи с бронированием, запросами и специальными запросами.
            Авиакомпания также предлагает удобные варианты онлайн-регистрации и
            мобильные посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Air India стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Air India или свяжитесь с их службой
            поддержки клиентов по телефону +91 124 2641407. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Общая информация о Air India
          </h2>
          <table className="w-fit text-left text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">AI</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">AIC</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Нью-Дели</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">
                  Международный аэропорт имени Индиры Ганди
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">Более 94</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Размер флота</td>
                <td className="py-2">118 самолетов</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Дата основания</td>
                <td className="py-2">1932</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Вебсайт</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airindia.com"
                    className="text-blue-500"
                  >
                    www.airindia.com
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

export default AirIndia;
