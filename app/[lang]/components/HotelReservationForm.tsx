"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CitiesByCountry, citiesByCountry } from "../data";

interface HotelReservationFormProps {
  lang: string;
}

const HotelReservationForm: React.FC<HotelReservationFormProps> = ({
  lang,
}) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    arrivalDate: new Date(),
    departureDate: new Date(),
    numberOfPeople: "",
    numberOfChildren: "",
  });
  const [hasChildren, setHasChildren] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  const handleArrivalDateChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      arrivalDate: date || new Date(),
    }));
  };

  const handleDepartureDateChange = (date: Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      departureDate: date || new Date(),
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setHasChildren(checked);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === "country") {
        const selectedCountry = citiesByCountry[value as keyof CitiesByCountry];
        setCities(
          selectedCountry
            ? selectedCountry[lang as keyof typeof selectedCountry] || []
            : []
        );
        setFormData((prevData) => ({
          ...prevData,
          city: "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Hotel Reservation: 🏨*\n\n- *Country*: ${
      formData.country
    } 🌍\n\n- *City*: ${
      formData.city
    } 🏙️\n\n- *Arrival Date*: ${formData.arrivalDate.toLocaleDateString()} 📅\n\n- *Departure Date*: ${formData.departureDate.toLocaleDateString()} 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Number of Children*: ${
      hasChildren ? formData.numberOfChildren || "None" : "None"
    } 👶`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
    >
      <div>
        <label htmlFor="country" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "اختر الدولة"
            : lang === "ru"
            ? "Выберите страну"
            : "Choose the country"}
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        >
          <option value="">
            --{" "}
            {lang === "ar"
              ? "اختر الدولة"
              : lang === "ru"
              ? "Выберите страну"
              : "Select Country"}{" "}
            --
          </option>
          {Object.keys(citiesByCountry).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city" className="block text-lg text-gray-900">
          {lang === "ar" ? "المدينة" : lang === "ru" ? "Город" : "City"}
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        >
          <option value="">
            --{" "}
            {lang === "ar"
              ? "اختر المدينة"
              : lang === "ru"
              ? "Выберите город"
              : "Select City"}{" "}
            --
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="arrivalDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ الوصول"
            : lang === "ru"
            ? "Дата прибытия"
            : "Date of Arrival"}
        </label>
        <div className="relative mt-2">
          <DatePicker
            id="arrivalDate"
            selected={formData.arrivalDate}
            onChange={handleArrivalDateChange}
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
        <label htmlFor="departureDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ المغادرة"
            : lang === "ru"
            ? "Дата отъезда"
            : "Departure Date"}
        </label>
        <div className="relative mt-2">
          <DatePicker
            id="departureDate"
            selected={formData.departureDate}
            onChange={handleDepartureDateChange}
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
      <div className="flex items-center mt-2">
        <input
          id="hasChildren"
          type="checkbox"
          name="hasChildren"
          checked={hasChildren}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="hasChildren" className="ms-2 text-lg text-gray-900">
          {lang === "ar"
            ? "هل لديك أطفال؟"
            : lang === "ru"
            ? "У вас есть дети?"
            : "Do you have children?"}
        </label>
      </div>
      {hasChildren && (
        <div>
          <label
            htmlFor="numberOfChildren"
            className="block text-lg text-gray-900"
          >
            {lang === "ar"
              ? "عدد الأطفال"
              : lang === "ru"
              ? "Количество детей"
              : "Number of Children"}
          </label>
          <input
            id="numberOfChildren"
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
      )}
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

export default HotelReservationForm;
