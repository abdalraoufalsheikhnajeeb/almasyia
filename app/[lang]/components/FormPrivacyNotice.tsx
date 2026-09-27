export default function FormPrivacyNotice({ lang, provider = "WhatsApp" }: { lang: string; provider?: string }) {
  const message = lang === "ar"
    ? `عند الإرسال ستُشارك بيانات هذا النموذج عبر ${provider} لمعالجة استفسارك. لا ترسل كلمات المرور أو بيانات الدفع أو صور الوثائق الحساسة.`
    : lang === "ru"
    ? `При отправке данные формы передаются через ${provider} для обработки запроса. Не отправляйте пароли, платёжные данные или сканы конфиденциальных документов.`
    : `Submitting shares these form details through ${provider} to handle your enquiry. Do not send passwords, payment details or sensitive document scans.`;
  return <p className="text-sm leading-relaxed text-slate-600">{message}</p>;
}
