"use client";
import { useEffect, useMemo, useState } from "react";
import { CitiesByCountry, citiesByCountry } from "../data";
import { todayISO, tr } from "./i18n-util";

interface HotelReservationFormProps {
  lang: string;
}

type Lang = "ar" | "en" | "ru";

const HotelReservationForm: React.FC<HotelReservationFormProps> = ({ lang }) => {
  const l = lang as Lang;
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    arrivalDate: "",
    departureDate: "",
    numberOfPeople: "1",
    numberOfChildren: "",
  });
  const [hasChildren, setHasChildren] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  // Set today after mount to avoid SSR mismatch
  const [today, setToday] = useState("");
  useEffect(() => {
    const t = todayISO();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(t);
    setFormData((prev) => ({
      ...prev,
      arrivalDate: prev.arrivalDate || t,
      departureDate: prev.departureDate || t,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, type, value, checked } = e.target;
      if (type === "checkbox") {
        setHasChildren(checked);
        return;
      }
      if (name === "arrivalDate" || name === "departureDate") {
        setFormData((prev) => {
          const next = { ...prev, [name]: value };
          // Push departure forward if arrival > departure
          if (name === "arrivalDate" && next.departureDate && value > next.departureDate) {
            next.departureDate = value;
          }
          return next;
        });
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      const { name, value } = e.target;
      if (name === "country") {
        const selectedCountry = citiesByCountry[value as keyof CitiesByCountry];
        const newCities =
          selectedCountry?.[lang as keyof typeof selectedCountry] || [];
        setCities(newCities);
        setFormData((prev) => ({ ...prev, country: value, city: "" }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const departureMin = useMemo(
    () => formData.arrivalDate || today,
    [formData.arrivalDate, today]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Hotel Reservation: 🏨*\n\n- *Country*: ${
      formData.country
    } 🌍\n\n- *City*: ${
      formData.city
    } 🏙️\n\n- *Arrival Date*: ${formData.arrivalDate} 📅\n\n- *Departure Date*: ${
      formData.departureDate
    } 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Number of Children*: ${
      hasChildren ? formData.numberOfChildren || "None" : "None"
    } 👶`;

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
        {tr(l, "حجز فندق", "Book a Hotel", "Бронирование отеля")}
      </h3>

      {/* Country */}
      <div>
        <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "اختر الدولة", "Choose the country", "Выберите страну")}
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="input-elegant"
          required
        >
          <option value="">
            -- {tr(l, "اختر الدولة", "Select Country", "Выберите страну")} --
          </option>
          {Object.keys(citiesByCountry).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "المدينة", "City", "Город")}
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="input-elegant"
          required
          disabled={!formData.country}
        >
          <option value="">
            -- {tr(l, "اختر المدينة", "Select City", "Выберите город")} --
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Arrival Date */}
      <div>
        <label htmlFor="arrivalDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ الوصول", "Date of Arrival", "Дата прибытия")}
        </label>
        <input
          type="date"
          id="arrivalDate"
          name="arrivalDate"
          min={today}
          value={formData.arrivalDate}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      {/* Departure Date */}
      <div>
        <label htmlFor="departureDate" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "تاريخ المغادرة", "Departure Date", "Дата отъезда")}
        </label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          min={departureMin}
          value={formData.departureDate}
          onChange={handleChange}
          className="input-elegant"
          required
        />
      </div>

      {/* Number of People */}
      <div>
        <label htmlFor="numberOfPeople" className="mb-1 block text-sm font-medium text-slate-700">
          {tr(l, "عدد الأشخاص", "Number of People", "Количество людей")}
        </label>
        <input
          id="numberOfPeople"
          type="number"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          min={1}
          max={20}
          className="input-elegant"
          lang="en"
          inputMode="numeric"
          pattern="\\d*"
          required
        />
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          id="hasChildren"
          type="checkbox"
          name="hasChildren"
          checked={hasChildren}
          onChange={handleChange}
          className="h-4 w-4 rounded border-slate-300 text-litePrimary focus:ring-litePrimary"
        />
        <span className="text-sm text-slate-700">
          {tr(l, "هل لديك أطفال؟", "Do you have children?", "У вас есть дети?")}
        </span>
      </label>

      {/* Number of Children */}
      {hasChildren && (
        <div className="animate-fade-in">
          <label htmlFor="numberOfChildren" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(l, "عدد الأطفال", "Number of Children", "Количество детей")}
          </label>
          <input
            id="numberOfChildren"
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            min={0}
            max={10}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d*"
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
  );
};

export default HotelReservationForm;
