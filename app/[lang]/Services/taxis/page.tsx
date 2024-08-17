import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import TaxiDeliveryForm from "../../components/TaxiDeliveryForm";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="box flex flex-col-reverse lg:flex-row gap-4">
      <Image
        loading="lazy"
        quality={1}
        className="lg:w-2/3 w-full -z-10 object-cover"
        width={1280}
        height={720}
        src="/images/taxihero.jpg"
        alt="Logo"
      />

      <div className="flex lg:w-1/3 w-full justify-center items-center">
        <TaxiDeliveryForm lang={lang} />
      </div>
    </div>
  );
}
