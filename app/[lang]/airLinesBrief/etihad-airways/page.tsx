import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const EtihadAirways = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24 pt-24">
          <h1 className="text-4xl text-center font-bold">Etihad Airways</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/etihadairways.webp"
            alt="Etihad Airways"
            className="w-96 mb-5 self-center "
          />
          <p className="text-gray-700 mb-4">
            Etihad Airways is the national airline of the United Arab Emirates,
            headquartered in Abu Dhabi. Founded in 2003, it operates over 1,000
            flights per week to more than 120 destinations in the Middle East,
            Africa, Europe, Asia, Australia, and North America.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Established in 2003 by Royal (Emiri) Decree, Etihad Airways has
            rapidly grown to become one of the world's leading airlines, known
            for its commitment to luxury and service quality. The airline has
            received numerous awards for its exceptional service.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A380, Boeing 787
            Dreamliner, and Boeing 777. Etihad maintains a young and efficient
            fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Etihad Airways serves an extensive network of destinations, covering
            major cities and popular tourist spots across the Middle East,
            Africa, Europe, Asia, Australia, and North America. Key destinations
            include Abu Dhabi, London, New York, Sydney, and Mumbai.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to ensure a high-quality
            travel experience, including in-flight entertainment, gourmet meals,
            and comfortable seating. First and Business Class passengers enjoy
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
            Etihad Airways' frequent flyer program, Etihad Guest, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Etihad Airways is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Etihad Airways is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Etihad
            Airways website or contact their customer service at +971 600 555
            666. Follow them on social media for the latest updates and
            promotions.
          </p>
          <h2 className="text-2xl font-bold mb-4">General Information</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">EY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">ETD</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">The owner</td>
                <td className="py-2">Abu Dhabi Government</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">Abu Dhabi - The United Arab Emirates</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The Main Operating Airport
                </td>
                <td className="py-2">Abu Dhabi International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">110 destinations</td>
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
                    href="https://www.etihad.com"
                    className="text-blue-500"
                  >
                    https://www.etihad.com
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
          <h1 className="text-4xl text-center font-bold">طيران الاتحاد</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/etihadairways.webp"
            alt="طيران الاتحاد"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            طيران الاتحاد هو الناقل الوطني لدولة الإمارات العربية المتحدة، مقره
            الرئيسي في أبوظبي. تأسست في عام 2003، وتقوم بتشغيل أكثر من 1000 رحلة
            أسبوعيًا إلى أكثر من 120 وجهة في الشرق الأوسط، إفريقيا، أوروبا،
            آسيا، أستراليا، وأمريكا الشمالية.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست طيران الاتحاد في عام 2003 بموجب مرسوم ملكي (أميري)، ونمت بسرعة
            لتصبح واحدة من شركات الطيران الرائدة في العالم، معروفة بالتزامها
            بالفخامة وجودة الخدمة. حصلت الشركة على العديد من الجوائز لخدمتها
            الاستثنائية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة مجموعة متنوعة من طائرات إيرباص وبوينغ الحديثة، مثل
            إيرباص A320، إيرباص A380، بوينغ 787 دريملاينر، وبوينغ 777. تحافظ
            الاتحاد على أسطول حديث وفعال لضمان سلامة وراحة الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الاتحاد للطيران شبكة واسعة من الوجهات، تغطي المدن الكبرى
            والمعالم السياحية الشهيرة في الشرق الأوسط، إفريقيا، أوروبا، آسيا،
            أستراليا، وأمريكا الشمالية. تشمل الوجهات الرئيسية أبوظبي، لندن،
            نيويورك، سيدني، ومومباي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة،
            بما في ذلك الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد
            المريحة. يتمتع ركاب الدرجة الأولى ودرجة رجال الأعمال بمزايا إضافية
            مثل المقاعد المسطحة، الطعام الفاخر، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيه حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب. كما توفر
            الشركة الواي فاي على العديد من رحلاتها، مما يسمح للركاب بالبقاء
            متصلين.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            برنامج الولاء من الاتحاد للطيران، "ضيف الاتحاد"، يكافئ العملاء
            المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات، ومزايا
            أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع طيران الاتحاد بسهولة عبر موقعها الرسمي، التطبيق
            المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة في
            الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة تسجيل
            الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الاتحاد للطيران بالممارسات المستدامة ودعم المجتمعات المحلية.
            تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك
            جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لطيران
            الاتحاد أو اتصل بخدمة العملاء على الرقم +971 600 555 666. تابعهم على
            وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">معلومات عامة</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">EY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">ETD</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المالك</td>
                <td className="py-2">حكومة أبوظبي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">أبوظبي - الإمارات العربية المتحدة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار أبوظبي الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">110 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                <td className="py-2">2003</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.etihad.com"
                    className="text-blue-500"
                  >
                    https://www.etihad.com
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
          <h1 className="text-4xl text-center font-bold">Etihad Airways</h1>
          <Image
            width={420}
            height={300}
            quality={50}
            src="/images/etihadairways.webp"
            alt="Etihad Airways"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Etihad Airways является национальной авиакомпанией Объединенных
            Арабских Эмиратов, со штаб-квартирой в Абу-Даби. Основана в 2003
            году, она выполняет более 1000 рейсов в неделю в более чем 120
            пунктов назначения на Ближнем Востоке, в Африке, Европе, Азии,
            Австралии и Северной Америке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Основанная в 2003 году королевским (Эмирским) указом, Etihad Airways
            быстро выросла и стала одной из ведущих авиакомпаний в мире,
            известной своим стремлением к роскоши и качеству обслуживания.
            Авиакомпания получила многочисленные награды за свое исключительное
            обслуживание.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает в себя смесь современных самолетов Airbus
            и Boeing, таких как Airbus A320, Airbus A380, Boeing 787 Dreamliner
            и Boeing 777. Etihad поддерживает молодой и эффективный флот для
            обеспечения безопасности и комфорта пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Etihad Airways обслуживает обширную сеть пунктов назначения,
            охватывая крупные города и популярные туристические направления на
            Ближнем Востоке, в Африке, Европе, Азии, Австралии и Северной
            Америке. Ключевые пункты назначения включают Абу-Даби, Лондон,
            Нью-Йорк, Сидней и Мумбаи.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для обеспечения высокого
            качества путешествия, включая развлекательные программы на борту,
            изысканные блюда и удобные сиденья. Пассажиры первого и
            бизнес-класса пользуются дополнительными привилегиями, такими как
            раскладывающиеся сиденья, премиальное питание и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться современными развлекательными системами
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предлагает Wi-Fi на многих своих рейсах, позволяя
            пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Etihad Airways, Etihad Guest, вознаграждает
            лояльных клиентов милями, которые можно обменять на билеты, апгрейды
            и другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Etihad Airways легко осуществляется через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна для
            помощи с бронированием, запросами и специальными запросами.
            Авиакомпания также предлагает удобные варианты онлайн-регистрации и
            мобильных посадочных талонов.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Etihad Airways стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Etihad Airways или свяжитесь с их службой
            поддержки клиентов по телефону +971 600 555 666. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>
          <h2 className="text-2xl font-bold mb-4">Общая информация</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">EY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">ETD</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Владелец</td>
                <td className="py-2">Правительство Абу-Даби</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">
                  Абу-Даби - Объединенные Арабские Эмираты
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">Международный аэропорт Абу-Даби</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">110 направлений</td>
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
                    href="https://www.etihad.com"
                    className="text-blue-500"
                  >
                    https://www.etihad.com
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

export default EtihadAirways;
