import { type Locale } from "../../../i18n-config";

type LocalizedText = Record<Locale, string>;

type Review = {
  name: string;
  text: LocalizedText;
  date: LocalizedText;
  dir: "ltr" | "rtl";
  meta?: string;
};

const reviews: Review[] = [
  {
    name: "Ahmad Mansour",
    meta: "Local Guide · 30 reviews",
    dir: "ltr",
    date: { en: "a year ago", ar: "قبل سنة", ru: "год назад" },
    text: {
      en: "I booked a ticket to Syria for my mom from here, honestly, not a single problem. The process was very smooth, and the person working was incredibly friendly and professional.",
      ar: "حجزت تذكرة إلى سوريا لوالدتي من هنا، وبصراحة لم تواجهني أي مشكلة على الإطلاق. كانت العملية سلسة جدًا، وكان الموظف ودودًا ومحترفًا للغاية.",
      ru: "Я забронировал маме билет в Сирию здесь — честно говоря, ни одной проблемы. Всё прошло очень гладко, а сотрудник был невероятно дружелюбным и профессиональным.",
    },
  },
  {
    name: "bel var",
    meta: "2 reviews",
    dir: "ltr",
    date: { en: "10 months ago", ar: "قبل 10 أشهر", ru: "10 месяцев назад" },
    text: {
      en: "I booked with Alnujoom Almasiya during a very critical time, when airspace closures were affecting many flights. Despite the challenges, their service was excellent — fast, professional, and supportive both before and during the flight. Highly recommended!",
      ar: "حجزت مع النجوم الماسية في وقت حرج جدًا عندما كانت إغلاقات المجال الجوي تؤثر على رحلات كثيرة. رغم التحديات، كانت خدمتهم ممتازة — سريعة ومحترفة ومتابعة قبل الرحلة وخلالها. أنصح بهم بشدة!",
      ru: "Я бронировал с Alnujoom Almasiya в очень сложное время, когда закрытия воздушного пространства затрагивали многие рейсы. Несмотря на трудности, их сервис был отличным — быстрым, профессиональным и поддерживающим до и во время полёта. Настоятельно рекомендую!",
    },
  },
  {
    name: "Mahmoud Alkhatib",
    meta: "6 reviews",
    dir: "rtl",
    date: { en: "a year ago", ar: "قبل سنة", ru: "год назад" },
    text: {
      en: "The travel office provided wonderful service from start to finish. The team is highly professional, especially Mr. Farouk — quick to respond, accurate and clear with information. He helped me book my tickets easily and was very cooperative. Prices are competitive and the service is very trustworthy. I will rely on them for all my future trips. Highly recommended!",
      ar: "مكتب الطيران قدم خدمة رائعة من بداية التعامل حتى النهاية. فريق العمل محترف جدًا، خصوصًا الأستاذ فاروق سريع في الرد، ويقدم معلومات دقيقة وواضحة. ساعدني في حجز تذاكري بكل سهولة وكان متعاوناً. الأسعار تنافسية والخدمة جدًا موثوقة. سأعتمد عليهم دائماً في سفرياتي القادمة. أوصي بهم بشدة.",
      ru: "Туристическое агентство предоставило прекрасный сервис от начала до конца. Команда очень профессиональная, особенно г-н Фарук — быстро отвечает, даёт точную и понятную информацию. Помог мне легко забронировать билеты и был очень отзывчив. Цены конкурентные, сервис надёжный. Настоятельно рекомендую!",
    },
  },
  {
    name: "Anonymous",
    meta: "2 reviews",
    dir: "ltr",
    date: { en: "a year ago", ar: "قبل سنة", ru: "год назад" },
    text: {
      en: "Alnujoom Almasiya is friendly, honest, and incredibly hardworking. They made the entire booking and travel process seamless and enjoyable. I highly recommend them to anyone looking to book a trip to any country.",
      ar: "النجوم الماسية ودودون وأمناء ومجتهدون للغاية. جعلوا كامل عملية الحجز والسفر سلسة وممتعة. أنصح بهم بشدة لأي شخص يبحث عن حجز رحلة إلى أي بلد.",
      ru: "Alnujoom Almasiya — дружелюбные, честные и невероятно трудолюбивые. Они сделали весь процесс бронирования и путешествия беспроблемным и приятным. Настоятельно рекомендую их всем, кто планирует поездку в любую страну.",
    },
  },
  {
    name: "Moaad Shnan",
    meta: "1 review",
    dir: "rtl",
    date: { en: "9 months ago", ar: "قبل 9 أشهر", ru: "9 месяцев назад" },
    text: {
      en: "The best office to deal with and the best price. Special thanks to Mr. Farouk for his courtesy and respect. Truly thank you.",
      ar: "أفضل مكتب للتعامل وأفضل سعر، وشكر خاص للأستاذ فاروق على الأدب والاحترام، عنجد شكراً.",
      ru: "Лучшее агентство и лучшие цены. Особая благодарность господину Фаруку за вежливость и уважение. Огромное спасибо.",
    },
  },
  {
    name: "Raed Sheakh Omar",
    meta: "4 reviews",
    dir: "rtl",
    date: { en: "8 months ago", ar: "قبل 8 أشهر", ru: "8 месяцев назад" },
    text: {
      en: "Excellent and trustworthy — they give you the best options. I asked many offices and friends; the prices here are the best and cheaper than everyone else.",
      ar: "ممتاز جداً وموثوق ويعطيك الخيارات الأفضل. سألت كتير مكاتب وأصدقاء، أسعاره ممتازة وأرخص من الجميع.",
      ru: "Отлично и надёжно — дают лучшие варианты. Спрашивал во многих агентствах и у друзей — цены здесь лучшие и дешевле всех остальных.",
    },
  },
  {
    name: "Rahaf Algnod",
    meta: "2 reviews",
    dir: "rtl",
    date: { en: "3 months ago", ar: "قبل 3 أشهر", ru: "3 месяца назад" },
    text: {
      en: "I want to thank Mr. Farouk — God bless him. Fast service and very reasonable prices.",
      ar: "بدي اتشكر الأستاذ فاروق، ماشاء الله تعامل سريع وأسعار مناسبة جداً.",
      ru: "Хочу поблагодарить г-на Фарука — машаАллах, быстрое обслуживание и очень разумные цены.",
    },
  },
];

