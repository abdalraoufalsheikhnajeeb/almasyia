import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Image from "next/image";
import Link from "next/link";
import { ourServecis } from "./data";
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
        quality={50}
        src="/images/hero.jpg"
        className="bg-gradient absolute -z-10 object-cover h-[100dvh] w-screen"
        alt="arrow"
        width={1280}
        height={720}
      />
      <div className=" bg-gradient absolute -z-[1]  h-[100dvh] w-screen" />
      <main className=" max-w-[90vw]  mx-auto flex items-center flex-col gap-8">
        <header className="h-[100dvh] gap-8 pb-8 flex flex-col items-center justify-end ">
          <Image
            quality={50}
            src="/images/logo.webp"
            alt="arrow"
            width={50}
            priority
            height={38}
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
            className="w-52 lg:w-80"
          />
          <h2 className="text-3xl  max-w-3xl font-bold  text-primary  text-center">
            {dic?.homeText}
          </h2>

          <button className="text-xl lg:text-2xl max-w-3xl font-bold text-primary  text-center">
            {dic.contactUsTitle}
          </button>
          <div className="flex gap-4">
            <div className="flex  hover:bg-gray-100 text-primary font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition ease-in-out duration-200 ">
              <Link target="_blank" href="https://wa.me/971545866066">
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
              <Link target="_blank" href="https://wa.me/963950026610">
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

          <div className="max-w-7xl flex flex-wrap justify-center items-center gap-8 px-4 lg:px-12 pt-4 ">
            {ourServecis.map((card) => {
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
                  <div className="max-w-[90vw] relative w-80 bg-white border flex flex-col justify-center items-center rounded-3xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      loading="lazy"
                      quality={50}
                      width={318}
                      height={256}
                      className="rounded-t-lg object-contain scale-[100.5%] p-2  h-64"
                      src={card.src}
                      alt="service image"
                    />
                    <div className="p-3 pt-0 flex-grow flex flex-col justify-between h-28">
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-primary text-center">
                        {title}
                      </h2>
                      <span className="flex delay-1000 items-end justify-center font-bold underline underline-offset-4">
                        {dic.learnMore}
                        <Image
                          width={50}
                          height={50}
                          quality={1}
                          src="/images/arrow.svg"
                          alt="arrow"
                          className={`ms-2 h-8 w-8 aspect-square transition-transform duration-300  hover:translate-x-1 ${
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
