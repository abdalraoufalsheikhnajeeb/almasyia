"use client";

import { useState } from "react";
import Image from "next/image";
import { type Locale } from "../../../../i18n-config";

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
    ar: "إرسال",
    en: "Send Message",
    ru: "Отправить",
  },
  yourName: { ar: "اسمك", en: "Your Name", ru: "Ваше имя" },
  yourEmail: {
    ar: "بريدك الإلكتروني",
    en: "Your Email",
    ru: "Ваш email",
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
    ar: "شكراً! وصلتنا رسالتك وسنرد قريباً.",
    en: "Thanks! We received your message and will reply shortly.",
    ru: "Спасибо! Мы получили ваше сообщение и скоро ответим.",
  },
  errorOccurred: {
    ar: "حدث خطأ ما! حاول مرة أخرى.",
    en: "Something went wrong! Please try again.",
    ru: "Что-то пошло не так! Попробуйте ещё раз.",
  },
  viewOnMaps: {
    ar: "عرض الموقع",
    en: "Open in Maps",
    ru: "Открыть на карте",
  },
  ourOffices: {
    ar: "مكاتبنا",
    en: "Our Offices",
    ru: "Наши офисы",
  },
  uaeB: {
    ar: "الإمارات العربية المتحدة",
    en: "United Arab Emirates",
    ru: "ОАЭ",
  },
  locationUAE: {
    ar: "دبي، ديرة بور سعيد",
    en: "Dubai, Dira Bawrsai",
    ru: "Дубай, Дира Бурсай",
  },
  sarB: { ar: "سوريا", en: "Syria", ru: "Сирия" },
  locationSAR: {
    ar: "دمشق - البرامكة، خلف الهجرة والجوازات",
    en: "Damascus - Al-Baramka, behind Immigration & Passports",
    ru: "Дамаск — Аль-Барамка, за иммиграцией",
  },
  // Quick actions
  qaWhatsappTitle: { ar: "واتساب", en: "WhatsApp", ru: "WhatsApp" },
  qaWhatsappDesc: {
    ar: "محادثة فورية مع فريقنا",
    en: "Instant chat with our team",
    ru: "Мгновенный чат с командой",
  },
  qaCallTitle: { ar: "اتصل بنا", en: "Call us", ru: "Позвонить" },
  qaCallDesc: {
    ar: "تحدث معنا مباشرة، 24/7",
    en: "Speak with us directly, 24/7",
    ru: "Прямой разговор, 24/7",
  },
  qaEmailTitle: { ar: "البريد", en: "Email", ru: "Email" },
  qaEmailDesc: {
    ar: "نرد عادةً خلال ساعة",
    en: "Reply within an hour",
    ru: "Ответим в течение часа",
  },
  qaPickOffice: {
    ar: "اختر مكتباً",
    en: "Choose an office",
    ru: "Выберите офис",
  },
  qaBothOffices: {
    ar: "الإمارات وسوريا",
    en: "UAE & Syria",
    ru: "ОАЭ и Сирия",
  },
  // Quick badge for response
  responseHint: {
    ar: "نرد عادةً خلال ساعة",
    en: "We usually reply within the hour",
    ru: "Обычно отвечаем в течение часа",
  },
  formIntro: {
    ar: "املأ النموذج وسيتواصل معك أحد مستشاري السفر",
    en: "Fill the form and a travel advisor will get back to you",
    ru: "Заполните форму, и наш консультант скоро свяжется с вами",
  },
};

const t = (key: LocalizedText, lang: Locale): string =>
  key?.[lang] ?? key?.en ?? "";

const locations = [
  {
    countryName: dictionary.uaeB,
    flagSrc: "/images/emirate-flag.svg",
    cityAddress: dictionary.locationUAE,
    phone: "+971545866066",
    phoneDisplay: "+971 54 586 6066",
    whatsapp: "https://wa.me/971545866066",
    googleMapsUrl: "https://maps.app.goo.gl/Gw5kDjBM1gKyqBmE6",
  },
  {
    countryName: dictionary.sarB,
    flagSrc: "/images/syria-flag.svg",
    cityAddress: dictionary.locationSAR,
    phone: "+963950026610",
    phoneDisplay: "+963 950 026 610",
    whatsapp: "https://wa.me/963950026610",
    googleMapsUrl: "https://maps.app.goo.gl/YYZASxD4UuRLDpRZA",
  },
];

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

const IconWhatsapp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
  </svg>
);

const IconSend = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const IconArrowDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
      clipRule="evenodd"
    />
  </svg>
);

