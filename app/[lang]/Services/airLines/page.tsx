import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import FlightBookingForm from "../../components/FlightBookingForm";
import Slider from "../../components/Slider";
import { partners } from "../../data";
import { agents } from "../../data";
export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
    const resolvedLang = await lang;
    const dic = await getDictionary(resolvedLang);
  return (
    <div className="pt-28 flex flex-col justify-center items-center py-4">
      <Slider dic={dic} title={dic.agents} data={agents} />
      <Slider dic={dic} title={dic.OurPartners} data={partners} />
      <FlightBookingForm dic={dic} />
    </div>
  );
}
