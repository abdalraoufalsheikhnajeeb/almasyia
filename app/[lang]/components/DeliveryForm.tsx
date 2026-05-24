"use client";
import { useEffect, useMemo, useState } from "react";
import { todayISO, tr } from "./i18n-util";

interface DeliveryFormProps {
  lang: string;
}

type Lang = "ar" | "en" | "ru";

const DeliveryForm: React.FC<DeliveryFormProps> = ({ lang }) => {
  const l = lang as Lang;
  const [formData, setFormData] = useState({
    placeOfDelivery: "",
    recipientNumber: "",
    urgency: "normal",
    senderName: "",
    submissionDate: "",
    dispatchDate: "",
  });

  const [today, setToday] = useState("");
  useEffect(() => {
    const t = todayISO();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(t);
    setFormData((prev) => ({
      ...prev,
      submissionDate: prev.submissionDate || t,
      dispatchDate: prev.dispatchDate || t,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // Push dispatch forward if submission > dispatch
      if (name === "submissionDate" && next.dispatchDate && value > next.dispatchDate) {
        next.dispatchDate = value;
      }
      return next;
    });
  };

  const dispatchMin = useMemo(
    () => formData.submissionDate || today,
    [formData.submissionDate, today]
  );

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

  return (
    <form
      onSubmit={handleSubmit}
      className="card-elegant w-full max-w-md p-6 space-y-4"
    >
      <h3 className="heading-accent text-xl font-bold text-primary">
        {tr(l, "توصيل المستندات", "Documents Delivery", "Доставка документов")}
      </h3>

      <div>
        <label htmlFor="senderName" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "اسم المرسل", "Sender Name", "Имя отправителя")}
        </label>
        <input
          id="senderName"
          type="text"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          className="input-elegant"
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label htmlFor="submissionDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ التسليم", "Submission Date", "Дата подачи")}
        </label>
        <input
          type="date"
          id="submissionDate"
          name="submissionDate"
          min={today}
          value={formData.submissionDate}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      <div>
        <label htmlFor="dispatchDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ الإرسال", "Dispatch Date", "Дата отправки")}
        </label>
        <input
          type="date"
          id="dispatchDate"
          name="dispatchDate"
          min={dispatchMin}
          value={formData.dispatchDate}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      <div>
        <label htmlFor="placeOfDelivery" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "مكان الإرسال", "Place of Delivery", "Место отправления")}
        </label>
        <input
          id="placeOfDelivery"
          type="text"
          name="placeOfDelivery"
          value={formData.placeOfDelivery}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      <div>
        <label htmlFor="recipientNumber" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "رقم المستلم", "Recipient Number", "Номер получателя")}
        </label>
        <input
          id="recipientNumber"
          type="tel"
          name="recipientNumber"
          value={formData.recipientNumber}
          onChange={handleChange}
          className="input-elegant"
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </div>

      <div>
        <span className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "نوع الخدمة", "Urgency", "Срочность")}
        </span>
        <div className="mt-1 space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="urgency"
              value="normal"
              checked={formData.urgency === "normal"}
              onChange={handleChange}
              className="h-4 w-4 text-litePrimary focus:ring-litePrimary"
            />
            <span className="text-sm text-slate-700">
              {tr(l, "عادي", "Normal", "Обычная")}
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="urgency"
              value="urgent"
              checked={formData.urgency === "urgent"}
              onChange={handleChange}
              className="h-4 w-4 text-litePrimary focus:ring-litePrimary"
            />
            <span className="text-sm text-slate-700">
              {tr(l, "عاجل", "Urgent", "Срочная")}
            </span>
          </label>
        </div>
      </div>

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
  );
};

export default DeliveryForm;
