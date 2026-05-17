import type { Locale } from "../../i18n-config";

type LocalizedText = Record<Locale, string>;

type SeoEntry = {
  title: LocalizedText;
  description: LocalizedText;
};

export const PAGES_SEO: Record<string, SeoEntry> = {
  about: {
    title: {
      en: "About Us | Alnujoom Almasiya Travel Agency",
      ar: "من نحن | وكالة النجوم الماسية للسفر",
      ru: "О нас | Туристическое агентство Alnujoom Almasiya",
    },
    description: {
      en: "Learn about Alnujoom Almasiya, a trusted travel agency led by Farouk Dakkak, offering flights, visas, hotels, and document delivery between Damascus and Dubai.",
      ar: "تعرف على شركة النجوم الماسية للسفر بقيادة فاروق ضكاك، شريكك الموثوق للحجوزات الجوية، التأشيرات، الفنادق، وتوصيل الوثائق بين دمشق ودبي.",
      ru: "Узнайте о Alnujoom Almasiya — надёжном туристическом агентстве под руководством Фарука Даккака. Авиабилеты, визы, отели и доставка документов между Дамаском и Дубаем.",
    },
  },
  contact: {
    title: {
      en: "Contact Us | Alnujoom Almasiya",
      ar: "اتصل بنا | النجوم الماسية",
      ru: "Связаться с нами | Alnujoom Almasiya",
    },
    description: {
      en: "Get in touch with Alnujoom Almasiya for travel bookings, visas, and document delivery between Dubai and Damascus. Phone, WhatsApp and office locations.",
      ar: "تواصل مع النجوم الماسية لحجوزات السفر، التأشيرات، وتوصيل الوثائق بين دبي ودمشق. اتصل بنا عبر الهاتف أو الواتساب أو زرنا في مكاتبنا.",
      ru: "Свяжитесь с Alnujoom Almasiya для бронирования путешествий, виз и доставки документов между Дубаем и Дамаском. Телефон, WhatsApp и наши офисы.",
    },
  },
  worldClock: {
    title: {
      en: "World Clock | Travel Time Zones | Alnujoom Almasiya",
      ar: "الساعة العالمية | المناطق الزمنية للسفر | النجوم الماسية",
      ru: "Мировые часы | Часовые пояса | Alnujoom Almasiya",
    },
    description: {
      en: "Check current time in major travel destinations worldwide. Plan your trips with our real-time world clock for Dubai, Damascus, and global cities.",
      ar: "تابع الوقت الحالي في أهم الوجهات السياحية حول العالم. خطط لرحلاتك مع الساعة العالمية المباشرة لدبي ودمشق والمدن العالمية.",
      ru: "Узнайте текущее время в крупных туристических направлениях. Планируйте поездки с нашими часами реального времени для Дубая, Дамаска и других городов.",
    },
  },
};

