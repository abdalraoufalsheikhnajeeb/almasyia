import Image from "next/image";
import React from "react";
import { Locale } from "../../../../i18n-config";

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  if (lang == "en")
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Cham Wings Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/chamwings.webp"
            alt="Cham Wings Airlines"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            Cham Wings Airlines is a private Syrian airline founded in 2007. It
            operates scheduled and charter flights across the Middle East,
            Europe, and North Africa. The airline aims to provide high-quality
            service and comfortable travel experiences for its passengers.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Cham Wings Airlines was established to meet the growing demand for
            air travel in Syria and the surrounding region. Over the years, it
            has expanded its network and fleet, becoming a significant player in
            the regional aviation market.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes modern Airbus A320 aircraft, known for
            their reliability and comfort. The aircraft are equipped with
            advanced safety features and amenities to enhance the passenger
            experience. Regular maintenance and updates ensure the fleet meets
            the highest safety standards.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Cham Wings Airlines serves a variety of destinations including major
            cities in the Middle East, Europe, and North Africa. Some of the key
            destinations include Dubai, Beirut, Kuwait, Baghdad, Khartoum, and
            Yerevan. The airline continually evaluates and adds new routes based
            on passenger demand and market opportunities.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a range of services to ensure passenger comfort
            and satisfaction. This includes in-flight entertainment, meal
            options, and various seating arrangements to cater to different
            passenger needs. Special assistance services are also available for
            passengers with disabilities or special requirements.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a pleasant in-flight experience with Cham Wings
            Airlines. The airline offers a selection of movies, music, and games
            as part of its in-flight entertainment system. Meals are prepared
            with high-quality ingredients, catering to different dietary
            preferences.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Cham Wings Airlines has a frequent flyer program that rewards loyal
            customers with various benefits, such as priority boarding, extra
            baggage allowance, and access to exclusive lounges. Members can earn
            points with every flight and redeem them for rewards and discounts.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Cham Wings Airlines is convenient through their
            official website, mobile app, and authorized travel agents. The
            customer service team is available 24/7 to assist with reservations,
            inquiries, and special requests. The airline also offers a
            user-friendly online check-in service to streamline the travel
            experience.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Cham Wings Airlines is committed to contributing positively to the
            community. The airline engages in various corporate social
            responsibility initiatives, including environmental conservation
            efforts, support for local communities, and participation in
            humanitarian missions.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, you can visit the official
            website of Cham Wings Airlines or contact their customer service at
            +963 11 9999. Follow them on social media for the latest updates and
            promotions.
          </p>
        </div>
      </div>
    );
  else if (lang == "ru")
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Авиакомпания Cham Wings</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/chamwings.webp"
            alt="Авиакомпания Cham Wings"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            Авиакомпания Cham Wings — частная сирийская авиакомпания, основанная
            в 2007 году. Она выполняет регулярные и чартерные рейсы по Ближнему
            Востоку, Европе и Северной Африке. Авиакомпания стремится
            предоставлять услуги высокого качества и комфортные условия
            путешествий для своих пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания Cham Wings была создана для удовлетворения растущего
            спроса на авиаперевозки в Сирии и соседних регионах. За эти годы она
            расширила свою сеть и парк воздушных судов, став значимым игроком на
            региональном авиационном рынке.
          </p>
          <h2 className="text-2xl font-bold mb-2">Парк воздушных судов</h2>
          <p className="text-gray-700 mb-4">
            Парк воздушных судов авиакомпании включает современные самолеты
            Airbus A320, известные своей надежностью и комфортом. Самолеты
            оснащены передовыми системами безопасности и удобствами для
            улучшения пассажирского опыта. Регулярное техническое обслуживание и
            обновления обеспечивают соответствие парка самым высоким стандартам
            безопасности.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания Cham Wings обслуживает различные направления, включая
            крупные города Ближнего Востока, Европы и Северной Африки. Некоторые
            ключевые направления включают Дубай, Бейрут, Кувейт, Багдад, Хартум
            и Ереван. Авиакомпания постоянно оценивает и добавляет новые
            маршруты в зависимости от спроса пассажиров и рыночных возможностей.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает ряд услуг для обеспечения комфорта и
            удовлетворенности пассажиров. В это входят развлекательные системы
            на борту, варианты питания и различные схемы рассадки для
            удовлетворения потребностей различных пассажиров. Также доступны
            специальные услуги помощи для пассажиров с ограниченными
            возможностями или особыми требованиями.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления на борту</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут насладиться приятным опытом полета с авиакомпанией
            Cham Wings. Авиакомпания предлагает выбор фильмов, музыки и игр в
            рамках своей системы развлечений на борту. Питание готовится из
            качественных ингредиентов с учетом различных диетических
            предпочтений.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания Cham Wings имеет программу лояльности, которая
            вознаграждает постоянных клиентов различными преимуществами, такими
            как приоритетная посадка, дополнительное разрешенное количество
            багажа и доступ в эксклюзивные залы. Участники могут зарабатывать
            очки за каждый полет и обменивать их на награды и скидки.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с авиакомпанией Cham Wings удобно через их
            официальный сайт, мобильное приложение и авторизованных
            туристических агентов. Команда обслуживания клиентов доступна
            круглосуточно для помощи с бронированиями, запросами и особыми
            требованиями. Авиакомпания также предлагает удобную услугу
            онлайн-регистрации для упрощения процесса путешествия.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания Cham Wings стремится вносить положительный вклад в
            общество. Компания участвует в различных инициативах корпоративной
            социальной ответственности, включая усилия по охране окружающей
            среды, поддержку местных сообществ и участие в гуманитарных миссиях.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса вы
            можете посетить официальный сайт авиакомпании Cham Wings или
            связаться со службой поддержки клиентов по телефону +963 11 9999.
            Следите за ними в социальных сетях для получения последних
            обновлений и акций.
          </p>
        </div>
      </div>
    );
  else if (lang == "ar")
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">طيران أجنحة الشام</h1>
          <Image
            width={420}
            height={300}
            quality={10}
            src="/images/chamwings.webp"
            alt="طيران أجنحة الشام"
            className="w-32 h-32 mb-4"
          />
          <p className="text-gray-700 mb-4">
            طيران أجنحة الشام هو شركة طيران خاصة سورية تأسست في عام 2007. تقوم
            بتشغيل رحلات مجدولة وشارتر عبر الشرق الأوسط وأوروبا وشمال إفريقيا.
            تهدف شركة الطيران إلى تقديم خدمة عالية الجودة وتجربة سفر مريحة
            لركابها.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تم تأسيس شركة طيران أجنحة الشام لتلبية الطلب المتزايد على السفر
            الجوي في سوريا والمنطقة المحيطة. على مر السنين، وسعت شبكتها
            وأسطولها، لتصبح لاعبًا رئيسيًا في سوق الطيران الإقليمي.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يشمل أسطول الشركة طائرات إيرباص A320 الحديثة، المعروفة بموثوقيتها
            وراحتها. الطائرات مجهزة بميزات أمان متقدمة ووسائل راحة لتعزيز تجربة
            الركاب. تضمن الصيانة الدورية والتحديثات أن يتوافق الأسطول مع أعلى
            معايير الأمان.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم طيران أجنحة الشام مجموعة متنوعة من الوجهات بما في ذلك المدن
            الرئيسية في الشرق الأوسط وأوروبا وشمال إفريقيا. تشمل بعض الوجهات
            الرئيسية دبي، بيروت، الكويت، بغداد، الخرطوم، ويريفان. تقوم شركة
            الطيران بتقييم وإضافة مسارات جديدة بناءً على طلب الركاب وفرص السوق.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم شركة الطيران مجموعة من الخدمات لضمان راحة ورضا الركاب. يشمل ذلك
            الترفيه على متن الطائرة، خيارات الوجبات، وترتيبات الجلوس المختلفة
            لتلبية احتياجات الركاب المختلفة. تتوفر أيضًا خدمات المساعدة الخاصة
            للركاب ذوي الإعاقة أو الاحتياجات الخاصة.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة الطيران</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بتجربة طيران ممتعة مع طيران أجنحة الشام. تقدم
            شركة الطيران مجموعة مختارة من الأفلام والموسيقى والألعاب كجزء من
            نظام الترفيه على متن الطائرة. يتم تحضير الوجبات بمكونات عالية الجودة
            لتلبية التفضيلات الغذائية المختلفة.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            لدى طيران أجنحة الشام برنامج ولاء يكافئ العملاء المخلصين بمزايا
            مختلفة، مثل الأولوية في الصعود إلى الطائرة، زيادة الوزن المسموح به
            للأمتعة، والدخول إلى الصالات الحصرية. يمكن للأعضاء كسب النقاط مع كل
            رحلة واستبدالها بمكافآت وخصومات.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع طيران أجنحة الشام بسهولة من خلال موقعهم الرسمي،
            تطبيق الهاتف المحمول، ووكلاء السفر المعتمدين. يتوفر فريق خدمة
            العملاء على مدار الساعة للمساعدة في الحجوزات والاستفسارات والطلبات
            الخاصة. تقدم شركة الطيران أيضًا خدمة تسجيل الوصول عبر الإنترنت
            لتسهيل تجربة السفر.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            المسؤولية الاجتماعية للشركات
          </h2>
          <p className="text-gray-700 mb-4">
            تلتزم شركة طيران أجنحة الشام بالمساهمة بشكل إيجابي في المجتمع. تشارك
            الشركة في مختلف المبادرات الاجتماعية، بما في ذلك جهود الحفاظ على
            البيئة، دعم المجتمعات المحلية، والمشاركة في المهمات الإنسانية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، يمكنكم زيارة الموقع الرسمي لطيران
            أجنحة الشام أو الاتصال بخدمة العملاء على الرقم +963 11 9999. تابعوهم
            على وسائل التواصل الاجتماعي للحصول على آخر التحديثات والعروض.
          </p>
        </div>
      </div>
    );
};

export default page;
