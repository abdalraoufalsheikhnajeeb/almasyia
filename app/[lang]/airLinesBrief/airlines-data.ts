import type { Locale } from "../../../i18n-config";

export type LocalizedText = Record<Locale, string>;

export type AirlineSection = {
  heading: LocalizedText;
  body: LocalizedText;
};

export type AirlineInfoRow = {
  label: LocalizedText;
  value: LocalizedText | string;
  href?: string;
};

export type AirlineData = {
  slug: string;
  name: LocalizedText;
  imageSrc: string;
  imageAlt: LocalizedText;
  intro: LocalizedText;
  sections: AirlineSection[];
  info: AirlineInfoRow[];
  website: string;
  customerServicePhone?: string;
  iataCode?: string;
  icaoCode?: string;
  foundedYear?: number;
  headquarters?: string;
};

const labels = {
  history: {
    en: "History",
    ar: "التاريخ",
    ru: "История",
  },
  fleet: {
    en: "Fleet",
    ar: "الأسطول",
    ru: "Флот",
  },
  destinations: {
    en: "Destinations",
    ar: "الوجهات",
    ru: "Направления",
  },
  services: {
    en: "Services",
    ar: "الخدمات",
    ru: "Услуги",
  },
  inFlight: {
    en: "In-Flight Experience",
    ar: "تجربة السفر على متن الطائرة",
    ru: "Впечатления от полёта",
  },
  frequentFlyer: {
    en: "Frequent Flyer Program",
    ar: "برنامج المسافر الدائم",
    ru: "Программа для часто летающих пассажиров",
  },
  booking: {
    en: "Booking and Customer Service",
    ar: "الحجز وخدمة العملاء",
    ru: "Бронирование и обслуживание клиентов",
  },
  csr: {
    en: "Corporate Social Responsibility",
    ar: "المسؤولية الاجتماعية للشركات",
    ru: "Корпоративная социальная ответственность",
  },
  contact: {
    en: "Contact Information",
    ar: "معلومات الاتصال",
    ru: "Контактная информация",
  },
  info: {
    en: "Airline Information",
    ar: "معلومات عن شركة الطيران",
    ru: "Информация об авиакомпании",
  },
  iataCode: {
    en: "IATA Code",
    ar: "رمز إياتا",
    ru: "Код IATA",
  },
  icaoCode: {
    en: "ICAO Code",
    ar: "رمز إيكاو",
    ru: "Код ICAO",
  },
  mainCompany: {
    en: "Main Company",
    ar: "الشركة الرئيسية",
    ru: "Основная компания",
  },
  headquarters: {
    en: "Company Headquarters",
    ar: "مقر الشركة",
    ru: "Штаб-квартира компании",
  },
  numberOfDestinations: {
    en: "Number of destinations",
    ar: "عدد الوجهات",
    ru: "Количество направлений",
  },
  yearOfOperation: {
    en: "Year of operation",
    ar: "سنة التشغيل",
    ru: "Год основания",
  },
  slogan: {
    en: "Slogan",
    ar: "الشعار",
    ru: "Слоган",
  },
  alliances: {
    en: "Alliances",
    ar: "التحالفات",
    ru: "Альянсы",
  },
  customerServiceNumber: {
    en: "Customer Service Number",
    ar: "رقم خدمة العملاء",
    ru: "Номер службы поддержки клиентов",
  },
  website: {
    en: "Website",
    ar: "الموقع",
    ru: "Веб-сайт",
  },
};

export const labelsExport = labels;