export const COUNTRIES_SEO: Record<string, SeoEntry> = {
  egypt: {
    title: {
      en: "Travel to Egypt | Tourism Guide | Alnujoom Almasiya",
      ar: "السفر إلى مصر | دليل السياحة | النجوم الماسية",
      ru: "Путешествие в Египет | Туристический гид | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Egypt: Cairo, Alexandria, Hurghada. Tourist attractions, shopping markets, best travel seasons and visa info from Alnujoom Almasiya.",
      ar: "اكتشف مصر: القاهرة، الإسكندرية، الغردقة. المعالم السياحية، الأسواق، أفضل أوقات الزيارة ومعلومات التأشيرة من النجوم الماسية.",
      ru: "Откройте Египет: Каир, Александрия, Хургада. Достопримечательности, рынки, лучшие сезоны для путешествий и информация о визах.",
    },
  },
  georgia: {
    title: {
      en: "Travel to Georgia | Tourism Guide | Alnujoom Almasiya",
      ar: "السفر إلى جورجيا | دليل السياحة | النجوم الماسية",
      ru: "Путешествие в Грузию | Туристический гид | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Georgia: Tbilisi, Batumi, mountain landscapes and rich culture. Plan your trip with Alnujoom Almasiya travel experts.",
      ar: "استكشف جورجيا: تبليسي، باتومي، المناظر الجبلية والثقافة الغنية. خطط لرحلتك مع خبراء السفر في النجوم الماسية.",
      ru: "Откройте для себя Грузию: Тбилиси, Батуми, горные пейзажи и богатую культуру. Планируйте поездку с экспертами Alnujoom Almasiya.",
    },
  },
  indonesia: {
    title: {
      en: "Travel to Indonesia | Bali & Beyond | Alnujoom Almasiya",
      ar: "السفر إلى إندونيسيا | بالي وما بعدها | النجوم الماسية",
      ru: "Путешествие в Индонезию | Бали и не только | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Indonesia: Bali, Jakarta, tropical beaches and cultural treasures. Book your dream getaway with Alnujoom Almasiya.",
      ar: "اكتشف إندونيسيا: بالي، جاكرتا، الشواطئ الاستوائية والكنوز الثقافية. احجز رحلة أحلامك مع النجوم الماسية.",
      ru: "Откройте Индонезию: Бали, Джакарта, тропические пляжи и культурные сокровища. Забронируйте поездку мечты с Alnujoom Almasiya.",
    },
  },
  malaysia: {
    title: {
      en: "Travel to Malaysia | Tourism Guide | Alnujoom Almasiya",
      ar: "السفر إلى ماليزيا | دليل السياحة | النجوم الماسية",
      ru: "Путешествие в Малайзию | Туристический гид | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Malaysia: Kuala Lumpur, Langkawi, Penang. Modern cities, tropical islands and diverse cuisine with Alnujoom Almasiya.",
      ar: "استكشف ماليزيا: كوالالمبور، لنكاوي، بينانغ. مدن عصرية وجزر استوائية ومأكولات متنوعة مع النجوم الماسية.",
      ru: "Откройте Малайзию: Куала-Лумпур, Лангкави, Пенанг. Современные города, тропические острова и разнообразная кухня.",
    },
  },
  maldives: {
    title: {
      en: "Travel to Maldives | Luxury Getaways | Alnujoom Almasiya",
      ar: "السفر إلى المالديف | رحلات فاخرة | النجوم الماسية",
      ru: "Путешествие на Мальдивы | Роскошный отдых | Alnujoom Almasiya",
    },
    description: {
      en: "Experience the Maldives: overwater villas, crystal lagoons and pristine beaches. Plan luxury escapes with Alnujoom Almasiya.",
      ar: "استمتع بتجربة المالديف: الفلل المائية، البحيرات الكريستالية والشواطئ النقية. خطط لرحلتك الفاخرة مع النجوم الماسية.",
      ru: "Откройте Мальдивы: виллы на воде, кристальные лагуны и нетронутые пляжи. Планируйте роскошный отдых с Alnujoom Almasiya.",
    },
  },
  russia: {
    title: {
      en: "Travel to Russia | Moscow, St. Petersburg | Alnujoom Almasiya",
      ar: "السفر إلى روسيا | موسكو، سانت بطرسبرغ | النجوم الماسية",
      ru: "Путешествие в Россию | Москва, Санкт-Петербург | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Russia: Moscow, St. Petersburg, historic palaces and rich culture. Travel planning with Alnujoom Almasiya.",
      ar: "اكتشف روسيا: موسكو، سانت بطرسبرغ، القصور التاريخية والثقافة الغنية. تخطيط السفر مع النجوم الماسية.",
      ru: "Откройте Россию: Москва, Санкт-Петербург, исторические дворцы и богатая культура. Планируйте путешествие с Alnujoom Almasiya.",
    },
  },
  thailand: {
    title: {
      en: "Travel to Thailand | Bangkok, Phuket | Alnujoom Almasiya",
      ar: "السفر إلى تايلاند | بانكوك، بوكيت | النجوم الماسية",
      ru: "Путешествие в Таиланд | Бангкок, Пхукет | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Thailand: Bangkok, Phuket, Chiang Mai. Tropical beaches, vibrant cities and rich culture with Alnujoom Almasiya.",
      ar: "استكشف تايلاند: بانكوك، بوكيت، تشيانغ ماي. شواطئ استوائية ومدن نابضة وثقافة غنية مع النجوم الماسية.",
      ru: "Откройте Таиланд: Бангкок, Пхукет, Чиангмай. Тропические пляжи, яркие города и богатая культура.",
    },
  },
  turkey: {
    title: {
      en: "Travel to Turkey | Istanbul, Antalya | Alnujoom Almasiya",
      ar: "السفر إلى تركيا | إسطنبول، أنطاليا | النجوم الماسية",
      ru: "Путешествие в Турцию | Стамбул, Анталия | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Turkey: Istanbul, Antalya, Cappadocia. Historic landmarks, beaches and rich heritage with Alnujoom Almasiya.",
      ar: "اكتشف تركيا: إسطنبول، أنطاليا، كابادوكيا. معالم تاريخية وشواطئ وتراث غني مع النجوم الماسية.",
      ru: "Откройте Турцию: Стамбул, Анталия, Каппадокия. Исторические достопримечательности и богатое наследие.",
    },
  },
  uae: {
    title: {
      en: "Travel to UAE | Dubai, Abu Dhabi | Alnujoom Almasiya",
      ar: "السفر إلى الإمارات | دبي، أبوظبي | النجوم الماسية",
      ru: "Путешествие в ОАЭ | Дубай, Абу-Даби | Alnujoom Almasiya",
    },
    description: {
      en: "Discover UAE: Dubai, Abu Dhabi luxury experiences, shopping and modern attractions. Travel from Damascus to Dubai with Alnujoom Almasiya.",
      ar: "اكتشف الإمارات: تجارب فاخرة في دبي وأبوظبي والتسوق والمعالم العصرية. السفر من دمشق إلى دبي مع النجوم الماسية.",
      ru: "Откройте ОАЭ: роскошный отдых в Дубае и Абу-Даби, шопинг и современные достопримечательности.",
    },
  },
};

