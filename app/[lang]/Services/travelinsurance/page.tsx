"use client";
import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import TravelInsuranceForm from "../../components/TravelInsuranceForm";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="lg:pt-20 pt-24 flex flex-col-reverse lg:flex-row gap-4">
      <div className="relative lg:w-2/3">
        <Image
          loading="lazy"
          quality={1}
          className="w-full h-full object-cover"
          width={1280}
          height={720}
          src="/images/travelInsurancehero.jpg"
          alt="Travel Insurance"
        />
      </div>

      <div className="flex lg:w-1/3 w-full justify-center items-center">
        <TravelInsuranceForm lang={lang} />
      </div>
      <div className="bg-white  w-full opacity-80 py-16 px-8 h-auto">
        <p className="text-center text-2xl">
          {lang === "en"
            ? "Travel safely"
            : lang === "ar"
            ? "سافر بأمان"
            : "Путешествуй безопасно"}
        </p>
      </div>
    </div>
  );
}
