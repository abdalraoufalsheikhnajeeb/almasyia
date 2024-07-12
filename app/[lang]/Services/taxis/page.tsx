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
    name: "",
    arrivalDate: "",
    numberOfPassengers: "",
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
    const message = `Name: ${formData.name}\nArrival Date: ${formData.arrivalDate}\nNumber of Passengers: ${formData.numberOfPassengers}\nDelivery Location: ${formData.deliveryLocation}`;
    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="lg:pt-20 pt-24 flex flex-col-reverse lg:flex-row gap-4">
      <Image
        loading="lazy"
        quality={1}
        className="lg:w-2/3 w-full  -z-10 object-cover"
        width={1280}
        height={720}
        src="/images/taxiHero.webp"
        alt="Logo"
      />

      <div className="flex  lg:w-1/3 w-full justify-center items-center">
        {lang === "en" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-96 p-6 flex flex-col  backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50 "
          >
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Arrival Date
              </label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
                min={today}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Number of Passengers
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
                Delivery Location in Syria
              </label>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
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
                الاسم
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                تاريخ الوصول
              </label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
                min={today}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                عدد الركاب
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
                موقع التسليم في سوريا
              </label>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
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
                Имя
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Дата прибытия
              </label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
                min={today}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Количество пассажиров
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
                Место доставки в Сирии
              </label>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
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
