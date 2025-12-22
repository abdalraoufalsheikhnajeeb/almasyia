"use client";
import { useState } from "react";

interface TaxiDeliveryFormProps {
  lang: string;
}

const TaxiDeliveryForm: React.FC<TaxiDeliveryFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    arrivalDate: "",
    arrivalTime: "",
    numberOfPassengers: "",
    arrivalAirport: "",
    deliveryLocation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Taxi Airport Delivery: ✈️🚖*\n\n- *Name*: ${formData.name} 👤\n\n- *Arrival Date*: ${formData.arrivalDate} 📅\n\n- *Arrival Time*: ${formData.arrivalTime} ⏰\n\n- *Number of Passengers*: ${formData.numberOfPassengers} 👥\n\n- *Arrival Airport*: ${formData.arrivalAirport} 🛬\n\n- *Delivery Location*: ${formData.deliveryLocation} 📍`;
    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  const renderFormContent = () => (
    <>
      <div>
        <label htmlFor="name" className="block text-lg  text-gray-900">
          {lang === "ar" ? "الاسم" : lang === "ru" ? "Имя" : "Name"}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="arrivalDate" className="block text-lg  text-gray-900">
          {lang === "ar"
            ? "تاريخ الوصول"
            : lang === "ru"
            ? "Дата прибытия"
            : "Arrival Date"}
        </label>
        <input
          id="arrivalDate"
          type="text"
          name="arrivalDate"
          value={formData.arrivalDate}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          lang="en"
          inputMode="numeric"
          required
          min={today}
        />
      </div>
      <div>
        <label htmlFor="arrivalTime" className="block text-lg  text-gray-900">
          {lang === "ar"
            ? "وقت الوصول"
            : lang === "ru"
            ? "Время прибытия"
            : "Arrival Time"}
        </label>
        <input
          id="arrivalTime"
          type="time"
          name="arrivalTime"
          value={formData.arrivalTime}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          lang="en"
          required
        />
      </div>
      <div>
        <label
          htmlFor="numberOfPassengers"
          className="block text-lg  text-gray-900"
        >
          {lang === "ar"
            ? "عدد الركاب"
            : lang === "ru"
            ? "Количество пассажиров"
            : "Number of Passengers"}
        </label>
        <input
          id="numberOfPassengers"
          type="number"
          name="numberOfPassengers"
          value={formData.numberOfPassengers}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          lang="en"
          inputMode="numeric"
          pattern="\\d*"
          required
        />
      </div>
      <div>
        <label
          htmlFor="arrivalAirport"
          className="block text-lg  text-gray-900"
        >
          {lang === "ar"
            ? "تحديد مطار الوصول"
            : lang === "ru"
            ? "Укажите аэропорт прибытия"
            : "Specify the Arrival Airport"}
        </label>
        <input
          id="arrivalAirport"
          type="text"
          name="arrivalAirport"
          value={formData.arrivalAirport}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label
          htmlFor="deliveryLocation"
          className="block text-lg  text-gray-900"
        >
          {lang === "ar"
            ? "اختر العنوان الذي تريد الذهاب إليه"
            : lang === "ru"
            ? "Выберите адрес, к которому хотите поехать"
            : "Select the address you want to go to"}
        </label>
        <input
          id="deliveryLocation"
          type="text"
          name="deliveryLocation"
          value={formData.deliveryLocation}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg p-2"
          required
        />
      </div>
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-96 p-4 flex flex-col backdrop-blur-sm border-2 border-white rounded-lg bg-white bg-opacity-50"
    >
      {renderFormContent()}
      <button
        type="submit"
        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg  rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default TaxiDeliveryForm;
