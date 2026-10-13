import type { Locale } from "../../../i18n-config";

const copy = {
  ar: { title: "منصات حجز الفنادق", intro: "استكشف خيارات الإقامة عبر هذه المنصات، أو أرسل طلبك إلى فريق النجوم الماسية للمساعدة في الحجز.", action: "استعرض الفنادق", external: "يفتح موقعاً خارجياً" },
  en: { title: "Hotel booking platforms", intro: "Explore accommodation on these platforms, or send your request to the Alnujoom Almasiya team for booking assistance.", action: "Explore hotels", external: "Opens an external website" },
  ru: { title: "Платформы бронирования отелей", intro: "Посмотрите варианты размещения на этих платформах или отправьте запрос команде Alnujoom Almasiya для помощи с бронированием.", action: "Посмотреть отели", external: "Открывает внешний сайт" },
};

const platforms = [
  { name: "Agoda", url: "https://www.agoda.com/" },
  { name: "Booking.com", url: "https://www.booking.com/" },
];

export default function HotelPlatforms({ lang }: { lang: Locale }) {
  const text = copy[lang];
  return (
    <section className="mt-8 space-y-4" aria-labelledby="hotel-platforms-title">
      <h2 id="hotel-platforms-title" className="text-center text-2xl font-bold text-primary">{text.title}</h2>
      <p className="mx-auto max-w-3xl text-center text-slate-600">{text.intro}</p>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {platforms.map((platform) => (
          <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer"
            className="card-elegant flex flex-col gap-3 p-5 transition-shadow hover:shadow-lg">
            <h3 dir="ltr" className="text-xl font-bold text-primary">{platform.name}</h3>
            <span className="text-sm font-semibold text-primary">{text.action} <span aria-hidden="true">↗</span></span>
            <span className="text-sm text-slate-600">{text.external}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
