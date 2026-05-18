"use client";
import { useState } from "react";

interface TravelInsuranceFormProps {
  lang: string;
}

type Lang = "ar" | "en" | "ru";

const tr = (lang: Lang, ar: string, en: string, ru: string): string =>
  lang === "ar" ? ar : lang === "ru" ? ru : en;

const TravelInsuranceForm: React.FC<TravelInsuranceFormProps> = ({ lang }) => {
  const l = lang as Lang;
  const [formData, setFormData] = useState({
    destination: "",
    insuranceStartDate: new Date(),
    insuranceEndDate: new Date(),
    numberOfPeople: "",
    tripType: "oneTrip",
    otherCountry: "",
  });
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value, valueAsDate } = e.target;
      if (name === "insuranceStartDate" || name === "insuranceEndDate") {
        setFormData((prev) => ({ ...prev, [name]: valueAsDate ?? new Date() }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalDestination =
      formData.destination === "Other countries"
        ? formData.otherCountry
        : formData.destination;

    const message = `*Travel Insurance: 🏖️*\n\n- *Destination*: ${finalDestination} 🌍\n\n- *Insurance Starting Date*: ${formatDate(formData.insuranceStartDate)} 📅\n\n- *Insurance Ending Date*: ${formatDate(formData.insuranceEndDate)} 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Trip Type*: ${
      formData.tripType === "oneTrip"
        ? "One Trip 🚗"
        : "Multiple Trips Annually 🌐"
    }`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card-elegant w-full max-w-md p-6 space-y-4"
    >
      <h3 className="heading-accent text-xl font-bold text-primary">
        {tr(l, "تأمين السفر", "Travel Insurance", "Туристическое страхование")}
      </h3>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "اختر الوجهة", "Select the Destination", "Выберите пункт назначения")}
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="input-elegant"
          required
        >
          <option value="">
            -- {tr(l, "اختر الوجهة", "Select Destination", "Выберите пункт назначения")} --
          </option>
          <option value="Gulf Cooperation Council countries">
            {tr(l, "تأمين دول مجلس التعاون الخليجي", "Gulf Cooperation Council countries", "Страны Совета сотрудничества")}
          </option>
          <option value="Russia 🇷🇺">
            {tr(l, "تأمين روسيا 🇷🇺", "Russia 🇷🇺", "Россия 🇷🇺")}
          </option>
          <option value="Schengen insurance">
            {tr(l, "تأمين شنغن", "Schengen insurance", "Шенгенская страховка")}
          </option>
          <option value="America insurance">
            {tr(l, "تأمين أمريكا", "America insurance", "Страхование Америки")}
          </option>
          <option value="Canada Insurance 🇨🇦">
            {tr(l, "تأمين كندا 🇨🇦", "Canada Insurance 🇨🇦", "Страхование Канады 🇨🇦")}
          </option>
          <option value="Other countries">
            {tr(l, "دول أخرى", "Other countries", "Другие страны")}
          </option>
        </select>
        {formData.destination === "Other countries" && (
          <input
            type="text"
            name="otherCountry"
            value={formData.otherCountry}
            onChange={handleChange}
            placeholder={tr(l, "ادخل الدولة", "Enter country", "Введите страну")}
            className="input-elegant mt-2 animate-fade-in"
            required
          />
        )}
      </div>

      {/* Insurance Start Date */}
      <div>
        <label htmlFor="insuranceStartDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ بدء التأمين", "Insurance Starting Date", "Дата начала страхования")}
        </label>
        <input
          type="date"
          id="insuranceStartDate"
          name="insuranceStartDate"
          min={new Date().toISOString().split("T")[0]}
          value={formatDate(formData.insuranceStartDate)}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      {/* Insurance End Date */}
      <div>
        <label htmlFor="insuranceEndDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ انتهاء التأمين", "Insurance Ending Date", "Дата окончания страхования")}
        </label>
        <input
          type="date"
          id="insuranceEndDate"
          name="insuranceEndDate"
          min={new Date().toISOString().split("T")[0]}
          value={formatDate(formData.insuranceEndDate)}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      {/* Number of People */}
      <div>
        <label htmlFor="numberOfPeople" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "عدد الأشخاص", "Number of People", "Количество людей")}
        </label>
        <input
          id="numberOfPeople"
          type="number"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          min={1}
          className="input-elegant"
          lang="en"
          inputMode="numeric"
          pattern="\\d*"
          required
        />
      </div>

      {/* Trip Type */}
      <div>
        <span className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "نوع الرحلة", "Trip Type", "Тип поездки")}
        </span>
        <div className="mt-1 space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="oneTrip"
              checked={formData.tripType === "oneTrip"}
              onChange={handleChange}
              className="h-4 w-4 text-litePrimary focus:ring-litePrimary"
            />
            <span className="text-sm text-slate-700">
              {tr(l, "رحلة واحدة", "One Trip", "Одна поездка")}
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              value="multipleTrips"
              checked={formData.tripType === "multipleTrips"}
              onChange={handleChange}
              className="h-4 w-4 text-litePrimary focus:ring-litePrimary"
            />
            <span className="text-sm text-slate-700">
              {tr(l, "رحلات متعددة سنويًا", "Multiple Trips Annually", "Множественные поездки ежегодно")}
            </span>
          </label>
        </div>
      </div>

      <button type="submit" className="btn-accent w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
        {tr(l, "إرسال المعلومات", "Send Info", "Отправить информацию")}
      </button>
    </form>
  );
};

export default TravelInsuranceForm;
