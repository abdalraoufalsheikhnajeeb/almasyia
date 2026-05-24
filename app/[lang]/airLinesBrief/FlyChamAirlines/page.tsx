import Image from "next/image";
import type { Metadata } from "next";

import { Locale } from "../../../../i18n-config";
import { buildPageMetadata } from "../../seo";
import { AIRLINES_SEO } from "../../seo-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/airLinesBrief/FlyChamAirlines",
    title: AIRLINES_SEO.FlyChamAirlines.title,
    description: AIRLINES_SEO.FlyChamAirlines.description,
    imageUrl: "/images/flyCham.webp",
  });
}

/**
 * Page content — verified May 2026 from:
 *  - https://en.wikipedia.org/wiki/Fly_Cham
 *  - https://en.wikipedia.org/wiki/Cham_Wings_Airlines
 *  - https://www.ch-aviation.com/news/154920-syrias-fly-cham-launches-using-cham-wings-as-foundation
 *
 *  Key facts:
 *   • Fly Cham is a NEW airline founded May 2025 by a Syrian–Emirati JV.
 *   • It took over the assets of Cham Wings Airlines, which ceased ops 5 June 2025.
 *   • First Fly Cham flight: 11 June 2025.
 *   • IATA: XH  |  ICAO: FYC  |  Callsign: FLYCHAM
 *   • Hubs: Damascus (DAM) and Aleppo (ALP).
 *   • Fleet: 5 × Airbus A320-200 (single class regional configuration).
 *   • Official site: flycham.com
 */

type AirlineCopy = {
  title: string;
  alt: string;
  intro: string;
  historyH: string;
  history: string;
  fleetH: string;
  fleet: string;
  destinationsH: string;
  destinations: string;
  servicesH: string;
  services: string;
  bookingH: string;
  booking: string;
  contactH: string;
  contact: string;
  infoH: string;
  rows: { label: string; value: React.ReactNode }[];
};

const COMMON_ROWS = (locale: Locale, labels: Record<string, string>) => [
  { label: labels.iata, value: "XH" },
  { label: labels.icao, value: "FYC" },
  { label: labels.callsign, value: "FLYCHAM" },
  { label: labels.parent, value: "Fly Cham" },
  { label: labels.hq, value: labels.hqValue },
  { label: labels.hubs, value: labels.hubsValue },
  { label: labels.fleetCount, value: labels.fleetValue },
  { label: labels.founded, value: labels.foundedValue },
  { label: labels.predecessor, value: labels.predecessorValue },
  {
    label: labels.website,
    value: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://flycham.com/"
        className="text-litePrimary underline-offset-2 hover:underline"
      >
        flycham.com
      </a>
    ),
  },
];

