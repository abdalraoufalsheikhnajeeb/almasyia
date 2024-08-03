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
    outboundDate: "",
    returnDate: "",
    numberOfAdults: "",
    numberOfChildren: "",
    numberOfInfants: "",
    travelClass: "economy",
  });
  const [focused, setFocused] = useState(false);

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

    const message = `*Book a Flight: ✈️*\n\n- *Place of Departure*: ${
      formData.departure
    }\n\n- *Arrival Area*: ${formData.arrival}\n\n- *Outbound Date*: ${
      formData.outboundDate
    }\n\n- *Number of Adults*: ${
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
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl space-y-6 w-full p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="departure" className="block text-lg  text-gray-900">
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="arrival" className="block text-lg  text-gray-900">
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="outboundDate"
            className="block text-lg  text-gray-900"
          >
            {dic.currLang === "ar"
              ? "تاريخ السفر (ذهاب)"
              : dic.currLang === "ru"
              ? "Дата отправления"
              : "Outbound Date"}
          </label>
          <input
            id="outboundDate"
            type="date"
            name="outboundDate"
            value={formData.outboundDate}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2 bg-white text-gray-700 hover:bg-gray-50"
            required
          />
        </div>
        <div>
          <label htmlFor="returnDate" className="block text-lg  text-gray-900">
            {dic.currLang === "ar"
              ? "تاريخ العودة"
              : dic.currLang === "ru"
              ? "Дата возвращения"
              : "Return Date"}
          </label>
          <input
            id="returnDate"
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="date-input mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            data-placeholder={!focused && !formData.returnDate ? " " : ""}
          />
        </div>
        <div>
          <label
            htmlFor="numberOfAdults"
            className="block text-lg  text-gray-900"
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="numberOfChildren"
            className="block text-lg  text-gray-900"
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
        <div>
          <label
            htmlFor="numberOfInfants"
            className="block text-lg  text-gray-900"
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="travelClass" className="block text-lg  text-gray-900">
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
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg  rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
