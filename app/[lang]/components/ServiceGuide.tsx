import Link from "next/link";
import type { Locale } from "../../../i18n-config";

const content = {
  ar: {
    travelTitle: "التخطيط للسفر من دمشق إلى دبي",
    travel: [
      "أرسل تاريخ السفر، مدينة الوصول، عدد المسافرين وأعمار الأطفال حتى نتحقق من خيارات الرحلات المتاحة.",
      "اسأل عن الأمتعة، التوقفات، شروط التعديل والإلغاء والسعر النهائي قبل تأكيد الحجز؛ تختلف هذه الشروط حسب الناقل والتذكرة.",
      "تحقق من صلاحية جواز السفر ومتطلبات الدخول مع الجهات الرسمية. المساعدة في التأشيرة لا تضمن الموافقة أو السماح بالدخول.",
    ],
    documentsTitle: "نقل الأوراق والوثائق بين دمشق ودبي",
    documents: [
      "أخبرنا بنوع الأوراق ومدينة الاستلام والتسليم والموعد المطلوب، دون إرسال صور الوثائق الحساسة في الاستفسار الأول.",
      "قبل تسليم الأصول، اتفق مع الفريق على إمكانية نقلها والتكلفة والمدة المتوقعة وطريقة إثبات الاستلام.",
      "اسأل إن كانت الوثائق تحتاج إلى تصديق أو متطلبات إضافية. نقل الأوراق لا يعني تصديقها، ولا نعد بمدة تسليم قبل تأكيد تفاصيل الطلب.",
    ],
    contact: "تواصل مع الفريق لتأكيد التفاصيل",
    related: "خدمات مرتبطة",
    flights: "حجز السفر من دمشق إلى دبي",
    delivery: "الاستفسار عن نقل الوثائق",
    visas: "المساعدة في التأشيرات",
  },
  en: {
    travelTitle: "Planning travel from Damascus to Dubai",
    travel: [
      "Share your travel dates, arrival city, passenger count and children's ages so our team can check available flight options.",
      "Confirm baggage, stopovers, change and cancellation conditions, and the total price before booking. Conditions vary by airline and fare.",
      "Check passport validity and entry requirements with the official authorities. Visa assistance does not guarantee approval or entry.",
    ],
    documentsTitle: "Document delivery between Damascus and Dubai",
    documents: [
      "Tell us the document type, collection and delivery cities, and your preferred date. Do not send sensitive document scans with your initial enquiry.",
      "Before handing over originals, confirm whether they can be carried, the price, estimated timing and how receipt will be acknowledged.",
      "Ask whether attestation or other requirements apply. Delivery is not document legalisation, and timing must be confirmed for your particular request.",
    ],
    contact: "Contact our team to confirm the details",
    related: "Related services",
    flights: "Book travel from Damascus to Dubai",
    delivery: "Ask about document delivery",
    visas: "Visa assistance",
  },
  ru: {
    travelTitle: "Планирование поездки из Дамаска в Дубай",
    travel: [
      "Сообщите даты поездки, город прибытия, число пассажиров и возраст детей, чтобы мы проверили доступные варианты перелёта.",
      "До бронирования уточните багаж, пересадки, условия обмена и возврата и итоговую стоимость. Условия зависят от перевозчика и тарифа.",
      "Проверьте срок действия паспорта и требования к въезду у официальных органов. Помощь с визой не гарантирует её выдачу или въезд.",
    ],
    documentsTitle: "Доставка документов между Дамаском и Дубаем",
    documents: [
      "Укажите тип документов, города получения и доставки и желаемую дату. Не отправляйте сканы конфиденциальных документов при первом обращении.",
      "До передачи оригиналов уточните возможность перевозки, цену, предполагаемый срок и способ подтверждения получения.",
      "Уточните необходимость заверения и дополнительные требования. Доставка не включает легализацию; сроки подтверждаются для конкретного запроса.",
    ],
    contact: "Свяжитесь с нами для уточнения деталей",
    related: "Другие услуги",
    flights: "Поездки из Дамаска в Дубай",
    delivery: "Узнать о доставке документов",
    visas: "Помощь с визами",
  },
};

export default function ServiceGuide({ lang, service }: { lang: Locale; service: "travel" | "documents" }) {
  const copy = content[lang];
  return (
    <section className="mx-auto my-8 w-full max-w-4xl space-y-5 px-4">
      <h2 className="text-2xl font-bold text-primary">{service === "travel" ? copy.travelTitle : copy.documentsTitle}</h2>
      <ol className="list-decimal space-y-3 ps-6 text-slate-700">
        {copy[service].map((step) => <li key={step}>{step}</li>)}
      </ol>
      <Link className="btn-primary" href={`/${lang}/contact`}>{copy.contact}</Link>
      <h3 className="text-lg font-bold text-primary">{copy.related}</h3>
      <ul className="flex flex-wrap gap-4 text-primary underline underline-offset-4">
        <li><Link href={`/${lang}/Services/airLines`}>{copy.flights}</Link></li>
        <li><Link href={`/${lang}/Services/papers-Delivery`}>{copy.delivery}</Link></li>
        <li><Link href={`/${lang}/Services/visas`}>{copy.visas}</Link></li>
      </ul>
    </section>
  );
}
