import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import TaxiDeliveryForm from "../../components/TaxiDeliveryForm";
import { getDictionary } from "../../../../get-dictionary";
import AnTitle from "../../components/AnTitle";

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return (
    <>
      <AnTitle title={dic.airportTaxi} />
      <h3 className="text-3xl font-bold text-center mb-4">
        {dic.airportTaxiText}
      </h3>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <Image
          loading="lazy"
          quality={100}
          className="lg:w-2/3 w-full rounded-lg"
          width={840}
          height={480}
          src="/images/taxihero.webp"
          alt="Logo"
        />
        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <TaxiDeliveryForm lang={lang} />
        </div>
      </div>
    </>
  );
};
export default page;
