"use client";
import { useState } from "react";

interface DeliveryFormProps {
  lang: string;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    placeOfDelivery: "",
    recipientNumber: "",
    urgency: "normal",
    senderName: "",
    submissionDate: "",
    dispatchDate: "",
  });

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
    }\n- *Submission Date*: ${formData.submissionDate}\n- *Dispatch Date*: ${
      formData.dispatchDate
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
        <label htmlFor="senderName" className="block text-lg  text-gray-900">
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
        <label
          htmlFor="submissionDate"
          className="block text-lg  text-gray-900"
        >
          {lang === "ar"
            ? "تاريخ الإرسال"
            : lang === "ru"
            ? "Дата подачи"
            : "Submission Date"}
        </label>
        <input
          id="submissionDate"
          type="date"
          name="submissionDate"
          value={formData.submissionDate}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="dispatchDate" className="block text-lg  text-gray-900">
          {lang === "ar"
            ? "تاريخ الإرسال"
            : lang === "ru"
            ? "Дата отправки"
            : "Dispatch Date"}
        </label>
        <input
          id="dispatchDate"
          type="date"
          name="dispatchDate"
          value={formData.dispatchDate}
          onChange={handleChange}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
          required
        />
      </div>
      <div>
        <label
          htmlFor="placeOfDelivery"
          className="block text-lg  text-gray-900"
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
          className="block text-lg  text-gray-900"
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
        <label className="block text-lg  text-gray-900">
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
          <label className="ml-2 text-lg  text-gray-900">
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
          <label className="ml-2 text-lg  text-gray-900">
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

export default DeliveryForm;