const buildCopy = (lang: Locale): AirlineCopy => {
  if (lang === "ar") {
    const rowLabels = {
      iata: "رمز IATA",
      icao: "رمز ICAO",
      callsign: "نداء الراديو",
      parent: "اسم الشركة",
      hq: "المقر الرئيسي",
      hqValue: "دمشق، سوريا",
      hubs: "المحاور التشغيلية",
      hubsValue: "مطار دمشق الدولي ومطار حلب الدولي",
      fleetCount: "حجم الأسطول",
      fleetValue: "5 طائرات إيرباص A320-200",
      founded: "تاريخ التأسيس",
      foundedValue: "أيار / مايو 2025",
      predecessor: "الشركة السابقة",
      predecessorValue: "أجنحة الشام (شام وينغز) — توقفت عن العمل في 5 حزيران 2025",
      website: "الموقع الرسمي",
    };
    return {
      title: "طيران فلاي شام (Fly Cham)",
      alt: "طيران فلاي شام",
      intro:
        "فلاي شام هي شركة طيران سورية خاصة تأسست في أيار 2025 بتحالف استثماري سوري–إماراتي، واستحوذت على أصول شركة أجنحة الشام (شام وينغز) بعد توقفها عن العمل. أُقلعت أول رحلة لفلاي شام في 11 حزيران 2025، وتعمل من مطاري دمشق وحلب الدوليَّيْن مع التركيز على ربط سوريا بأبرز وجهات الشرق الأوسط والمنطقة.",
      historyH: "نبذة وتاريخ",
      history:
        "وُلدت فلاي شام كاستمرار تشغيلي لـ«أجنحة الشام» التي تأسست عام 2006 وأوقفت عملياتها في 5 حزيران 2025. اشترت الشركتان «روضة الريف لخدمات المشاريع» من الإمارات وشركة سورية شريكة الأصول، وأُعيد إطلاق الناقل تحت العلامة التجارية «فلاي شام» بعد الحصول على الموافقات التنظيمية. احتفظ معظم الطاقم وأطقم القيادة بمواقعهم في الشركة الجديدة.",
      fleetH: "الأسطول",
      fleet:
        "يضم أسطول فلاي شام طائرات إيرباص A320-200 ذات تكوين أحادي الدرجة مناسب للرحلات الإقليمية. تخضع الطائرات لبرامج صيانة معتمدة وفق أعلى المعايير الدولية.",
      destinationsH: "الوجهات",
      destinations:
        "تخدم فلاي شام شبكة من الوجهات الإقليمية تشمل ضمن قاعدتها الحالية: دمشق وحلب داخلياً، وأبوظبي ودبي والشارقة (الإمارات)، وبغداد والبصرة وأربيل (العراق)، والكويت ومسقط وطرابلس (ليبيا) ويريفان (أرمينيا)، إضافة إلى مطار شوكوروفا في مرسين (تركيا). يجري توسيع الشبكة تدريجياً وفق الطلب والاتفاقيات.",
      servicesH: "الخدمات",
      services:
        "تقدم الشركة خدمات الرحلات المجدولة والعارضة بأسلوب الناقل الإقليمي، مع وجبات خفيفة على متن الرحلة وخيارات حجز مرنة، وخدمات مساعدة للركاب من ذوي الاحتياجات الخاصة عبر فريق المطار.",
      bookingH: "الحجز وخدمة العملاء",
      booking:
        "يمكن إتمام الحجز عبر الموقع الرسمي للشركة flycham.com أو عبر وكلاء السفر المعتمدين. للحجز والاستفسار يمكنكم التواصل مع مكتبنا «النجوم الماسية» مباشرةً.",
      contactH: "للحجز عبر النجوم الماسية",
      contact:
        "لحجز تذاكر فلاي شام أو الاستفسار عن الأسعار والمواعيد، تواصلوا مع فريق النجوم الماسية على واتساب +971 54 586 6066.",
      infoH: "بطاقة تعريفية بالشركة",
      rows: COMMON_ROWS(lang, rowLabels),
    };
  }

  if (lang === "ru") {
    const rowLabels = {
      iata: "Код IATA",
      icao: "Код ICAO",
      callsign: "Радиопозывной",
      parent: "Название авиакомпании",
      hq: "Штаб-квартира",
      hqValue: "Дамаск, Сирия",
      hubs: "Основные хабы",
      hubsValue: "Международный аэропорт Дамаска и аэропорт Алеппо",
      fleetCount: "Парк воздушных судов",
      fleetValue: "5 × Airbus A320-200",
      founded: "Дата основания",
      foundedValue: "Май 2025",
      predecessor: "Предшественник",
      predecessorValue: "Cham Wings Airlines (прекратила работу 5 июня 2025)",
      website: "Официальный сайт",
    };
    return {
      title: "Авиакомпания Fly Cham",
      alt: "Авиакомпания Fly Cham",
      intro:
        "Fly Cham — частная сирийская авиакомпания, основанная в мае 2025 года сирийско-эмиратским совместным предприятием. Она была создана на базе активов Cham Wings Airlines, прекратившей деятельность 5 июня 2025 года. Первый рейс Fly Cham состоялся 11 июня 2025 года. Авиакомпания базируется в международных аэропортах Дамаска и Алеппо, соединяя Сирию с ключевыми пунктами Ближнего Востока и региона.",
      historyH: "История",
      history:
        "Fly Cham появилась как операционный преемник Cham Wings Airlines (основана в 2006 году, прекратила полёты 5 июня 2025 года). Активы были выкуплены эмиратской компанией Rawdat Al Reef Project Services LLC и её сирийским партнёром. После регулирующего одобрения авиакомпания возобновила полёты под брендом Fly Cham. Большинство экипажей и пилотов сохранили свои должности.",
      fleetH: "Парк",
      fleet:
        "Парк Fly Cham состоит из самолётов Airbus A320-200 в одноклассной региональной компоновке. Воздушные суда обслуживаются по сертифицированным программам в соответствии с международными стандартами.",
      destinationsH: "Направления",
      destinations:
        "Fly Cham обслуживает региональную сеть, в которую входят: Дамаск и Алеппо (Сирия), Абу-Даби, Дубай и Шарджа (ОАЭ), Багдад, Басра и Эрбиль (Ирак), Кувейт, Маскат (Оман), Триполи (Ливия), Ереван (Армения), а также аэропорт Чукурова в Мерсине (Турция). Сеть постепенно расширяется по мере спроса и подписания соглашений.",
      servicesH: "Сервис",
      services:
        "Авиакомпания выполняет регулярные и чартерные рейсы в формате регионального перевозчика с лёгкими закусками на борту и гибкими условиями бронирования. Для пассажиров с ограниченными возможностями доступна помощь через службу аэропорта.",
      bookingH: "Бронирование и поддержка",
      booking:
        "Бронирование доступно на официальном сайте flycham.com и через авторизованных туристических агентов. Для удобного бронирования вы можете связаться напрямую с офисом «Alnujoom Almasiya».",
      contactH: "Бронирование через Alnujoom Almasiya",
      contact:
        "Для бронирования билетов Fly Cham или уточнения цен и расписания свяжитесь с командой Alnujoom Almasiya в WhatsApp по номеру +971 54 586 6066.",
      infoH: "Карточка авиакомпании",
      rows: COMMON_ROWS(lang, rowLabels),
    };
  }

  // English (default)
  const rowLabels = {
    iata: "IATA Code",
    icao: "ICAO Code",
    callsign: "Radio Callsign",
    parent: "Airline Name",
    hq: "Headquarters",
    hqValue: "Damascus, Syria",
    hubs: "Main Hubs",
    hubsValue: "Damascus International Airport & Aleppo International Airport",
    fleetCount: "Fleet Size",
    fleetValue: "5 × Airbus A320-200",
    founded: "Founded",
    foundedValue: "May 2025",
    predecessor: "Predecessor",
    predecessorValue: "Cham Wings Airlines — ceased operations 5 June 2025",
    website: "Official Website",
  };
  return {
    title: "Fly Cham Airlines",
    alt: "Fly Cham Airlines",
    intro:
      "Fly Cham is a private Syrian airline founded in May 2025 by a Syrian–Emirati joint venture. It was built on the assets of Cham Wings Airlines after that carrier ceased operations on 5 June 2025. The airline launched its inaugural flight on 11 June 2025 and operates from Damascus and Aleppo international airports, connecting Syria with key destinations across the Middle East and the wider region.",
    historyH: "Background",
    history:
      "Fly Cham emerged as the operational successor to Cham Wings Airlines (founded in 2006, ceased operations on 5 June 2025). Following regulatory approval, the Emirati firm Rawdat Al Reef Project Services LLC and its Syrian partner acquired the assets and relaunched the carrier under the Fly Cham brand. The majority of the previous airline's pilots and cabin crew transitioned to the new company.",
    fleetH: "Fleet",
    fleet:
      "The Fly Cham fleet is made up of Airbus A320-200 aircraft configured in a single-class regional layout. The aircraft are maintained under certified programmes that comply with international safety standards.",
    destinationsH: "Destinations",
    destinations:
      "Fly Cham serves a regional network that currently includes: Damascus and Aleppo (Syria); Abu Dhabi, Dubai and Sharjah (UAE); Baghdad, Basra and Erbil (Iraq); Kuwait City; Muscat (Oman); Tripoli (Libya); Yerevan (Armenia); and Çukurova Airport in Mersin (Turkey). The network is being expanded gradually based on demand and new agreements.",
    servicesH: "Services",
    services:
      "The airline operates scheduled and charter flights with a regional-carrier service model: light onboard refreshments, flexible booking options, and special-assistance support handled by the airport ground team.",
    bookingH: "Booking & Customer Support",
    booking:
      "Reservations can be made through the official site flycham.com or via authorised travel agents. For a fast booking you can contact our Alnujoom Almasiya office directly.",
    contactH: "Book via Alnujoom Almasiya",
    contact:
      "To book Fly Cham tickets or check fares and schedules, contact the Alnujoom Almasiya team on WhatsApp at +971 54 586 6066.",
    infoH: "Airline Card",
    rows: COMMON_ROWS(lang, rowLabels),
  };
};

