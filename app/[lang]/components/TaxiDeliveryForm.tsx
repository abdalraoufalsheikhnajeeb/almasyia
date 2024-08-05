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
    }));"use client";
import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "flowbite";

interface DeliveryFormProps {
  lang: string;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ lang }) => {
  useEffect(() => {
    import("flowbite");
  }, []);

  const [formData, setFormData] = useState({
    placeOfDelivery: "",
    recipientNumber: "",
    urgency: "normal",
    senderName: "",
    submissionDate: new Date(),
    dispatchDate: new Date(),
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
    const message = `*Documents Delivery: 📄*\n\n- *Sender Name*: ${
      formData.senderName
    }\n- *Submission Date*: ${formData.submissionDate.toLocaleDateString()}\n- *Dispatch Date*: ${
      formData.dispatchDate.toLocaleDateString()
    }\n\n- *Place of Delivery*: ${
      formData.placeOfDelivery
    } 📍\n\n- *Recipient Number*: ${
      formData.recipientNumber
    } ☎️\n\n- *Urgency*: ${
      formData.urgency === "urgent" ? "Urgent 🚨" : "Normal"
    }`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderFormContent = () => (
    <>
      <div>
        <label htmlFor="senderName" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "اسم المرسل"
            : lang === "ru"
            ? "Имя отправителя"
            : "Sender Name"}
        </label>
        <input
          id="senderName"
          type="text"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="submissionDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ الإرسال"
            : lang === "ru"
            ? "Дата подачи"
            : "Submission Date"}
        </label>
        <div className="relative mt-2">
          <DatePicker
            id="submissionDate"
            selected={formData.submissionDate}
            onChange={(date) => handleDateChange("submissionDate", date)}
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
        <label htmlFor="dispatchDate" className="block text-lg text-gray-900">
          {lang === "ar"
            ? "تاريخ الإرسال"
            : lang === "ru"
            ? "Дата отправки"
            : "Dispatch Date"}
        </label>
        <div className="relative mt-2">
          <DatePicker
            id="dispatchDate"
            selected={formData.dispatchDate}
            onChange={(date) => handleDateChange("dispatchDate", date)}
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
          htmlFor="placeOfDelivery"
          className="block text-lg text-gray-900"
        >
          {lang === "ar"
            ? "اختر مكان الإرسال"
            : lang === "ru"
            ? "Выберите место отправления"
            : "Select the place you want to send from"}
        </label>
        <input
          id="placeOfDelivery"
          type="text"
          name="placeOfDelivery"
          value={formData.placeOfDelivery}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label
          htmlFor="recipientNumber"
          className="block text-lg text-gray-900"
        >
          {lang === "ar"
            ? "رقم المستلم"
            : lang === "ru"
            ? "Номер получателя"
            : "Recipient Number"}
        </label>
        <input
          id="recipientNumber"
          type="text"
          name="recipientNumber"
          value={formData.recipientNumber}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-lg text-gray-900">
          {lang === "ar"
            ? "نوع الخدمة"
            : lang === "ru"
            ? "Срочность"
            : "Urgency"}
        </label>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            name="urgency"
            value="normal"
            checked={formData.urgency === "normal"}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label className="ml-2 text-lg text-gray-900">
            {lang === "ar" ? "عادي" : lang === "ru" ? "Обычная" : "Normal"}
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            name="urgency"
            value="urgent"
            checked={formData.urgency === "urgent"}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          />
          <label className="ml-2 text-lg text-gray-900">
            {lang === "ar" ? "عاجل" : lang === "ru" ? "Срочная" : "Urgent"}
          </label>
        </div>
      </div>
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
    >
      {renderFormContent()}
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

export default DeliveryForm;

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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
    >
      {renderFormContent()}
      <button
        type="submit"
        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg  rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
