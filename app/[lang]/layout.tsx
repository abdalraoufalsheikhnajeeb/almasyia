import type { Metadata, Viewport } from "next";
import { Tajawal } from "next/font/google";
import { i18n, Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import PhoneCall from "./components/PhoneCall";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  variable: "--font-tajawal",
});

const siteUrl = new URL("https://www.alnujoomalmasiya.com");

const seoByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "Alnujoom Almasiya | Travel & Tourism Services",
    description:
      "Travel agency led by Farouk Dakkak offering flights, hotels, visas, insurance, airport transfers, and secure document delivery to destinations worldwide.",
    keywords: [
      "travel agency",
      "dubai flights",
      "hotel booking",
      "visa assistance",
      "travel insurance",
      "airport transfer",
      "tour packages",
      "document delivery Dubai Damascus",
      "paper transfer Dubai",
      "travel to Dubai from Damascus",
      "Farouk Dakkak",
      "Farrouk Dakkak",
      "Alnujoom Almasiya",
      "النجوم الماسية",
    ],
  },
  ar: {
    title: "Alnujoom Almasiya | Travel & Tourism Services",
    description:
      "Travel agency led by Farouk Dakkak offering flights, hotels, visas, insurance, airport transfers, and secure document delivery to destinations worldwide.",
    keywords: [
      "travel agency",
      "dubai flights",
      "hotel booking",
      "visa assistance",
      "travel insurance",
      "airport transfer",
      "tour packages",
      "document delivery Dubai Damascus",
      "paper transfer Dubai",
      "travel to Dubai from Damascus",
      "Farouk Dakkak",
      "Farrouk Dakkak",
      "Alnujoom Almasiya",
      "النجوم الماسية",
    ],
  },
  ru: {
    title: "Alnujoom Almasiya | Travel & Tourism Services",
    description:
      "Travel agency led by Farouk Dakkak offering flights, hotels, visas, insurance, airport transfers, and secure document delivery to destinations worldwide.",
    keywords: [
      "travel agency",
      "dubai flights",
      "hotel booking",
      "visa assistance",
      "travel insurance",
      "airport transfer",
      "tour packages",
      "document delivery Dubai Damascus",
      "paper transfer Dubai",
      "travel to Dubai from Damascus",
      "Farouk Dakkak",
      "Farrouk Dakkak",
      "Alnujoom Almasiya",
      "النجوم الماسية",
    ],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const seo = seoByLocale[lang] ?? seoByLocale.en;
  const ogImage = {
    url: "/images/logo.webp",
    width: 1200,
    height: 630,
    alt: seo.title,
  };

  return {
    metadataBase: siteUrl,
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        ar: "/ar",
        ru: "/ru",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: siteUrl,
      type: "website",
      locale: lang,
      siteName: "Alnujoom Almasiya",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
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
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const isArabic = lang === "ar";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Alnujoom Almasiya",
    alternateName: "النجوم الماسية",
    url: siteUrl.href,
    founder: "Farouk Dakkak",
    areaServed: ["Dubai", "Damascus", "UAE", "Syria"],
    serviceOffer: [
      "Travel to Dubai from Damascus",
      "Document and paper delivery between Dubai and Damascus",
      "Visa assistance",
      "Hotel and flight booking",
      "Airport transfers",
    ],
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
      "https://vk.com/id871743840",
    ],
  };

  return (
    <html lang={lang}>
      <body
        dir={isArabic ? "rtl" : "ltr"}
        className={`overflow-x-hidden text-litePrimary bg-white ${tajawal.className}`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar
          lang={lang}
          labels={{
            home: dictionary.Home,
            aboutUs: dictionary.aboutUs,
            worldClock: dictionary.worldClock,
            contactUs: dictionary.contact_us,
          }}
        />
        <Whatsapp />
        <PhoneCall />
        <div className="mt-24">{children}</div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
