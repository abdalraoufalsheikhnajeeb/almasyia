import Image from "next/image";
import { Locale } from "../../../../i18n-config";

const phoneNumbers = [
  {
    alt: "UAE Flag",
    href: "tel:+971545866066",
    src: "/images/emirate-flag.svg",
  },
  {
    alt: "Syria Flag",
    href: "tel:+963950026610",
    src: "/images/syria-flag.svg",
  },
  {
    alt: "Russia Flag",
    href: "tel:+79189239693",
    src: "/images/ru.svg",
  },
];

const uaeLocation = (dictionary: any) => ({
  flagSrc: "/images/emirate-flag.svg",
  googleMapsUrl: "https://www.google.com/maps/place/alnujoom+almasiya...",
  locationName: dictionary.uaeB,
  locationDetails: dictionary.locationUAE,
  whatsLink: "https://wa.me/971545866066",
});

const syriaLocation = (dictionary: any) => ({
  flagSrc: "/images/syria-flag.svg",
  googleMapsUrl: "https://www.google.com/maps/place/Alnujoom+almassiya/...",
  locationName: dictionary.sarB,
  locationDetails: dictionary.locationSAR,
  whatsLink: "https://wa.me/971545866066",
});

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = {
    contactUs: { ar: "تواصل معنا", en: "Contact Us", ru: "Свяжитесь с нами" },
    officePhone: {
      ar: "هاتف المكتب",
      en: "Office Phone",
      ru: "Офисный телефон",
    },
    mailUs: { ar: "راسلنا", en: "Mail Us", ru: "Напишите нам" },
    sendUsMessage: {
      ar: "أرسل لنا رسالة",
      en: "Send us a Message",
      ru: "Отправьте нам сообщение",
    },
    sendMessage: {
      ar: "أرسل الرسالة",
      en: "Send Message",
      ru: "Отправить сообщение",
    },
    address: { ar: "العنوان", en: "Address", ru: "Адрес" },
    yourName: { ar: "اسمك", en: "Your Name", ru: "Ваше имя" },
    yourEmail: {
      ar: "بريدك الإلكتروني",
      en: "Your Email",
      ru: "Ваш адрес электронной почты",
    },
    subject: { ar: "الموضوع", en: "Subject", ru: "Тема" },
    // location keys
    uaeB: {
      ar: "الإمارات العربية المتحدة",
      en: "United Arab Emirates",
      ru: "ОАЭ",
    },
    locationUAE: {
      ar: "دبي ، الإمارات العربية المتحدة",
      en: "Dubai, UAE",
      ru: "Дубай, ОАЭ",
    },
    sarB: { ar: "سوريا", en: "Syria", ru: "Сирия" },
    locationSAR: {
      ar: "دمشق ، سوريا",
      en: "Damascus, Syria",
      ru: "Дамаск, Сирия",
    },
  };

  // Build location objects
  const uaeLoc = uaeLocation(dictionary);
  const syriaLoc = syriaLocation(dictionary);

  // Translate helper
  function t(key: any) {
    return key?.[lang] || key?.en || "";
  }

  return (
    <section className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 min-h-screen mt-12">
      {/* Left Section */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/3">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.contactUs)}
        </h2>

        {/* Phone numbers */}
        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold mb-2">
            {t(dictionary.officePhone)}
          </h3>
          <div className="space-y-2">
            {phoneNumbers.map((phone, idx) => (
              <div className="flex items-center space-x-3" key={idx}>
                <Image alt={phone.alt} src={phone.src} width={24} height={24} />
                <a
                  href={phone.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {phone.href.replace("tel:", "")}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold">
            {t(dictionary.mailUs)}
          </h3>
          <p className="text-gray-600">info@alnujoomalmasiya.com</p>
        </div>

        {/* UAE Location */}
        <div className="mb-6">
          <h4 className="font-semibold text-litePrimary">
            {t(uaeLoc.locationName)}
          </h4>
          <p className="text-gray-600">{t(uaeLoc.locationDetails)}</p>
          <a
            href={uaeLoc.googleMapsUrl}
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        {/* Syria Location */}
        <div>
          <h4 className="font-semibold text-litePrimary">
            {t(syriaLoc.locationName)}
          </h4>
          <p className="text-gray-600">{t(syriaLoc.locationDetails)}</p>
          <a
            href={syriaLoc.googleMapsUrl}
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-2/3 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.sendUsMessage)}
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                {t(dictionary.yourName)}
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourName)}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                {t(dictionary.yourEmail)}
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourEmail)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium"
            >
              {t(dictionary.subject)}
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder={t(dictionary.subject)}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              {t(dictionary.sendUsMessage)}
            </label>
            <textarea
              id="message"
              className="mt-1 w-full border border-gray-300 rounded-md p-2 h-28"
              placeholder={t(dictionary.sendUsMessage)}
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
          >
            {t(dictionary.sendMessage)}
          </button>
        </form>
      </div>
    </section>
  );
}
