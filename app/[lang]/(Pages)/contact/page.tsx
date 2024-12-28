// components/ContactPage.tsx
"use client";

import { use } from "react";
import { useState } from "react";
import Image from "next/image";
import { type Locale } from "../../../../i18n-config";

interface Params {
  lang: Locale;
}

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

const locations = (dictionary: any) => [
  {
    countryName: dictionary.uaeB,
    flagSrc: "/images/emirate-flag.svg",
    cityAddress: dictionary.locationUAE,
    phone: "+971545866066",
    googleMapsUrl: "https://www.google.com/maps/place/alnujoom+almasiya...",
    whatsLink: "https://wa.me/971545866066",
  },
  {
    countryName: dictionary.sarB,
    flagSrc: "/images/syria-flag.svg",
    cityAddress: dictionary.locationSAR,
    phone: "+96350026610",
    googleMapsUrl: "https://www.google.com/maps/place/Alnujoom+almassiya/...",
    whatsLink: "https://wa.me/96350026610",
  },
  {
    countryName: dictionary.ruB,
    flagSrc: "/images/ru.svg",
    cityAddress: dictionary.locationRU,
    phone: "+79189239693",
    googleMapsUrl: "https://www.google.com/maps/place/Your+Location+in+Oufa...", // أضف رابط Google Maps هنا إذا كان متاحًا
    whatsLink: "https://wa.me/79189239693",
  },
];

export default function ContactPage({ params }: { params: Promise<Params> }) {
  const { lang } = use(params);

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
      ar: "الإمارات العربية المتحدة 🇦🇪",
      en: "United Arab Emirates 🇦🇪",
      ru: "Объединённые Арабские Эмираты 🇦🇪",
    },
    locationUAE: {
      ar: "دبي، ديرة بور سعيد",
      en: "Dubai, Dira Bawrsai",
      ru: "Дубай, Дира Бурсай",
    },
    sarB: { ar: "سوريا 🇸🇾", en: "Syria 🇸🇾", ru: "Сирия 🇸🇾" },
    locationSAR: {
      ar: "دمشق- البرامكة خلف الهجرة والجوازات",
      en: "Damascus - Al-Baramka behind Immigration and Passports",
      ru: "Дамаск - Аль-Барамка за иммиграцией и паспортным столом",
    },
    ruB: { ar: "روسيا 🇷🇺", en: "Russia 🇷🇺", ru: "Россия 🇷🇺" },
    locationRU: {
      ar: "بشكيريا- أوفا",
      en: "Bashkiria - Oufa",
      ru: "Башкирия - Уфа",
    },
  };

  // Build location objects
  const locs = locations(dictionary);

  // Translate helper
  function t(key: any) {
    return key?.[lang] || key?.en || "";
  }

  // Form state
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

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission to Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Replace this URL with your actual Formspree form endpoint
    const formspreeEndpoint = "https://formspree.io/f/{your-form-id}";

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
          success:
            lang === "ar"
              ? "شكرًا على رسالتك!"
              : lang === "ru"
              ? "Спасибо за ваше сообщение!"
              : "Thank you for your message!",
          error: null,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          loading: false,
          success: null,
          error:
            result.error ||
            (lang === "ar"
              ? "حدث خطأ ما!"
              : lang === "ru"
              ? "Что-то пошло не так!"
              : "Something went wrong!"),
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error:
          lang === "ar"
            ? "حدث خطأ ما!"
            : lang === "ru"
            ? "Что-то пошло не так!"
            : "Something went wrong!",
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 min-h-screen mt-12">
      {/* اليسار: تفاصيل الاتصال */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-1/3">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.contactUs)}
        </h2>

        {/* أرقام الهواتف */}
        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold mb-2">
            {t(dictionary.officePhone)}
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

        {/* البريد الإلكتروني */}
        <div className="mb-6">
          <h3 className="text-litePrimary font-semibold">
            {t(dictionary.mailUs)}
          </h3>
          <p className="text-gray-600">info@alnujoomalmasiya.com</p>
        </div>

        {/* تفاصيل المواقع */}
        {locs.map((loc, idx) => (
          <div className="mb-6" key={idx}>
            <div className="flex items-center gap-3 mb-2">
              <Image
                className="rounded-full object-fill aspect-square"
                alt={loc.countryName}
                src={loc.flagSrc}
                width={24}
                height={24}
              />
              <h3 className="text-litePrimary font-semibold text-lg">
                {t(loc.countryName)}
              </h3>
            </div>
            <p className="text-gray-600 mb-2">{t(loc.cityAddress)}</p>
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
                {lang === "ar"
                  ? "جوجل ماب"
                  : lang === "ru"
                  ? "Посмотреть на Google Картах"
                  : "View on Google Maps"}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* اليمين: نموذج الاتصال */}
      <div className="bg-white shadow-md rounded-md p-6 w-full md:w-2/3 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-primary font-bold text-2xl mb-4">
          {t(dictionary.sendUsMessage)}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-primary font-medium">
                {t(dictionary.yourName)}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourName)}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-primary font-medium">
                {t(dictionary.yourEmail)}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                placeholder={t(dictionary.yourEmail)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-primary font-medium">
              {t(dictionary.subject)}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder={t(dictionary.subject)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-primary font-medium">
              {lang === "ar"
                ? "رسالتك"
                : lang === "ru"
                ? "Ваше сообщение"
                : "Your Message"}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 h-28"
              placeholder={
                lang === "ar"
                  ? "اكتب رسالتك هنا..."
                  : lang === "ru"
                  ? "Напишите ваше сообщение здесь..."
                  : "Write your message here..."
              }
              required
            />
          </div>
          <button
            type="submit"
            disabled={status.loading}
            className={`bg-accent text-white font-medium py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors ${
              status.loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status.loading
              ? lang === "ar"
                ? "جارٍ الإرسال..."
                : lang === "ru"
                ? "Отправка..."
                : "Sending..."
              : t(dictionary.sendMessage)}
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
