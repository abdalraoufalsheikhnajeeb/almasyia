"use client";
import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";

export default function VisaForm({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const [formData, setFormData] = useState({
    name: "",
    requiredVisa: "",
    numberOfPeople: "",
    hasChildren: false,
    numberOfChildren: "",
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

    const message = `*Apply for a visa: 🛂*\n\n- *Name*: ${
      formData.name
    } 👤\n\n- *Required Visa*: ${
      formData.requiredVisa
    } 📝\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Has Children*: ${formData.hasChildren ? "Yes 🚸" : "No 🚸"}\n\n${
      formData.hasChildren
        ? `- *Number of Children*: ${formData.numberOfChildren} 👶`
        : ""
    }`;
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
          <label className="block text-lg  text-gray-900">
            {dic.currLang === "ar"
              ? "الاسم"
              : dic.currLang === "ru"
              ? "Имя"
              : "Name"}
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
          <label className="block text-lg  text-gray-900">
            {dic.currLang === "ar"
              ? "الفيزا المطلوبة"
              : dic.currLang === "ru"
              ? "Требуемая виза"
              : "Required Visa"}
          </label>
          <input
            type="text"
            name="requiredVisa"
            value={formData.requiredVisa}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg  text-gray-900">
            {dic.currLang === "ar"
              ? "عدد الأشخاص"
              : dic.currLang === "ru"
              ? "Количество человек"
              : "Number of People"}
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
        <div className="flex items-center">
          <input
            type="checkbox"
            name="hasChildren"
            checked={formData.hasChildren}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label className="ms-2 block text-lg  text-gray-900">
            {dic.currLang === "ar"
              ? "هل لديك أطفال؟"
              : dic.currLang === "ru"
              ? "У вас есть дети?"
              : "Do you have children?"}
          </label>
        </div>
        {formData.hasChildren && (
          <div>
            <label className="block text-lg  text-gray-900">
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
              required
            />
          </div>
        )}
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
      </form>
    </div>
  );
}
