"use client";

import { useState } from "react";
import Image from "next/image";
import { type Locale } from "../../../../i18n-config";

const phoneNumbers = [
  {
    country: "UAE",
    href: "tel:+971545866066",
    display: "+971 54 586 6066",
    src: "/images/emirate-flag.svg",
  },
  {
    country: "Syria",
    href: "tel:+96350026610",
    display: "+963 950 026 610",
    src: "/images/syria-flag.svg",
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
    ar: "عرض على خرائط جوجل",
    en: "View on Google Maps",
    ru: "Посмотреть на Google Картах",
  },
  ourOffices: {
    ar: "مكاتبنا",
    en: "Our Offices",
    ru: "Наши офисы",
  },
  uaeB: {
    ar: "الإمارات العربية المتحدة",
    en: "United Arab Emirates",
    ru: "Объединённые Арабские Эмираты",
  },
  locationUAE: {
    ar: "دبي، ديرة بور سعيد",
    en: "Dubai, Dira Bawrsai",
    ru: "Дубай, Дира Бурсай",
  },
  sarB: { ar: "سوريا", en: "Syria", ru: "Сирия" },
  locationSAR: {
    ar: "دمشق - البرامكة، خلف الهجرة والجوازات",
    en: "Damascus - Al-Baramka, behind Immigration and Passports",
    ru: "Дамаск - Аль-Барамка за иммиграцией и паспортным столом",
  },
};

const locations = [
  {
    countryName: dictionary.uaeB,
    flagSrc: "/images/emirate-flag.svg",
    cityAddress: dictionary.locationUAE,
    phone: "+971545866066",
    phoneDisplay: "+971 54 586 6066",
    googleMapsUrl: "https://maps.app.goo.gl/Gw5kDjBM1gKyqBmE6",
  },
  {
    countryName: dictionary.sarB,
    flagSrc: "/images/syria-flag.svg",
    cityAddress: dictionary.locationSAR,
    phone: "+96350026610",
    phoneDisplay: "+963 950 026 610",
    googleMapsUrl: "https://maps.app.goo.gl/YYZASxD4UuRLDpRZA",
  },
];

const t = (key: LocalizedText, lang: Locale): string =>
  key?.[lang] ?? key?.en ?? "";

// Inline SVG icons
const IconPhone = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.33.03.7-.24 1.02l-2.21 2.2z" />
  </svg>
);

const IconMail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.7a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

const IconExternal = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
  </svg>
);

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
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch("https://formspree.io/f/manoybrz", {
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
    <section className="min-h-screen px-4 pt-8 pb-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <header className="mb-8 text-center">
          <h2 className="heading-accent-center text-3xl lg:text-4xl font-bold text-primary">
            {t(dictionary.contactUs, lang)}
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* LEFT: contact details */}
          <aside className="card-elegant p-6 lg:col-span-1">
            <h3 className="text-xl font-semibold text-primary">
              {t(dictionary.contactUs, lang)}
            </h3>

            {/* Phone numbers */}
            <div className="mt-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-litePrimary">
                <IconPhone className="w-4 h-4" />
                {t(dictionary.officePhone, lang)}
              </h4>
              <ul className="mt-3 space-y-2">
                {phoneNumbers.map((phone) => (
                  <li key={phone.country}>
                    <a
                      href={phone.href}
                      className="group flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-50"
                    >
                      <Image
                        className="rounded-full object-cover ring-1 ring-slate-200"
                        alt={`${phone.country} flag`}
                        src={phone.src}
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-medium text-slate-700 tabular-nums group-hover:text-primary">
                        {phone.display}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email */}
            <div className="mt-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-litePrimary">
                <IconMail className="w-4 h-4" />
                {t(dictionary.mailUs, lang)}
              </h4>
              <a
                href="mailto:info@alnujoomalmasiya.com"
                className="mt-2 inline-block text-sm text-slate-700 hover:text-primary hover:underline underline-offset-2"
              >
                info@alnujoomalmasiya.com
              </a>
            </div>

            {/* Office locations */}
            <div className="mt-6 border-t border-slate-100 pt-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-litePrimary">
                <IconMapPin className="w-4 h-4" />
                {t(dictionary.ourOffices, lang)}
              </h4>
              <ul className="mt-3 space-y-4">
                {locations.map((loc) => (
                  <li
                    key={loc.phone}
                    className="rounded-lg border border-slate-100 bg-slate-50/60 p-3"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        className="rounded-full object-cover ring-1 ring-slate-200"
                        alt={t(loc.countryName, lang)}
                        src={loc.flagSrc}
                        width={20}
                        height={20}
                      />
                      <h5 className="text-sm font-semibold text-primary">
                        {t(loc.countryName, lang)}
                      </h5>
                    </div>
                    <p className="mt-1.5 text-sm text-slate-600">
                      {t(loc.cityAddress, lang)}
                    </p>
                    <div className="mt-2 flex flex-col gap-1">
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-sm font-medium text-slate-700 tabular-nums hover:text-primary"
                      >
                        {loc.phoneDisplay}
                      </a>
                      {loc.googleMapsUrl && (
                        <a
                          href={loc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-litePrimary hover:underline underline-offset-2"
                        >
                          {t(dictionary.viewOnMaps, lang)}
                          <IconExternal className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT: message form */}
          <div className="card-elegant p-6 lg:col-span-2 lg:p-8">
            <h3 className="text-xl font-semibold text-primary">
              {t(dictionary.sendUsMessage, lang)}
            </h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    {t(dictionary.yourName, lang)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-elegant"
                    placeholder={t(dictionary.yourName, lang)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-slate-700"
                  >
                    {t(dictionary.yourEmail, lang)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-elegant"
                    placeholder={t(dictionary.yourEmail, lang)}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  {t(dictionary.subject, lang)}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-elegant"
                  placeholder={t(dictionary.subject, lang)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  {t(dictionary.yourMessage, lang)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-elegant min-h-[8rem] resize-y"
                  placeholder={t(dictionary.writeMessage, lang)}
                  required
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-accent"
                >
                  {status.loading
                    ? t(dictionary.sending, lang)
                    : t(dictionary.sendMessage, lang)}
                </button>
                {status.success && (
                  <p className="text-sm font-medium text-emerald-600">
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="text-sm font-medium text-rose-600">
                    {status.error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
