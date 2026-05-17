"use client";

import { useState } from "react";
import Image from "next/image";
import { type Locale } from "../../../../i18n-config";

const phoneNumbers = [
  {
    alt: "UAE Flag",
    href: "tel:+971545866066",
    src: "/images/emirate-flag.svg",
  },
  {
    alt: "Syria Flag",
    href: "tel:+96350026610",
    src: "/images/syria-flag.svg",
  },
  {
    alt: "Russia Flag",
    href: "tel:+79189239693",
    src: "/images/ru.svg",
  },
];

type LocalizedText = Record<Locale, string>;

const dictionary: Record<string, LocalizedText> = {
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
  yourName: { ar: "اسمك", en: "Your Name", ru: "Ваше имя" },
  yourEmail: {
    ar: "بريدك الإلكتروني",
    en: "Your Email",
    ru: "Ваш адрес электронной почты",
  },
  subject: { ar: "الموضوع", en: "Subject", ru: "Тема" },
  yourMessage: { ar: "رسالتك", en: "Your Message", ru: "Ваше сообщение" },
  writeMessage: {
    ar: "اكتب رسالتك هنا...",
    en: "Write your message here...",
    ru: "Напишите ваше сообщение здесь...",
  },
  sending: { ar: "جارٍ الإرسال...", en: "Sending...", ru: "Отправка..." },
  thankYou: {
    ar: "شكرًا على رسالتك!",
    en: "Thank you for your message!",
    ru: "Спасибо за ваше сообщение!",
  },
  errorOccurred: {
    ar: "حدث خطأ ما!",
    en: "Something went wrong!",
    ru: "Что-то пошло не так!",
  },
  viewOnMaps: {
    ar: "جوجل ماب",
    en: "View on Google Maps",
    ru: "Посмотреть на Google Картах",
  },
  uaeB: {
    ar: "الإمارات العربية المتحدة ",
    en: "United Arab Emirates ",
    ru: "Объединённые Арабские Эмираты ",
  },
  locationUAE: {
    ar: "دبي، ديرة بور سعيد",
    en: "Dubai, Dira Bawrsai",
    ru: "Дубай, Дира Бурсай",
  },
  sarB: { ar: "سوريا ", en: "Syria", ru: "Сирия" },
  locationSAR: {
    ar: "دمشق- البرامكة خلف الهجرة والجوازات",
    en: "Damascus - Al-Baramka behind Immigration and Passports",
    ru: "Дамаск - Аль-Барамка за иммиграцией и паспортным столом",
  },
  ruB: { ar: "روسيا ", en: "Russia ", ru: "Россия " },
  locationRU: {
    ar: "روسيا جمهورية باشكورتوستان أوفا",
    en: "Russia Republic of Bashkortostan Ufa",
    ru: "Россия Республика Башкортостан Уфа",
  },
};

const locations = [
  {
    countryName: dictionary.uaeB,
    flagSrc: "/images/emirate-flag.svg",
    cityAddress: dictionary.locationUAE,
    phone: "+971545866066",
    googleMapsUrl: "https://maps.app.goo.gl/Gw5kDjBM1gKyqBmE6",
  },
  {
    countryName: dictionary.sarB,
    flagSrc: "/images/syria-flag.svg",
    cityAddress: dictionary.locationSAR,
    phone: "+96350026610",
    googleMapsUrl: "https://maps.app.goo.gl/YYZASxD4UuRLDpRZA",
  },
  {
    countryName: dictionary.ruB,
    flagSrc: "/images/ru.svg",
    cityAddress: dictionary.locationRU,
    phone: "+79189239693",
    googleMapsUrl: "https://maps.app.goo.gl/WUgDDt65ZBTW92R99",
  },
];

const t = (key: LocalizedText, lang: Locale): string =>
  key?.[lang] ?? key?.en ?? "";

export default function ContactForm({ lang }: { lang: Locale }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null as string | null,
    error: null as string | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const formspreeEndpoint = "https://formspree.io/f/manoybrz";

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: t(dictionary.thankYou, lang),
          error: null,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: null,
          error: result.error || t(dictionary.errorOccurred, lang),
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: null,
        error: t(dictionary.errorOccurred, lang),
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 min-h-screen mt-12">
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/3">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.contactUs, lang)}
        </h2>

        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold mb-2">
            {t(dictionary.officePhone, lang)}
          </h3>
          <div className="space-y-2">
            {phoneNumbers.map((phone, idx) => (
              <div className="flex items-center space-x-3" key={idx}>
                <Image
                  className="rounded-full object-fill aspect-square"
                  alt={phone.alt}
                  src={phone.src}
                  width={24}
                  height={24}
                />
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

        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold">
            {t(dictionary.mailUs, lang)}
          </h3>
          <p className="text-gray-600">info@alnujoomalmasiya.com</p>
        </div>

        {locations.map((loc, idx) => (
          <div className="mb-6" key={idx}>
            <div className="flex items-center gap-3 mb-2">
              <Image
                className="rounded-full object-fill aspect-square"
                alt={t(loc.countryName, lang)}
                src={loc.flagSrc}
                width={24}
                height={24}
              />
              <h3 className="text-litePrimary font-semibold text-lg">
                {t(loc.countryName, lang)}
              </h3>
            </div>
            <p className="text-gray-600 mb-2">{t(loc.cityAddress, lang)}</p>
            <div className="flex items-center gap-3 mb-2">
              <a
                href={`tel:${loc.phone}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {loc.phone}
              </a>
            </div>
            {loc.googleMapsUrl && (
              <a
                href={loc.googleMapsUrl}
                className="underline text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(dictionary.viewOnMaps, lang)}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-2/3 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.sendUsMessage, lang)}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-primary font-medium">
                {t(dictionary.yourName, lang)}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 text-black w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourName, lang)}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-primary font-medium">
                {t(dictionary.yourEmail, lang)}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 text-black w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourEmail, lang)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-primary font-medium">
              {t(dictionary.subject, lang)}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full text-black border border-gray-300 rounded-md p-2"
              placeholder={t(dictionary.subject, lang)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-primary font-medium">
              {t(dictionary.yourMessage, lang)}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border text-black border-gray-300 rounded-md p-2 h-28"
              placeholder={t(dictionary.writeMessage, lang)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status.loading}
            className={`bg-accent text-litePrimary font-medium py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors ${
              status.loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status.loading
              ? t(dictionary.sending, lang)
              : t(dictionary.sendMessage, lang)}
          </button>
          {status.success && (
            <p className="text-green-500 mt-2">{status.success}</p>
          )}
          {status.error && <p className="text-red-500 mt-2">{status.error}</p>}
        </form>
      </div>
    </section>
  );
}
