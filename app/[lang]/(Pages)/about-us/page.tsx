import Image from "next/image";
import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import { buildPageMetadata, SITE_URL, SITE_NAME } from "../../seo";
import { PAGES_SEO } from "../../seo-data";
import PageHeader from "../../components/PageHeader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/about-us",
    title: PAGES_SEO.about.title,
    description: PAGES_SEO.about.description,
    imageUrl: "/images/farouk.webp",
  });
}

type AboutContent = {
  heading: string;
  tagline: string;
  badge: string;
  founderRole: string;
  founderName: string;
  founderTitle: string;
  intro: string;
  story: string;
  partnersTitle: string;
  partnersSubtitle: string;
  highlightsTitle: string;
  highlights: { title: string; desc: string }[];
  contactTitle: string;
  contactSubtitle: string;
  emailLabel: string;
  callLabel: string;
  whatsappLabel: string;
};

const aboutText: Record<Locale, AboutContent> = {
  en: {
    badge: "About Us",
    heading: "Crafting Unforgettable Journeys",
    tagline: "A leading tourism & travel services company",
    founderRole: "Founder & Managing Director",
    founderName: "Eng. Farouk Dakkak",
    founderTitle: "Meet the Founder",
    intro:
      "AlNujoom AlMasiya is a leading tourism and travel services company offering global flight and hotel bookings. As an authorized agent for FlyDubai, Fly Sham, Air Arabia, and Syrian Airlines, we also provide bookings through major carriers worldwide.",
    story:
      "We guarantee high-quality, affordable hotel bookings worldwide, fast visa processing, and a wide range of tourist programs, airport transfers, and travel insurance. Our tours blend enjoyment and variety to deliver unforgettable experiences — at the best prices, with a sharp focus on customer satisfaction and service quality.",
    partnersTitle: "Authorized airline partners",
    partnersSubtitle: "Plus bookings through 10+ major international carriers",
    highlightsTitle: "Why travelers choose us",
    highlights: [
      { title: "Global reach", desc: "50+ destinations" },
      { title: "Fast visas", desc: "Quick processing" },
      { title: "Premium hotels", desc: "Best prices" },
      { title: "24/7 support", desc: "Anytime, anywhere" },
    ],
    contactTitle: "Get in touch",
    contactSubtitle: "We typically reply within the hour",
    emailLabel: "Email us",
    callLabel: "Call us",
    whatsappLabel: "WhatsApp",
  },
  ar: {
    badge: "من نحن",
    heading: "نصنع رحلات لا تُنسى",
    tagline: "شركة رائدة في خدمات السياحة والسفر",
    founderRole: "المؤسس والمدير العام",
    founderName: "م. فاروق دكاك",
    founderTitle: "تعرّف على المؤسس",
    intro:
      "النجوم الماسية شركة متخصصة في خدمات السياحة والسفر، تقدّم حجوزات الطيران والفنادق إلى مختلف أنحاء العالم. بصفتها وكيلاً معتمداً لشركات فلاي دبي، فلاي شام، العربية للطيران، والخطوط الجوية السورية، نقدّم أيضاً حجوزات عبر كبرى شركات الطيران العالمية.",
    story:
      "نضمن لك حجوزات فنادق عالمية بجودة عالية وأسعار مناسبة، وتأشيرات سفر سريعة وكفؤة، وبرامج سياحية متنوعة، وخدمات نقل من وإلى المطار، وتأمين سفر شامل. برامجنا تجمع المتعة والتنوع لتجارب تستحق الاستكشاف، بأفضل الأسعار، مع تركيز كامل على رضا العملاء وجودة الخدمة.",
    partnersTitle: "شركاؤنا المعتمدون",
    partnersSubtitle: "بالإضافة إلى حجوزات عبر أكثر من 10 شركات طيران عالمية",
    highlightsTitle: "لماذا يختارنا المسافرون",
    highlights: [
      { title: "تغطية عالمية", desc: "أكثر من 50 وجهة" },
      { title: "تأشيرات سريعة", desc: "إنجاز فوري" },
      { title: "فنادق فاخرة", desc: "أفضل الأسعار" },
      { title: "دعم 24/7", desc: "في أي وقت" },
    ],
    contactTitle: "تواصل معنا",
    contactSubtitle: "نرد عادةً خلال ساعة",
    emailLabel: "البريد الإلكتروني",
    callLabel: "اتصل بنا",
    whatsappLabel: "واتساب",
  },
  ru: {
    badge: "О нас",
    heading: "Создаём незабываемые путешествия",
    tagline: "Ведущая компания в сфере туристических услуг",
    founderRole: "Основатель и управляющий директор",
    founderName: "Инж. Фарук Даккак",
    founderTitle: "Знакомьтесь с основателем",
    intro:
      "AlNujoom AlMasiya — ведущая компания в сфере туризма, предлагающая бронирование авиабилетов и отелей по всему миру. Будучи авторизованным агентом FlyDubai, Fly Sham, Air Arabia и Syrian Airlines, мы также бронируем через крупнейших мировых перевозчиков.",
    story:
      "Мы гарантируем качественные и доступные бронирования отелей по всему миру, быстрое оформление виз, разнообразные туристические программы, трансферы и страхование. Наши туры сочетают удовольствие и разнообразие, чтобы дарить незабываемые впечатления по лучшим ценам с акцентом на качество и удовлетворённость клиентов.",
    partnersTitle: "Авторизованные авиапартнёры",
    partnersSubtitle: "А также бронирование через 10+ крупнейших авиакомпаний",
    highlightsTitle: "Почему нас выбирают",
    highlights: [
      { title: "Глобальный охват", desc: "50+ направлений" },
      { title: "Быстрые визы", desc: "Оперативно" },
      { title: "Премиум-отели", desc: "Лучшие цены" },
      { title: "Поддержка 24/7", desc: "В любое время" },
    ],
    contactTitle: "Связаться с нами",
    contactSubtitle: "Обычно отвечаем в течение часа",
    emailLabel: "Email",
    callLabel: "Позвонить",
    whatsappLabel: "WhatsApp",
  },
};

