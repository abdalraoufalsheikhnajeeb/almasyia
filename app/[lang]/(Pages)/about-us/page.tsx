import Image from "next/image";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";

export default async function page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <section className="flex-col lg:flex-row lg:min-h-[50vh] lg:justify-between mt-24 gap-4 flex  box mx-12 ">
      <div className="flex w-full lg:w-1/2 flex-col my-12 items-center gap-6 lg:items-start overflow-visible text-primary">
        <Image
          loading="lazy"
          quality={50}
          src="/images/logo.webp"
          className="w-40 lg:w-60"
          alt="logo"
          width={226}
          height={122}
        />

       
          <span className="text-3xl font-bold">{dic?.ayatAnimation} </span>
          <span className="text-2xl ">{dic?.prev1}</span>
          <p className="mt-4 text-lg text-primary">
            <a
              className="text-2xl underline underline-offset-4"
              href="mailto:farouk@alnujoomalmasiya.com"
            >
              farouk@alnujoomalmasiya.com
            </a>
          </p>
       
      </div>
      <Image
        loading="lazy"
        quality={100}
        src="/images/farouk.webp"
        width={640}
        height={427}
        alt="founder image"
        className=" object-center w-full lg:w-1/2 rounded-xl lg:custom-clip"
      />
    </section>
  );
}
