import type { Metadata } from "next";
import { type Locale } from "../../../../i18n-config";
import { buildPageMetadata, SITE_URL, SITE_NAME } from "../../seo";
import { PAGES_SEO } from "../../seo-data";
import PageHeader from "../../components/PageHeader";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata({
    lang: lang as Locale,
    path: "/contact",
    title: PAGES_SEO.contact.title,
    description: PAGES_SEO.contact.description,
  });
}

const headerCopy: Record<
  Locale,
  { badge: string; title: string; subtitle: string }
> = {
  en: {
    badge: "Contact Us",
    title: "Let's Plan Your Next Journey",
    subtitle:
      "Reach out anytime — our team is ready to assist with bookings, visas, insurance, or any travel question.",
  },
  ar: {
    badge: "تواصل معنا",
    title: "لنخطط لرحلتك القادمة",
    subtitle:
      "تواصل معنا في أي وقت — فريقنا جاهز لمساعدتك في الحجوزات والتأشيرات والتأمين وأي استفسار يخص السفر.",
  },
  ru: {
    badge: "Связаться с нами",
    title: "Спланируем ваше следующее путешествие",
    subtitle:
      "Свяжитесь с нами в любое время — наша команда готова помочь с бронированиями, визами, страхованием и любыми вопросами о путешествиях.",
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const copy = headerCopy[locale] ?? headerCopy.en;

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: PAGES_SEO.contact.title[locale],
    description: PAGES_SEO.contact.description[locale],
    url: `${SITE_URL}/${lang}/contact`,
    publisher: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
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
      email: "info@alnujoomalmasiya.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageHeader
        lang={locale}
        badge={copy.badge}
        title={copy.title}
        subtitle={copy.subtitle}
      />
      <div className="-mt-8 lg:-mt-12">
        <ContactForm lang={locale} />
      </div>
    </>
  );
}