const IconAlert = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ContactForm({ lang }: { lang: Locale }) {
  const isRTL = lang === "ar";

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
    <section
      className="px-4 pt-2 pb-20 lg:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* ========== Quick action strip ==========
              No specific country numbers shown here — neutral CTAs.
              WhatsApp/Call link to #offices anchor so users pick a country below.
              Email is universal (one address for both offices). */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* WhatsApp — scroll to offices */}
          <a
            href="#offices"
            className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-white p-5 shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-white"
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#25d366] to-[#128c7e] text-white shadow-md shadow-emerald-500/30 transition-transform group-hover:scale-110">
                <IconWhatsapp className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-primary">
                  {t(dictionary.qaWhatsappTitle, lang)}
                </h3>
                <p className="text-xs text-slate-600 lg:text-sm">
                  {t(dictionary.qaWhatsappDesc, lang)}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <span className="flex -space-x-1.5 rtl:space-x-reverse">
                    <Image
                      className="h-4 w-4 rounded-full object-cover ring-1 ring-white"
                      alt=""
                      aria-hidden="true"
                      src="/images/emirate-flag.svg"
                      width={16}
                      height={16}
                    />
                    <Image
                      className="h-4 w-4 rounded-full object-cover ring-1 ring-white"
                      alt=""
                      aria-hidden="true"
                      src="/images/syria-flag.svg"
                      width={16}
                      height={16}
                    />
                  </span>
                  {t(dictionary.qaBothOffices, lang)}
                </span>
              </div>
              <IconArrowDown
                className={`mt-1 h-4 w-4 flex-shrink-0 text-emerald-600 transition-transform group-hover:translate-y-0.5`}
              />
            </div>
          </a>

          {/* Call — scroll to offices */}
          <a
            href="#offices"
            className="group relative overflow-hidden rounded-2xl border border-sky-200 bg-white p-5 shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/80 via-white to-white"
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-litePrimary to-primary text-white shadow-md shadow-litePrimary/30 transition-transform group-hover:scale-110">
                <IconPhone className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-primary">
                  {t(dictionary.qaCallTitle, lang)}
                </h3>
                <p className="text-xs text-slate-600 lg:text-sm">
                  {t(dictionary.qaCallDesc, lang)}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-litePrimary">
                  <span className="flex -space-x-1.5 rtl:space-x-reverse">
                    <Image
                      className="h-4 w-4 rounded-full object-cover ring-1 ring-white"
                      alt=""
                      aria-hidden="true"
                      src="/images/emirate-flag.svg"
                      width={16}
                      height={16}
                    />
                    <Image
                      className="h-4 w-4 rounded-full object-cover ring-1 ring-white"
                      alt=""
                      aria-hidden="true"
                      src="/images/syria-flag.svg"
                      width={16}
                      height={16}
                    />
                  </span>
                  {t(dictionary.qaBothOffices, lang)}
                </span>
              </div>
              <IconArrowDown
                className={`mt-1 h-4 w-4 flex-shrink-0 text-litePrimary transition-transform group-hover:translate-y-0.5`}
              />
            </div>
          </a>

          {/* Email — direct mailto (universal, one address for both offices) */}
          <a
            href="mailto:info@alnujoomalmasiya.com"
            className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-white p-5 shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-white"
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#c89e4f] text-white shadow-md shadow-accent/30 transition-transform group-hover:scale-110">
                <IconMail className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-primary">
                  {t(dictionary.qaEmailTitle, lang)}
                </h3>
                <p className="text-xs text-slate-600 lg:text-sm">
                  {t(dictionary.qaEmailDesc, lang)}
                </p>
                <span className="mt-2 inline-block truncate text-xs font-semibold text-[#a37c2a]">
                  info@alnujoomalmasiya.com
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* ========== Main grid: form + offices ========== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* FORM card */}
          <div className="lg:col-span-7">
            <div className="card-elegant overflow-hidden p-6 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary lg:text-2xl">
                    {t(dictionary.sendUsMessage, lang)}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {t(dictionary.formIntro, lang)}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {t(dictionary.responseHint, lang)}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
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
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
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
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
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
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    {t(dictionary.yourMessage, lang)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-elegant min-h-[10rem] resize-y"
                    placeholder={t(dictionary.writeMessage, lang)}
                    required
                  />
                </div>

                {/* Status banners */}
                {status.success && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm font-medium text-emerald-800"
                  >
                    <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>{status.success}</span>
                  </div>
                )}
                {status.error && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-sm font-medium text-rose-800"
                  >
                    <IconAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="flex items-center justify-end pt-1">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-[#c89e4f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status.loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t(dictionary.sending, lang)}
                      </>
                    ) : (
                      <>
                        {t(dictionary.sendMessage, lang)}
                        <IconSend
                          className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                            isRTL ? "-scale-x-100 group-hover:-translate-x-0.5" : ""
                          }`}
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* OFFICES sidebar */}
          <aside
            id="offices"
            className="flex scroll-mt-24 flex-col gap-4 lg:col-span-5"
          >
            <div className="card-elegant p-6 lg:p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-litePrimary/10 text-litePrimary">
                  <IconMapPin className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-bold text-primary lg:text-xl">
                  {t(dictionary.ourOffices, lang)}
                </h3>
              </div>

              <ul className="mt-5 space-y-4">
                {locations.map((loc) => (
                  <li
                    key={loc.phone}
                    className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/40 p-4 transition-all hover:border-litePrimary/30 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        className="h-7 w-7 rounded-full object-cover ring-2 ring-white shadow-sm"
                        alt={t(loc.countryName, lang)}
                        src={loc.flagSrc}
                        width={28}
                        height={28}
                      />
                      <h4 className="text-base font-bold text-primary">
                        {t(loc.countryName, lang)}
                      </h4>
                    </div>
                    <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                      <IconMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                      <span>{t(loc.cityAddress, lang)}</span>
                    </p>
                    <a
                      href={`tel:${loc.phone}`}
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary tabular-nums hover:text-litePrimary"
                    >
                      <IconPhone className="h-4 w-4 text-litePrimary" />
                      {loc.phoneDisplay}
                    </a>

                    <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-200/60 pt-3">
                      <a
                        href={loc.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/60 transition-colors hover:bg-emerald-100"
                      >
                        <IconWhatsapp className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                      {loc.googleMapsUrl && (
                        <a
                          href={loc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-litePrimary/10 px-2.5 py-1.5 text-xs font-semibold text-litePrimary ring-1 ring-litePrimary/20 transition-colors hover:bg-litePrimary/15"
                        >
                          <IconMapPin className="h-3.5 w-3.5" />
                          {t(dictionary.viewOnMaps, lang)}
                          <IconExternal className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
