"use client";
import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";

interface FlightBookingFormProps {
  dic: Awaited<ReturnType<typeof getDictionary>>;
}

type Lang = "ar" | "en" | "ru";

const tr = (
  lang: Lang,
  ar: string,
  en: string,
  ru: string
): string => (lang === "ar" ? ar : lang === "ru" ? ru : en);

const FlightBookingForm: React.FC<FlightBookingFormProps> = ({ dic }) => {
  const lang = dic.currLang as Lang;
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    outboundDate: new Date(),
    returnDate: new Date(),
    numberOfAdults: "",
    numberOfChildren: "",
    numberOfInfants: "",
    travelClass: "economy",
  });

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, valueAsDate } = e.target as HTMLInputElement &
      HTMLSelectElement & { valueAsDate: Date | null };

    if (name === "outboundDate" || name === "returnDate") {
      setFormData((prev) => ({ ...prev, [name]: valueAsDate || new Date() }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Book a Flight: ✈️*\n\n- *Place of Departure*: ${
      formData.departure
    }\n\n- *Arrival Area*: ${
      formData.arrival
    }\n\n- *Outbound Date*: ${formatDate(formData.outboundDate)}\n\n- *Return Date*: ${formatDate(formData.returnDate)}\n\n- *Number of Adults*: ${
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
            min={new Date().toISOString().split("T")[0]}
            value={formatDate(formData.outboundDate)}
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
            min={new Date().toISOString().split("T")[0]}
            value={formatDate(formData.returnDate)}
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
