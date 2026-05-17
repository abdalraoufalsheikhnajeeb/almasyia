import Image from "next/image";
import type { Locale } from "../../../i18n-config";
import {
  type AirlineData,
  type AirlineInfoRow,
  type LocalizedText,
} from "../airLinesBrief/airlines-data";
import { buildAirlineJsonLd, SITE_URL } from "../seo";

const t = (text: LocalizedText, lang: Locale): string =>
  text[lang] ?? text.en;

const renderInfoValue = (row: AirlineInfoRow, lang: Locale) => {
  const display =
    typeof row.value === "string" ? row.value : t(row.value, lang);
  if (row.href) {
    return (
      <a target="_blank" href={row.href} className="text-blue-500">
        {display}
      </a>
    );
  }
  return display;
};

export default function AirlinePage({
  airline,
  lang,
}: {
  airline: AirlineData;
  lang: Locale;
}) {
  const name = t(airline.name, lang);
  const altText = t(airline.imageAlt, lang);

  const jsonLd = buildAirlineJsonLd({
    name,
    url: `${SITE_URL}/${lang}/airLinesBrief/${airline.slug}`,
    iataCode: airline.iataCode,
    icaoCode: airline.icaoCode,
    foundedYear: airline.foundedYear,
    headquarters: airline.headquarters,
    customerServicePhone: airline.customerServicePhone,
  });

  return (
    <article className="container mx-auto p-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white shadow-md rounded-lg p-4 opacity-85 flex flex-col max-w-7xl mx-auto pt-24">
        <h1 className="text-4xl text-center font-bold">{name}</h1>
        <Image
          width={420}
          height={300}
          quality={60}
          src={airline.imageSrc}
          alt={altText}
          className="w-96 mb-5"
        />
        <p className="text-primary mb-4">{t(airline.intro, lang)}</p>

        {airline.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold mb-2">
              {t(section.heading, lang)}
            </h2>
            <p className="text-primary mb-4">{t(section.body, lang)}</p>
          </section>
        ))}

        <div>
          <h2 className="text-2xl font-bold mb-4">
            {lang === "ar"
              ? "معلومات عن شركة الطيران"
              : lang === "ru"
              ? "Информация об авиакомпании"
              : "Airline Information"}
          </h2>
          <table className="w-fit text-start text-primary">
            <tbody>
              {airline.info.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="font-bold py-2 pe-8">{t(row.label, lang)}</td>
                  <td className="py-2">{renderInfoValue(row, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
