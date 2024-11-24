import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const page = async ({ params }: { params: { lang: Locale } }) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Singapore Airlines</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/singapore-airlines.png"
            alt="Singapore Airlines"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Singapore Airlines is the flag carrier airline of Singapore,
            headquartered in Singapore. Founded in 1947, it operates flights to
            over 130 destinations across the globe, including North America,
            Europe, Asia, and Australia.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Established as Malayan Airways in 1947, Singapore Airlines has grown
            to become one of the world's leading airlines. The airline is
            renowned for its commitment to service excellence and innovation.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines' fleet includes a mix of Boeing and Airbus
            aircraft, with models such as the Airbus A350, Boeing 787
            Dreamliner, and Airbus A380. The airline continually updates its
            fleet to maintain high standards of safety and comfort.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines serves a wide range of destinations around the
            world, including major cities and popular tourist spots. Key
            destinations include New York, Los Angeles, Tokyo, Paris, and
            Sydney.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers a variety of services to enhance the travel
            experience, including in-flight entertainment, gourmet meal options,
            and spacious seating. Singapore Airlines also provides additional
            services such as travel insurance, hotel booking, and car rental
            through its website.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a range of in-flight entertainment options,
            including movies, TV shows, music, and games. The airline also
            offers a range of meal options, including special dietary
            requirements.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines' frequent flyer program, KrisFlyer, allows
            members to earn miles with every flight and redeem them for a
            variety of rewards, including free flights, seat upgrades, and
            additional services.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Singapore Airlines is easy through their
            official website, mobile app, and authorized travel agents. The
            customer service team is available to assist with reservations,
            inquiries, and special requests. The airline also offers online
            check-in and a mobile boarding pass option.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines is committed to sustainable practices and
            supporting local communities. The airline engages in various CSR
            initiatives, including environmental conservation efforts, education
            programs, and charitable partnerships.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, visit the official
            Singapore Airlines website or contact their customer service at +65
            6223 8888. Follow them on social media for the latest updates and
            promotions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            General Information about Singapore Airlines
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">"IATA" Code</td>
                <td className="py-2">SQ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">ICAO Code</td>
                <td className="py-2">SIA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Company Headquarters</td>
                <td className="py-2">Singapore</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">
                  The main operating main hub Airport
                </td>
                <td className="py-2">Singapore Changi Airport</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Number of destinations</td>
                <td className="py-2">130 destinations</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Date of establishment</td>
                <td className="py-2">1947</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.singaporeair.com"
                    className="text-blue-500"
                  >
                    https://www.singaporeair.com
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
            الخطوط الجوية السنغافورية
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/singapore-airlines.png"
            alt="الخطوط الجوية السنغافورية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية السنغافورية هي شركة الطيران الوطنية لسنغافورة، ومقرها
            في سنغافورة. تأسست في عام 1947، وتقوم بتشغيل رحلات إلى أكثر من 130
            وجهة حول العالم، بما في ذلك أمريكا الشمالية وأوروبا وآسيا وأستراليا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية السنغافورية كمالايا إيرويز في عام 1947، ونمت
            لتصبح واحدة من شركات الطيران الرائدة في العالم. تشتهر الشركة
            بالتزامها بتميز الخدمة والابتكار.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتضمن أسطول الخطوط الجوية السنغافورية مجموعة متنوعة من طائرات بوينغ
            وإيرباص، مثل إيرباص A350، بوينغ 787 دريملاينر، وإيرباص A380. تقوم
            الشركة بتحديث أسطولها باستمرار للحفاظ على معايير عالية من الأمان
            والراحة.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية السنغافورية مجموعة واسعة من الوجهات حول العالم،
            بما في ذلك المدن الرئيسية وأماكن الجذب السياحي الشهيرة. تشمل الوجهات
            الرئيسية نيويورك، لوس أنجلوس، طوكيو، باريس، وسيدني.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة مجموعة متنوعة من الخدمات لتعزيز تجربة السفر، بما في ذلك
            الترفيه على متن الطائرة، خيارات الطعام الفاخرة، والمقاعد الفسيحة.
            توفر الخطوط الجوية السنغافورية أيضًا خدمات إضافية مثل التأمين على
            السفر، حجز الفنادق، وتأجير السيارات عبر موقعها الإلكتروني.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة الطيران</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بمجموعة من خيارات الترفيه على متن الطائرة، بما
            في ذلك الأفلام، البرامج التلفزيونية، الموسيقى، والألعاب. تقدم الشركة
            أيضًا مجموعة من خيارات الطعام، بما في ذلك متطلبات النظام الغذائي
            الخاصة.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج المسافر الدائم</h2>
          <p className="text-gray-700 mb-4">
            برنامج المسافر الدائم للخطوط الجوية السنغافورية، كريسفلاير، يتيح
            للأعضاء كسب الأميال مع كل رحلة واستبدالها بمجموعة متنوعة من
            المكافآت، بما في ذلك الرحلات المجانية، ترقيات المقاعد، والخدمات
            الإضافية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يعد حجز الرحلات مع الخطوط الجوية السنغافورية سهلاً من خلال موقعهم
            الرسمي، التطبيق المحمول، ووكلاء السفر المعتمدين. يتوفر فريق خدمة
            العملاء لمساعدتك في الحجوزات، الاستفسارات، والطلبات الخاصة. كما توفر
            الشركة خيار تسجيل الوصول عبر الإنترنت وبطاقة الصعود المتنقلة.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            المسؤولية الاجتماعية للشركات
          </h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية السنغافورية بالممارسات المستدامة ودعم المجتمعات
            المحلية. تشارك الشركة في مبادرات المسؤولية الاجتماعية للشركات
            المختلفة، بما في ذلك جهود الحفاظ على البيئة، برامج التعليم،
            والشراكات الخيرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي للخطوط
            الجوية السنغافورية أو اتصل بخدمة العملاء على +65 6223 8888. تابعهم
            على وسائل التواصل الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            معلومات عامة عن الخطوط الجوية السنغافورية
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز "IATA"</td>
                <td className="py-2">SQ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">رمز ICAO</td>
                <td className="py-2">SIA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">مقر الشركة</td>
                <td className="py-2">سنغافورة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">المطار الرئيسي</td>
                <td className="py-2">مطار شانغي بسنغافورة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                <td className="py-2">130 وجهة</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">سنة التأسيس</td>
                <td className="py-2">1947</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">website</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.singaporeair.com"
                    className="text-blue-500"
                  >
                    https://www.singaporeair.com
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
          <h1 className="text-4xl text-center font-bold">
            Сингапурские Авиалинии
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/singapore-airlines.png"
            alt="Сингапурские Авиалинии"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Сингапурские Авиалинии — национальный авиаперевозчик Сингапура,
            штаб-квартира которого находится в Сингапуре. Основанная в 1947
            году, она выполняет рейсы более чем в 130 направлений по всему миру,
            включая Северную Америку, Европу, Азию и Австралию.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Основанная как Malayan Airways в 1947 году, Singapore Airlines
            выросла до одной из ведущих авиакомпаний мира. Авиакомпания известна
            своим стремлением к совершенству в обслуживании и инновациям.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот Singapore Airlines состоит из самолетов Boeing и Airbus, таких
            как Airbus A350, Boeing 787 Dreamliner и Airbus A380. Авиакомпания
            постоянно обновляет свой флот, чтобы поддерживать высокие стандарты
            безопасности и комфорта.
          </p>
          <h2 className="text-2xl font-bold mb-2">Направления</h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines обслуживает широкий спектр направлений по всему
            миру, включая крупные города и популярные туристические места.
            Ключевые направления включают Нью-Йорк, Лос-Анджелес, Токио, Париж и
            Сидней.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает разнообразные услуги для улучшения
            впечатлений от полета, включая развлечения на борту, изысканные
            варианты питания и просторные сиденья. Singapore Airlines также
            предоставляет дополнительные услуги, такие как страхование
            путешествий, бронирование отелей и аренда автомобилей через свой
            веб-сайт.
          </p>
          <h2 className="text-2xl font-bold mb-2">Впечатления от полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться разнообразными вариантами развлечений
            на борту, включая фильмы, телепередачи, музыку и игры. Авиакомпания
            также предлагает широкий выбор блюд, включая блюда для специальных
            диет.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Программа лояльности Singapore Airlines, KrisFlyer, позволяет
            участникам зарабатывать мили за каждый полет и обменивать их на
            различные награды, включая бесплатные полеты, улучшенные места и
            дополнительные услуги.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Singapore Airlines легко осуществляется через
            их официальный веб-сайт, мобильное приложение и авторизованных
            туристических агентов. Служба поддержки клиентов доступна для помощи
            с бронированием, запросами и специальными запросами. Авиакомпания
            также предлагает онлайн-регистрацию и возможность мобильного
            посадочного талона.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Singapore Airlines привержена устойчивым практикам и поддержке
            местных сообществ. Авиакомпания участвует в различных инициативах
            КСО, включая усилия по сохранению окружающей среды, образовательные
            программы и благотворительные партнерства.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса
            посетите официальный веб-сайт Singapore Airlines или свяжитесь с их
            службой поддержки клиентов по телефону +65 6223 8888. Следите за
            ними в социальных сетях для получения последних новостей и акций.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Общая информация о Singapore Airlines
          </h2>
          <table className="w-fit text-start text-gray-700">
            <tbody>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код IATA</td>
                <td className="py-2">SQ</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Код ICAO</td>
                <td className="py-2">SIA</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Штаб-квартира компании</td>
                <td className="py-2">Сингапур</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Основной хаб</td>
                <td className="py-2">Международный аэропорт Чанги</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Количество направлений</td>
                <td className="py-2">130 направлений</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">Дата основания</td>
                <td className="py-2">1947</td>
              </tr>
              <tr className="border-b">
                <td className="font-bold py-2 pe-8">веб-сайт</td>
                <td className="py-2">
                  <a
                    target="_blank"
                    href="https://www.singaporeair.com"
                    className="text-blue-500"
                  >
                    https://www.singaporeair.com
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
export default page;
