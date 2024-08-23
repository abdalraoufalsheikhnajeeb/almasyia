import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const Emirates = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Emirates</h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/emirates.webp"
            alt="Emirates"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Emirates is a state-owned airline based in Dubai, United Arab
            Emirates. Founded in 1985, it operates over 3,600 flights per week
            to more than 150 destinations in 80 countries across six continents.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Established in 1985, Emirates has grown to become one of the world's
            largest and most prestigious airlines, renowned for its commitment
            to luxury and service excellence. The airline is a subsidiary of The
            Emirates Group, owned by the government of Dubai.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A380 and Boeing 777. Emirates is known
            for maintaining one of the youngest and most technologically
            advanced fleets in the industry.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Emirates serves an extensive network of destinations, covering major
            cities and popular tourist spots across the Middle East, Africa,
            Europe, Asia, the Americas, and Oceania. Key destinations include
            Dubai, London, New York, Sydney, and Tokyo.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to ensure a high-quality
            travel experience, including award-winning in-flight entertainment,
            gourmet meals, and comfortable seating. First and Business Class
            passengers enjoy additional perks such as lie-flat seats, premium
            dining, and access to exclusive lounges.
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
            Emirates' frequent flyer program, Skywards, rewards loyal customers
            with miles that can be redeemed for flights, upgrades, and other
            benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Emirates is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Emirates is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official
            Emirates website or contact their customer service at +971 600
            555555. Follow them on social media for the latest updates and
            promotions.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">EK</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">UAE</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Company</td>
                  <td className="py-2">Emirates</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Dubai, United Arab Emirates</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">157 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of operation</td>
                  <td className="py-2">1985</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Slogan</td>
                  <td className="py-2">"Fly Better"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Alliances</td>
                  <td className="py-2">No alliance</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Customer Service Number
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971600555555"
                      className="text-blue-500"
                    >
                      +971 600 555 555
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.emirates.com"
                      className="text-blue-500"
                    >
                      https://www.emirates.com
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
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">طيران الإمارات</h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/emirates.webp"
            alt="طيران الإمارات"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            طيران الإمارات هي شركة طيران مملوكة للدولة ومقرها في دبي، الإمارات
            العربية المتحدة. تأسست في عام 1985، وتقوم بتشغيل أكثر من 3600 رحلة
            أسبوعياً إلى أكثر من 150 وجهة في 80 دولة عبر ست قارات.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست طيران الإمارات في عام 1985 ونمت لتصبح واحدة من أكبر وأشهر
            شركات الطيران في العالم، معروفة بالتزامها بالرفاهية والتميز في
            الخدمة. طيران الإمارات هي شركة تابعة لمجموعة الإمارات، المملوكة
            لحكومة دبي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتكون أسطول الشركة من مزيج من طائرات إيرباص وبوينغ الحديثة، مثل
            إيرباص A380 وبوينغ 777. تشتهر طيران الإمارات بالحفاظ على أحد أحدث
            وأكثر الأساطيل تطوراً من الناحية التكنولوجية في الصناعة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم طيران الإمارات شبكة واسعة من الوجهات، تشمل المدن الرئيسية
            والمواقع السياحية الشهيرة عبر الشرق الأوسط وأفريقيا وأوروبا وآسيا
            والأمريكيتين وأوقيانوسيا. تشمل الوجهات الرئيسية دبي ولندن ونيويورك
            وسيدني وطوكيو.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة،
            بما في ذلك الترفيه على متن الطائرة الحائز على جوائز، والوجبات
            الفاخرة، والمقاعد المريحة. يستمتع ركاب الدرجة الأولى ورجال الأعمال
            بمزايا إضافية مثل المقاعد التي تتحول إلى سرير وتناول الطعام الفاخر
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            تجربة السفر على متن الطائرة
          </h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيهي حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام والبرامج التلفزيونية والموسيقى والألعاب. تقدم
            الشركة أيضاً خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب
            البقاء على اتصال.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج المسافر الدائم</h2>
          <p className="text-gray-700 mb-4">
            يكافئ برنامج المسافر الدائم لطيران الإمارات، سكاي واردز، العملاء
            المخلصين بأميال يمكن استبدالها برحلات جوية وترقيات وغيرها من
            الفوائد. يتمتع الأعضاء بمزايا مثل أولوية التسجيل، وسعة أمتعة إضافية،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات الجوية مع طيران الإمارات بسهولة من خلال موقعها
            الرسمي على الإنترنت وتطبيق الهاتف ووكلاء السفر المعتمدين. تتوفر فرق
            خدمة العملاء للمساعدة في الحجوزات والاستفسارات والطلبات الخاصة. تقدم
            الشركة أيضًا خيارات تسجيل الوصول عبر الإنترنت وتصاريح الصعود
            المتنقلة.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            المسؤولية الاجتماعية للشركات
          </h2>
          <p className="text-gray-700 mb-4">
            تلتزم طيران الإمارات بالممارسات المستدامة ودعم المجتمعات المحلية.
            تشارك الشركة في مختلف المبادرات الخاصة بالمسؤولية الاجتماعية
            للشركات، بما في ذلك جهود الحفاظ على البيئة وبرامج التعليم والشراكات
            الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لطيران
            الإمارات أو اتصل بخدمة العملاء على الرقم +971 600 555555. تابعهم على
            وسائل التواصل الاجتماعي للحصول على آخر التحديثات والعروض الترويجية.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">معلومات عن شركة الطيران</h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">EK</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكاو</td>
                  <td className="py-2">UAE</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشركة الرئيسية</td>
                  <td className="py-2">طيران الإمارات</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">دبي، الإمارات العربية المتحدة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">157 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التشغيل</td>
                  <td className="py-2">1985</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشعار</td>
                  <td className="py-2">"سافر أفضل"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">التحالفات</td>
                  <td className="py-2">بدون تحالف</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رقم خدمة العملاء</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971600555555"
                      className="text-blue-500"
                    >
                      +971 600 555 555
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.emirates.com"
                      className="text-blue-500"
                    >
                      https://www.emirates.com
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
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Emirates</h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/emirates.webp"
            alt="Emirates"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Emirates — государственная авиакомпания, базирующаяся в Дубае,
            Объединенные Арабские Эмираты. Основанная в 1985 году, она выполняет
            более 3600 рейсов в неделю в более чем 150 направлений в 80 странах
            на шести континентах.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Основанная в 1985 году, Emirates выросла до одной из крупнейших и
            престижных авиакомпаний в мире, известной своим стремлением к
            роскоши и превосходному обслуживанию. Авиакомпания является дочерней
            компанией The Emirates Group, принадлежащей правительству Дубая.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает в себя современные самолеты Airbus и
            Boeing, такие как Airbus A380 и Boeing 777. Emirates известна тем,
            что поддерживает один из самых молодых и технологически продвинутых
            флотов в отрасли.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-gray-700 mb-4">
            Emirates обслуживает обширную сеть направлений, охватывающих крупные
            города и популярные туристические места на Ближнем Востоке, в
            Африке, Европе, Азии, Америке и Океании. Ключевые направления
            включают Дубай, Лондон, Нью-Йорк, Сидней и Токио.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает разнообразные услуги для обеспечения
            высокого качества путешествий, включая отмеченные наградами
            развлекательные программы на борту, изысканные блюда и комфортные
            сиденья. Пассажиры первого и бизнес-класса пользуются
            дополнительными преимуществами, такими как кресла-кровати,
            премиальное питание и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления от полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться современным развлекательным комплексом
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предлагает Wi-Fi на многих своих рейсах, что
            позволяет пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Программа для часто летающих пассажиров
          </h2>
          <p className="text-gray-700 mb-4">
            Программа для часто летающих пассажиров Emirates, Skywards,
            вознаграждает лояльных клиентов милями, которые можно обменять на
            полеты, апгрейды и другие преимущества. Члены программы пользуются
            такими привилегиями, как приоритетная регистрация, дополнительная
            норма багажа и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Забронировать рейсы Emirates можно легко через их официальный
            веб-сайт, мобильное приложение и авторизованных туристических
            агентов. Команда обслуживания клиентов доступна для помощи с
            бронированиями, запросами и специальными просьбами. Авиакомпания
            также предлагает удобные варианты онлайн-регистрации и мобильные
            посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Emirates привержена устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный веб-сайт Emirates или свяжитесь с их службой
            поддержки клиентов по телефону +971 600 555555. Следите за ними в
            социальных сетях для получения последних новостей и акций.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Информация об авиакомпании
            </h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">EK</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">UAE</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основная компания</td>
                  <td className="py-2">Emirates</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Дубай, Объединенные Арабские Эмираты</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">157 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">1985</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Слоган</td>
                  <td className="py-2">"Летайте лучше"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Альянсы</td>
                  <td className="py-2">Нет альянсов</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Номер службы поддержки клиентов
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971600555555"
                      className="text-blue-500"
                    >
                      +971 600 555 555
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.emirates.com"
                      className="text-blue-500"
                    >
                      https://www.emirates.com
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

export default Emirates;