export const TOURISM_PROGRAMS_SEO: Record<string, SeoEntry> = {
  egypt: {
    title: {
      en: "Egypt Tourism Programs | Tours & Packages | Alnujoom Almasiya",
      ar: "برامج سياحية لمصر | جولات وعروض | النجوم الماسية",
      ru: "Туристические программы в Египет | Туры | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Egypt tourism programs: customized tours, all-inclusive packages and curated experiences from Alnujoom Almasiya.",
      ar: "استكشف برامج السياحة في مصر: جولات مخصصة وعروض شاملة وتجارب مميزة من النجوم الماسية.",
      ru: "Исследуйте туристические программы в Египте: индивидуальные туры, all-inclusive пакеты и эксклюзивный опыт.",
    },
  },
  georgia: {
    title: {
      en: "Georgia Tourism Programs | Tours & Packages | Alnujoom Almasiya",
      ar: "برامج سياحية لجورجيا | جولات وعروض | النجوم الماسية",
      ru: "Туристические программы в Грузию | Туры | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Georgia tourism programs: tailored tours, mountain adventures and cultural experiences with Alnujoom Almasiya.",
      ar: "اكتشف برامج السياحة في جورجيا: جولات مخصصة ومغامرات جبلية وتجارب ثقافية مع النجوم الماسية.",
      ru: "Откройте туристические программы в Грузии: туры на заказ, горные приключения и культурный опыт.",
    },
  },
  indonesia: {
    title: {
      en: "Indonesia Tourism Programs | Bali Tours | Alnujoom Almasiya",
      ar: "برامج سياحية لإندونيسيا | جولات بالي | النجوم الماسية",
      ru: "Туристические программы в Индонезию | Туры на Бали | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Indonesia tourism programs: Bali getaways, island hopping and curated cultural experiences.",
      ar: "اكتشف برامج السياحة في إندونيسيا: عطلات بالي والقفز بين الجزر والتجارب الثقافية المختارة.",
      ru: "Откройте туристические программы в Индонезии: отдых на Бали, путешествия между островами.",
    },
  },
  malaysia: {
    title: {
      en: "Malaysia Tourism Programs | Tours & Packages | Alnujoom Almasiya",
      ar: "برامج سياحية لماليزيا | جولات وعروض | النجوم الماسية",
      ru: "Туристические программы в Малайзию | Туры | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Malaysia tourism programs: Kuala Lumpur, Langkawi and curated travel packages with Alnujoom Almasiya.",
      ar: "استكشف برامج السياحة في ماليزيا: كوالالمبور ولنكاوي وباقات سفر مختارة مع النجوم الماسية.",
      ru: "Исследуйте туристические программы в Малайзии: Куала-Лумпур, Лангкави и эксклюзивные туры.",
    },
  },
  maldives: {
    title: {
      en: "Maldives Tourism Programs | Luxury Tours | Alnujoom Almasiya",
      ar: "برامج سياحية للمالديف | جولات فاخرة | النجوم الماسية",
      ru: "Туристические программы на Мальдивы | Роскошные туры | Alnujoom Almasiya",
    },
    description: {
      en: "Indulge in Maldives tourism programs: luxury resorts, overwater villas and dreamy island experiences.",
      ar: "استمتع ببرامج السياحة في المالديف: المنتجعات الفاخرة والفلل المائية وتجارب الجزر الحالمة.",
      ru: "Насладитесь туристическими программами на Мальдивах: роскошные курорты и виллы на воде.",
    },
  },
  thailand: {
    title: {
      en: "Thailand Tourism Programs | Tours & Packages | Alnujoom Almasiya",
      ar: "برامج سياحية لتايلاند | جولات وعروض | النجوم الماسية",
      ru: "Туристические программы в Таиланд | Туры | Alnujoom Almasiya",
    },
    description: {
      en: "Discover Thailand tourism programs: Bangkok, Phuket, island tours and authentic cultural experiences.",
      ar: "اكتشف برامج السياحة في تايلاند: بانكوك وبوكيت وجولات الجزر والتجارب الثقافية الأصيلة.",
      ru: "Откройте туристические программы в Таиланде: Бангкок, Пхукет, островные туры и культурный опыт.",
    },
  },
  turkey: {
    title: {
      en: "Turkey Tourism Programs | Tours & Packages | Alnujoom Almasiya",
      ar: "برامج سياحية لتركيا | جولات وعروض | النجوم الماسية",
      ru: "Туристические программы в Турцию | Туры | Alnujoom Almasiya",
    },
    description: {
      en: "Explore Turkey tourism programs: Istanbul, Cappadocia, Antalya and curated heritage experiences.",
      ar: "استكشف برامج السياحة في تركيا: إسطنبول وكابادوكيا وأنطاليا وتجارب التراث المختارة.",
      ru: "Исследуйте туристические программы в Турции: Стамбул, Каппадокия, Анталия.",
    },
  },
  uae: {
    title: {
      en: "UAE Tourism Programs | Dubai Tours | Alnujoom Almasiya",
      ar: "برامج سياحية للإمارات | جولات دبي | النجوم الماسية",
      ru: "Туристические программы в ОАЭ | Туры в Дубай | Alnujoom Almasiya",
    },
    description: {
      en: "Discover UAE tourism programs: Dubai luxury tours, Abu Dhabi experiences and curated desert adventures.",
      ar: "اكتشف برامج السياحة في الإمارات: جولات دبي الفاخرة وتجارب أبوظبي ومغامرات الصحراء.",
      ru: "Откройте туристические программы в ОАЭ: роскошные туры в Дубае, Абу-Даби и приключения в пустыне.",
    },
  },
};

