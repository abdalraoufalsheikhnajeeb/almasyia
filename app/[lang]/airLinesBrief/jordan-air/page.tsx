import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const RoyalJordanian = async ({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24 mx-auto">
          <h1 className="text-4xl text-center font-bold">
            Royal Jordanian Airlines
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jordanair.png"
            alt="Royal Jordanian Airlines"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Royal Jordanian Airlines is the flag carrier airline of Jordan.
            Established in 1963, it operates scheduled international flights to
            four continents from its main hub at Queen Alia International
            Airport in Amman.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-primary mb-4">
            Royal Jordanian was founded in 1963 by a Royal Decree issued by His
            Majesty King Hussein. The airline has since grown to become a
            leading carrier in the Middle East, known for its reliability and
            high-quality service.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-primary mb-4">
            The airline fleet includes a mix of modern Airbus and Boeing
            aircraft, such as the Airbus A320, Airbus A321, Boeing 787
            Dreamliner, and Embraer 175. Royal Jordanian maintains its fleet to
            the highest safety and comfort standards.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-primary mb-4">
            Royal Jordanian serves an extensive network of destinations,
            covering Europe, Asia, Africa, and North America. Key destinations
            include London, Paris, New York, Bangkok, and Cairo.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-primary mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, gourmet meals, and
            comfortable seating. Crown Class passengers enjoy additional perks
            such as lie-flat seats, premium dining, and access to exclusive
            lounges.
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
            Royal Jordanian frequent flyer program, Royal Club, rewards loyal
            customers with miles that can be redeemed for flights, upgrades, and
            other benefits. Members enjoy perks such as priority check-in, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-primary mb-4">
            Booking flights with Royal Jordanian is easy through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers convenient online
            check-in and mobile boarding pass options.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-primary mb-4">
            Royal Jordanian is committed to sustainable practices and supporting
            local communities. The airline engages in various CSR initiatives,
            including environmental conservation efforts, education programs,
            and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-primary">
            For more information or to book a flight, visit the official Royal
            Jordanian website or contact their customer service at
            +971545866066. Follow them on social media for the latest updates
            and promotions.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              General Information about Royal Jordanian Airlines
            </h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">RJ</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">RJA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">The owner</td>
                  <td className="py-2">Government of Jordan</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">
                    Amman - the Hashemite Kingdom of Jordan
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    The Main Operational Airport
                  </td>
                  <td className="py-2">Queen Alia International Airport</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">45 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Date of establishment</td>
                  <td className="py-2">1963</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.rj.com"
                      className="text-blue-500"
                    >
                      https://www.rj.com
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
            الخطوط الملكية الأردنية
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jordanair.png"
            alt="الخطوط الملكية الأردنية"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            الخطوط الملكية الأردنية هي الناقل الوطني للأردن. تأسست في عام 1963،
            وتقوم بتشغيل رحلات دولية مجدولة إلى أربع قارات من مركزها الرئيسي في
            مطار الملكة علياء الدولي في عمان.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-primary mb-4">
            تأسست الخطوط الملكية الأردنية في عام 1963 بمرسوم ملكي صادر عن جلالة
            الملك الحسين. نمت الشركة منذ ذلك الحين لتصبح واحدة من شركات الطيران
            الرائدة في الشرق الأوسط، معروفة بموثوقيتها وجودة خدماتها العالية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-primary mb-4">
            يشمل أسطول الشركة مزيجاً من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص
            A320، إيرباص A321، بوينغ 787 دريملاينر، وإمبراير 175. تحافظ الخطوط
            الملكية الأردنية على أسطولها بأعلى معايير السلامة والراحة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-primary mb-4">
            تخدم الخطوط الملكية الأردنية شبكة واسعة من الوجهات، تغطي أوروبا،
            آسيا، أفريقيا، وأمريكا الشمالية. تشمل الوجهات الرئيسية لندن، باريس،
            نيويورك، بانكوك، والقاهرة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-primary mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتحسين تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، الوجبات الفاخرة، والمقاعد المريحة. يتمتع
            ركاب الدرجة الأولى Crown Class بمزايا إضافية مثل المقاعد المسطحة،
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
            برنامج الولاء من الخطوط الملكية الأردنية، Royal Club، يكافئ العملاء
            المخلصين بالأميال التي يمكن استبدالها برحلات جوية، ترقيات، ومزايا
            أخرى. يتمتع الأعضاء بمزايا مثل أولوية تسجيل الدخول، وزن أمتعة إضافي،
            والوصول إلى الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-primary mb-4">
            يمكن حجز الرحلات مع الخطوط الملكية الأردنية بسهولة عبر موقعها
            الرسمي، التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح
            للمساعدة في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة
            أيضًا خدمة تسجيل الدخول عبر الإنترنت وخيارات بطاقة الصعود المحمولة.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-primary mb-4">
            تلتزم الخطوط الملكية الأردنية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما
            في ذلك جهود الحفاظ على البيئة، برامج التعليم، والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-primary">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الملكية الأردنية أو اتصل بخدمة العملاء على الرقم +971545866066.
            تابعهم على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات
            والعروض.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              معلومات عامة عن الخطوط الملكية الأردنية
            </h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">RJ</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكو</td>
                  <td className="py-2">RJA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المالك</td>
                  <td className="py-2">حكومة الأردن</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">عمان - المملكة الأردنية الهاشمية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                  <td className="py-2">مطار الملكة علياء الدولي</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">45 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">تاريخ التأسيس</td>
                  <td className="py-2">1963</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.rj.com"
                      className="text-blue-500"
                    >
                      https://www.rj.com
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
            Royal Jordanian Airlines
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/jordanair.png"
            alt="Royal Jordanian Airlines"
            className="w-96 mb-5"
          />
          <p className="text-primary mb-4">
            Royal Jordanian Airlines является национальной авиакомпанией
            Иордании. Основанная в 1963 году, она выполняет регулярные
            международные рейсы на четыре континента из своего основного хаба в
            Международном аэропорту Королевы Алии в Аммане.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-primary mb-4">
            Royal Jordanian была основана в 1963 году Королевским указом Его
            Величества Короля Хуссейна. С тех пор авиакомпания выросла и стала
            ведущим перевозчиком на Ближнем Востоке, известной своей надежностью
            и высоким качеством обслуживания.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-primary mb-4">
            Флот авиакомпании включает в себя смесь современных самолетов Airbus
            и Boeing, таких как Airbus A320, Airbus A321, Boeing 787 Dreamliner
            и Embraer 175. Royal Jordanian поддерживает свой флот в соответствии
            с самыми высокими стандартами безопасности и комфорта.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-primary mb-4">
            Royal Jordanian обслуживает обширную сеть направлений, охватывающих
            Европу, Азию, Африку и Северную Америку. Ключевые направления
            включают Лондон, Париж, Нью-Йорк, Бангкок и Каир.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-primary mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, изысканные
            блюда и удобные сиденья. Пассажиры класса Crown Class пользуются
            дополнительными привилегиями, такими как раскладывающиеся сиденья,
            премиальное питание и доступ в эксклюзивные залы ожидания.
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
            Программа лояльности Royal Jordanian, Royal Club, вознаграждает
            лояльных клиентов милями, которые можно обменять на билеты, апгрейды
            и другие преимущества. Участники пользуются такими привилегиями, как
            приоритетная регистрация, дополнительный багаж и доступ в
            эксклюзивные залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-primary mb-4">
            Бронирование рейсов с Royal Jordanian легко осуществляется через их
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
            Royal Jordanian стремится к устойчивым практикам и поддержке местных
            сообществ. Авиакомпания участвует в различных инициативах КСО,
            включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-primary">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный сайт Royal Jordanian или свяжитесь с их службой
            поддержки клиентов 971545866066. Следите за ними в социальных сетях,
            чтобы получать последние обновления и акции.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Общая информация о авиакомпании Royal Jordanian Airlines
            </h2>
            <table className="w-fit text-start text-primary">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">RJ</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">RJA</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Владелец</td>
                  <td className="py-2">Правительство Иордании</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">
                    Амман - Хашимитское Королевство Иордания
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Основной операционный аэропорт
                  </td>
                  <td className="py-2">Международный аэропорт королевы Алии</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">45 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Дата основания</td>
                  <td className="py-2">1963</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default RoyalJordanian;
