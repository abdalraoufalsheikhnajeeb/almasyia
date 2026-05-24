"use client";
import { useEffect, useMemo, useState } from "react";
import { type getDictionary } from "../../../get-dictionary";
import { todayISO, tr } from "./i18n-util";

interface FlightBookingFormProps {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}

type Lang = "ar" | "en" | "ru";

const FlightBookingForm: React.FC<FlightBookingFormProps> = ({ dic }) => {
  const lang = dic.currLang as Lang;

  // Use empty string on first render to avoid SSR/client mismatch from new Date()
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    outboundDate: "",
    returnDate: "",
    numberOfAdults: "1",
    numberOfChildren: "",
    numberOfInfants: "",
    travelClass: "economy",
  });

  // Compute today only on client after mount — avoids SSR/client mismatch from new Date().
  // Intentional mount-only state initialization; the brief cascade is desired.
  const [today, setToday] = useState("");
  useEffect(() => {
    const t = todayISO();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(t);
    setFormData((prev) => ({
      ...prev,
      outboundDate: prev.outboundDate || t,
      returnDate: prev.returnDate || t,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      // If outbound moves past return, push return forward to match
      if (name === "outboundDate" && next.returnDate && value > next.returnDate) {
        next.returnDate = value;
      }
      return next;
    });
  };

  // Min for return date is the outbound date (or today if outbound not set)
  const returnMin = useMemo(
    () => formData.outboundDate || today,
    [formData.outboundDate, today]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Book a Flight: ✈️*\n\n- *Place of Departure*: ${
      formData.departure
    }\n\n- *Arrival Area*: ${
      formData.arrival
    }\n\n- *Outbound Date*: ${formData.outboundDate}\n\n- *Return Date*: ${formData.returnDate}\n\n- *Number of Adults*: ${
      formData.numberOfAdults
    }\n\n- *Number of Children*: ${
      formData.numberOfChildren || "None"
    }\n\n- *Number of Infants*: ${
      formData.numberOfInfants || "None"
    }\n\n- *Travel Class*: ${formData.travelClass}`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="card-elegant p-6 lg:p-8 w-full max-w-5xl">
      <h2 className="heading-accent text-2xl font-bold text-primary mb-6">
        {tr(lang, "حجز رحلة طيران", "Book a Flight", "Бронирование рейса")}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Departure */}
        <div>
          <label htmlFor="departure" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "مكان المغادرة", "Place of Departure", "Место отправления")}
          </label>
          <input
            id="departure"
            type="text"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            className="input-elegant"
            autoComplete="off"
            required
          />
        </div>

        {/* Arrival */}
        <div>
          <label htmlFor="arrival" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "منطقة الوصول", "Arrival Area", "Место прибытия")}
          </label>
          <input
            id="arrival"
            type="text"
            name="arrival"
            value={formData.arrival}
            onChange={handleChange}
            className="input-elegant"
            autoComplete="off"
            required
          />
        </div>

        {/* Outbound Date */}
        <div>
          <label htmlFor="outboundDate" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "تاريخ السفر (ذهاب)", "Outbound Date", "Дата отправления")}
          </label>
          <input
            type="date"
            id="outboundDate"
            name="outboundDate"
            min={today}
            value={formData.outboundDate}
            onChange={handleChange}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d{4}-\\d{2}-\\d{2}"
            required
          />
        </div>

        {/* Return Date */}
        <div>
          <label htmlFor="returnDate" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "تاريخ العودة", "Return Date", "Дата возвращения")}
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            min={returnMin}
            value={formData.returnDate}
            onChange={handleChange}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d{4}-\\d{2}-\\d{2}"
            required
          />
        </div>

        {/* Number of Adults */}
        <div>
          <label htmlFor="numberOfAdults" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "عدد البالغين", "Number of Adults", "Количество взрослых")}
          </label>
          <input
            id="numberOfAdults"
            type="number"
            name="numberOfAdults"
            value={formData.numberOfAdults}
            onChange={handleChange}
            min={1}
            max={9}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d*"
            required
          />
        </div>

        {/* Number of Children */}
        <div>
          <label htmlFor="numberOfChildren" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "عدد الأطفال", "Number of Children", "Количество детей")}
          </label>
          <input
            id="numberOfChildren"
            type="number"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            min={0}
            max={9}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d*"
          />
        </div>

        {/* Number of Infants */}
        <div>
          <label htmlFor="numberOfInfants" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "عدد الأطفال الرضع", "Number of Infants", "Количество младенцев")}
          </label>
          <input
            id="numberOfInfants"
            type="number"
            name="numberOfInfants"
            value={formData.numberOfInfants}
            onChange={handleChange}
            min={0}
            max={9}
            className="input-elegant"
            lang="en"
            inputMode="numeric"
            pattern="\\d*"
          />
        </div>

        {/* Travel Class */}
        <div>
          <label htmlFor="travelClass" className="mb-1 block text-sm font-medium text-slate-700">
            {tr(lang, "فئة السفر", "Travel Class", "Класс путешествия")}
          </label>
          <select
            id="travelClass"
            name="travelClass"
            value={formData.travelClass}
            onChange={handleChange}
            className="input-elegant"
          >
            <option value="economy">
              {tr(lang, "سياحية", "Economy", "Туристический")}
            </option>
            <option value="business">
              {tr(lang, "رجال الأعمال", "Business", "Бизнес")}
            </option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button type="submit" className="btn-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          {tr(lang, "إرسال المعلومات", "Send Info", "Отправить информацию")}
        </button>
      </div>
    </form>
  );
};

export default FlightBookingForm;
