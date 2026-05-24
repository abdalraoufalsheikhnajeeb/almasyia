"use client";
import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";
import { tr } from "./i18n-util";

type Lang = "ar" | "en" | "ru";

export default function VisaForm({
  dic,
}: {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const l = dic.currLang as Lang;
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
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="flex justify-center mt-12">
      <form
        onSubmit={handleSubmit}
        className="card-elegant w-full max-w-md p-6 space-y-4"
      >
        <h3 className="heading-accent text-xl font-bold text-primary">
          {tr(l, "طلب تأشيرة", "Apply for a Visa", "Заявка на визу")}
        </h3>

        <div>
          <label htmlFor="visaName" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(l, "الاسم", "Name", "Имя")}
          </label>
          <input
            id="visaName"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-elegant"
            required
          />
        </div>

        <div>
          <label htmlFor="requiredVisa" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(l, "الفيزا المطلوبة", "Required Visa", "Требуемая виза")}
          </label>
          <input
            id="requiredVisa"
            type="text"
            name="requiredVisa"
            value={formData.requiredVisa}
            onChange={handleChange}
            className="input-elegant"
            required
          />
        </div>

        <div>
          <label htmlFor="visaNumberOfPeople" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(l, "عدد الأشخاص", "Number of People", "Количество человек")}
          </label>
          <input
            id="visaNumberOfPeople"
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            min={1}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d*"
            required
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            name="hasChildren"
            checked={formData.hasChildren}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-litePrimary focus:ring-litePrimary"
          />
          <span className="text-sm text-slate-700">
            {tr(l, "هل لديك أطفال؟", "Do you have children?", "У вас есть дети?")}
          </span>
        </label>

        {formData.hasChildren && (
          <div className="animate-fade-in">
            <label htmlFor="visaNumberOfChildren" className="mb-1 block text-sm font-medium text-slate-700">
              {tr(l, "عدد الأطفال", "Number of Children", "Количество детей")}
            </label>
            <input
              id="visaNumberOfChildren"
              type="number"
              name="numberOfChildren"
              value={formData.numberOfChildren}
              onChange={handleChange}
              min={0}
              className="input-elegant"
              lang="en"
              inputMode="numeric"
              pattern="\\d*"
              required
            />
          </div>
        )}

        <button type="submit" className="btn-accent w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          {tr(l, "إرسال المعلومات", "Send Info", "Отправить информацию")}
        </button>
      </form>
    </div>
  );
}
