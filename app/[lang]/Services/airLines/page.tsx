import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import Slider from "../../components/Slider";
import { partners } from "../../data";
import { agents } from "../../data";
export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <div className="pt-28  py-10">
      <Slider dic={dic} title={dic.agents} data={agents} />
      <Slider dic={dic} title={dic.OurPartners} data={partners} />
    </div>
  );
}
