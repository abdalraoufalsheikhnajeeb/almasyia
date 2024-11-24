import Image from "next/image";

import { Locale } from "../../../../i18n-config";

const page = async ({ params }: { params: { lang: Locale } }) => {
  const { lang } = await params;
  if (lang === "en") {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
          <h1 className="text-4xl text-center font-bold">Syrian Air</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/syrianair.webp"
            alt="Syrian Air"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Syrian Air, also known as Syrian Arab Airlines, is the national
            carrier of Syria. Established in 1946, it operates domestic and
            international flights to various destinations in the Middle East,
            Europe, Asia, and Africa.
          </p>
          <h2 className="text-2xl font-bold mb-2">History</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air was founded shortly after World War II and has played a
            crucial role in connecting Syria with the rest of the world. Despite
            challenges, the airline continues to operate and serve its
            passengers.
          </p>
          <h2 className="text-2xl font-bold mb-2">Fleet</h2>
          <p className="text-gray-700 mb-4">
            The airline's fleet includes a mix of Airbus and Boeing aircraft.
            Syrian Air maintains its fleet to ensure safety and comfort for its
            passengers, with regular maintenance and upgrades.
          </p>
          <h2 className="text-2xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air serves a range of destinations across the Middle East,
            Europe, Asia, and Africa. Key destinations include Cairo, Beirut,
            Moscow, Tehran, and Khartoum.
          </p>
          <h2 className="text-2xl font-bold mb-2">Services</h2>
          <p className="text-gray-700 mb-4">
            The airline offers various services to enhance the travel
            experience, including in-flight entertainment, meal options, and
            comfortable seating. Syrian Air also provides special assistance
            services for passengers with disabilities or special needs.
          </p>
          <h2 className="text-2xl font-bold mb-2">In-Flight Experience</h2>
          <p className="text-gray-700 mb-4">
            Passengers can enjoy a pleasant in-flight experience with Syrian
            Air. The airline offers a selection of movies, TV shows, music, and
            games as part of its in-flight entertainment system. Meals are
            prepared to cater to different dietary preferences.
          </p>
          <h2 className="text-2xl font-bold mb-2">Frequent Flyer Program</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air offers a frequent flyer program that rewards loyal
            customers with various benefits, such as priority boarding, extra
            baggage allowance, and access to exclusive lounges.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Booking and Customer Service
          </h2>
          <p className="text-gray-700 mb-4">
            Booking flights with Syrian Air is convenient through their official
            website, mobile app, and authorized travel agents. The customer
            service team is available to assist with reservations, inquiries,
            and special requests. The airline also offers online check-in
            services to streamline the travel experience.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 mb-4">
            Syrian Air is committed to contributing positively to the community.
            The airline engages in various corporate social responsibility
            initiatives, including environmental conservation efforts, support
            for local communities, and participation in humanitarian missions.
          </p>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-gray-700">
            For more information or to book a flight, you can visit the official
            website of Syrian Air or contact their customer service. Follow them
            on social media for the latest updates and promotions.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">Airline Information</h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">IATA Code</td>
                  <td className="py-2">RB</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">ICAO Code</td>
                  <td className="py-2">SYR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Main Company</td>
                  <td className="py-2">SyrianAir</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Company Headquarters</td>
                  <td className="py-2">Damascus, Syria</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Number of destinations
                  </td>
                  <td className="py-2">15 destinations</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Year of operation</td>
                  <td className="py-2">1946</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Slogan</td>
                  <td className="py-2">"Syrian Wings"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Alliances</td>
                  <td className="py-2">None</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Customer Service Number
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+963112240774"
                      className="text-blue-500"
                    >
                      +963 11 224 0774
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.syriaair.com"
                      className="text-blue-500"
                    >
                      https://www.syriaair.com
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
          <h1 className="text-4xl text-center font-bold">
            الخطوط الجوية السورية
          </h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/syrianair.webp"
            alt="الخطوط الجوية السورية"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            الخطوط الجوية السورية، المعروفة أيضًا باسم الخطوط الجوية العربية
            السورية، هي الناقل الوطني للجمهورية العربية السورية. تأسست في عام
            1946، وتدير رحلات داخلية ودولية إلى وجهات متعددة في الشرق الأوسط
            وأوروبا وآسيا وأفريقيا.
          </p>
          <h2 className="text-2xl font-bold mb-2">التاريخ</h2>
          <p className="text-gray-700 mb-4">
            تأسست الخطوط الجوية السورية بعد فترة وجيزة من الحرب العالمية الثانية
            ولعبت دورًا حيويًا في ربط سوريا ببقية العالم. على الرغم من التحديات،
            تواصل الشركة العمل وخدمة ركابها.
          </p>
          <h2 className="text-2xl font-bold mb-2">الأسطول</h2>
          <p className="text-gray-700 mb-4">
            يتكون أسطول الشركة من مزيج من طائرات إيرباص وبوينغ. تحافظ الخطوط
            الجوية السورية على أسطولها لضمان سلامة وراحة الركاب، من خلال الصيانة
            الدورية والترقيات.
          </p>
          <h2 className="text-2xl font-bold mb-2">الوجهات</h2>
          <p className="text-gray-700 mb-4">
            تخدم الخطوط الجوية السورية مجموعة من الوجهات عبر الشرق الأوسط
            وأوروبا وآسيا وأفريقيا. تشمل الوجهات الرئيسية القاهرة، بيروت، موسكو،
            طهران، والخرطوم.
          </p>
          <h2 className="text-2xl font-bold mb-2">الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم الشركة خدمات متنوعة لتحسين تجربة السفر، بما في ذلك الترفيه على
            متن الطائرة، خيارات الوجبات، والمقاعد المريحة. توفر الخطوط الجوية
            السورية أيضًا خدمات المساعدة الخاصة للركاب ذوي الإعاقة أو الاحتياجات
            الخاصة.
          </p>
          <h2 className="text-2xl font-bold mb-2">تجربة السفر</h2>
          <p className="text-gray-700 mb-4">
            يمكن للركاب الاستمتاع بتجربة سفر ممتعة مع الخطوط الجوية السورية.
            تقدم الشركة مجموعة مختارة من الأفلام، البرامج التلفزيونية، الموسيقى،
            والألعاب كجزء من نظام الترفيه على متن الطائرة. يتم إعداد الوجبات
            لتلبية مختلف التفضيلات الغذائية.
          </p>
          <h2 className="text-2xl font-bold mb-2">برنامج الولاء</h2>
          <p className="text-gray-700 mb-4">
            تقدم الخطوط الجوية السورية برنامج ولاء يكافئ العملاء المخلصين بفوائد
            متعددة، مثل أولوية الصعود للطائرة، وزن أمتعة إضافي، والوصول إلى
            الصالات الحصرية.
          </p>
          <h2 className="text-2xl font-bold mb-2">الحجز وخدمة العملاء</h2>
          <p className="text-gray-700 mb-4">
            يمكن حجز الرحلات مع الخطوط الجوية السورية بسهولة من خلال الموقع
            الرسمي، التطبيق المحمول، والوكلاء المعتمدين. فريق خدمة العملاء متاح
            للمساعدة في الحجوزات، الاستفسارات، والطلبات الخاصة. توفر الشركة
            أيضًا خدمات تسجيل الدخول عبر الإنترنت لتسهيل تجربة السفر.
          </p>
          <h2 className="text-2xl font-bold mb-2">المسؤولية الاجتماعية</h2>
          <p className="text-gray-700 mb-4">
            تلتزم الخطوط الجوية السورية بالمساهمة الإيجابية في المجتمع. تشارك
            الشركة في مبادرات المسؤولية الاجتماعية المختلفة، بما في ذلك جهود
            الحفاظ على البيئة، دعم المجتمعات المحلية، والمشاركة في المهمات
            الإنسانية.
          </p>
          <h2 className="text-2xl font-bold mb-2">معلومات الاتصال</h2>
          <p className="text-gray-700">
            لمزيد من المعلومات أو لحجز رحلة، يمكنكم زيارة الموقع الرسمي للخطوط
            الجوية السورية أو الاتصال بخدمة العملاء. تابعهم على وسائل التواصل
            الاجتماعي للحصول على أحدث التحديثات والعروض.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">معلومات عن شركة الطيران</h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إياتا</td>
                  <td className="py-2">RB</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رمز إيكاو</td>
                  <td className="py-2">SYR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشركة الرئيسية</td>
                  <td className="py-2">الخطوط الجوية السورية</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">مقر الشركة</td>
                  <td className="py-2">دمشق، سوريا</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">عدد الوجهات</td>
                  <td className="py-2">15 وجهة</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">سنة التشغيل</td>
                  <td className="py-2">1946</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">الشعار</td>
                  <td className="py-2">"أجنحة سورية"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">التحالفات</td>
                  <td className="py-2">بدون تحالف</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">رقم خدمة العملاء</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+963112240774"
                      className="text-blue-500"
                    >
                      +963 11 224 0774
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.syriaair.com"
                      className="text-blue-500"
                    >
                      https://www.syriaair.com
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
          <h1 className="text-4xl text-center font-bold">Syrian Air</h1>
          <Image
            width={420}
            height={300}
            quality={60}
            src="/images/syrianair.webp"
            alt="Syrian Air"
            className="w-96 mb-5"
          />
          <p className="text-gray-700 mb-4">
            Syrian Air, также известная как Syrian Arab Airlines, является
            национальным перевозчиком Сирии. Основанная в 1946 году, она
            выполняет внутренние и международные рейсы в различные направления
            на Ближнем Востоке, в Европе, Азии и Африке.
          </p>
          <h2 className="text-2xl font-bold mb-2">История</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air была основана вскоре после Второй мировой войны и сыграла
            важную роль в соединении Сирии с остальным миром. Несмотря на
            трудности, авиакомпания продолжает работать и обслуживать своих
            пассажиров.
          </p>
          <h2 className="text-2xl font-bold mb-2">Флот</h2>
          <p className="text-gray-700 mb-4">
            Флот авиакомпании включает самолеты Airbus и Boeing. Syrian Air
            поддерживает свой флот для обеспечения безопасности и комфорта
            пассажиров, с регулярным обслуживанием и модернизацией.
          </p>
          <h2 className="text-2xl font-bold mb-2">Пункты назначения</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air обслуживает направления на Ближнем Востоке, в Европе,
            Азии и Африке. Основные направления включают Каир, Бейрут, Москву,
            Тегеран и Хартум.
          </p>
          <h2 className="text-2xl font-bold mb-2">Услуги</h2>
          <p className="text-gray-700 mb-4">
            Авиакомпания предлагает различные услуги для улучшения качества
            путешествий, включая развлекательные программы на борту, варианты
            питания и удобные сиденья. Syrian Air также предоставляет
            специальные услуги для пассажиров с ограниченными возможностями или
            особыми потребностями.
          </p>
          <h2 className="text-2xl font-bold mb-2">Опыт полета</h2>
          <p className="text-gray-700 mb-4">
            Пассажиры могут наслаждаться приятным полетом с Syrian Air.
            Авиакомпания предлагает выбор фильмов, телешоу, музыки и игр в
            рамках своей развлекательной системы на борту. Еда готовится с
            учетом различных диетических предпочтений.
          </p>
          <h2 className="text-2xl font-bold mb-2">Программа лояльности</h2>
          <p className="text-gray-700 mb-4">
            Syrian Air предлагает программу лояльности, которая вознаграждает
            постоянных клиентов различными преимуществами, такими как
            приоритетная посадка, дополнительный багаж и доступ в эксклюзивные
            залы ожидания.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Бронирование и обслуживание клиентов
          </h2>
          <p className="text-gray-700 mb-4">
            Бронирование рейсов с Syrian Air удобно через их официальный сайт,
            мобильное приложение и авторизованных туристических агентов. Команда
            обслуживания клиентов доступна для помощи с бронированием, запросами
            и особыми запросами. Авиакомпания также предлагает
            онлайн-регистрацию для упрощения путешествия.
          </p>
          <h2 className="text-2xl font-bold mb-2">
            Корпоративная социальная ответственность
          </h2>
          <p className="text-gray-700 mb-4">
            Syrian Air стремится к положительному вкладу в сообщество.
            Авиакомпания участвует в различных инициативах корпоративной
            социальной ответственности, включая усилия по охране окружающей
            среды, поддержку местных сообществ и участие в гуманитарных миссиях.
          </p>
          <h2 className="text-2xl font-bold mb-2">Контактная информация</h2>
          <p className="text-gray-700">
            Для получения дополнительной информации или бронирования рейса вы
            можете посетить официальный сайт Syrian Air или связаться с их
            службой поддержки клиентов. Следите за ними в социальных сетях,
            чтобы получать последние обновления и акции.
          </p>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Информация об авиакомпании
            </h2>
            <table className="w-fit text-start text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код IATA</td>
                  <td className="py-2">RB</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Код ICAO</td>
                  <td className="py-2">SYR</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Основная компания</td>
                  <td className="py-2">SyrianAir</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Штаб-квартира компании
                  </td>
                  <td className="py-2">Дамаск, Сирия</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Количество направлений
                  </td>
                  <td className="py-2">15 направлений</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Год основания</td>
                  <td className="py-2">1946</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Слоган</td>
                  <td className="py-2">"Сирийские крылья"</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">Альянсы</td>
                  <td className="py-2">Нет альянсов</td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">
                    Номер службы поддержки клиентов
                  </td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="tel:+963112240774"
                      className="text-blue-500"
                    >
                      +963 11 224 0774
                    </a>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-bold py-2 pe-8">website</td>
                  <td className="py-2">
                    <a
                      target="_blank"
                      href="https://www.syriaair.com"
                      className="text-blue-500"
                    >
                      https://www.syriaair.com
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

export default page;
