"use client";
import React, { useState } from "react";
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

  /**
   * Handles all onChange events for both <input> and <select> elements,
   * using type narrowing to avoid TS2367 errors.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // 1. Narrow to <input> elements
    if (e.target instanceof HTMLInputElement) {
      const { name, type, value, valueAsDate, checked } = e.target;

      // If it's a checkbox
      if (type === "checkbox") {
        setHasChildren(checked);
        return;
      }

      // If it's a date input
      if (name === "arrivalDate" || name === "departureDate") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: valueAsDate || new Date(),
        }));
        return;
      }

      // Otherwise, it's a text/number input
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    // 2. Narrow to <select> elements
    else {
      const { name, value } = e.target;

      // If selecting a country, update the city list
      if (name === "country") {
        const selectedCountry = citiesByCountry[value as keyof CitiesByCountry];
        const newCities =
          selectedCountry?.[lang as keyof typeof selectedCountry] || [];

        setCities(newCities);
        setFormData((prevData) => ({
          ...prevData,
          country: value,
          city: "",
        }));
      } else {
        // Otherwise, just update the relevant field
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };

  /**
   * Submits the form data via WhatsApp link.
   */
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
      className="space-y-6 w-full max-w-md p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-lg bg-white bg-opacity-50"
    >
      {/* Country */}
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
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
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

      {/* City */}
      <div>
        <label htmlFor="city" className="block text-lg text-gray-900">
          {lang === "ar" ? "المدينة" : lang === "ru" ? "Город" : "City"}
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
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

      {/* Arrival Date */}
      <div>
        <label htmlFor="arrivalDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ الوصول"
            : lang === "ru"
            ? "Дата прибытия"
            : "Date of Arrival"}
        </label>
        <div className="relative mt-2">
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            min={new Date().toISOString().split("T")[0]}
            value={formData.arrivalDate.toISOString().split("T")[0]}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-gray-700"
            required
          />
        </div>
      </div>

      {/* Departure Date */}
      <div>
        <label htmlFor="departureDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ المغادرة"
            : lang === "ru"
            ? "Дата отъезда"
            : "Departure Date"}
        </label>
        <div className="relative mt-2">
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            min={new Date().toISOString().split("T")[0]}
            value={formData.departureDate.toISOString().split("T")[0]}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-gray-700"
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
          required
        />
      </div>

      {/* Checkbox: Do you have children? */}
      <div className="flex items-center mt-2">
        <input
          id="hasChildren"
          type="checkbox"
          name="hasChildren"
          checked={hasChildren}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="hasChildren" className="ms-2 text-lg text-gray-900">
          {lang === "ar"
            ? "هل لديك أطفال؟"
            : lang === "ru"
            ? "У вас есть дети?"
            : "Do you have children?"}
        </label>
      </div>

      {/* Number of Children */}
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
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          />
        </div>
      )}

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

export default HotelReservationForm;
