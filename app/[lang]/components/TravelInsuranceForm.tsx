"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const handleDateChange = (name: string, date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date || new Date(),
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Travel Insurance: 🏖️*\n\n- *Destination*: ${
      formData.destination === "Other countries"
        ? formData.otherCountry
        : formData.destination
    } 🌍\n\n- *Insurance Starting Date*: ${formData.insuranceStartDate.toLocaleDateString()} 📅\n\n- *Insurance Ending Date*: ${formData.insuranceEndDate.toLocaleDateString()} 📅\n\n- *Number of People*: ${
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
      className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
    >
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        )}
      </div>
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
          <DatePicker
            minDate={new Date()}
            id="insuranceStartDate"
            selected={formData.insuranceStartDate}
            onChange={(date) => handleDateChange("insuranceStartDate", date)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2 bg-white text-gray-700"
            placeholderText={
              lang === "ar"
                ? "اختر التاريخ"
                : lang === "ru"
                ? "Выберите дату"
                : "Select date"
            }
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>
      </div>
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
          <DatePicker
            minDate={new Date()}
            id="insuranceEndDate"
            selected={formData.insuranceEndDate}
            onChange={(date) => handleDateChange("insuranceEndDate", date)}
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2 bg-white text-gray-700"
            placeholderText={
              lang === "ar"
                ? "اختر التاريخ"
                : lang === "ru"
                ? "Выберите дату"
                : "Select date"
            }
            dateFormat="dd/MM/yyyy"
            required
          />
        </div>
      </div>
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
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
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
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
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
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
      <button
        type="submit"
        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