export const SERVICES_SEO: Record<
  string,
  SeoEntry & { schemaType?: "Service" | "TaxiService" | "InsuranceAgency" }
> = {
  airLines: {
    title: {
      en: "Flight Booking Services | Airline Reservations | Alnujoom Almasiya",
      ar: "خدمات حجز الطيران | حجوزات شركات الطيران | النجوم الماسية",
      ru: "Бронирование авиабилетов | Услуги авиакомпаний | Alnujoom Almasiya",
    },
    description: {
      en: "Book flights worldwide with Alnujoom Almasiya. Best fares for Dubai, Damascus and global destinations across major airlines.",
      ar: "احجز رحلات الطيران حول العالم مع النجوم الماسية. أفضل الأسعار لدبي ودمشق والوجهات العالمية مع كبرى شركات الطيران.",
      ru: "Бронируйте авиабилеты по всему миру с Alnujoom Almasiya. Лучшие тарифы для Дубая, Дамаска и других направлений.",
    },
  },
  hotelsReservation: {
    title: {
      en: "Hotel Reservation Services | Worldwide Bookings | Alnujoom Almasiya",
      ar: "خدمات حجز الفنادق | حجوزات عالمية | النجوم الماسية",
      ru: "Бронирование отелей | Услуги по всему миру | Alnujoom Almasiya",
    },
    description: {
      en: "Reserve hotels worldwide with Alnujoom Almasiya. Best rates for Dubai, Damascus and international destinations.",
      ar: "احجز الفنادق حول العالم مع النجوم الماسية. أفضل الأسعار لدبي ودمشق والوجهات الدولية.",
      ru: "Бронируйте отели по всему миру с Alnujoom Almasiya. Лучшие цены для Дубая, Дамаска и международных направлений.",
    },
  },
  "papers-Delivery": {
    title: {
      en: "Document Delivery Service | Dubai to Damascus | Alnujoom Almasiya",
      ar: "خدمة توصيل الأوراق والوثائق | دبي إلى دمشق | النجوم الماسية",
      ru: "Доставка документов | Дубай — Дамаск | Alnujoom Almasiya",
    },
    description: {
      en: "Secure document and paper delivery between Dubai and Damascus. Trusted handling by Alnujoom Almasiya.",
      ar: "توصيل آمن للوثائق والأوراق بين دبي ودمشق. تعامل موثوق من النجوم الماسية.",
      ru: "Безопасная доставка документов между Дубаем и Дамаском. Надёжное обслуживание от Alnujoom Almasiya.",
    },
  },
  taxis: {
    title: {
      en: "Airport Transfer Services | Taxi Booking | Alnujoom Almasiya",
      ar: "خدمات نقل المطار | حجز سيارات الأجرة | النجوم الماسية",
      ru: "Трансфер из аэропорта | Заказ такси | Alnujoom Almasiya",
    },
    description: {
      en: "Book airport transfers and taxi services worldwide with Alnujoom Almasiya. Reliable transport to and from the airport.",
      ar: "احجز خدمات نقل المطار وسيارات الأجرة حول العالم مع النجوم الماسية. نقل موثوق من وإلى المطار.",
      ru: "Заказывайте трансферы и такси по всему миру с Alnujoom Almasiya. Надёжный транспорт от и до аэропорта.",
    },
    schemaType: "TaxiService",
  },
  tourismProgarams: {
    title: {
      en: "Tourism Programs | Custom Tour Packages | Alnujoom Almasiya",
      ar: "البرامج السياحية | باقات الجولات المخصصة | النجوم الماسية",
      ru: "Туристические программы | Индивидуальные туры | Alnujoom Almasiya",
    },
    description: {
      en: "Explore curated tourism programs and custom tour packages with Alnujoom Almasiya for unforgettable travel experiences.",
      ar: "استكشف البرامج السياحية المختارة وباقات الجولات المخصصة مع النجوم الماسية لتجارب سفر لا تُنسى.",
      ru: "Исследуйте подобранные туристические программы и индивидуальные туры с Alnujoom Almasiya.",
    },
  },
  tours: {
    title: {
      en: "Tourist Destinations | Country Guides | Alnujoom Almasiya",
      ar: "الوجهات السياحية | أدلة الدول | النجوم الماسية",
      ru: "Туристические направления | Гиды по странам | Alnujoom Almasiya",
    },
    description: {
      en: "Discover top tourist destinations worldwide with detailed country guides from Alnujoom Almasiya.",
      ar: "اكتشف أهم الوجهات السياحية حول العالم مع أدلة تفصيلية للدول من النجوم الماسية.",
      ru: "Откройте лучшие туристические направления с подробными гидами по странам от Alnujoom Almasiya.",
    },
  },
  travelinsurance: {
    title: {
      en: "Travel Insurance Services | Coverage Plans | Alnujoom Almasiya",
      ar: "خدمات تأمين السفر | خطط التغطية | النجوم الماسية",
      ru: "Туристическое страхование | Планы покрытия | Alnujoom Almasiya",
    },
    description: {
      en: "Get comprehensive travel insurance plans from Alnujoom Almasiya. Coverage for medical, baggage and trip cancellation.",
      ar: "احصل على خطط تأمين السفر الشاملة من النجوم الماسية. تغطية طبية وأمتعة وإلغاء رحلات.",
      ru: "Получите комплексное туристическое страхование от Alnujoom Almasiya. Покрытие медицинских расходов, багажа и отмены поездки.",
    },
    schemaType: "InsuranceAgency",
  },
  visas: {
    title: {
      en: "Visa Assistance Services | Travel Visas | Alnujoom Almasiya",
      ar: "خدمات استخراج التأشيرات | تأشيرات السفر | النجوم الماسية",
      ru: "Помощь с визами | Туристические визы | Alnujoom Almasiya",
    },
    description: {
      en: "Expert visa assistance for UAE, Schengen, and worldwide destinations. Hassle-free applications with Alnujoom Almasiya.",
      ar: "مساعدة احترافية للحصول على تأشيرات الإمارات وشنغن والوجهات العالمية. إجراءات سهلة مع النجوم الماسية.",
      ru: "Экспертная помощь с визами в ОАЭ, Шенген и другие страны. Простое оформление с Alnujoom Almasiya.",
    },
  },
};