const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#fbbf24" : "none"}
    stroke={filled ? "#fbbf24" : "#d4d4d8"}
    strokeWidth={1.5}
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const getInitial = (name: string) => {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/);
  return (parts[0]?.[0] ?? "").toUpperCase() || "?";
};

const AVATAR_PALETTE = [
  "bg-rose-500",
  "bg-indigo-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-purple-500",
  "bg-orange-500",
];

const pickColor = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_PALETTE[sum % AVATAR_PALETTE.length];
};

const SECTION_HEADINGS: Record<
  Locale,
  { title: string; subtitle: string; reviewsLabel: string }
> = {
  en: {
    title: "What Our Travelers Say",
    subtitle: "Real reviews from our valued clients on Google Maps",
    reviewsLabel: "Reviews on Google",
  },
  ar: {
    title: "ما يقوله مسافرونا",
    subtitle: "آراء حقيقية لعملائنا الكرام على خرائط جوجل",
    reviewsLabel: "تقييمات على جوجل",
  },
  ru: {
    title: "Что говорят наши путешественники",
    subtitle: "Реальные отзывы наших клиентов на Google Maps",
    reviewsLabel: "Отзывы в Google",
  },
};

export default function Testimonials({ lang }: { lang: Locale }) {
  const heading = SECTION_HEADINGS[lang] ?? SECTION_HEADINGS.en;

  return (
    <section className="w-full bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <GoogleLogo className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {heading.reviewsLabel}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">
            {heading.title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-accent to-[#e6c98f]"
          />
          <p className="mt-4 max-w-2xl text-sm text-slate-600 lg:text-base">
            {heading.subtitle}
          </p>

          {/* Aggregate rating */}
          <div className="mt-5 flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">5.0</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name + review.date.en}
              className="card-elegant flex flex-col gap-4 p-6"
            >
              <header className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm ${pickColor(
                    review.name
                  )}`}
                  aria-hidden="true"
                >
                  {getInitial(review.name)}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-primary">
                    {review.name}
                  </span>
                  {review.meta && (
                    <span className="text-xs text-slate-500">
                      {review.meta}
                    </span>
                  )}
                </div>
                <GoogleLogo className="ms-auto h-5 w-5 flex-shrink-0 opacity-80" />
              </header>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <span className="text-xs text-slate-500">
                  {review.date[lang] ?? review.date.en}
                </span>
              </div>

              <p
                dir={lang === "ar" ? "rtl" : review.dir}
                className="text-sm leading-relaxed text-slate-700"
              >
                &ldquo;{review.text[lang] ?? review.text.en}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Aggregate rating JSON-LD for SEO
export function buildReviewsJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Alnujoom Almasiya",
    url: siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: String(reviews.length),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: r.text.en,
    })),
  };
}
