import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import CountrySlider from "../../components/CountrySlider";
import { countries } from "../../data";
export default async function page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dic = await getDictionary(lang);
  return (
    <>
      <CountrySlider
        dic={dic}
        title={dic.ourTours}
        subtitle={dic.ourToursText}
        data={countries}
      />
    </>
  );
}
