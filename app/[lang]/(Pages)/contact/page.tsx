import type { Metadata } from "next";
import { type Locale } from "../../../../i18n-config";
import { buildPageMetadata, SITE_URL, SITE_NAME } from "../../seo";
import { PAGES_SEO } from "../../seo-data";
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: PAGES_SEO.contact.title[lang as Locale],
    description: PAGES_SEO.contact.description[lang as Locale],
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
          telephone: "+96350026610",
          contactType: "customer support",
          areaServed: ["Damascus", "Syria"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+79189239693",
          contactType: "customer support",
          areaServed: ["Russia"],
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
      <ContactForm lang={lang as Locale} />
    </>
  );
}
