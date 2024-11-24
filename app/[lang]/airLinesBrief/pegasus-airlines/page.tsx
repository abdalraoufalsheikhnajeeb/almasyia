import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const PegasusAirlines = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Pegasus Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/pegasusairlines.webp"
            alt="Pegasus Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Pegasus Airlines is a Turkish low-cost airline headquartered in
            Istanbul. Established in 1990, it operates scheduled flights to over
            110 destinations in 42 countries across Europe, Asia, and the Middle
            East.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines was founded in 1990 as a joint venture between Aer
            Lingus, Silkar Yatırım, and Net Holding. Since then, it has grown to
            become one of Turkey leading low-cost carriers, known for its
            affordable fares and extensive route network.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline fleet primarily consists of modern Airbus A320 and
            Boeing 737 aircraft. Pegasus Airlines focuses on maintaining a young
            and efficient fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines serves a wide range of destinations across Europe,
            Asia, and the Middle East. Key destinations include Istanbul,
            Ankara, London, Dubai, Tel Aviv, and Tbilisi.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, meal options, and
            comfortable seating. Passengers can also purchase additional
            services such as extra legroom seats, priority boarding, and extra
            baggage allowance.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a pleasant in-flight experience with Pegasus
            Airlines. The airline offers a selection of movies, TV shows, music,
            and games as part of its in-flight entertainment system. Meals and
            snacks can be purchased on board to suit various dietary
            preferences.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines frequent flyer program, Pegasus Plus, rewards loyal
            customers with points that can be redeemed for flights, upgrades,
            and other benefits. Members enjoy perks such as priority check-in,
            extra baggage allowance, and exclusive offers.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Pegasus Airlines is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers online check-in and a
            mobile boarding pass option.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines is committed to sustainable practices and
            supporting local communities. The airline engages in various CSR
            initiatives, including environmental conservation efforts, education
            programs, and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Pegasus
            Airlines website or contact their customer service at +90 850 250 67
            02. Follow them on social media for the latest updates and
            promotions.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              General Information about Pegasus Airlines
            </h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">PC</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">PGT</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Owner</td>
                  <td className="py-2">ESAS Holding</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Istanbul, Turkey</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    The Main Operational Airport
                  </td>
                  <td className="py-2">Sabiha Gökçen International Airport</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">119 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Date of establishment</td>
                  <td className="py-2">1990</td>
                </tr>

                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.flypgs.com"
                      className="text-blue-500"
                    >
                      https://www.flypgs.com
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
          <h1 className="text-4xl text-center font-bold">طيران بيجاسوس</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/pegasusairlines.webp"
            alt="طيران بيجاسوس"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            طيران بيجاسوس هي شركة طيران تركية منخفضة التكلفة مقرها في إسطنبول.
            تأسست في عام 1990، وتقوم بتشغيل رحلات مجدولة إلى أكثر من 110 وجهة في
            42 دولة عبر أوروبا وآسيا والشرق الأوسط.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست طيران بيجاسوس في عام 1990 كمشروع مشترك بين آير لينغس وسيلكار
            ياتيريم ونت هولدينغ. منذ ذلك الحين، نمت لتصبح واحدة من الشركات
            الرائدة في تركيا منخفضة التكلفة، معروفة بأسعارها المعقولة وشبكة
            خطوطها الواسعة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتكون أسطول الشركة بشكل رئيسي من طائرات إيرباص A320 وبوينغ 737
            الحديثة. تركز طيران بيجاسوس على الحفاظ على أسطول حديث وفعال لضمان
            سلامة وراحة الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم طيران بيجاسوس مجموعة واسعة من الوجهات عبر أوروبا وآسيا والشرق
            الأوسط. تشمل الوجهات الرئيسية إسطنبول، أنقرة، لندن، دبي، تل أبيب،
            وتبليسي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، خيارات الوجبات، والمقاعد المريحة. يمكن
            للركاب أيضًا شراء خدمات إضافية مثل المقاعد بمساحة إضافية للساقين،
            أولوية الصعود، وزيادة الوزن المسموح به للأمتعة.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بتجربة سفر ممتعة مع طيران بيجاسوس. تقدم الشركة
            مجموعة مختارة من الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب
            كجزء من نظام الترفيه على متن الطائرة. يمكن شراء الوجبات والوجبات
            الخفيفة على متن الطائرة لتناسب التفضيلات الغذائية المختلفة.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            برنامج الولاء من طيران بيجاسوس، Pegasus Plus، يكافئ العملاء المخلصين
            بالنقاط التي يمكن استبدالها برحلات، ترقيات، ومزايا أخرى. يتمتع
            الأعضاء بمزايا مثل أولوية تسجيل الدخول، زيادة الوزن المسموح به
            للأمتعة، وعروض حصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع طيران بيجاسوس بسهولة عبر موقعها الرسمي، التطبيق
            المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة في
            الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة تسجيل
            الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم طيران بيجاسوس بالممارسات المستدامة ودعم المجتمعات المحلية.
            تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك
            جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لطيران
            بيجاسوس أو اتصل بخدمة العملاء على الرقم +90 850 250 67 02. تابعهم
            على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              معلومات عامة عن خطوط بيجاسوس الجوية
            </h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">PC</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكو</td>
                  <td className="py-2">PGT</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المالك</td>
                  <td className="py-2">إيساس القابضة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">إسطنبول، تركيا</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                  <td className="py-2">مطار صبيحة كوكجن الدولي</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">119 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                  <td className="py-2">1990</td>
                </tr>

                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.flypgs.com"
                      className="text-blue-500"
                    >
                      https://www.flypgs.com
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
          <h1 className="text-4xl text-center font-bold">Pegasus Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/pegasusairlines.webp"
            alt="Pegasus Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Pegasus Airlines - турецкая бюджетная авиакомпания со штаб-квартирой
            в Стамбуле. Основанная в 1990 году, она выполняет регулярные рейсы
            более чем в 110 пунктов назначения в 42 странах Европы, Азии и
            Ближнего Востока.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines была основана в 1990 году как совместное
            предприятие между Aer Lingus, Silkar Yatırım и Net Holding. С тех
            пор она выросла и стала одной из ведущих бюджетных авиакомпаний
            Турции, известной своими доступными тарифами и обширной маршрутной
            сетью.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании в основном состоит из современных самолетов Airbus
            A320 и Boeing 737. Pegasus Airlines сосредоточена на поддержании
            молодого и эффективного флота для обеспечения безопасности и
            комфорта пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Pegasus Airlines обслуживает широкий спектр направлений по всей
            Европе, Азии и Ближнему Востоку. Ключевые направления включают
            Стамбул, Анкару, Лондон, Дубай, Тель-Авив и Тбилиси.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, варианты
            питания и удобные сиденья. Пассажиры также могут приобрести
            дополнительные услуги, такие как сиденья с дополнительным
            пространством для ног, приоритетная посадка и дополнительный багаж.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться приятным полетом с Pegasus Airlines.
            Авиакомпания предлагает выбор фильмов, телешоу, музыки и игр в
            рамках своей развлекательной системы на борту. Еда и закуски могут
            быть куплены на борту в соответствии с различными диетическими
            предпочтениями.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Pegasus Airlines, Pegasus Plus, вознаграждает
            лояльных клиентов баллами, которые можно обменять на билеты,
            апгрейды и другие преимущества. Участники пользуются такими
            привилегиями, как приоритетная регистрация, дополнительный багаж и
            эксклюзивные предложения.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Pegasus Airlines легко осуществляется через их
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
            Pegasus Airlines стремится к устойчивым практикам и поддержке
            местных сообществ. Авиакомпания участвует в различных инициативах
            КСО, включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Pegasus Airlines или свяжитесь с их
            службой поддержки клиентов по телефону +90 850 250 67 02. Следите за
            ними в социальных сетях, чтобы получать последние обновления и
            акции.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Общая информация о авиакомпании Pegasus Airlines
            </h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">PC</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">PGT</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Владелец</td>
                  <td className="py-2">ESAS Holding</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Стамбул, Турция</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Основной операционный аэропорт
                  </td>
                  <td className="py-2">
                    Международный аэропорт имени Сабихи Гёкчен
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">119 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Дата основания</td>
                  <td className="py-2">1990</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.flypgs.com"
                      className="text-blue-500"
                    >
                      https://www.flypgs.com
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

export default PegasusAirlines;
