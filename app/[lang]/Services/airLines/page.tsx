import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import FlightBookingForm from "../../components/FlightBookingForm";
import Slider from "../../components/Slider";
import { partners, agents } from "../../data";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dic = await getDictionary(lang);

  return (
    <div className="pt-28 flex flex-col justify-center items-center py-4">
      <Slider dic={dic} title={dic.agents} data={agents} />
      <Slider dic={dic} title={dic.OurPartners} data={partners} />
      <FlightBookingForm dic={dic} />
    </div>
  );
}
