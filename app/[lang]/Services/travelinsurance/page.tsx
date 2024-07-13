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
    destination: "",
    travelDuration: "",
    numberOfPeople: "",
    tripType: "oneTrip", // default to one trip
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
    const message = `*Travel Insurance: 🏖️*\n\n- *Destination*: ${
      formData.destination
    } 🌍\n\n- *Travel Duration*: ${
      formData.travelDuration
    } 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Trip Type*: ${
      formData.tripType === "oneTrip"
        ? "One Trip 🚗"
        : "Multiple Trips Annually 🌐"
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
        src="/images/travelInsuranceHero.webp"
        alt="Travel Insurance"
      />

      <div className="flex lg:w-1/3 w-full justify-center items-center">
        {lang === "en" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 w-96 p-6 flex flex-col backdrop-blur-sm border-2 border-white rounded-xl bg-white bg-opacity-50"
          >
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Select the Destination
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- Select Destination --</option>
                <option value="Gulf Cooperation Council countries">
                  Securing the Gulf Cooperation Council countries
                </option>
                <option value="Russia 🇷🇺">Securing Russia 🇷🇺</option>
                <option value="Schengen insurance">Schengen insurance</option>
                <option value="America insurance">America insurance</option>
                <option value="Canada Insurance 🇨🇦">Canada Insurance 🇨🇦</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Travel Duration
              </label>
              <input
                type="text"
                name="travelDuration"
                value={formData.travelDuration}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Number of People
              </label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Trip Type
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="oneTrip"
                  checked={formData.tripType === "oneTrip"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  One Trip
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="multipleTrips"
                  checked={formData.tripType === "multipleTrips"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Multiple Trips Annually
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
                اختر الوجهة
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- اختر الوجهة --</option>
                <option value="Gulf Cooperation Council countries">
                  تأمين دول مجلس التعاون الخليجي
                </option>
                <option value="Russia 🇷🇺">تأمين روسيا 🇷🇺</option>
                <option value="Schengen insurance">تأمين شنغن</option>
                <option value="America insurance">تأمين أمريكا</option>
                <option value="Canada Insurance 🇨🇦">تأمين كندا 🇨🇦</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                مدة السفر
              </label>
              <input
                type="text"
                name="travelDuration"
                value={formData.travelDuration}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                عدد الأشخاص
              </label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                نوع الرحلة
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="oneTrip"
                  checked={formData.tripType === "oneTrip"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  رحلة واحدة
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="multipleTrips"
                  checked={formData.tripType === "multipleTrips"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  رحلات متعددة سنويًا
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
                Выберите пункт назначения
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- Выберите пункт назначения --</option>
                <option value="Gulf Cooperation Council countries">
                  Страхование стран Совета сотрудничества стран Персидского
                  залива
                </option>
                <option value="Russia 🇷🇺">Страхование России 🇷🇺</option>
                <option value="Schengen insurance">Шенгенская страховка</option>
                <option value="America insurance">Страхование Америки</option>
                <option value="Canada Insurance 🇨🇦">
                  Страхование Канады 🇨🇦
                </option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Продолжительность путешествия
              </label>
              <input
                type="text"
                name="travelDuration"
                value={formData.travelDuration}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Количество людей
              </label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Тип поездки
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="oneTrip"
                  checked={formData.tripType === "oneTrip"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Одна поездка
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  name="tripType"
                  value="multipleTrips"
                  checked={formData.tripType === "multipleTrips"}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label className="ml-2 text-lg font-medium text-gray-900">
                  Множественные поездки ежегодно
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
