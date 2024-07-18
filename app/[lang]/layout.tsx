import { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";
import "./globals.css";
import { getDictionary } from "../../get-dictionary";
import Navbar from "./components/NavBar";
import { Tajawal } from "next/font/google";
import Footer from "./components/Footer";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Alnujoom Almasiya for travel and tourism | النجوم الماسية للسياحة والسفر",
  description: "cham wings authorized agent | وكيل معتمد لأجنحة الشام",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dic = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body
        dir={params.lang === "ar" ? "rtl" : "ltr"}
        className={`overflow-x-hidden text-primary bg3 ${tajawal.className}`}
      >
        <Navbar dic={dic} />
        {children}
        <Footer params={{ lang: params.lang }} />
      </body>
    </html>
  );
}
