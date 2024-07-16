"use client";
import { useState } from "react";
import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import EmojiConvertor from "emoji-js";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [formData, setFormData] = useState({
    destination: "",
    insuranceStartDate: "",
    insuranceEndDate: "",
    numberOfPeople: "",
    tripType: "oneTrip", // default to one trip
    otherCountry: "", // for other country input
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

    const emoji = new EmojiConvertor();
    emoji.replace_mode = "unified";
    emoji.allow_native = true;

    const message = `*Travel Insurance: 🏖️*\n\n- *Destination*: ${
      formData.destination === "Other countries"
        ? formData.otherCountry
        : formData.destination
    } 🌍\n\n- *Insurance Starting Date*: ${
      formData.insuranceStartDate
    } 📅\n\n- *Insurance Ending Date*: ${
      formData.insuranceEndDate
    } 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Trip Type*: ${
      formData.tripType === "oneTrip"
        ? "One Trip 🚗"
        : "Multiple Trips Annually 🌐"
    }`;

    const encodedMessage = encodeURIComponent(emoji.replace_unified(message));
    const whatsappUrl = `https://wa.me/971545866066?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="lg:pt-20 pt-24 flex flex-col-reverse lg:flex-row gap-4">
      <div className="relative">
        <Image
          loading="lazy"
          quality={1}
          className=" w-full -z-10 object-cover h-full"
          width={1280}
          height={720}
          src="/images/travelInsuranceHero.webp"
          alt="Hotel Reservation"
        />
        <div className="bg-white lg:absolute w-full opacity-80 py-16 px-8 bottom-0 h-auto">
          {lang === "en" && (
            <p className="text-center text-2xl ">Travel safely</p>
          )}
          {lang === "ar" && <p className="text-center text-2xl ">سافر بأمان</p>}

          {lang === "ru" && (
            <p className="text-center text-2xl ">Путешествуй безопасно</p>
          )}
        </div>
      </div>

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
                <option value="Other countries">Other countries</option>
              </select>
              {formData.destination === "Other countries" && (
                <input
                  type="text"
                  name="otherCountry"
                  value={formData.otherCountry}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                  required
                />
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Insurance Starting Date
              </label>
              <input
                type="date"
                name="insuranceStartDate"
                value={formData.insuranceStartDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Insurance Ending Date
              </label>
              <input
                type="date"
                name="insuranceEndDate"
                value={formData.insuranceEndDate}
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
                <option value="Other countries">دول أخرى</option>
              </select>
              {formData.destination === "Other countries" && (
                <input
                  type="text"
                  name="otherCountry"
                  value={formData.otherCountry}
                  onChange={handleChange}
                  placeholder="ادخل الدولة"
                  className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                  required
                />
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                تاريخ بدء التأمين
              </label>
              <input
                type="date"
                name="insuranceStartDate"
                value={formData.insuranceStartDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                تاريخ انتهاء التأمين
              </label>
              <input
                type="date"
                name="insuranceEndDate"
                value={formData.insuranceEndDate}
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
                <option value="Other countries">Другие страны</option>
              </select>
              {formData.destination === "Other countries" && (
                <input
                  type="text"
                  name="otherCountry"
                  value={formData.otherCountry}
                  onChange={handleChange}
                  placeholder="Введите страну"
                  className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                  required
                />
              )}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Дата начала страхования
              </label>
              <input
                type="date"
                name="insuranceStartDate"
                value={formData.insuranceStartDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Дата окончания страхования
              </label>
              <input
                type="date"
                name="insuranceEndDate"
                value={formData.insuranceEndDate}
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