const page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const copy = buildCopy(lang);
  const isRTL = lang === "ar";

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 lg:py-12" dir={isRTL ? "rtl" : "ltr"}>
      <article className="card-elegant p-6 lg:p-10">
        <header className="flex flex-col items-center gap-4 text-center">
          <Image
            width={420}
            height={300}
            quality={75}
            priority
            src="/images/flyCham.webp"
            alt={copy.alt}
            className="h-auto w-72 object-contain"
          />
          <h1 className="text-3xl font-bold text-primary lg:text-4xl">
            {copy.title}
          </h1>
        </header>

        <p className="mt-6 text-base leading-relaxed text-slate-700 lg:text-lg">
          {copy.intro}
        </p>

        <Section heading={copy.historyH} body={copy.history} />
        <Section heading={copy.fleetH} body={copy.fleet} />
        <Section heading={copy.destinationsH} body={copy.destinations} />
        <Section heading={copy.servicesH} body={copy.services} />
        <Section heading={copy.bookingH} body={copy.booking} />
        <Section heading={copy.contactH} body={copy.contact} />

        {/* Airline info table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-primary">{copy.infoH}</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-start text-primary">
              <tbody>
                {copy.rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-200/70">
                    <th
                      scope="row"
                      className="py-3 pe-8 align-top font-semibold text-slate-700"
                    >
                      {row.label}
                    </th>
                    <td className="py-3 text-slate-800">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </main>
  );
};

function Section({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold text-primary lg:text-2xl">{heading}</h2>
      <p className="mt-2 text-base leading-relaxed text-slate-700 lg:text-lg">
        {body}
      </p>
    </section>
  );
}

export default page;
