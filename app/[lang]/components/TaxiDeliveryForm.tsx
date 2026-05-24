"use client";
import { useEffect, useState } from "react";
import { todayISO, tr } from "./i18n-util";

interface TaxiDeliveryFormProps {
  lang: string;
}

type Lang = "ar" | "en" | "ru";

const TaxiDeliveryForm: React.FC<TaxiDeliveryFormProps> = ({ lang }) => {
  const l = lang as Lang;
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Taxi Airport Delivery: ✈️🚖*\n\n- *Name*: ${formData.name} 👤\n\n- *Arrival Date*: ${formData.arrivalDate} 📅\n\n- *Arrival Time*: ${formData.arrivalTime} ⏰\n\n- *Number of Passengers*: ${formData.numberOfPassengers} 👥\n\n- *Arrival Airport*: ${formData.arrivalAirport} 🛬\n\n- *Delivery Location*: ${formData.deliveryLocation} 📍`;
    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Set today after mount to avoid SSR mismatch
  const [today, setToday] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(todayISO());
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="card-elegant w-full max-w-md p-6 space-y-4"
    >
      <h3 className="heading-accent text-xl font-bold text-primary">
        {tr(l, "حجز تاكسي المطار", "Airport Taxi Booking", "Заказ такси в аэропорт")}
      </h3>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "الاسم", "Name", "Имя")}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      <div>
        <label htmlFor="arrivalDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ الوصول", "Arrival Date", "Дата прибытия")}
        </label>
        <input
          id="arrivalDate"
          type="date"
          name="arrivalDate"
          value={formData.arrivalDate}
          onChange={handleChange}
          className="input-elegant"
          lang="en"
          required
          min={today}
        />
      </div>

      <div>
        <label htmlFor="arrivalTime" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "وقت الوصول", "Arrival Time", "Время прибытия")}
        </label>
        <input
          id="arrivalTime"
          type="time"
          name="arrivalTime"
          value={formData.arrivalTime}
          onChange={handleChange}
          className="input-elegant"
          lang="en"
          required
        />
      </div>

      <div>
        <label htmlFor="numberOfPassengers" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "عدد الركاب", "Number of Passengers", "Количество пассажиров")}
        </label>
        <input
          id="numberOfPassengers"
          type="number"
          name="numberOfPassengers"
          value={formData.numberOfPassengers}
          onChange={handleChange}
          min={1}
          className="input-elegant"
          lang="en"
          inputMode="numeric"
          pattern="\\d*"
          required
        />
      </div>

      <div>
        <label htmlFor="arrivalAirport" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تحديد مطار الوصول", "Arrival Airport", "Аэропорт прибытия")}
        </label>
        <input
          id="arrivalAirport"
          type="text"
          name="arrivalAirport"
          value={formData.arrivalAirport}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      <div>
        <label htmlFor="deliveryLocation" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "العنوان المطلوب", "Destination Address", "Адрес назначения")}
        </label>
        <input
          id="deliveryLocation"
          type="text"
          name="deliveryLocation"
          value={formData.deliveryLocation}
          onChange={handleChange}
          className="input-elegant"
          required
        />
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

export default TaxiDeliveryForm;
