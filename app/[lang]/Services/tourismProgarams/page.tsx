import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import CountrySlider from "../../components/CountrySlider";
import { tourismProgarams } from "../../data";
export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <>
      <CountrySlider dic={dic} title={dic.tourismProgarams} subtitle={dic.tourismProgaramsText} data={tourismProgarams} />
    </>
  );
}