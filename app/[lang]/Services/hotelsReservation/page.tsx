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
    country: "",
    city: "",
    arrivalDate: "",
    departureDate: "",
    numberOfPeople: "",
    numberOfChildren: "",
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
    const message = `*Hotel Reservation: 🏨*\n\n- *Country*: ${
      formData.country
    } 🌍\n\n- *City*: ${formData.city} 🏙️\n\n- *Arrival Date*: ${
      formData.arrivalDate
    } 📅\n\n- *Departure Date*: ${
      formData.departureDate
    } 📅\n\n- *Number of People*: ${
      formData.numberOfPeople
    } 👥\n\n- *Number of Children*: ${formData.numberOfChildren || "None"} 👶`;

    const whatsappUrl = `https://wa.me/971545866066?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="lg:pt-20  pt-24 flex flex-col-reverse lg:flex-row gap-4 py-12">
      <div className="relative">
        <Image
          loading="lazy"
          quality={1}
          className=" w-full -z-10 object-cover h-full"
          width={1280}
          height={720}
          src="/images/hotelHero.webp"
          alt="Hotel Reservation"
        />
        <div className="bg-white lg:absolute w-full opacity-80 py-16 px-8 bottom-0 h-auto">
          {lang === "en" && (
            <p className="text-center text-2xl ">
              {" "}
              I feel special... Through the high-end hotel services provided to
              you, with the high attention and diligent follow-up by our team,
              you will feel the true distinction that enriches your tourism
              experience with us. Because quality accommodation is one of the
              most important components of an enjoyable vacation, Diamond Stars
              Company provides the best accommodation options within its network
              of hotels and resorts contracted with it with high-end
              classifications of 3, 4, and 5 stars. They all have distinguished
              services and wonderful views, to provide the best place for
              recreation for our customers, and multiple room options are
              available.
            </p>
          )}
          {lang === "ar" && (
            <p className="text-center text-2xl ">
              اشعر بالتميّز... من خلال الخدمات الفندقية الراقية المقدمة لكم، مع
              الاهتمام العالي والمتابعة الحثيثة من قبل فريقنا ستشعرون بالتميز
              الحقيقي الذي يغني تجربتكم السياحية معنا. ولأن الإقامة الهنيَّة من
              أهم مقومات الإجازة الممتعة، توفِّر شركة النجوم الماسية أفضل خيارات
              الإقامة ضمن شبكة الفنادق والمنتجعات المتعاقدة معها ذات التصنيفات
              الراقية من فئات 3,4,5 نجوم. وتحظى جميعها بخدمات متميزة، وإطلالات
              رائعة، لتأمين أفضل مكان استجمام لزبائننا، كما تتوافر خيارات متعددة
              للغرف
            </p>
          )}

          {lang === "ru" && (
            <p className="text-center text-2xl ">
              Я чувствую себя особенным... Благодаря предоставленным вам
              высококлассным гостиничным услугам, а также высокому вниманию и
              усердному контролю со стороны нашей команды, вы почувствуете
              истинное отличие, которое обогащает ваш туристический опыт с нами.
              Поскольку качественное размещение является одной из важнейших
              составляющих приятного отдыха, компания Diamond Stars
              предоставляет лучшие варианты размещения в сети заключённых с ней
              отелей и курортов высшей категории 3, 4 и 5 звёзд. Все они
              предлагают выдающиеся услуги и прекрасные виды, что делает их
              лучшим местом для отдыха для наших клиентов, а также предлагают
              несколько вариантов номеров.
            </p>
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
                Choose the country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- Select Country --</option>
                <option value="Syria">Syria</option>
                <option value="UAE">UAE</option>
                <option value="Russia">Russia</option>
                <option value="Turkey">Turkey</option>
                <option value="Egypt">Egypt</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Europe">Europe</option>
                <option value="Maldives">Maldives</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Thailand">Thailand</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Date of Arrival
              </label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
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
                Number of Children
              </label>
              <input
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
                اختر الدولة
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- اختر الدولة --</option>
                <option value="Syria">سوريا</option>
                <option value="UAE">الإمارات</option>
                <option value="Russia">روسيا</option>
                <option value="Turkey">تركيا</option>
                <option value="Egypt">مصر</option>
                <option value="Malaysia">ماليزيا</option>
                <option value="Europe">أوروبا</option>
                <option value="Maldives">المالديف</option>
                <option value="Indonesia">إندونيسيا</option>
                <option value="Thailand">تايلاند</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                المدينة
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
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
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                تاريخ المغادرة
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
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
                عدد الأطفال
              </label>
              <input
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
                Выберите страну
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
                required
              >
                <option value="">-- Выберите страну --</option>
                <option value="Syria">Сирия</option>
                <option value="UAE">ОАЭ</option>
                <option value="Russia">Россия</option>
                <option value="Turkey">Турция</option>
                <option value="Egypt">Египет</option>
                <option value="Malaysia">Малайзия</option>
                <option value="Europe">Европа</option>
                <option value="Maldives">Мальдивы</option>
                <option value="Indonesia">Индонезия</option>
                <option value="Thailand">Таиланд</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Город
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
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
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-900">
                Дата отъезда
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
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
                Количество детей
              </label>
              <input
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg p-2"
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