const AUTHORIZED_PARTNERS = [
  "FlyDubai",
  "Fly Sham",
  "Air Arabia",
  "Syrian Airlines",
];

const OTHER_PARTNERS = [
  "Qatar Airways",
  "Turkish Airlines",
  "Royal Jordanian",
  "Pegasus",
  "EgyptAir",
  "Saudia",
  "Emirates",
];

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  const content = aboutText[lang] ?? aboutText.en;
  const isRTL = lang === "ar";

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: PAGES_SEO.about.title[lang],
    description: PAGES_SEO.about.description[lang],
    url: `${SITE_URL}/${lang}/about-us`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      founder: { "@type": "Person", name: "Farouk Dakkak" },
      email: "farouk@alnujoomalmasiya.com",
      logo: `${SITE_URL}/images/logo.webp`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <PageHeader
        lang={lang}
        badge={content.badge}
        title={content.heading}
        subtitle={content.tagline}
      />

      <main
        className="relative mx-auto -mt-12 max-w-7xl px-6 pb-16 lg:-mt-16"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* ============ Text side ============ */}
            <div className="flex flex-col gap-7 p-7 lg:col-span-7 lg:p-12">
              {/* Logo + accent stripe */}
              <div className="flex items-center gap-4">
                <Image
                  loading="lazy"
                  quality={70}
                  src="/images/logo.webp"
                  className="h-14 w-auto object-contain lg:h-16"
                  alt="AlNujoom AlMasiya logo"
                  width={200}
                  height={136}
                />
                <span
                  className="h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/30 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Founder mini-card */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-white/60 p-3.5 backdrop-blur-sm">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-accent/40">
                  <Image
                    loading="lazy"
                    quality={70}
                    src="/images/farouk.webp"
                    fill
                    sizes="56px"
                    alt={content.founderName}
                    className="object-cover"
                    style={{
                      objectPosition: "67% 30%",
                      transform: "scale(2.6)",
                      transformOrigin: "67% 30%",
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {content.founderTitle}
                  </p>
                  <p className="truncate text-base font-bold text-primary lg:text-lg">
                    {content.founderName}
                  </p>
                  <p className="truncate text-xs text-slate-500 lg:text-sm">
                    {content.founderRole}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
              </div>

              {/* Body text */}
              <div className="flex flex-col gap-4">
                <p className="text-base leading-relaxed text-slate-700 lg:text-lg">
                  {content.intro}
                </p>
                <p className="text-base leading-relaxed text-slate-700 lg:text-lg">
                  {content.story}
                </p>
              </div>

              {/* Highlights grid */}
              <div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                  {content.highlightsTitle}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {content.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/60 bg-white/50 p-3 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-white/80 hover:shadow-sm"
                    >
                      <p className="text-sm font-bold text-primary">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners chips */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                  {content.partnersTitle}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {content.partnersSubtitle}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {AUTHORIZED_PARTNERS.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-litePrimary/10 to-litePrimary/5 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-litePrimary/20"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {p}
                    </span>
                  ))}
                  {OTHER_PARTNERS.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center rounded-full bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200/60"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact strip */}
              <div className="mt-2 rounded-2xl border border-slate-200/60 bg-gradient-to-br from-primary/5 to-litePrimary/5 p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-primary lg:text-lg">
                      {content.contactTitle}
                    </h3>
                    <p className="text-xs text-slate-500 lg:text-sm">
                      {content.contactSubtitle}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200"
                    aria-label="Online"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Online
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <a
                    href="mailto:farouk@alnujoomalmasiya.com"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-primary ring-1 ring-slate-200/60 transition-all hover:bg-white hover:shadow-sm hover:ring-litePrimary/30"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-litePrimary/10 text-litePrimary transition-colors group-hover:bg-litePrimary group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </span>
                    <span className="truncate">{content.emailLabel}</span>
                  </a>
                  <a
                    href="tel:+971545866066"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-primary ring-1 ring-slate-200/60 transition-all hover:bg-white hover:shadow-sm hover:ring-litePrimary/30"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-litePrimary/10 text-litePrimary transition-colors group-hover:bg-litePrimary group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.33.03.7-.24 1.02l-2.21 2.2z" />
                      </svg>
                    </span>
                    <span className="truncate">{content.callLabel}</span>
                  </a>
                  <a
                    href="https://wa.me/971545866066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-primary ring-1 ring-slate-200/60 transition-all hover:bg-white hover:shadow-sm hover:ring-emerald-300"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                    </span>
                    <span className="truncate">{content.whatsappLabel}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ============ Image side ============ */}
            <div className="relative min-h-[24rem] bg-slate-100 lg:col-span-5 lg:min-h-[38rem]">
              <Image
                loading="lazy"
                quality={80}
                src="/images/farouk.webp"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                alt={`${content.founderName} — Founder of AlNujoom AlMasiya`}
                className="object-cover object-[65%_30%]"
              />
              {/* Gradient overlay for tag readability — only at the bottom */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"
              />
              {/* Founder tag overlay at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                <div className="inline-flex flex-col gap-1 rounded-2xl border border-white/25 bg-white/15 px-5 py-3.5 backdrop-blur-md">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {content.founderRole}
                  </span>
                  <span className="text-lg font-bold text-white lg:text-xl">
                    {content.founderName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
