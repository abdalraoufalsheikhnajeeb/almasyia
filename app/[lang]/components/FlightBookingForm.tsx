"use client";
import { useState } from "react";

import { type getDictionary } from "../../../get-dictionary";

interface FlightBookingFormProps {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}

const FlightBookingForm: React.FC<FlightBookingFormProps> = ({ dic }) => {
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    outboundDate: new Date(),
    returnDate: new Date(),
    numberOfAdults: "",
    numberOfChildren: "",
    numberOfInfants: "",
    travelClass: "economy",
  });

  // We'll handle all input changes with a single function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, valueAsDate } = e.target as HTMLInputElement &
      HTMLSelectElement & {
        valueAsDate: Date | null;
      };

    // If it's one of the date fields, store it as a Date object
    if (name === "outboundDate" || name === "returnDate") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: valueAsDate || new Date(),
      }));
    } else {
      // Otherwise, just store as a string
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Book a Flight: ✈️*\n\n- *Place of Departure*: ${
      formData.departure
    }\n\n- *Arrival Area*: ${
      formData.arrival
    }\n\n- *Outbound Date*: ${formData.outboundDate.toLocaleDateString()}\n\n- *Return Date*: ${formData.returnDate.toLocaleDateString()}\n\n- *Number of Adults*: ${
      formData.numberOfAdults
    }\n\n- *Number of Children*: ${
      formData.numberOfChildren || "None"
    }\n\n- *Number of Infants*: ${
      formData.numberOfInfants || "None"
    }\n\n- *Travel Class*: ${formData.travelClass}`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Departure */}
        <div>
          <label htmlFor="departure" className="block text-lg text-gray-900">
            {dic.currLang === "ar"
              ? "مكان المغادرة"
              : dic.currLang === "ru"
              ? "Место отправления"
              : "Place of Departure"}
          </label>
          <input
            id="departure"
            type="text"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
            required
          />
        </div>

        {/* Arrival */}
        <div>
          <label htmlFor="arrival" className="block text-lg text-gray-900">
            {dic.currLang === "ar"
              ? "منطقة الوصول"
              : dic.currLang === "ru"
              ? "Место прибытия"
              : "Arrival Area"}
          </label>
          <input
            id="arrival"
            type="text"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
            required
          />
        </div>

        {/* Outbound Date */}
        <div>
          <label htmlFor="outboundDate" className="block text-lg text-gray-900">
            {dic.currLang === "ar"
              ? "تاريخ السفر (ذهاب)"
              : dic.currLang === "ru"
              ? "Дата отправления"
              : "Outbound Date"}
          </label>
          <div className="relative mt-2">
            <input
              type="date"
              id="outboundDate"
              name="outboundDate"
              // This replicates minDate={new Date()}
              min={new Date().toISOString().split("T")[0]}
              // Convert the Date object to a "YYYY-MM-DD" string
              value={formData.outboundDate.toISOString().split("T")[0]}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-gray-700"
              // Browsers often don't show placeholders for type="date",
              // but you can still set it
              placeholder={
                dic.currLang === "ar"
                  ? "اختر التاريخ"
                  : dic.currLang === "ru"
                  ? "Выберите дату"
                  : "Select date"
              }
              required
            />
          </div>
        </div>

        {/* Return Date */}
        <div>
          <label htmlFor="returnDate" className="block text-lg text-gray-900">
            {dic.currLang === "ar"
              ? "تاريخ العودة"
              : dic.currLang === "ru"
              ? "Дата возвращения"
              : "Return Date"}
          </label>
          <div className="relative mt-2">
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              min={new Date().toISOString().split("T")[0]}
              value={formData.returnDate.toISOString().split("T")[0]}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2 bg-white text-gray-700"
              placeholder={
                dic.currLang === "ar"
                  ? "اختر التاريخ"
                  : dic.currLang === "ru"
                  ? "Выберите дату"
                  : "Select date"
              }
              required
            />
          </div>
        </div>

        {/* Number of Adults */}
        <div>
          <label
            htmlFor="numberOfAdults"
            className="block text-lg text-gray-900"
          >
            {dic.currLang === "ar"
              ? "عدد البالغين"
              : dic.currLang === "ru"
              ? "Количество взрослых"
              : "Number of Adults"}
          </label>
          <input
            id="numberOfAdults"
            type="number"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
            required
          />
        </div>

        {/* Number of Children */}
        <div>
          <label
            htmlFor="numberOfChildren"
            className="block text-lg text-gray-900"
          >
            {dic.currLang === "ar"
              ? "عدد الأطفال"
              : dic.currLang === "ru"
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

        {/* Number of Infants */}
        <div>
          <label
            htmlFor="numberOfInfants"
            className="block text-lg text-gray-900"
          >
            {dic.currLang === "ar"
              ? "عدد الأطفال الرضع"
              : dic.currLang === "ru"
              ? "Количество младенцев"
              : "Number of Infants"}
          </label>
          <input
            id="numberOfInfants"
            type="number"
            name="numberOfInfants"
            value={formData.numberOfInfants}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          />
        </div>

        {/* Travel Class */}
        <div>
          <label htmlFor="travelClass" className="block text-lg text-gray-900">
            {dic.currLang === "ar"
              ? "فئة السفر"
              : dic.currLang === "ru"
              ? "Класс путешествия"
              : "Travel Class"}
          </label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          >
            <option value="economy">
              {dic.currLang === "ar"
                ? "سياحية"
                : dic.currLang === "ru"
                ? "Туристический"
                : "Economy"}
            </option>
            <option value="business">
              {dic.currLang === "ar"
                ? "رجال الأعمال"
                : dic.currLang === "ru"
                ? "Бизнес"
                : "Business"}
            </option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {dic.currLang === "ar"
            ? "إرسال المعلومات"
            : dic.currLang === "ru"
            ? "Отправить информацию"
            : "Send Info"}
        </button>
      </div>
    </form>
  );
};

export default FlightBookingForm;
