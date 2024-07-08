import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import Partners from "../../components/Partners";
import { countries } from "../../data";
export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <div>
      <Partners dic={dic} title={dic.OurPartners} data={countries} />
    </div>
  );
}
