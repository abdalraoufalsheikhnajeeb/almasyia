import Image from "next/image";
import TravelInsuranceForm from "../../components/TravelInsuranceForm";
import AnTitle from "../../components/AnTitle";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <div className="max-w-[95vw] mx-auto">
      <AnTitle title={dic.travelInsurance} />
      <h3 className="text-3xl font-bold text-center mb-4">
        {dic.insuranceText}
      </h3>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <div className="relative lg:w-2/3">
          <Image
            loading="lazy"
            quality={100}
            className="w-full h-full rounded-lg"
            width={840}
            height={480}
            src="/images/travelInsurancehero.webp"
            alt="Travel Insurance"
          />
        </div>
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <TravelInsuranceForm lang={lang} />
        </div>
      </div>
    </div>
  );
}
