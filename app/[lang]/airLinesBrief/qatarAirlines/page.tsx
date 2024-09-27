import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const QatarAirways = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Qatar Airways</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/qatarairways.webp"
            alt="Qatar Airways"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Qatar Airways is the state-owned flag carrier of Qatar. Established
            in 1993, it operates a hub-and-spoke network, flying to over 160
            international destinations across Africa, Asia, Europe, the
            Americas, and Oceania from its base at Hamad International Airport
            in Doha.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Qatar Airways was founded in 1993 and has since grown to become one
            of the world’s leading airlines, known for its commitment to
            providing a high level of service and luxury. It is a member of the
            Oneworld alliance, enhancing its connectivity globally.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A350, Airbus A380, Boeing 777, and
            Boeing 787 Dreamliner. Qatar Airways is renowned for maintaining a
            young and technologically advanced fleet.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Qatar Airways serves an extensive network of destinations, covering
            major cities and popular tourist spots across Africa, Asia, Europe,
            the Americas, and Oceania. Key destinations include Doha, London,
            New York, Sydney, Tokyo, and Paris.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to ensure a high-quality
            travel experience, including award-winning in-flight entertainment,
            gourmet meals, and comfortable seating. Business and First Class
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
            Qatar Airways' frequent flyer program, Privilege Club, rewards loyal
            customers with Qmiles that can be redeemed for flights, upgrades,
            and other benefits. Members enjoy perks such as priority check-in,
            extra baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Qatar Airways is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Qatar Airways is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official Qatar
            Airways website or contact their customer service at +974 4023 0000.
            Follow them on social media for the latest updates and promotions.
          </p>

          <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Code "IATA"</td>
                <td className="py-2">QR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">QTR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">The Owner</td>
                <td className="py-2">State of Qatar</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  Qatar Airways Headquarters
                </td>
                <td className="py-2">Doha – State of Qatar</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Main Operating Airport</td>
                <td className="py-2">Hamad International Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  How Many Destinations Qatar Airways Operating to?
                </td>
                <td className="py-2">150 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Establishment Year</td>
                <td className="py-2">1994</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Fleet size</td>
                <td className="py-2">202</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.qatarairways.com"
                    className="text-blue-500"
                  >
                    www.qatarairways.com
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
            الخطوط الجوية القطرية
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/qatarairways.webp"
            alt="الخطوط الجوية القطرية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية القطرية هي الناقل الوطني لدولة قطر. تأسست في عام 1993،
            وتدير شبكة مركزية تطير إلى أكثر من 160 وجهة دولية عبر إفريقيا وآسيا
            وأوروبا والأمريكيتين وأوقيانوسيا من مقرها في مطار حمد الدولي في
            الدوحة.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية القطرية في عام 1993 ومنذ ذلك الحين نمت لتصبح
            واحدة من الشركات الرائدة في العالم، معروفة بالتزامها بتقديم خدمة
            عالية المستوى والفخامة. وهي عضو في تحالف ون وورلد، مما يعزز من
            اتصالاتها العالمية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة مزيجًا من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص
            A350، إيرباص A380، بوينغ 777، وبوينغ 787 دريملاينر. تشتهر الخطوط
            الجوية القطرية بالحفاظ على أسطول شاب ومتقدم تكنولوجيًا.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية القطرية شبكة واسعة من الوجهات، تغطي المدن
            الرئيسية والأماكن السياحية الشهيرة عبر إفريقيا وآسيا وأوروبا
            والأمريكيتين وأوقيانوسيا. تشمل الوجهات الرئيسية الدوحة، لندن،
            نيويورك، سيدني، طوكيو وباريس.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة،
            بما في ذلك الترفيه الفائز بالجوائز على متن الطائرة، الوجبات الفاخرة،
            والمقاعد المريحة. يتمتع ركاب درجة رجال الأعمال والدرجة الأولى بمزايا
            إضافية مثل المقاعد المسطحة، الطعام الفاخر، والوصول إلى الصالات
            الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بنظام ترفيه حديث على متن الطائرة مع مجموعة
            واسعة من الأفلام والبرامج التلفزيونية والموسيقى والألعاب. توفر
            الشركة أيضًا خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب
            البقاء متصلين.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            برنامج الولاء من الخطوط الجوية القطرية، "نادي الامتياز"، يكافئ
            العملاء المخلصين بنقاط يمكن استبدالها برحلات وترقيات ومزايا أخرى.
            يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية القطرية بسهولة عبر موقعها الرسمي،
            التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح للمساعدة
            في الحجوزات والاستفسارات والطلبات الخاصة. توفر الشركة أيضًا خدمة
            تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية القطرية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية القطرية أو اتصل بخدمة العملاء على الرقم +974 4023 0000.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            معلومات عن الخطوط الجوية القطرية
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز "IATA"</td>
                <td className="py-2">QR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">QTR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المالك</td>
                <td className="py-2">دولة قطر</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  مقر الخطوط الجوية القطرية
                </td>
                <td className="py-2">الدوحة - دولة قطر</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار حمد الدولي</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  عدد الوجهات التي تخدمها الخطوط الجوية القطرية
                </td>
                <td className="py-2">150 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                <td className="py-2">1994</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">حجم الأسطول</td>
                <td className="py-2">202 طائرة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">الموقع الإلكتروني</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.qatarairways.com"
                    className="text-blue-500"
                  >
                    www.qatarairways.com
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
          <h1 className="text-4xl text-center font-bold">Qatar Airways</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/qatarairways.webp"
            alt="Qatar Airways"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Qatar Airways - государственная авиакомпания Катара. Основанная в
            1993 году, она управляет сетью рейсов, соединяющей более 160
            международных направлений в Африке, Азии, Европе, Америке и Океании
            из своего хаба в Международном аэропорту Хамад в Дохе.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Qatar Airways была основана в 1993 году и с тех пор выросла, став
            одной из ведущих авиакомпаний мира, известной своим высоким уровнем
            обслуживания и роскошью. Она является членом альянса Oneworld, что
            улучшает ее глобальную связанность.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает в себя современные самолеты Airbus и
            Boeing, такие как Airbus A350, Airbus A380, Boeing 777 и Boeing 787
            Dreamliner. Qatar Airways известна поддержанием молодого и
            технологически продвинутого флота.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Qatar Airways обслуживает обширную сеть направлений, охватывающих
            крупные города и популярные туристические места по всей Африке,
            Азии, Европе, Америке и Океании. Основные направления включают Доху,
            Лондон, Нью-Йорк, Сидней, Токио и Париж.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для обеспечения высокого
            качества путешествий, включая отмеченные наградами развлекательные
            программы на борту, изысканные блюда и удобные сиденья. Пассажиры
            бизнес-класса и первого класса пользуются дополнительными
            удобствами, такими как раскладывающиеся сиденья, премиальное питание
            и доступ в эксклюзивные залы ожидания.
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
            Программа лояльности Qatar Airways, Privilege Club, вознаграждает
            лояльных клиентов милями, которые можно обменять на билеты, апгрейды
            и другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Qatar Airways легко осуществляется через их
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
            Qatar Airways стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Qatar Airways или свяжитесь с их службой
            поддержки клиентов по телефону +974 4023 0000. Следите за ними в
            социальных сетях, чтобы получать последние обновления и акции.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Информация об авиакомпании
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код "IATA"</td>
                <td className="py-2">QR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">QTR</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Владелец</td>
                <td className="py-2">Государство Катар</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  Штаб-квартира Qatar Airways
                </td>
                <td className="py-2">Доха - Государство Катар</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной аэропорт</td>
                <td className="py-2">Международный аэропорт Хамад</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  Сколько направлений обслуживает Qatar Airways?
                </td>
                <td className="py-2">150 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Год основания</td>
                <td className="py-2">1994</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Размер флота</td>
                <td className="py-2">202 самолета</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Вебсайт</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.qatarairways.com"
                    className="text-blue-500"
                  >
                    www.qatarairways.com
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

export default QatarAirways;
