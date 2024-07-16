"use client";
import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";

export default function FlightBookingForm({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    outboundDate: "",
    returnDate: "",
    numberOfPassengers: "",
    numberOfAdults: "",
    numberOfChildren: "",
    numberOfInfants: "",
    travelClass: "tourist",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Book a Flight: ✈️*\n\n- *Place of Departure*: ${formData.departure}\n\n- *Arrival Area*: ${formData.arrival}\n\n- *Outbound Date*: ${formData.outboundDate}\n\n- *Return Date*: ${formData.returnDate}\n\n- *Number of Passengers*: ${formData.numberOfPassengers}\n\n- *Number of Adults*: ${formData.numberOfAdults}\n\n- *Number of Children*: ${formData.numberOfChildren || "None"}\n\n- *Number of Infants*: ${formData.numberOfInfants || "None"}\n\n- *Travel Class*: ${formData.travelClass}`;
    
    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
      >
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "مكان المغادرة"
              : dic.currLang === "ru"
              ? "Место отправления"
              : "Place of Departure"}
          </label>
          <input
            type="text"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "منطقة الوصول"
              : dic.currLang === "ru"
              ? "Место прибытия"
              : "Arrival Area"}
          </label>
          <input
            type="text"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "تاريخ السفر (ذهاب)"
              : dic.currLang === "ru"
              ? "Дата отправления"
              : "Outbound Date"}
          </label>
          <input
            type="date"
            name="outboundDate"
            value={formData.outboundDate}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "تاريخ العودة"
              : dic.currLang === "ru"
              ? "Дата возвращения"
              : "Return Date"}
          </label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "عدد الركاب"
              : dic.currLang === "ru"
              ? "Количество пассажиров"
              : "Number of Passengers"}
          </label>
          <input
            type="number"
            name="numberOfPassengers"
            value={formData.numberOfPassengers}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "عدد البالغين"
              : dic.currLang === "ru"
              ? "Количество взрослых"
              : "Number of Adults"}
          </label>
          <input
            type="number"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "عدد الأطفال"
              : dic.currLang === "ru"
              ? "Количество детей"
              : "Number of Children"}
          </label>
          <input
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "عدد الأطفال الرضع"
              : dic.currLang === "ru"
              ? "Количество младенцев"
              : "Number of Infants"}
          </label>
          <input
            type="number"
            name="numberOfInfants"
            value={formData.numberOfInfants}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-900">
            {dic.currLang === "ar"
              ? "فئة السفر"
              : dic.currLang === "ru"
              ? "Класс путешествия"
              : "Travel Class"}
          </label>
          <select
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          >
            <option value="tourist">
              {dic.currLang === "ar"
                ? "سياحية"
                : dic.currLang === "ru"
                ? "Туристический"
                : "Tourist"}
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
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {dic.currLang === "ar"
            ? "إرسال المعلومات"
            : dic.currLang === "ru"
            ? "Отправить информацию"
            : "Send Info"}
        </button>
      </form>
    </div>
  );
}
