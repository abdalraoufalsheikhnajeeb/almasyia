import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const TurkishAirlines = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Turkish Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/turkishairlines.webp"
            alt="Turkish Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Turkish Airlines is the national flag carrier airline of Turkey.
            Founded in 1933, it operates scheduled services to over 300
            destinations in Europe, Asia, Africa, and the Americas, making it
            one of the largest carriers in the world by number of destinations.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Established in 1933, Turkish Airlines has grown from a small
            regional player into a major global airline. It has continuously
            expanded its route network and fleet, playing a significant role in
            connecting Turkey with the world.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A330, Airbus A350, Boeing 777, and
            Boeing 787 Dreamliner. Turkish Airlines is known for maintaining a
            young and efficient fleet.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Turkish Airlines serves an extensive network of destinations,
            covering Europe, Asia, Africa, and the Americas. Key destinations
            include Istanbul, Ankara, New York, London, Paris, Tokyo, and
            Johannesburg.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to ensure a high-quality
            travel experience. This includes in-flight entertainment, gourmet
            meals, and comfortable seating. Business Class passengers enjoy
            additional perks such as lie-flat seats, premium dining, and
            exclusive lounge access.
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
            Turkish Airlines' frequent flyer program, Miles&Smiles, rewards
            loyal customers with miles that can be redeemed for flights,
            upgrades, and other benefits. Members enjoy perks such as priority
            check-in, extra baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Turkish Airlines is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Turkish Airlines is committed to sustainable practices and
            supporting local communities. The airline engages in various CSR
            initiatives, including environmental conservation efforts, education
            programs, and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Turkish
            Airlines website or contact their customer service at +90 212 444
            0849. Follow them on social media for the latest updates and
            promotions.
          </p>

          <h2 className="text-2xl font-bold mb-4">General Information</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">IATA Code</td>
                <td className="py-2">TK</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">THY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">Istanbul - Turkey</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The Main Operating Airport
                </td>
                <td className="py-2">Ataturk International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">299 destinations</td>
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
                    href="https://www.turkishairlines.com"
                    className="text-blue-500"
                  >
                    https://www.turkishairlines.com
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
            الخطوط الجوية التركية
          </h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/turkishairlines.webp"
            alt="الخطوط الجوية التركية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية التركية هي الناقل الوطني لتركيا. تأسست في عام 1933،
            وتقوم بتشغيل رحلات مجدولة إلى أكثر من 300 وجهة في أوروبا وآسيا
            وأفريقيا والأمريكيتين، مما يجعلها واحدة من أكبر شركات الطيران في
            العالم من حيث عدد الوجهات.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية التركية في عام 1933 ونمت من لاعب إقليمي صغير إلى
            شركة طيران عالمية كبرى. لقد وسعت باستمرار شبكة خطوطها وأسطولها،
            ولعبت دورًا مهمًا في ربط تركيا بالعالم.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة مزيجًا من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص
            A330، إيرباص A350، بوينغ 777، وبوينغ 787 دريملاينر. تشتهر الخطوط
            الجوية التركية بالحفاظ على أسطول شاب وفعال.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية التركية شبكة واسعة من الوجهات، تغطي أوروبا وآسيا
            وأفريقيا والأمريكيتين. تشمل الوجهات الرئيسية إسطنبول، أنقرة،
            نيويورك، لندن، باريس، طوكيو وجوهانسبرغ.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة.
            يتضمن ذلك الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد
            المريحة. يتمتع ركاب درجة رجال الأعمال بمزايا إضافية مثل المقاعد
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
            برنامج الولاء من الخطوط الجوية التركية، مايلز آند سمايلز، يكافئ
            العملاء المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات،
            ومزايا أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة
            إضافي، والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية التركية بسهولة عبر موقعها الرسمي،
            التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة
            في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة أيضًا خدمة
            تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية التركية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية التركية أو اتصل بخدمة العملاء على الرقم +90 212 444 0849.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>

          <h2 className="text-2xl font-bold mb-4">معلومات عامة</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز IATA</td>
                <td className="py-2">TK</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">THY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">إسطنبول - تركيا</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار أتاتورك الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">299 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                <td className="py-2">1933</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.turkishairlines.com"
                    className="text-blue-500"
                  >
                    https://www.turkishairlines.com
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
          <h1 className="text-4xl text-center font-bold">Turkish Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={80}
            src="/images/turkishairlines.webp"
            alt="Turkish Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Turkish Airlines - национальная авиакомпания Турции. Основанная в
            1933 году, она выполняет регулярные рейсы более чем в 300 пунктов
            назначения в Европе, Азии, Африке и Америке, что делает ее одной из
            крупнейших авиакомпаний в мире по количеству направлений.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Основанная в 1933 году, Turkish Airlines выросла из небольшого
            регионального перевозчика в крупную глобальную авиакомпанию. Она
            постоянно расширяла свою маршрутную сеть и флот, играя значительную
            роль в соединении Турции с миром.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании состоит из современных самолетов Airbus и Boeing,
            таких как Airbus A330, Airbus A350, Boeing 777 и Boeing 787
            Dreamliner. Turkish Airlines известна поддержанием молодого и
            эффективного флота.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Turkish Airlines обслуживает обширную сеть направлений, охватывающих
            Европу, Азию, Африку и Америку. Основные направления включают
            Стамбул, Анкару, Нью-Йорк, Лондон, Париж, Токио и Йоханнесбург.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает разнообразные услуги для обеспечения
            высокого качества путешествий. Это включает в себя развлекательные
            программы на борту, изысканные блюда и удобные сиденья. Пассажиры
            бизнес-класса пользуются дополнительными удобствами, такими как
            раскладывающиеся сиденья, премиальное питание и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться современными развлекательными системами
            на борту с широким выбором фильмов, телешоу, музыки и игр.
            Авиакомпания также предоставляет Wi-Fi на многих своих рейсах, что
            позволяет пассажирам оставаться на связи.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Turkish Airlines, Miles&Smiles, вознаграждает
            постоянных клиентов милями, которые можно обменять на билеты,
            апгрейды и другие преимущества. Участники пользуются такими
            привилегиями, как приоритетная регистрация, дополнительный багаж и
            доступ в эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Turkish Airlines легко осуществляется через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна для
            помощи с бронированием, запросами и особыми запросами. Авиакомпания
            также предлагает онлайн-регистрацию и мобильные посадочные талоны.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Turkish Airlines стремится к устойчивым практикам и поддержке
            местных сообществ. Авиакомпания участвует в различных инициативах
            КСО, включая усилия по охране окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Turkish Airlines или свяжитесь с их
            службой поддержки клиентов по телефону +90 212 444 0849. Следите за
            ними в социальных сетях, чтобы получать последние обновления и
            акции.
          </p>

          <h2 className="text-2xl font-bold mb-4">Общая информация</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">TK</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">THY</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Стамбул - Турция</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">Международный аэропорт Ататюрк</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">299 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Год основания</td>
                <td className="py-2">1933</td>
              </tr>

              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.turkishairlines.com"
                    className="text-blue-500"
                  >
                    https://www.turkishairlines.com
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

export default TurkishAirlines;
