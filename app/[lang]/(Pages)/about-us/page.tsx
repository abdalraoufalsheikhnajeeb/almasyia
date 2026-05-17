import Image from "next/image";
import type { Metadata } from "next";
import { Locale } from "../../../../i18n-config";
import { buildPageMetadata, SITE_URL, SITE_NAME } from "../../seo";
import { PAGES_SEO } from "../../seo-data";

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

export default async function page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Locale;
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
      founder: {
        "@type": "Person",
        name: "Farouk Dakkak",
      },
      email: "farouk@alnujoomalmasiya.com",
      logo: `${SITE_URL}/images/logo.webp`,
    },
  };

  return (
    <section className="  flex-col lg:flex-row lg:min-h-[50vh] lg:justify-between mt-24 gap-4 flex  box-lite">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="flex w-full lg:w-1/2 flex-col my-12 items-center gap-6 lg:items-start overflow-visible text--primary">
        <h1 className="sr-only">{PAGES_SEO.about.title[lang]}</h1>
        <Image
          loading="lazy"
          quality={60}
          src="/images/logo.webp"
          className="w-40 lg:w-60 object-cover"
          alt="AlNujoom AlMasiya logo"
          width={240}
          height={164}
        />

        {lang === "ar" && (
          <p className="text-lg">
            النجوم الماسية هي شركة متخصصة في خدمات السياحة والسفر، يديرها
            م.فاروق دكاك، وتقدم حجوزات الطيران والفنادق إلى مختلف أنحاء العالم.
            بصفتها وكيلًا معتمدًا لشركات الطيران مثل فلاي دبي، فلاي شام، العربية
            للطيران، والخطوط الجوية السورية، بالإضافة إلى تقديمها حجوزات طيران
            عبر الخطوط الجوية القطرية، التركية، الأردنية، بيجاسوس، المصرية،
            السعودية، والإماراتية وغيرها. كما تقدم النجوم الماسية خدمات حجوزات
            الفنادق العالمية مع ضمان جودة عالية وأسعار مناسبة. إلى جانب ذلك،
            توفر الشركة تأشيرات السفر بسرعة وكفاءة، وبرامج سياحية متنوعة، وخدمات
            نقل من وإلى المطار، وتأمين السفر. برامجنا السياحية تجمع بين المتعة
            والتنوع، لتقديم تجارب تستحق الاستكشاف. تلتزم النجوم الماسية بتقديم
            خدمات سياحية شاملة ورحلات استثنائية بأفضل الأسعار، مع التركيز على
            رضا العملاء وجودة الخدمة. اكتشف العالم معنا بأمان وراحة.
          </p>
        )}

        {lang === "en" && (
          <p className="text-lg">
            AlNujoom AlMasiya is a leading tourism and travel services company,
            managed by Farouk Dakkak, offering global flight and hotel bookings.
            As an authorized agent for airlines like FlyDubai, fly Sham,
            Air Arabia, and Syrian Airlines, we also provide bookings through
            Qatar Airways, Turkish Airlines, Royal Jordanian, Pegasus, EgyptAir,
            Saudi Arabian Airlines, Emirates Airlines, and more. We guarantee
            high quality and affordable hotel bookings worldwide, fast visa
            processing, and a wide range of diverse tourist programs, airport
            transfer services, and travel insurance. Our tours combine enjoyment
            and variety, delivering unforgettable experiences. AlNujoom AlMasiya
            is dedicated to providing comprehensive tourism services and
            exceptional trips at the best prices, focusing on customer
            satisfaction and service quality. Discover the world with us in
            safety and comfort.
          </p>
        )}

        {lang === "ru" && (
          <p className="text-lg">
            AlNujoom AlMasiya — ведущая компания, специализирующаяся на
            туристических услугах, управляемая Фаруком Даккаком, предлагающая
            бронирование авиабилетов и отелей по всему миру. Будучи
            авторизованным агентом авиакомпаний, таких как FlyDubai, fly
            Sham, Air Arabia и Syrian Airlines, мы также предоставляем
            бронирование через Qatar Airways, Turkish Airlines, Royal Jordanian,
            Pegasus, EgyptAir, Saudi Arabian Airlines, Emirates Airlines и
            другие. Мы гарантируем высокое качество и доступные цены на
            бронирование отелей по всему миру, быстрое оформление виз и широкий
            ассортимент туристических программ, трансферов из аэропорта и
            туристических страховок. Наши туры сочетают в себе удовольствие и
            разнообразие, предлагая незабываемые впечатления. AlNujoom AlMasiya
            стремится предоставлять комплексные туристические услуги и
            исключительные поездки по лучшим ценам, уделяя особое внимание
            удовлетворенности клиентов и качеству обслуживания. Откройте для
            себя мир с нами в безопасности и комфорте.
          </p>
        )}

        <p className="mt-4 text-lg text-primary">
          <a
            className="text-2xl underline underline-offset-4"
            href="mailto:farouk@alnujoomalmasiya.com"
          >
            farouk@alnujoomalmasiya.com
          </a>
        </p>
      </div>

      <Image
        loading="lazy"
        quality={60}
        src="/images/farouk.webp"
        width={640}
        height={427}
        alt="Farouk Dakkak, Founder of AlNujoom AlMasiya"
        className="object-cover object-right w-full lg:w-1/2 rounded-lg"
      />
    </section>
  );
}
