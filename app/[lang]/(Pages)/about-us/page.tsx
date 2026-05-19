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

const aboutText: Record<
  Locale,
  { heading: string; tagline: string; body: string; badge: string }
> = {
  en: {
    badge: "About Us",
    heading: "Crafting Unforgettable Journeys",
    tagline: "A leading tourism & travel services company",
    body: "AlNujoom AlMasiya is a leading tourism and travel services company, managed by Farouk Dakkak, offering global flight and hotel bookings. As an authorized agent for airlines like FlyDubai, fly Sham, Air Arabia, and Syrian Airlines, we also provide bookings through Qatar Airways, Turkish Airlines, Royal Jordanian, Pegasus, EgyptAir, Saudi Arabian Airlines, Emirates Airlines, and more. We guarantee high quality and affordable hotel bookings worldwide, fast visa processing, and a wide range of diverse tourist programs, airport transfer services, and travel insurance. Our tours combine enjoyment and variety, delivering unforgettable experiences. AlNujoom AlMasiya is dedicated to providing comprehensive tourism services and exceptional trips at the best prices, focusing on customer satisfaction and service quality. Discover the world with us in safety and comfort.",
  },
  ar: {
    badge: "من نحن",
    heading: "نصنع رحلات لا تُنسى",
    tagline: "شركة رائدة في خدمات السياحة والسفر",
    body: "النجوم الماسية هي شركة متخصصة في خدمات السياحة والسفر، يديرها م.فاروق دكاك، وتقدم حجوزات الطيران والفنادق إلى مختلف أنحاء العالم. بصفتها وكيلًا معتمدًا لشركات الطيران مثل فلاي دبي، فلاي شام، العربية للطيران، والخطوط الجوية السورية، بالإضافة إلى تقديمها حجوزات طيران عبر الخطوط الجوية القطرية، التركية، الأردنية، بيجاسوس، المصرية، السعودية، والإماراتية وغيرها. كما تقدم النجوم الماسية خدمات حجوزات الفنادق العالمية مع ضمان جودة عالية وأسعار مناسبة. إلى جانب ذلك، توفر الشركة تأشيرات السفر بسرعة وكفاءة، وبرامج سياحية متنوعة، وخدمات نقل من وإلى المطار، وتأمين السفر. برامجنا السياحية تجمع بين المتعة والتنوع، لتقديم تجارب تستحق الاستكشاف. تلتزم النجوم الماسية بتقديم خدمات سياحية شاملة ورحلات استثنائية بأفضل الأسعار، مع التركيز على رضا العملاء وجودة الخدمة. اكتشف العالم معنا بأمان وراحة.",
  },
  ru: {
    badge: "О нас",
    heading: "Создаём незабываемые путешествия",
    tagline: "Ведущая компания в сфере туристических услуг",
    body: "AlNujoom AlMasiya — ведущая компания, специализирующаяся на туристических услугах, управляемая Фаруком Даккаком, предлагающая бронирование авиабилетов и отелей по всему миру. Будучи авторизованным агентом авиакомпаний, таких как FlyDubai, fly Sham, Air Arabia и Syrian Airlines, мы также предоставляем бронирование через Qatar Airways, Turkish Airlines, Royal Jordanian, Pegasus, EgyptAir, Saudi Arabian Airlines, Emirates Airlines и другие. Мы гарантируем высокое качество и доступные цены на бронирование отелей по всему миру, быстрое оформление виз и широкий ассортимент туристических программ, трансферов из аэропорта и туристических страховок. Наши туры сочетают в себе удовольствие и разнообразие, предлагая незабываемые впечатления. AlNujoom AlMasiya стремится предоставлять комплексные туристические услуги и исключительные поездки по лучшим ценам, уделяя особое внимание удовлетворенности клиентов и качеству обслуживания. Откройте для себя мир с нами в безопасности и комфорте.",
  },
};

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
  const content = aboutText[lang] ?? aboutText.en;

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

      <main className="relative mx-auto -mt-12 max-w-7xl px-6 pb-16 lg:-mt-16">
        <div className="glass-strong overflow-hidden rounded-2xl">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Text side */}
            <div className="flex flex-col gap-5 p-8 lg:p-12">
              <Image
                loading="lazy"
                quality={60}
                src="/images/logo.webp"
                className="h-16 w-auto self-start object-contain lg:h-20"
                alt="AlNujoom AlMasiya logo"
                width={200}
                height={136}
              />

              <p className="text-base leading-relaxed text-slate-700 lg:text-lg">
                {content.body}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200/50 pt-5">
                <span className="text-sm font-medium text-slate-500">
                  Get in touch:
                </span>
                <a
                  href="mailto:farouk@alnujoomalmasiya.com"
                  className="inline-flex items-center gap-2 text-base font-semibold text-litePrimary transition-colors hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  farouk@alnujoomalmasiya.com
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="relative min-h-[20rem] lg:min-h-[32rem]">
              <Image
                loading="lazy"
                quality={70}
                src="/images/farouk.webp"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt="Farouk Dakkak, Founder of AlNujoom AlMasiya"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
