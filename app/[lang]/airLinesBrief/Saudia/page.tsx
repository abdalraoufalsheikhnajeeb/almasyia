import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const SaudiaAir = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">
            Saudia (Saudi Arabian Airlines)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/saudia.webp"
            alt="Saudia"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Saudia, also known as Saudi Arabian Airlines, is the national
            carrier of Saudi Arabia. Established in 1945, it operates domestic
            and international flights to over 95 destinations across the Middle
            East, Africa, Asia, Europe, and North America.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            Saudia was founded in 1945 with a single DC-3 aircraft gifted by
            U.S. President Franklin D. Roosevelt. Over the decades, it has grown
            into one of the largest airlines in the Middle East, playing a
            pivotal role in the region aviation industry.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            The airline fleet includes a mix of modern aircraft such as the
            Boeing 777, Boeing 787 Dreamliner, and Airbus A320 family. Saudia
            ensures its fleet is maintained to the highest safety and comfort
            standards.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            Saudia serves a wide range of destinations, including major cities
            and popular tourist spots across the Middle East, Africa, Asia,
            Europe, and North America. Key destinations include Jeddah, Riyadh,
            Dubai, Cairo, London, and New York.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, gourmet meals, and
            comfortable seating. Business and First Class passengers enjoy
            additional amenities such as lie-flat seats, premium dining, and
            exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-primary mb-4">
            Passengers can enjoy a range of in-flight entertainment options,
            including movies, TV shows, music, and games. The airline also
            offers Wi-Fi on select flights, allowing passengers to stay
            connected during their journey.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-primary mb-4">
            Saudia frequent flyer program, Alfursan, rewards loyal customers
            with points that can be redeemed for flights, upgrades, and other
            benefits. Members enjoy perks such as priority check-in, additional
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-primary mb-4">
            Booking flights with Saudia is easy through their official website,
            mobile app, and authorized travel agents. The customer service team
            is available to assist with reservations, inquiries, and special
            requests. The airline also offers online check-in and a mobile
            boarding pass option.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-primary mb-4">
            Saudia is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official Saudia
            website or contact their customer service at+ 971545866066. Follow
            them on social media for the latest updates and promotions.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">SV</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">SVA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Company</td>
                  <td className="py-2">Saudi Arabian Airlines</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Jeddah-Saudi Arabia</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">102 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of operation</td>
                  <td className="py-2">1945</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Logo</td>
                  <td className="py-2">Welcome to your world</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Alliances</td>
                  <td className="py-2">
                    Sky Team Alliance - Shared Code Alliance
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Customer Service Number
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:971545866066"
                      className="text-blue-500"
                    >
                      + 971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.saudia.com"
                      className="text-blue-500"
                    >
                      https://www.saudia.com
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
          <h1 className="text-4xl text-center font-bold">
            الخطوط الجوية السعودية (السعودية)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/saudia.webp"
            alt="الخطوط الجوية السعودية"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            السعودية، والمعروفة أيضًا باسم الخطوط الجوية السعودية، هي الناقل
            الوطني للمملكة العربية السعودية. تأسست في عام 1945، وتدير رحلات
            داخلية ودولية إلى أكثر من 95 وجهة عبر الشرق الأوسط وأفريقيا وآسيا
            وأوروبا وأمريكا الشمالية.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست الخطوط الجوية السعودية في عام 1945 بطائرة واحدة من طراز DC-3
            التي أهداها الرئيس الأمريكي فرانكلين دي روزفلت. على مر العقود، نمت
            لتصبح واحدة من أكبر شركات الطيران في الشرق الأوسط، حيث لعبت دورًا
            محوريًا في صناعة الطيران في المنطقة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            يشمل أسطول الشركة مزيجًا من الطائرات الحديثة مثل بوينغ 777، بوينغ
            787 دريملاينر، وعائلة إيرباص A320. تضمن السعودية أن يتم الحفاظ على
            أسطولها بأعلى معايير السلامة والراحة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم السعودية مجموعة واسعة من الوجهات، بما في ذلك المدن الرئيسية
            والأماكن السياحية الشهيرة عبر الشرق الأوسط وأفريقيا وآسيا وأوروبا
            وأمريكا الشمالية. تشمل الوجهات الرئيسية جدة، الرياض، دبي، القاهرة،
            لندن، ونيويورك.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد المريحة. يتمتع
            ركاب درجة رجال الأعمال والدرجة الأولى بمزايا إضافية مثل المقاعد
            المسطحة، الطعام الفاخر، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-primary mb-4">
            يمكن للركاب الاستمتاع بمجموعة متنوعة من خيارات الترفيه على متن
            الطائرة، بما في ذلك الأفلام، البرامج التلفزيونية، الموسيقى،
            والألعاب. توفر الشركة أيضًا خدمة الواي فاي على بعض الرحلات، مما يتيح
            للركاب البقاء متصلين أثناء رحلتهم.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-primary mb-4">
            برنامج الولاء من السعودية، الفرسان، يكافئ العملاء المخلصين بالنقاط
            التي يمكن استبدالها برحلات، ترقيات، ومزايا أخرى. يتمتع الأعضاء
            بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي، والوصول إلى الصالات
            الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يمكن حجز الرحلات مع السعودية بسهولة عبر موقعها الرسمي، التطبيق
            المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة في
            الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة تسجيل
            الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-primary mb-4">
            تلتزم السعودية بالممارسات المستدامة ودعم المجتمعات المحلية. تشارك
            الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك جهود
            الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للسعودية أو
            اتصل بخدمة العملاء على الرقم+ 971545866066. تابعهم على وسائل التواصل
            الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              معلومات عن الخطوط الجوية السعودية
            </h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز IATA</td>
                  <td className="py-2">SV</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز ICAO</td>
                  <td className="py-2">SVA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشركة الرئيسية</td>
                  <td className="py-2">الخطوط الجوية العربية السعودية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">جدة - المملكة العربية السعودية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">102 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                  <td className="py-2">1945</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشعار</td>
                  <td className="py-2">مرحبا بكم في عالمكم</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">التحالفات</td>
                  <td className="py-2">تحالف سكاي تيم - تحالف الرمز المشترك</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رقم خدمة العملاء</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:971545866066"
                      className="text-blue-500"
                    >
                      + 971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.saudia.com"
                      className="text-blue-500"
                    >
                      https://www.saudia.com
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
          <h1 className="text-4xl text-center font-bold">
            Saudia (Saudi Arabian Airlines)
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/saudia.webp"
            alt="Saudia"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Saudia, также известная как Saudi Arabian Airlines, является
            национальным перевозчиком Саудовской Аравии. Основанная в 1945 году,
            она выполняет внутренние и международные рейсы в более чем 95
            пунктов назначения на Ближнем Востоке, в Африке, Азии, Европе и
            Северной Америке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Saudia была основана в 1945 году с одним самолетом DC-3, подаренным
            президентом США Франклином Д. Рузвельтом. За десятилетия она выросла
            и стала одной из крупнейших авиакомпаний на Ближнем Востоке, играя
            ключевую роль в авиационной отрасли региона.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Флот авиакомпании включает современные самолеты, такие как Boeing
            777, Boeing 787 Dreamliner и семейство Airbus A320. Saudia
            обеспечивает поддержание своего флота на высочайшем уровне
            безопасности и комфорта.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-primary mb-4">
            Saudia обслуживает широкий спектр направлений, включая крупные
            города и популярные туристические места на Ближнем Востоке, в
            Африке, Азии, Европе и Северной Америке. Основные направления
            включают Джидду, Эр-Рияд, Дубай, Каир, Лондон и Нью-Йорк.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает разнообразные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, изысканные
            блюда и удобные сиденья. Пассажиры бизнес-класса и первого класса
            пользуются дополнительными удобствами, такими как раскладывающиеся
            сиденья, премиальное питание и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-primary mb-4">
            Пассажиры могут наслаждаться разнообразными вариантами развлечений
            на борту, включая фильмы, телешоу, музыку и игры. Авиакомпания также
            предоставляет Wi-Fi на некоторых рейсах, что позволяет пассажирам
            оставаться на связи во время путешествия.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-primary mb-4">
            Программа лояльности Saudia, Alfursan, вознаграждает лояльных
            клиентов баллами, которые можно обменять на билеты, апгрейды и
            другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-primary mb-4">
            Бронирование рейсов с Saudia легко осуществляется через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна для
            помощи с бронированием, запросами и специальными запросами.
            Авиакомпания также предлагает удобные варианты онлайн-регистрации и
            мобильные посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-primary mb-4">
            Saudia стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Saudia или свяжитесь с их службой
            поддержки клиентов по телефону+ 971545866066. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Информация об авиакомпании
            </h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">SV</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">SVA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основная компания</td>
                  <td className="py-2">Saudi Arabian Airlines</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Джидда - Саудовская Аравия</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">102 направления</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">1945</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Слоган</td>
                  <td className="py-2">Добро пожаловать в ваш мир</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Альянсы</td>
                  <td className="py-2">
                    Sky Team Alliance - Shared Code Alliance
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Номер службы поддержки клиентов
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:971545866066"
                      className="text-blue-500"
                    >
                      + 971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.saudia.com"
                      className="text-blue-500"
                    >
                      https://www.saudia.com
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
export default SaudiaAir;
