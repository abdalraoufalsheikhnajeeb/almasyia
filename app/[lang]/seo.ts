import type { Metadata } from "next";
import { i18n, type Locale } from "../../i18n-config";

export const SITE_URL = "https://www.alnujoomalmasiya.com";
export const SITE_NAME = "Alnujoom Almasiya";

type LocalizedText = Record<Locale, string>;

export type BuildMetadataInput = {
  lang: Locale;
  path: string;
  title: LocalizedText;
  description: LocalizedText;
  keywords?: string[];
  imageUrl?: string;
  noIndex?: boolean;
};

const buildAlternateLanguages = (path: string) =>
  Object.fromEntries(
    i18n.locales.map((locale) => [locale, `/${locale}${path}`])
  ) as Record<Locale, string>;

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  keywords,
  imageUrl = "/images/logo.webp",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const pageTitle = title[lang] ?? title.en;
  const pageDescription = description[lang] ?? description.en;
  const canonicalPath = `/${lang}${path}`;
  const ogImage = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: pageTitle,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: canonicalPath,
      languages: buildAlternateLanguages(path),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}${canonicalPath}`,
      type: "website",
      locale: lang,
      siteName: SITE_NAME,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export type AirlineSchemaInput = {
  name: string;
  url: string;
  iataCode?: string;
  icaoCode?: string;
  foundedYear?: number;
  headquarters?: string;
  customerServicePhone?: string;
};

export function buildAirlineJsonLd(input: AirlineSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Airline",
    name: input.name,
    url: input.url,
    iataCode: input.iataCode,
    icaoCode: input.icaoCode,
    foundingDate: input.foundedYear ? String(input.foundedYear) : undefined,
    address: input.headquarters,
    contactPoint: input.customerServicePhone
      ? {
          "@type": "ContactPoint",
          telephone: input.customerServicePhone,
          contactType: "customer service",
        }
      : undefined,
  };
}

export type CountrySchemaInput = {
  name: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
};

export function buildCountryJsonLd(input: CountrySchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: input.name,
    description: input.description,
    image: `${SITE_URL}${input.imageUrl}`,
    url: input.pageUrl,
  };
}

export type ServiceSchemaInput = {
  name: string;
  description: string;
  serviceType?: string;
  schemaType?: "Service" | "TaxiService" | "InsuranceAgency";
  pageUrl: string;
};

export function buildServiceJsonLd(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": input.schemaType ?? "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: input.pageUrl,
  };
}

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildTouristTripJsonLd(input: {
  name: string;
  description: string;
  imageUrl?: string;
  pageUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: input.name,
    description: input.description,
    image: input.imageUrl ? `${SITE_URL}${input.imageUrl}` : undefined,
    url: input.pageUrl,
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
