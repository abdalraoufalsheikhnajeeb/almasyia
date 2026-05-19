import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";
import Testimonials, { buildReviewsJsonLd } from "./components/Testimonials";
import { SITE_URL } from "./seo";
import { ourServecis } from "./data";

const STATS: Array<{
  value: string;
  key: "statHappy" | "statDestinations" | "statExperience" | "statRating";
}> = [
  { value: "5,000+", key: "statHappy" },
  { value: "50+", key: "statDestinations" },
  { value: "15+", key: "statExperience" },
  { value: "5.0★", key: "statRating" },
];

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);
  const isRTL = lang === "ar";

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate -mt-20 flex min-h-[100dvh] w-full items-center overflow-hidden">
        {/* Background image */}
        <Image
          priority
          quality={75}
          src="/images/hero.webp"
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-[center_22%] ${
            isRTL ? "-scale-x-[1]" : ""
          }`}
          sizes="100vw"
          alt="Travel destinations worldwide"
          width={1920}
          height={1080}
        />
        {/* Dark gradient overlay for contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/85 via-primary/60 to-litePrimary/40"
        />
        {/* Soft radial highlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]"
        />

        <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-16 lg:px-10 lg:pt-40 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Text content */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              {/* Logo + badge */}
              <div className="flex items-center gap-4">
                <Image
                  quality={70}
                  src="/images/logo.webp"
                  alt="Alnujoom Almasiya"
                  width={200}
                  height={136}
                  priority
                  className="h-16 w-auto rounded-lg bg-white/95 p-2 shadow-lg backdrop-blur lg:h-20"
                />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5 text-accent"
                    aria-hidden="true"
                  >
                    <path d="M11.48 3.5a.56.56 0 011.04 0l2.13 5.1a.56.56 0 00.47.35l5.52.45c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 00-.18.56l1.28 5.39a.56.56 0 01-.84.6l-4.72-2.88a.56.56 0 00-.59 0l-4.72 2.88a.56.56 0 01-.84-.6l1.28-5.39a.56.56 0 00-.18-.56l-4.2-3.6a.56.56 0 01.32-.99l5.52-.45a.56.56 0 00.47-.35L11.48 3.5z" />
                  </svg>
                  {dic.heroBadge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
                {dic.heroTitle}
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
                {dic.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${lang}/Services/airLines`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-[#c89e4f] hover:shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M2.5 19h19v2h-19v-2zm19.07-9.94c-.21-.79-1.02-1.26-1.81-1.05L14.92 9.2 8.46 3.17 6.53 3.68l3.87 6.7-4.66 1.24-1.85-1.45-1.45.39 1.96 3.39.78 1.34 1.6-.43 5.31-1.42 4.31-1.16 5.65-1.51c.79-.22 1.26-1.03 1.05-1.81z" />
                  </svg>
                  {dic.heroCtaBook}
                </Link>
                <Link
                  href={`#services`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {dic.heroCtaServices}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M13.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                  </svg>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/20 pt-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.key} className="flex flex-col">
                    <span className="text-2xl font-bold text-accent lg:text-3xl">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-white/80 lg:text-sm">
                      {dic[stat.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative side image / floating card */}
            <div className="hidden lg:col-span-5 lg:block">
              <div className="relative">
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 -z-10 rounded-3xl bg-accent/20 blur-3xl"
                />
                {/* Floating glass card */}
                <div className="rounded-3xl border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3 border-b border-white/20 pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Alnujoom Almasiya
                      </p>
                      <p className="text-xs text-white/70">
                        Trusted travel agency
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {[
                      { en: "Worldwide flight bookings", ar: "حجوزات طيران عالمية", ru: "Бронирование рейсов по всему миру" },
                      { en: "Premium hotel reservations", ar: "حجوزات فنادق فاخرة", ru: "Бронирование лучших отелей" },
                      { en: "Visa & insurance assistance", ar: "تأشيرات وتأمين السفر", ru: "Помощь с визами и страховкой" },
                      { en: "Secure document delivery", ar: "توصيل آمن للوثائق", ru: "Безопасная доставка документов" },
                    ].map((item) => (
                      <li key={item.en} className="flex items-center gap-2 text-sm text-white/95">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/90 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/80 hover:text-white lg:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <path d="M12 16a1 1 0 0 1-.7-.3l-7-7a1 1 0 0 1 1.4-1.4L12 13.6l6.3-6.3a1 1 0 0 1 1.4 1.4l-7 7A1 1 0 0 1 12 16z" />
          </svg>
        </a>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <main className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4">
        <section
          id="services"
          className="w-full flex flex-col items-center pt-12"
        >
          <p className="text-primary text-lg lg:text-xl mb-6 text-center max-w-3xl px-4">
            {dic.discover_services}
          </p>

          <AnTitle title={dic?.someProjects} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl px-4 pt-4">
            {ourServecis.map((card) => {
              const title =
                dic.currLang === "ar"
                  ? card.titlear
                  : dic.currLang === "ru"
                  ? card.titleru
                  : card.titleen;
              return (
                <Link
                  href={`/${lang}/Services/${card.route}`}
                  key={card.id}
                  className="group block"
                >
                  <article className="card-elegant flex h-full flex-col overflow-hidden">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        loading="lazy"
                        quality={70}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={card.src}
                        alt={title}
                      />
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="flex flex-1 flex-col justify-between gap-3 p-4"
                    >
                      <h3 className="text-base font-bold leading-snug text-primary lg:text-lg">
                        {title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 ${
                          isRTL
                            ? "group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      >
                        {dic.learnMore}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          <path d="M13.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
        <Testimonials lang={lang} />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildReviewsJsonLd(SITE_URL)),
          }}
        />
        <Locations
          params={{
            lang: lang,
          }}
        />
      </main>
    </>
  );
};

export default Page;
