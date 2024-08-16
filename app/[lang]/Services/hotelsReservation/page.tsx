import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import HotelReservationForm from "../../components/HotelReservationForm";
import AnTitle from "../../components/AnTitle";
export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <>
      <AnTitle title="" />
      <div className="lg:pt-20 pt-24 flex flex-col-reverse lg:flex-row gap-4 py-12">
        <div className="relative lg:w-2/3">
          <Image
            loading="lazy"
            quality={1}
            className="w-full h-full object-cover"
            width={1280}
            height={720}
            src="/images/hotelhero.jpg"
            alt="Hotel Reservation"
          />
        </div>
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <HotelReservationForm lang={lang} />
        </div>
      </div>
      <div className="bg-white  w-full opacity-80 py-16 px-8 bottom-0 h-auto">
        <p className="text-center text-2xl">
          {lang === "en" && (
            <>
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
            </>
          )}
          {lang === "ar" && (
            <>
              اشعر بالتميّز... من خلال الخدمات الفندقية الراقية المقدمة لكم، مع
              الاهتمام العالي والمتابعة الحثيثة من قبل فريقنا ستشعرون بالتميز
              الحقيقي الذي يغني تجربتكم السياحية معنا. ولأن الإقامة الهنيَّة من
              أهم مقومات الإجازة الممتعة، توفِّر شركة النجوم الماسية أفضل خيارات
              الإقامة ضمن شبكة الفنادق والمنتجعات المتعاقدة معها ذات التصنيفات
              الراقية من فئات 3,4,5 نجوم. وتحظى جميعها بخدمات متميزة، وإطلالات
              رائعة، لتأمين أفضل مكان استجمام لزبائننا، كما تتوافر خيارات متعددة
              للغرف
            </>
          )}
          {lang === "ru" && (
            <>
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
            </>
          )}
        </p>
      </div>
    </>
  );
}