export const AIRLINES_SEO: Record<string, SeoEntry> = {
  emirates: {
    title: {
      en: "Emirates Airline | Flight Bookings | Alnujoom Almasiya",
      ar: "طيران الإمارات | حجوزات الرحلات | النجوم الماسية",
      ru: "Emirates Airline | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Emirates flights from Dubai to 150+ global destinations. Premium service with Alnujoom Almasiya.",
      ar: "احجز رحلات طيران الإمارات من دبي إلى أكثر من 150 وجهة عالمية. خدمة مميزة مع النجوم الماسية.",
      ru: "Бронируйте рейсы Emirates из Дубая в 150+ направлений. Премиум-сервис с Alnujoom Almasiya.",
    },
  },
  "etihad-airways": {
    title: {
      en: "Etihad Airways | Flight Bookings | Alnujoom Almasiya",
      ar: "الاتحاد للطيران | حجوزات الرحلات | النجوم الماسية",
      ru: "Etihad Airways | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Etihad Airways flights from Abu Dhabi worldwide. National carrier of the UAE with Alnujoom Almasiya.",
      ar: "احجز رحلات الاتحاد للطيران من أبوظبي حول العالم. الناقل الوطني للإمارات مع النجوم الماسية.",
      ru: "Бронируйте рейсы Etihad Airways из Абу-Даби. Национальный перевозчик ОАЭ с Alnujoom Almasiya.",
    },
  },
  qatarAirlines: {
    title: {
      en: "Qatar Airways | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط القطرية | حجوزات الرحلات | النجوم الماسية",
      ru: "Qatar Airways | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Qatar Airways flights worldwide. Award-winning airline based in Doha with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط القطرية حول العالم. شركة الطيران الحائزة على جوائز ومقرها الدوحة مع النجوم الماسية.",
      ru: "Бронируйте рейсы Qatar Airways по всему миру. Авиакомпания из Дохи с Alnujoom Almasiya.",
    },
  },
  Saudia: {
    title: {
      en: "Saudia Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط السعودية | حجوزات الرحلات | النجوم الماسية",
      ru: "Saudia Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Saudia Airlines flights from Saudi Arabia worldwide. National carrier with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط السعودية من المملكة العربية السعودية حول العالم. الناقل الوطني مع النجوم الماسية.",
      ru: "Бронируйте рейсы Saudia Airlines из Саудовской Аравии. Национальный перевозчик с Alnujoom Almasiya.",
    },
  },
  turkishairlines: {
    title: {
      en: "Turkish Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط التركية | حجوزات الرحلات | النجوم الماسية",
      ru: "Turkish Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Turkish Airlines flights worldwide. Largest network of any airline with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط التركية حول العالم. أكبر شبكة طيران مع النجوم الماسية.",
      ru: "Бронируйте рейсы Turkish Airlines по всему миру. Крупнейшая сеть с Alnujoom Almasiya.",
    },
  },
  "air-arabia": {
    title: {
      en: "Air Arabia | Flight Bookings | Alnujoom Almasiya",
      ar: "العربية للطيران | حجوزات الرحلات | النجوم الماسية",
      ru: "Air Arabia | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Air Arabia flights from Sharjah. Low-cost airline with Alnujoom Almasiya.",
      ar: "احجز رحلات العربية للطيران من الشارقة. شركة طيران اقتصادية مع النجوم الماسية.",
      ru: "Бронируйте рейсы Air Arabia из Шарджи. Бюджетная авиакомпания с Alnujoom Almasiya.",
    },
  },
  FlyDubai: {
    title: {
      en: "FlyDubai | Flight Bookings | Alnujoom Almasiya",
      ar: "فلاي دبي | حجوزات الرحلات | النجوم الماسية",
      ru: "FlyDubai | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book FlyDubai flights worldwide. Low-cost Dubai-based airline with Alnujoom Almasiya.",
      ar: "احجز رحلات فلاي دبي حول العالم. شركة طيران اقتصادية مقرها دبي مع النجوم الماسية.",
      ru: "Бронируйте рейсы FlyDubai по всему миру. Бюджетная авиакомпания из Дубая с Alnujoom Almasiya.",
    },
  },
  FlyChamAirlines: {
    title: {
      en: "Fly Cham Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "طيران فلاي شام | حجوزات الرحلات | النجوم الماسية",
      ru: "Fly Cham Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Fly Cham Airlines flights. Syrian-based airline with Alnujoom Almasiya as authorized agent.",
      ar: "احجز رحلات طيران فلاي شام. شركة طيران سورية والنجوم الماسية الوكيل المعتمد.",
      ru: "Бронируйте рейсы Fly Cham Airlines. Сирийская авиакомпания с Alnujoom Almasiya как авторизованный агент.",
    },
  },
  "syrian-air": {
    title: {
      en: "Syrian Air | Flight Bookings | Alnujoom Almasiya",
      ar: "السورية للطيران | حجوزات الرحلات | النجوم الماسية",
      ru: "Syrian Air | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Syrian Air flights. National carrier of Syria with Alnujoom Almasiya as authorized agent.",
      ar: "احجز رحلات السورية للطيران. الناقل الوطني لسوريا والنجوم الماسية الوكيل المعتمد.",
      ru: "Бронируйте рейсы Syrian Air. Национальный перевозчик Сирии с Alnujoom Almasiya.",
    },
  },
  EgyptAir: {
    title: {
      en: "EgyptAir | Flight Bookings | Alnujoom Almasiya",
      ar: "مصر للطيران | حجوزات الرحلات | النجوم الماسية",
      ru: "EgyptAir | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book EgyptAir flights worldwide. National carrier of Egypt with Alnujoom Almasiya.",
      ar: "احجز رحلات مصر للطيران حول العالم. الناقل الوطني لمصر مع النجوم الماسية.",
      ru: "Бронируйте рейсы EgyptAir по всему миру. Национальный перевозчик Египта.",
    },
  },
  "middle-east-airlines": {
    title: {
      en: "Middle East Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "طيران الشرق الأوسط | حجوزات الرحلات | النجوم الماسية",
      ru: "Middle East Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Middle East Airlines flights. National carrier of Lebanon with Alnujoom Almasiya.",
      ar: "احجز رحلات طيران الشرق الأوسط. الناقل الوطني للبنان مع النجوم الماسية.",
      ru: "Бронируйте рейсы Middle East Airlines. Национальный перевозчик Ливана.",
    },
  },
  "jordan-air": {
    title: {
      en: "Royal Jordanian | Flight Bookings | Alnujoom Almasiya",
      ar: "الملكية الأردنية | حجوزات الرحلات | النجوم الماسية",
      ru: "Royal Jordanian | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Royal Jordanian flights. National carrier of Jordan with Alnujoom Almasiya.",
      ar: "احجز رحلات الملكية الأردنية. الناقل الوطني للأردن مع النجوم الماسية.",
      ru: "Бронируйте рейсы Royal Jordanian. Национальный перевозчик Иордании.",
    },
  },
  "indian-air": {
    title: {
      en: "Air India | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط الهندية | حجوزات الرحلات | النجوم الماسية",
      ru: "Air India | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Air India flights worldwide. National carrier of India with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط الهندية حول العالم. الناقل الوطني للهند مع النجوم الماسية.",
      ru: "Бронируйте рейсы Air India по всему миру. Национальный перевозчик Индии.",
    },
  },
  "france-air": {
    title: {
      en: "Air France | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط الجوية الفرنسية | حجوزات الرحلات | النجوم الماسية",
      ru: "Air France | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Air France flights worldwide. National carrier of France with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط الجوية الفرنسية حول العالم. الناقل الوطني لفرنسا مع النجوم الماسية.",
      ru: "Бронируйте рейсы Air France по всему миру. Национальный перевозчик Франции.",
    },
  },
  "singapore-airlines": {
    title: {
      en: "Singapore Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط الجوية السنغافورية | حجوزات الرحلات | النجوم الماسية",
      ru: "Singapore Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Singapore Airlines flights worldwide. World-class airline with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط الجوية السنغافورية حول العالم. شركة طيران عالمية مع النجوم الماسية.",
      ru: "Бронируйте рейсы Singapore Airlines по всему миру. Авиакомпания мирового класса.",
    },
  },
  "British-Airways": {
    title: {
      en: "British Airways | Flight Bookings | Alnujoom Almasiya",
      ar: "الخطوط الجوية البريطانية | حجوزات الرحلات | النجوم الماسية",
      ru: "British Airways | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book British Airways flights worldwide. UK flag carrier with Alnujoom Almasiya.",
      ar: "احجز رحلات الخطوط الجوية البريطانية حول العالم. الناقل الوطني للمملكة المتحدة مع النجوم الماسية.",
      ru: "Бронируйте рейсы British Airways по всему миру. Национальный перевозчик Великобритании.",
    },
  },
  "pegasus-airlines": {
    title: {
      en: "Pegasus Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "طيران بيغاسوس | حجوزات الرحلات | النجوم الماسية",
      ru: "Pegasus Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book Pegasus Airlines flights. Turkish low-cost airline with Alnujoom Almasiya.",
      ar: "احجز رحلات طيران بيغاسوس. شركة طيران تركية اقتصادية مع النجوم الماسية.",
      ru: "Бронируйте рейсы Pegasus Airlines. Турецкая бюджетная авиакомпания с Alnujoom Almasiya.",
    },
  },
  s7airlines: {
    title: {
      en: "S7 Airlines | Flight Bookings | Alnujoom Almasiya",
      ar: "طيران S7 | حجوزات الرحلات | النجوم الماسية",
      ru: "S7 Airlines | Бронирование рейсов | Alnujoom Almasiya",
    },
    description: {
      en: "Book S7 Airlines flights. Major Russian airline with Alnujoom Almasiya.",
      ar: "احجز رحلات طيران S7. أحد كبرى شركات الطيران الروسية مع النجوم الماسية.",
      ru: "Бронируйте рейсы S7 Airlines. Одна из крупнейших российских авиакомпаний.",
    },
  },
};