export const airlines: Record<string, AirlineData> = {
  emirates: {
    slug: "emirates",
    name: {
      en: "Emirates",
      ar: "طيران الإمارات",
      ru: "Emirates",
    },
    imageSrc: "/images/emirates.webp",
    imageAlt: {
      en: "Emirates",
      ar: "طيران الإمارات",
      ru: "Emirates",
    },
    intro: {
      en: "Emirates is a state-owned airline based in Dubai, United Arab Emirates. Founded in 1985, it operates over 3,600 flights per week to more than 150 destinations in 80 countries across six continents.",
      ar: "طيران الإمارات هي شركة طيران مملوكة للدولة ومقرها في دبي، الإمارات العربية المتحدة. تأسست في عام 1985، وتقوم بتشغيل أكثر من 3600 رحلة أسبوعياً إلى أكثر من 150 وجهة في 80 دولة عبر ست قارات.",
      ru: "Emirates — государственная авиакомпания, базирующаяся в Дубае, Объединенные Арабские Эмираты. Основанная в 1985 году, она выполняет более 3600 рейсов в неделю в более чем 150 направлений в 80 странах на шести континентах.",
    },
    sections: [
      {
        heading: labels.history,
        body: {
          en: "Established in 1985, Emirates has grown to become one of the world largest and most prestigious airlines, renowned for its commitment to luxury and service excellence. The airline is a subsidiary of The Emirates Group, owned by the government of Dubai.",
          ar: "تأسست طيران الإمارات في عام 1985 ونمت لتصبح واحدة من أكبر وأشهر شركات الطيران في العالم، معروفة بالتزامها بالرفاهية والتميز في الخدمة. طيران الإمارات هي شركة تابعة لمجموعة الإمارات، المملوكة لحكومة دبي.",
          ru: "Основанная в 1985 году, Emirates выросла до одной из крупнейших и престижных авиакомпаний в мире, известной своим стремлением к роскоши и превосходному обслуживанию. Авиакомпания является дочерней компанией The Emirates Group, принадлежащей правительству Дубая.",
        },
      },
      {
        heading: labels.fleet,
        body: {
          en: "The airline fleet includes a mix of modern Airbus and Boeing aircraft, such as the Airbus A380 and Boeing 777. Emirates is known for maintaining one of the youngest and most technologically advanced fleets in the industry.",
          ar: "يتكون أسطول الشركة من مزيج من طائرات إيرباص وبوينغ الحديثة، مثل إيرباص A380 وبوينغ 777. تشتهر طيران الإمارات بالحفاظ على أحد أحدث وأكثر الأساطيل تطوراً من الناحية التكنولوجية في الصناعة.",
          ru: "Флот авиакомпании включает в себя современные самолеты Airbus и Boeing, такие как Airbus A380 и Boeing 777. Emirates известна тем, что поддерживает один из самых молодых и технологически продвинутых флотов в отрасли.",
        },
      },
      {
        heading: labels.destinations,
        body: {
          en: "Emirates serves an extensive network of destinations, covering major cities and popular tourist spots across the Middle East, Africa, Europe, Asia, the Americas, and Oceania. Key destinations include Dubai, London, New York, Sydney, and Tokyo.",
          ar: "تخدم طيران الإمارات شبكة واسعة من الوجهات، تشمل المدن الرئيسية والمواقع السياحية الشهيرة عبر الشرق الأوسط وأفريقيا وأوروبا وآسيا والأمريكيتين وأوقيانوسيا. تشمل الوجهات الرئيسية دبي ولندن ونيويورك وسيدني وطوكيو.",
          ru: "Emirates обслуживает обширную сеть направлений, охватывающих крупные города и популярные туристические места на Ближнем Востоке, в Африке, Европе, Азии, Америке и Океании. Ключевые направления включают Дубай, Лондон, Нью-Йорк, Сидней и Токио.",
        },
      },
      {
        heading: labels.services,
        body: {
          en: "The airline offers a variety of services to ensure a high-quality travel experience, including award-winning in-flight entertainment, gourmet meals, and comfortable seating. First and Business Class passengers enjoy additional perks such as lie-flat seats, premium dining, and access to exclusive lounges.",
          ar: "تقدم الشركة مجموعة متنوعة من الخدمات لضمان تجربة سفر عالية الجودة، بما في ذلك الترفيه على متن الطائرة الحائز على جوائز، والوجبات الفاخرة، والمقاعد المريحة. يستمتع ركاب الدرجة الأولى ورجال الأعمال بمزايا إضافية مثل المقاعد التي تتحول إلى سرير وتناول الطعام الفاخر والوصول إلى الصالات الحصرية.",
          ru: "Авиакомпания предлагает разнообразные услуги для обеспечения высокого качества путешествий, включая отмеченные наградами развлекательные программы на борту, изысканные блюда и комфортные сиденья. Пассажиры первого и бизнес-класса пользуются дополнительными преимуществами, такими как кресла-кровати, премиальное питание и доступ в эксклюзивные залы ожидания.",
        },
      },
      {
        heading: labels.inFlight,
        body: {
          en: "Passengers can enjoy a state-of-the-art in-flight entertainment system with a wide selection of movies, TV shows, music, and games. The airline also offers Wi-Fi on many of its flights, enabling passengers to stay connected.",
          ar: "يمكن للركاب الاستمتاع بنظام ترفيهي حديث على متن الطائرة مع مجموعة واسعة من الأفلام والبرامج التلفزيونية والموسيقى والألعاب. تقدم الشركة أيضاً خدمة الواي فاي على العديد من رحلاتها، مما يتيح للركاب البقاء على اتصال.",
          ru: "Пассажиры могут наслаждаться современным развлекательным комплексом на борту с широким выбором фильмов, телешоу, музыки и игр. Авиакомпания также предлагает Wi-Fi на многих своих рейсах, что позволяет пассажирам оставаться на связи.",
        },
      },
      {
        heading: labels.frequentFlyer,
        body: {
          en: "Emirates frequent flyer program, Skywards, rewards loyal customers with miles that can be redeemed for flights, upgrades, and other benefits. Members enjoy perks such as priority check-in, extra baggage allowance, and access to exclusive lounges.",
          ar: "يكافئ برنامج المسافر الدائم لطيران الإمارات، سكاي واردز، العملاء المخلصين بأميال يمكن استبدالها برحلات جوية وترقيات وغيرها من الفوائد. يتمتع الأعضاء بمزايا مثل أولوية التسجيل، وسعة أمتعة إضافية، والوصول إلى الصالات الحصرية.",
          ru: "Программа для часто летающих пассажиров Emirates, Skywards, вознаграждает лояльных клиентов милями, которые можно обменять на полеты, апгрейды и другие преимущества. Члены программы пользуются такими привилегиями, как приоритетная регистрация, дополнительная норма багажа и доступ в эксклюзивные залы ожидания.",
        },
      },
      {
        heading: labels.booking,
        body: {
          en: "Booking flights with Emirates is easy through their official website, mobile app, and authorized travel agents. The customer service team is available to assist with reservations, inquiries, and special requests. The airline also offers convenient online check-in and mobile boarding pass options.",
          ar: "يمكن حجز الرحلات الجوية مع طيران الإمارات بسهولة من خلال موقعها الرسمي على الإنترنت وتطبيق الهاتف ووكلاء السفر المعتمدين. تتوفر فرق خدمة العملاء للمساعدة في الحجوزات والاستفسارات والطلبات الخاصة. تقدم الشركة أيضًا خيارات تسجيل الوصول عبر الإنترنت وتصاريح الصعود المتنقلة.",
          ru: "Забронировать рейсы Emirates можно легко через их официальный веб-сайт, мобильное приложение и авторизованных туристических агентов. Команда обслуживания клиентов доступна для помощи с бронированиями, запросами и специальными просьбами. Авиакомпания также предлагает удобные варианты онлайн-регистрации и мобильные посадочные талоны.",
        },
      },
      {
        heading: labels.csr,
        body: {
          en: "Emirates is committed to sustainable practices and supporting local communities. The airline engages in various CSR initiatives, including environmental conservation efforts, education programs, and charitable partnerships.",
          ar: "تلتزم طيران الإمارات بالممارسات المستدامة ودعم المجتمعات المحلية. تشارك الشركة في مختلف المبادرات الخاصة بالمسؤولية الاجتماعية للشركات، بما في ذلك جهود الحفاظ على البيئة وبرامج التعليم والشراكات الخيرية.",
          ru: "Emirates привержена устойчивым практикам и поддержке местных сообществ. Авиакомпания участвует в различных инициативах КСО, включая усилия по сохранению окружающей среды, образовательные программы и благотворительные партнерства.",
        },
      },
      {
        heading: labels.contact,
        body: {
          en: "For more information or to book a flight, visit the official Emirates website or contact their customer service at +971545866066. Follow them on social media for the latest updates and promotions.",
          ar: "لمزيد من المعلومات أو لحجز رحلة، قم بزيارة الموقع الرسمي لطيران الإمارات أو اتصل بخدمة العملاء على الرقم +971545866066 تابعهم على وسائل التواصل الاجتماعي للحصول على آخر التحديثات والعروض الترويجية.",
          ru: "Для получения дополнительной информации или бронирования рейса посетите официальный веб-сайт Emirates или свяжитесь с их службой поддержки клиентов по телефону +971545866066 Следите за ними в социальных сетях для получения последних новостей и акций.",
        },
      },
    ],
    info: [
      { label: labels.iataCode, value: "EK" },
      { label: labels.icaoCode, value: "UAE" },
      {
        label: labels.mainCompany,
        value: { en: "Emirates", ar: "طيران الإمارات", ru: "Emirates" },
      },
      {
        label: labels.headquarters,
        value: {
          en: "Dubai, United Arab Emirates",
          ar: "دبي، الإمارات العربية المتحدة",
          ru: "Дубай, Объединенные Арабские Эмираты",
        },
      },
      {
        label: labels.numberOfDestinations,
        value: {
          en: "157 destinations",
          ar: "157 وجهة",
          ru: "157 направлений",
        },
      },
      { label: labels.yearOfOperation, value: "1985" },
      {
        label: labels.slogan,
        value: {
          en: "Fly Better",
          ar: "سافر أفضل",
          ru: "Летайте лучше",
        },
      },
      {
        label: labels.alliances,
        value: {
          en: "No alliance",
          ar: "بدون تحالف",
          ru: "Нет альянсов",
        },
      },
      {
        label: labels.customerServiceNumber,
        value: "+971545866066",
        href: "tel:+971545866066",
      },
      {
        label: labels.website,
        value: "https://www.emirates.com",
        href: "https://www.emirates.com",
      },
    ],
    website: "https://www.emirates.com",
    customerServicePhone: "+971545866066",
    iataCode: "EK",
    icaoCode: "UAE",
    foundedYear: 1985,
    headquarters: "Dubai, United Arab Emirates",
  },
};
