import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import CountrySlider from "../../components/CountrySlider";
import { countries } from "../../data";
export default async function page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Locale;
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
