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
    <div className="pt-9">
      <Partners dic={dic} title={dic.ourTours} data={countries} />
    </div>
  );
}
