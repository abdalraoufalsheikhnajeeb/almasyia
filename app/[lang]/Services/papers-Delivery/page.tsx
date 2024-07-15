"use client";
import { useState } from "react";
import Image from "next/image";
import { Locale } from "../../../../i18n-config";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [formData, setFormData] = useState({
    placeOfDelivery: "",
    recipientNumber: "",
    urgency: "normal",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Documents Delivery: 📄*\n\n- *Place of Delivery*: ${
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

  return (
    <div className="lg:pt-20 pt-24 flex flex-col-reverse lg:flex-row gap-4">
      <Image
        loading="lazy"
        quality={1}
        className="lg:w-2/3 w-full -z-10 object-cover"
        width={1280}
        height={720}
        src="/images/papersDelivery.webp"
        alt="Logo"
      />

      <div className="flex lg:w-1/3 w-full justify-center items-center">
        {lang === "en" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
          >
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Select the place you want to send from
              </label>
              <input
                type="text"
                name="placeOfDelivery"
                value={formData.placeOfDelivery}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Recipient Number
              </label>
              <input
                type="text"
                name="recipientNumber"
                value={formData.recipientNumber}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Urgency
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Normal
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Urgent
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Info
            </button>
          </form>
        )}
        {lang === "ar" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
          >
            <div>
              <label className="block text-lg font-medium text-gray-900">
                اختر مكان الإرسال
              </label>
              <input
                type="text"
                name="placeOfDelivery"
                value={formData.placeOfDelivery}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                رقم المستلم
              </label>
              <input
                type="text"
                name="recipientNumber"
                value={formData.recipientNumber}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                نوع الخدمة
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  عادي
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  عاجل
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              إرسال المعلومات
            </button>
          </form>
        )}
        {lang === "ru" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
          >
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Выберите место отправления
              </label>
              <input
                type="text"
                name="placeOfDelivery"
                value={formData.placeOfDelivery}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Номер получателя
              </label>
              <input
                type="text"
                name="recipientNumber"
                value={formData.recipientNumber}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Срочность
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Обычная
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
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Срочная
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Отправить информацию
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
