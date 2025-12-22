"use client";
import { useState } from "react";

interface TravelInsuranceFormProps {
  lang: string;
}

const TravelInsuranceForm: React.FC<TravelInsuranceFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    destination: "",
    insuranceStartDate: new Date(),
    insuranceEndDate: new Date(),
    numberOfPeople: "",
    tripType: "oneTrip",
    otherCountry: "",
  });
  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  // A unified onChange handler for <input> and <select>
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Narrow to <input> first
    if (e.target instanceof HTMLInputElement) {
      const { name, type, value, valueAsDate } = e.target;

      // If it's a date field
      if (name === "insuranceStartDate" || name === "insuranceEndDate") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: valueAsDate ?? new Date(),
        }));
      } else {
        // For text, number, or radio inputs
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // Otherwise it's a <select>
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
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
      className="space-y-6 w-96 p-4 flex flex-col backdrop-blur-sm border-2 border-white rounded-lg bg-white bg-opacity-50"
    >
      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "اختر الوجهة"
            : lang === "ru"
            ? "Выберите пункт назначения"
            : "Select the Destination"}
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          required
        >
          <option value="">
            {lang === "ar"
              ? "-- اختر الوجهة --"
              : lang === "ru"
              ? "-- Выберите пункт назначения --"
              : "-- Select Destination --"}
          </option>
          <option value="Gulf Cooperation Council countries">
            {lang === "ar"
              ? "تأمين دول مجلس التعاون الخليجي"
              : lang === "ru"
              ? "Страхование стран Совета сотрудничества стран Персидского залива"
              : "Securing the Gulf Cooperation Council countries"}
          </option>
          <option value="Russia 🇷🇺">
            {lang === "ar"
              ? "تأمين روسيا 🇷🇺"
              : lang === "ru"
              ? "Страхование России 🇷🇺"
              : "Securing Russia 🇷🇺"}
          </option>
          <option value="Schengen insurance">
            {lang === "ar"
              ? "تأمين شنغن"
              : lang === "ru"
              ? "Шенгенская страховка"
              : "Schengen insurance"}
          </option>
          <option value="America insurance">
            {lang === "ar"
              ? "تأمين أمريكا"
              : lang === "ru"
              ? "Страхование Америки"
              : "America insurance"}
          </option>
          <option value="Canada Insurance 🇨🇦">
            {lang === "ar"
              ? "تأمين كندا 🇨🇦"
              : lang === "ru"
              ? "Страхование Канады 🇨🇦"
              : "Canada Insurance 🇨🇦"}
          </option>
          <option value="Other countries">
            {lang === "ar"
              ? "دول أخرى"
              : lang === "ru"
              ? "Другие страны"
              : "Other countries"}
          </option>
        </select>
        {formData.destination === "Other countries" && (
          <input
            type="text"
            name="otherCountry"
            value={formData.otherCountry}
            onChange={handleChange}
            placeholder={
              lang === "ar"
                ? "ادخل الدولة"
                : lang === "ru"
                ? "Введите страну"
                : "Enter country"
            }
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
            required
          />
        )}
      </div>

      {/* Insurance Start Date */}
      <div>
        <label
          htmlFor="insuranceStartDate"
          className="block text-lg text-gray-900"
        >
          {lang === "ar"
            ? "تاريخ بدء التأمين"
            : lang === "ru"
            ? "Дата начала страхования"
            : "Insurance Starting Date"}
        </label>
        <div className="relative mt-2">
          <input
            type="date"
            id="insuranceStartDate"
            name="insuranceStartDate"
            // Restrict past dates
            min={new Date().toISOString().split("T")[0]}
            // Convert current date to YYYY-MM-DD
            value={formData.insuranceStartDate.toISOString().split("T")[0]}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-primary"
            lang="en"
            inputMode="numeric"
            pattern="\\d{4}-\\d{2}-\\d{2}"
            required
          />
        </div>
      </div>

      {/* Insurance End Date */}
      <div>
        <label
          htmlFor="insuranceEndDate"
          className="block text-lg text-gray-900"
        >
          {lang === "ar"
            ? "تاريخ انتهاء التأمين"
            : lang === "ru"
            ? "Дата окончания страхования"
            : "Insurance Ending Date"}
        </label>
        <div className="relative mt-2">
          <input
            type="date"
          id="insuranceEndDate"
          name="insuranceEndDate"
          min={new Date().toISOString().split("T")[0]}
          value={formData.insuranceEndDate.toISOString().split("T")[0]}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-primary"
          lang="en"
          inputMode="numeric"
          pattern="\\d{4}-\\d{2}-\\d{2}"
          required
        />
      </div>
    </div>

      {/* Number of People */}
      <div>
        <label htmlFor="numberOfPeople" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "عدد الأشخاص"
            : lang === "ru"
            ? "Количество людей"
            : "Number of People"}
        </label>
        <input
          id="numberOfPeople"
          type="number"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          lang="en"
          inputMode="numeric"
          pattern="\\d*"
          required
        />
      </div>

      {/* Trip Type */}
      <div>
        <label className="block text-lg text-gray-900">
          {lang === "ar"
            ? "نوع الرحلة"
            : lang === "ru"
            ? "Тип поездки"
            : "Trip Type"}
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            name="tripType"
            value="oneTrip"
            checked={formData.tripType === "oneTrip"}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label className="ms-2 text-lg text-gray-900">
            {lang === "ar"
              ? "رحلة واحدة"
              : lang === "ru"
              ? "Одна поездка"
              : "One Trip"}
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            name="tripType"
            value="multipleTrips"
            checked={formData.tripType === "multipleTrips"}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label className="ms-2 text-lg text-gray-900">
            {lang === "ar"
              ? "رحلات متعددة سنويًا"
              : lang === "ru"
              ? "Множественные поездки ежегодно"
              : "Multiple Trips Annually"}
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {lang === "ar"
          ? "إرسال المعلومات"
          : lang === "ru"
          ? "Отправить информацию"
          : "Send Info"}
      </button>
    </form>
  );
};

export default TravelInsuranceForm;
