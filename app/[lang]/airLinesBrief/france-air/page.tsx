import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const AirFrance = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang == "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Air France</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/fanceair.png"
            alt="Air France"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Air France is the national airline of France, headquartered in
            Tremblay-en-France. Established in 1933, it operates a fleet of
            Airbus and Boeing aircraft serving domestic and international
            destinations across the world.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Air France was founded in 1933 from a merger of several smaller
            airlines. Over the decades, it has grown to become one of the
            world's leading airlines, known for its commitment to safety,
            comfort, and service quality. Air France is a founding member of the
            SkyTeam global airline alliance.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A350, Boeing 777, and
            Boeing 787 Dreamliner. Air France maintains a young and efficient
            fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Air France serves a wide range of destinations across Europe, Asia,
            Africa, the Americas, and Oceania. Key destinations include Paris,
            New York, Tokyo, Los Angeles, and Johannesburg.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, gourmet meals, and
            comfortable seating. Business and First Class passengers enjoy
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
            Air France's frequent flyer program, Flying Blue, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Air France is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Air France is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Air
            France website or contact their customer service at +33 9 69 39 36
            54. Follow them on social media for the latest updates and
            promotions.
          </p>
          <h2 className="text-2xl font-bold mb-4">General Information</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">AF</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">AFR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">Paris France</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The main operating airport
                </td>
                <td className="py-2">
                  Charles de Gaulle International Airport
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">More than 200 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Fleet size</td>
                <td className="py-2">225 aircrafts</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Date of establishment</td>
                <td className="py-2">1933</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airfrance.com"
                    className="text-blue-500"
                  >
                    https://www.airfrance.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (lang == "ar") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">
            الخطوط الجوية الفرنسية
          </h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/fanceair.png"
            alt="الخطوط الجوية الفرنسية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية الفرنسية هي الناقل الوطني لفرنسا، ويقع مقرها الرئيسي
            في ترمبلاي أون فرانس. تأسست في عام 1933، وتدير أسطولاً من طائرات
            إيرباص وبوينغ التي تخدم الوجهات المحلية والدولية حول العالم.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية الفرنسية في عام 1933 نتيجة اندماج عدة شركات
            طيران صغيرة. على مر العقود، نمت لتصبح واحدة من شركات الطيران الرائدة
            في العالم، معروفة بالتزامها بالسلامة والراحة وجودة الخدمة. الخطوط
            الجوية الفرنسية هي عضو مؤسس في تحالف سكاي تيم العالمي للطيران.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة مزيجاً من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص
            A320، إيرباص A350، بوينغ 777، وبوينغ 787 دريملاينر. تحافظ الخطوط
            الجوية الفرنسية على أسطول حديث وفعال لضمان سلامة وراحة الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية الفرنسية مجموعة واسعة من الوجهات عبر أوروبا،
            آسيا، أفريقيا، الأمريكتين، وأوقيانوسيا. تشمل الوجهات الرئيسية باريس،
            نيويورك، طوكيو، لوس أنجلوس، وجوهانسبرغ.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد المريحة. يتمتع
            ركاب درجة رجال الأعمال والدرجة الأولى بمزايا إضافية مثل المقاعد
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
            برنامج الولاء من الخطوط الجوية الفرنسية، "Flying Blue"، يكافئ
            العملاء المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات،
            ومزايا أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة
            إضافي، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية الفرنسية بسهولة عبر موقعها الرسمي،
            التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة
            في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة
            تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية الفرنسية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية الفرنسية أو اتصل بخدمة العملاء على الرقم +33 9 69 39 36 54.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">معلومات عامة</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">AF</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">AFR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">باريس، فرنسا</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار شارل ديغول الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">أكثر من 200 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">حجم الأسطول</td>
                <td className="py-2">225 طائرة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                <td className="py-2">1933</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airfrance.com"
                    className="text-blue-500"
                  >
                    https://www.airfrance.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (lang == "ru") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Air France</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/fanceair.png"
            alt="Air France"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Air France является национальной авиакомпанией Франции, со
            штаб-квартирой в Трамбле-ан-Франс. Основана в 1933 году, она
            управляет флотом из самолетов Airbus и Boeing, обслуживающих
            внутренние и международные направления по всему миру.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Air France была основана в 1933 году в результате слияния нескольких
            небольших авиакомпаний. На протяжении десятилетий она выросла и
            стала одной из ведущих авиакомпаний в мире, известной своим
            стремлением к безопасности, комфорту и качеству обслуживания. Air
            France является одним из основателей глобального авиационного
            альянса SkyTeam.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает в себя смесь современных самолетов Airbus
            и Boeing, таких как Airbus A320, Airbus A350, Boeing 777 и Boeing
            787 Dreamliner. Air France поддерживает молодой и эффективный флот
            для обеспечения безопасности и комфорта пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Air France обслуживает широкий спектр направлений по всей Европе,
            Азии, Африке, Америке и Океании. Ключевые пункты назначения включают
            Париж, Нью-Йорк, Токио, Лос-Анджелес и Йоханнесбург.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, изысканные
            блюда и удобные сиденья. Пассажиры бизнес-класса и первого класса
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
            Программа лояльности Air France, Flying Blue, вознаграждает лояльных
            клиентов милями, которые можно обменять на билеты, апгрейды и другие
            преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Air France легко осуществляется через их
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
            Air France стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Air France или свяжитесь с их службой
            поддержки клиентов по телефону +33 9 69 39 36 54. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>
          <h2 className="text-2xl font-bold mb-4">Общая информация</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">AF</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">AFR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Париж, Франция</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">Международный аэропорт Шарль де Голль</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">Более 200 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Размер флота</td>
                <td className="py-2">225 самолетов</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Дата основания</td>
                <td className="py-2">1933</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.airfrance.com"
                    className="text-blue-500"
                  >
                    https://www.airfrance.com
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

export default AirFrance;
