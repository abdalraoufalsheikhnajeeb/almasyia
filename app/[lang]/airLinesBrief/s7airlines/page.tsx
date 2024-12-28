import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const S7Airlines = async ({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">S7 Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/s7airlines.webp"
            alt="S7 Airlines"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            S7 Airlines, also known as Siberia Airlines, is a major Russian
            airline headquartered in Novosibirsk. Established in 1957, it
            operates domestic and international flights to over 150 destinations
            across Europe, Asia, and the Middle East.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            S7 Airlines was founded in 1957 and has grown to become one of
            Russias leading airlines. The airline joined the oneworld alliance
            in 2010, enhancing its global reach and connectivity.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            The airlines fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A321, and Boeing 737. S7
            Airlines is known for maintaining a young and efficient fleet.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            S7 Airlines serves a wide range of destinations across Europe, Asia,
            and the Middle East. Key destinations include Moscow, Saint
            Petersburg, Beijing, Bangkok, Dubai, and Tokyo.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers a variety of services to ensure a high-quality
            travel experience. This includes in-flight entertainment, meal
            options, and comfortable seating. Business Class passengers enjoy
            additional perks such as lie-flat seats, premium dining, and
            exclusive lounge access.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-primary mb-4">
            Passengers can enjoy a state-of-the-art in-flight entertainment
            system with a wide selection of movies, TV shows, music, and games.
            The airline also offers Wi-Fi on many of its flights, enabling
            passengers to stay connected.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-primary mb-4">
            S7 Airlines frequent flyer program, S7 Priority, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-primary mb-4">
            Booking flights with S7 Airlines is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-primary mb-4">
            S7 Airlines is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official S7
            Airlines website or contact their customer service at +971545866066.
            Follow them on social media for the latest updates and promotions.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">S7</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">SBI</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Company</td>
                  <td className="py-2">S7 Airlines</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Novosibirsk, Russia</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">150 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of operation</td>
                  <td className="py-2">1992</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Slogan</td>
                  <td className="py-2">Flying in the Name of Love</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Alliances</td>
                  <td className="py-2">Oneworld</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Customer Service Number
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971545866066"
                      className="text-blue-500"
                    >
                      971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.s7.ru"
                      className="text-blue-500"
                    >
                      https://www.s7.ru
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
          <h1 className="text-4xl text-center font-bold">خطوط إس 7 الجوية</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/s7airlines.webp"
            alt="خطوط إس 7 الجوية"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            خطوط إس 7 الجوية، والمعروفة أيضًا باسم خطوط سيبيريا الجوية، هي شركة
            طيران روسية كبرى مقرها في نوفوسيبيرسك. تأسست في عام 1957، وتدير
            رحلات داخلية ودولية إلى أكثر من 150 وجهة عبر أوروبا وآسيا والشرق
            الأوسط.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست خطوط إس 7 الجوية في عام 1957 ونمت لتصبح واحدة من الشركات
            الرائدة في روسيا. انضمت الشركة إلى تحالف ون وورلد في عام 2010، مما
            عزز من وصولها واتصالها العالمي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            يتكون أسطول الشركة من مزيج من طائرات إيرباص وبوينغ الحديثة، مثل
            إيرباص A320، إيرباص A321، وبوينغ 737. تشتهر خطوط إس 7 الجوية بالحفاظ
            على أسطول شاب وفعال.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم خطوط إس 7 الجوية مجموعة واسعة من الوجهات عبر أوروبا وآسيا
            والشرق الأوسط. تشمل الوجهات الرئيسية موسكو، سانت بطرسبرغ، بكين،
            بانكوك، دبي وطوكيو.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة.
            يتضمن ذلك الترفيه على متن الطائرة، خيارات الوجبات، والمقاعد المريحة.
            يتمتع ركاب درجة رجال الأعمال بمزايا إضافية مثل المقاعد المسطحة،
            الطعام الفاخر، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-primary mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيه حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب. توفر
            الشركة أيضًا خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب
            البقاء متصلين.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-primary mb-4">
            برنامج الولاء من خطوط إس 7 الجوية، S7 Priority، يكافئ العملاء
            المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات، ومزايا
            أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يمكن حجز الرحلات مع خطوط إس 7 الجوية بسهولة عبر موقعها الرسمي،
            التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة
            في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة
            تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-primary mb-4">
            تلتزم خطوط إس 7 الجوية بالممارسات المستدامة ودعم المجتمعات المحلية.
            تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك
            جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لخطوط إس 7
            الجوية أو اتصل بخدمة العملاء على الرقم +7 495 783 0707. تابعهم على
            وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">معلومات عن شركة الطيران</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">S7</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكاو</td>
                  <td className="py-2">SBI</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشركة الرئيسية</td>
                  <td className="py-2">S7 Airlines</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">نوفوسيبيرسك، روسيا</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">150 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التشغيل</td>
                  <td className="py-2">1992</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشعار</td>
                  <td className="py-2">الطيران باسم الحب</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">التحالفات</td>
                  <td className="py-2">تحالف عالم واحد</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رقم خدمة العملاء</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971545866066"
                      className="text-blue-500"
                    >
                      +971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الموقع الإلكتروني</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.s7.ru"
                      className="text-blue-500"
                    >
                      https://www.s7.ru
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
          <h1 className="text-4xl text-center font-bold">Авиакомпания S7</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/s7airlines.webp"
            alt="Авиакомпания S7"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Авиакомпания S7, также известная как Сибирь, является крупной
            российской авиакомпанией со штаб-квартирой в Новосибирске.
            Основанная в 1957 году, она выполняет внутренние и международные
            рейсы более чем в 150 пунктов назначения в Европе, Азии и на Ближнем
            Востоке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Авиакомпания S7 была основана в 1957 году и с тех пор выросла и
            стала одной из ведущих авиакомпаний России. Авиакомпания
            присоединилась к альянсу oneworld в 2010 году, что улучшило ее
            глобальную связанность.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Флот авиакомпании состоит из современных самолетов Airbus и Boeing,
            таких как Airbus A320, Airbus A321 и Boeing 737. S7 Airlines
            известна поддержанием молодого и эффективного флота.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-primary mb-4">
            Авиакомпания S7 обслуживает широкий спектр направлений в Европе,
            Азии и на Ближнем Востоке. Основные направления включают Москву,
            Санкт-Петербург, Пекин, Бангкок, Дубай и Токио.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает различные услуги для обеспечения высокого
            качества путешествий. Это включает в себя развлекательные программы
            на борту, варианты питания и удобные сиденья. Пассажиры
            бизнес-класса пользуются дополнительными удобствами, такими как
            раскладывающиеся сиденья, премиальное питание и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-primary mb-4">
            Пассажиры могут наслаждаться современными развлекательными системами
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предоставляет Wi-Fi на многих своих рейсах,
            позволяя пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-primary mb-4">
            Программа лояльности авиакомпании S7, S7 Priority, вознаграждает
            лояльных клиентов милями, которые можно обменять на билеты, апгрейды
            и другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-primary mb-4">
            Бронирование рейсов с авиакомпанией S7 легко осуществляется через их
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
            Авиакомпания S7 стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт авиакомпании S7 или свяжитесь с их службой
            поддержки клиентов по телефону +7 495 783 0707. Следите за ними в
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
                  <td className="py-2">S7</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">SBI</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основная компания</td>
                  <td className="py-2">S7 Airlines</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Новосибирск, Россия</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">150 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">1992</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Слоган</td>
                  <td className="py-2">Летаем во имя любви</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Альянсы</td>
                  <td className="py-2">Oneworld</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Номер службы поддержки клиентов
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+971545866066"
                      className="text-blue-500"
                    >
                      971545866066
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Веб-сайт</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.s7.ru"
                      className="text-blue-500"
                    >
                      https://www.s7.ru
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
export default S7Airlines;
