export default function FormPrivacyNotice({ lang, provider = "WhatsApp", compact = false }: { lang: string; provider?: string; compact?: boolean }) {
  const message = lang === "ar"
    ? `عند الإرسال ستُشارك بيانات هذا النموذج عبر ${provider} لمعالجة استفسارك. لا ترسل كلمات المرور أو بيانات الدفع أو صور الوثائق الحساسة.`
    : lang === "ru"
    ? `При отправке данные формы передаются через ${provider} для обработки запроса. Не отправляйте пароли, платёжные данные или сканы конфиденциальных документов.`
    : `Submitting shares these form details through ${provider} to handle your enquiry. Do not send passwords, payment details or sensitive document scans.`;
  if (compact) {
    return (
      <details className="mt-3 text-sm leading-relaxed text-slate-600">
        <summary className="flex min-h-11 cursor-pointer items-center underline underline-offset-4">
          {lang === "ar" ? "كيفية مشاركة بيانات الطلب" : lang === "ru" ? "Как передаются данные заявки" : "How your enquiry details are shared"}
        </summary>
        <p>{message}</p>
      </details>
    );
  }
  return <p className="text-sm leading-relaxed text-slate-600">{message}</p>;
}
