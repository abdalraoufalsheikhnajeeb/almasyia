import { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { i18n, Locale } from "../../i18n-config";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import PhoneCall from "./components/PhoneCall";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

// Import the Tajawal font with appropriate configurations
const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title:
    "Alnujoom Almasiya for Travel and Tourism | النجوم الماسية للسياحة والسفر",
  description:
    "Discover exceptional travel services with Alnujoom Almasiya. We offer flight and hotel reservations, visas, insurance, and more, ensuring a convenient and comfortable travel experience from Dubai and Damascus. Visit us to plan your next adventure.",
  twitter: {
    card: "summary_large_image",
    images: "https://www.alnujoomalmasiya.com/images/logo.webp",
  },
  openGraph: {
    title:
      "Alnujoom Almasiya for Travel and Tourism | النجوم الماسية للسياحة والسفر",
    description:
      "Discover exceptional travel services with Alnujoom Almasiya. We offer flight and hotel reservations, visas, insurance, and more, ensuring a convenient and comfortable travel experience from Dubai and Damascus. Visit us to plan your next adventure.",
    url: "https://www.alnujoomalmasiya.com",
    type: "website",
    images: "https://www.alnujoomalmasiya.com/images/logo.webp",
  },
  other: {
    title:
      "Alnujoom Almasiya for Travel and Tourism | النجوم الماسية للسياحة والسفر",
    description:
      "Discover exceptional travel services with Alnujoom Almasiya. We offer flight and hotel reservations, visas, insurance, and more, ensuring a convenient and comfortable travel experience from Dubai and Damascus. Visit us to plan your next adventure.",
    url: "https://www.alnujoomalmasiya.com",
    image: "https://www.alnujoomalmasiya.com/images/logo.webp",
  },
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = params.lang;
  const isArabic = lang === "ar";

  return (
    <html lang={lang}>
      <body
        dir={isArabic ? "rtl" : "ltr"}
        className={`overflow-x-hidden text-primary bg-white ${tajawal.className}`}
      >
        <Navbar lang={lang} />
        <Whatsapp />
        <PhoneCall />
        <div className="mt-24">{children}</div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
