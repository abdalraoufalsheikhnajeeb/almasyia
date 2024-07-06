import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Image from "next/image";
import Link from "next/link";
import { ourProjects } from "./data";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);

  return (
    <>
      <Image
        loading="lazy"
        quality={20}
        src="/images/hero.webp"
        className="bg-gradient absolute -z-10 object-cover  h-[100dvh] w-screen opacity-70"
        alt="arrow"
        width={1280}
        height={720}
      />
      <div className=" bg-gradient absolute -z-[1]  h-[100dvh] w-screen" />
      <main className={" max-w-[90vw]  mx-auto flex items-center flex-col"}>
        <header className="h-[100dvh] gap-8 pb-8 flex flex-col items-center justify-end ">
          <Image
            loading="lazy"
            quality={1}
            src="/images/logo.webp"
            className="w-40 lg:w-60"
            alt="arrow"
            width={250}
            height={200}
          />
          <h2 className="text-5xl lg:text-5xl max-w-3xl font-bold  text-primary  text-center">
            {dic?.homeText}
          </h2>

          <button className="text-2xl lg:text-3xl max-w-3xl font-bold text-primary  text-center">
            {dic.contactUsTitle}
          </button>
          <div className="flex gap-4">
            <div className="flex  hover:bg-gray-100 text-primary font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-200 ">
              <Link href="https://wa.me/971545866066">
                <Image
                  loading="lazy"
                  quality={1}
                  src="/images/whats-uae.svg"
                  className="w-20 lg:w-24"
                  alt="arrow"
                  width={250}
                  height={200}
                />
              </Link>
            </div>
            <div className="flex  hover:bg-gray-100 text-primary font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-200 ">
              <Link href="https://wa.me/963950026610">
                <Image
                  loading="lazy"
                  quality={1}
                  src="/images/whats-sar.svg"
                  className="w-20 lg:w-24"
                  alt="arrow"
                  width={250}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </header>
        <section className="w-screen flex flex-col items-center">
          <AnTitle title={dic?.someProjects} />

          <div className="flex flex-wrap justify-center items-center gap-8 px-4 lg:px-12 pt-4 ">
            {ourProjects.map((card) => {
              let title;

              if (dic.currLang === "ar") {
                title = card.titlear;
              } else if (dic.currLang === "ru") {
                title = card.titleru;
              } else {
                title = card.titleen;
              }

              return (
                <Link href={`/${lang}/Services/${card.route}`} key={card.id}>
                  <div className="max-w-[90vw] relative bg-white border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      loading="lazy"
                      quality={10}
                      width={400}
                      height={200}
                      className="rounded-t-lg aspect-video object-cover"
                      src={card.src}
                      alt="service image"
                    />
                    <div className="p-4 pb-7 flex-grow flex flex-col justify-between h-28">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary text-center">
                        {title}
                      </h5>
                      <span
                        className={`flex items-center justify-center font-bold mt-4 absolute ${
                          dic.currLang == "ar"
                            ? `left-2 flex-row-reverse`
                            : `right-2`
                        } bottom-2`}
                      >
                        {dic.learnMore}
                        <Image
                          width={50}
                          height={50}
                          quality={1}
                          src="/images/arrow.svg"
                          alt="arrow"
                          className={`ms-2 h-10 w-10 aspect-square transition-transform duration-300 hover:translate-x-1 ${
                            dic.currLang == "ar" ? `rotate-180` : ``
                          }  `}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <Locations
          params={{
            lang: lang,
          }}
        />
      </main>
    </>
  );
}
