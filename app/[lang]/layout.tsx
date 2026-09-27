import { notFound } from "next/navigation";
import { buildPageMetadata } from "./seo";
import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import { i18n, Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import BookingFab from "./components/BookingFab";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import PhoneCall from "./components/PhoneCall";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "optional",
  preload: true,
  variable: "--font-tajawal",
});

const siteUrl = new URL("https://www.alnujoomalmasiya.com");

const homeTitles = {
  en: "Damascus to Dubai Travel & Document Delivery | Alnujoom Almasiya",
  ar: "النجوم الماسية | السفر من دمشق إلى دبي ونقل الوثائق",
  ru: "Дамаск — Дубай: поездки и доставка документов | Alnujoom Almasiya",
};
const homeDescriptions = {
  en: "Plan travel from Damascus to Dubai with Alnujoom Almasiya: flight and hotel bookings, visa assistance and document delivery. Contact Farouk Dakkak and our team.",
  ar: "خطط للسفر من دمشق إلى دبي مع النجوم الماسية: حجز الطيران والفنادق، المساعدة في التأشيرات ونقل الأوراق والوثائق. تواصل مع فاروق دكاك وفريقنا لمعرفة التفاصيل.",
  ru: "Поездки из Дамаска в Дубай с Alnujoom Almasiya: авиабилеты, отели, помощь с визами и доставка документов. Свяжитесь с Фаруком Даккаком и нашей командой.",
};

function validateLocale(value: string): Locale {
  if (!i18n.locales.some((locale) => locale === value)) notFound();
  return value as Locale;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = validateLocale((await params).lang);
  return {
    ...buildPageMetadata({
      lang,
      path: "",
      title: homeTitles,
      description: homeDescriptions,
    }),
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#316792",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = validateLocale((await params).lang);
  const dictionary = await getDictionary(lang);
  const isArabic = lang === "ar";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteUrl.href}#organization`,
    name: "Alnujoom Almasiya",
    alternateName: "النجوم الماسية",
    url: siteUrl.href,
    founder: { "@type": "Person", name: "Farouk Dakkak", alternateName: ["Farrouk Dakkak", "فاروق دكاك"] },
    areaServed: ["Dubai", "Damascus", "UAE", "Syria"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+971545866066",
        contactType: "customer support",
        areaServed: ["Dubai", "UAE"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+963950026610",
        contactType: "customer support",
        areaServed: ["Damascus", "Syria"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL",
      "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr",
      "https://youtube.com/@alnujoomalmasiya?si=NJz3MMf4d65aRUhV",
    ],
  };

  const skipLabel =
    lang === "ar"
      ? "تخطي إلى المحتوى الرئيسي"
      : lang === "ru"
      ? "Перейти к основному содержимому"
      : "Skip to main content";

  // Inline theme-init script: runs synchronously BEFORE first paint so the
  // user never sees a flash of the wrong theme. Reads the user's saved
  // preference from localStorage, otherwise follows the OS setting.
  const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&m)||s==='system'&&m){document.documentElement.classList.add('dark')}}catch(e){}})();`;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          // Runs before React hydrates — prevents flash of wrong theme
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        dir={isArabic ? "rtl" : "ltr"}
        className={`overflow-x-hidden ${tajawal.className} ${tajawal.variable}`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {/* Skip link — visible only when focused via keyboard */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {skipLabel}
        </a>
        <Navbar
          lang={lang}
          labels={{
            home: dictionary.Home,
            aboutUs: dictionary.aboutUs,
            worldClock: dictionary.worldClock,
            contactUs: dictionary.contact_us,
          }}
        />
        <aside aria-label={lang === "ar" ? "التواصل والحجز" : lang === "ru" ? "Связь и бронирование" : "Contact and booking"}>
          <Whatsapp lang={lang} />
          <PhoneCall lang={lang} />
          <BookingFab lang={lang} label={dictionary.heroCtaBook} />
        </aside>
        <main id="main-content" tabIndex={-1} className="pt-20 min-h-[60vh]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
