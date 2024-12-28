import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const EgyptAir = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">EgyptAir</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/egyptair.webp"
            alt="EgyptAir"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            EgyptAir is the flag carrier airline of Egypt, headquartered at
            Cairo International Airport. Founded in 1932, it operates scheduled
            passenger and freight services to over 75 destinations in the Middle
            East, Europe, Africa, Asia, and the Americas.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            Established in 1932, EgyptAir is one of the world oldest airlines.
            It has grown significantly over the decades, modernizing its fleet
            and expanding its network. EgyptAir is a member of the Star
            Alliance, enhancing its global reach.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            The airline fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A330, Boeing 737, and
            Boeing 787 Dreamliner. EgyptAir focuses on maintaining a young and
            efficient fleet to ensure passenger safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            EgyptAir serves a wide range of destinations across the Middle East,
            Europe, Africa, Asia, and the Americas. Key destinations include
            Cairo, New York, London, Paris, and Dubai.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, meals, and
            comfortable seating. Business and First Class passengers enjoy
            additional perks such as lie-flat seats, premium dining, and access
            to exclusive lounges.
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
            EgyptAir frequent flyer program, EgyptAir Plus, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-primary mb-4">
            Booking flights with EgyptAir is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-primary mb-4">
            EgyptAir is committed to sustainable practices and supporting local
            communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official
            EgyptAir website or contact their customer service at +971545866066.
            Follow them on social media for the latest updates and promotions.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">General Information</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Code IATA</td>
                  <td className="py-2">MS</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">MSR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">The owner</td>
                  <td className="py-2">The Egyptian government</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Cairo – Arab Republic of Egypt</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    The Main Operational Airport
                  </td>
                  <td className="py-2">Cairo International Airport</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">80 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of establishment</td>
                  <td className="py-2">1932</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.egyptair.com"
                      className="text-blue-500"
                    >
                      https://www.egyptair.com
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
          <h1 className="text-4xl text-center font-bold">مصر للطيران</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/egyptair.webp"
            alt="مصر للطيران"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            مصر للطيران هي شركة الطيران الوطنية لجمهورية مصر العربية، مقرها
            الرئيسي في مطار القاهرة الدولي. تأسست في عام 1932، وتقوم بتشغيل
            خدمات الركاب والشحن المجدولة إلى أكثر من 75 وجهة في الشرق الأوسط
            وأوروبا وأفريقيا وآسيا والأمريكيتين.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست مصر للطيران في عام 1932، وهي واحدة من أقدم شركات الطيران في
            العالم. نمت الشركة بشكل كبير على مدى العقود، وحدثت أسطولها ووسعت
            شبكتها. مصر للطيران عضو في تحالف ستار، مما يعزز من انتشارها العالمي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            يشمل أسطول الشركة مجموعة متنوعة من طائرات إيرباص وبوينغ الحديثة، مثل
            إيرباص A320 وإيرباص A330 وبوينغ 737 وبوينغ 787 دريملاينر. تركز مصر
            للطيران على الحفاظ على أسطول حديث وفعال لضمان سلامة وراحة الركاب.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم مصر للطيران مجموعة واسعة من الوجهات عبر الشرق الأوسط وأوروبا
            وأفريقيا وآسيا والأمريكيتين. تشمل الوجهات الرئيسية القاهرة ونيويورك
            ولندن وباريس ودبي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة والوجبات والمقاعد المريحة. يستمتع ركاب
            الدرجة الأولى ورجال الأعمال بمزايا إضافية مثل المقاعد التي تتحول إلى
            سرير وتناول الطعام الفاخر والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            تجربة السفر على متن الطائرة
          </h2>
          <p className="text-primary mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيهي حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام والبرامج التلفزيونية والموسيقى والألعاب. تقدم
            الشركة أيضاً خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب
            البقاء على اتصال.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج المسافر الدائم</h2>
          <p className="text-primary mb-4">
            يكافئ برنامج المسافر الدائم لمصر للطيران، مصر للطيران بلس، العملاء
            المخلصين بأميال يمكن استبدالها برحلات جوية وترقيات وغيرها من
            الفوائد. يتمتع الأعضاء بمزايا مثل أولوية التسجيل، وسعة أمتعة إضافية،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يمكن حجز الرحلات الجوية مع مصر للطيران بسهولة من خلال موقعها الرسمي
            على الإنترنت وتطبيق الهاتف ووكلاء السفر المعتمدين. تتوفر فرق خدمة
            العملاء للمساعدة في الحجوزات والاستفسارات والطلبات الخاصة. تقدم
            الشركة أيضًا خيارات تسجيل الوصول عبر الإنترنت وتصاريح الصعود
            المتنقلة.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            المسؤولية الاجتماعية للشركات
          </h2>
          <p className="text-primary mb-4">
            تلتزم مصر للطيران بالممارسات المستدامة ودعم المجتمعات المحلية. تشارك
            الشركة في مختلف المبادرات الخاصة بالمسؤولية الاجتماعية للشركات، بما
            في ذلك جهود الحفاظ على البيئة وبرامج التعليم والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لمصر
            للطيران أو اتصل بخدمة العملاء على الرقم +971545866066. تابعهم على
            وسائل التواصل الاجتماعي للحصول على آخر التحديثات والعروض الترويجية.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">معلومات عامة</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز IATA</td>
                  <td className="py-2">MS</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز ICAO</td>
                  <td className="py-2">MSR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المالك</td>
                  <td className="py-2">الحكومة المصرية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">القاهرة – جمهورية مصر العربية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    المطار الرئيسي للتشغيل
                  </td>
                  <td className="py-2">مطار القاهرة الدولي</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">80 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                  <td className="py-2">1932</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.egyptair.com"
                      className="text-blue-500"
                    >
                      https://www.egyptair.com
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
          <h1 className="text-4xl text-center font-bold">EgyptAir</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/egyptair.webp"
            alt="EgyptAir"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            EgyptAir — национальная авиакомпания Египта, штаб-квартира которой
            находится в международном аэропорту Каира. Основана в 1932 году, она
            выполняет регулярные пассажирские и грузовые рейсы более чем в 75
            направлений на Ближнем Востоке, в Европе, Африке, Азии и Америке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Основанная в 1932 году, EgyptAir является одной из старейших
            авиакомпаний мира. Она значительно выросла за десятилетия,
            модернизируя свой флот и расширяя сеть. EgyptAir является членом
            Star Alliance, что увеличивает её глобальное присутствие.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Флот авиакомпании включает в себя современные самолеты Airbus и
            Boeing, такие как Airbus A320, Airbus A330, Boeing 737 и Boeing 787
            Dreamliner. EgyptAir сосредоточена на поддержании молодого и
            эффективного флота для обеспечения безопасности и комфорта
            пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-primary mb-4">
            EgyptAir обслуживает широкий спектр направлений на Ближнем Востоке,
            в Европе, Африке, Азии и Америке. Ключевые направления включают
            Каир, Нью-Йорк, Лондон, Париж и Дубай.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает разнообразные услуги для улучшения
            впечатлений от полета, включая развлечения на борту, питание и
            комфортные сиденья. Пассажиры бизнес и первого класса пользуются
            дополнительными преимуществами, такими как кресла-кровати,
            премиальное питание и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления от полета</h2>
          <p className="text-primary mb-4">
            Пассажиры могут наслаждаться современным развлекательным комплексом
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предлагает Wi-Fi на многих своих рейсах, что
            позволяет пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Программа для часто летающих пассажиров
          </h2>
          <p className="text-primary mb-4">
            Программа для часто летающих пассажиров EgyptAir, EgyptAir Plus,
            вознаграждает лояльных клиентов милями, которые можно обменять на
            полеты, апгрейды и другие преимущества. Члены программы пользуются
            такими привилегиями, как приоритетная регистрация, дополнительная
            норма багажа и доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-primary mb-4">
            Забронировать рейсы с EgyptAir можно легко через их официальный
            веб-сайт, мобильное приложение и авторизованных туристических
            агентов. Команда обслуживания клиентов доступна для помощи с
            бронированиями, запросами и специальными просьбами. Авиакомпания
            также предлагает удобные варианты онлайн-регистрации и мобильные
            посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-primary mb-4">
            EgyptAir привержена устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный веб-сайт EgyptAir или свяжитесь с их службой
            поддержки клиентов по телефону +971545866066. Следите за ними в
            социальных сетях для получения последних новостей и акций.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4">Общая информация</h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">MS</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">MSR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Владелец</td>
                  <td className="py-2">Правительство Египта</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Каир, Арабская Республика Египет</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Основной операционный аэропорт
                  </td>
                  <td className="py-2">Международный аэропорт Каира</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">80 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">1932</td>
                </tr>

                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.egyptair.com"
                      className="text-blue-500"
                    >
                      https://www.egyptair.com
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

export default EgyptAir;
