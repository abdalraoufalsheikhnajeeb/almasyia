import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import DeliveryForm from "../../components/DeliveryForm";
import AnTitle from "../../components/AnTitle";
import { getDictionary } from "../../../../get-dictionary";

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return (
    <div className="max-w-[95vw] mx-auto mx-auto">
      <AnTitle title={dic.delivery} />
      <h3 className="text-3xl font-bold text-center mb-4">
        {dic.deliveryText}
      </h3>
      <div className="box flex flex-col-reverse lg:flex-row gap-4">
        <Image
          loading="lazy"
          quality={60}
          className="lg:w-2/3 w-full rounded-lg"
          width={840}
          height={480}
          src="/images/papersDelivery.webp"
          alt="Logo"
        />

        <div className="flex lg:w-1/3 w-full justify-center items-center">
          <DeliveryForm lang={lang} />
        </div>
      </div>
    </div>
  );
};
export default page;
