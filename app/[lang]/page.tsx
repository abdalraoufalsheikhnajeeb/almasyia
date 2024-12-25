import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";
import { ourServecis } from "./data";

// No need to import Whatsapp or PhoneCall components here
// since we are only using their styling/idea, not embedding them.

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const dic = await getDictionary(lang);

  return (
    <>
      <Image
        loading="lazy"
        quality={60}
        src="/images/hero.webp"
        className={`absolute top-0 -z-10 lg:object-fill object-cover h-[90dvh] ${
          lang === "ar" && "-scale-x-[1]"
        } w-screen`}
        alt="arrow"
        width={1280}
        height={720}
      />
      <main className="max-w-[90vw] mx-auto flex items-center flex-col gap-8">
        <header className="h-[90dvh] gap-4 flex flex-col items-center justify-center lg:items-start lg:justify-start w-full">
          <Image
            quality={60}
            src="/images/logo.webp"
            alt="arrow"
            width={320}
            priority
            height={219}
            className="w-52 lg:w-80 object-cover"
          />
          {/* <h1 className="text-3xl max-w-3xl font-bold text-primary text-center lg:text-start">
            {dic?.contactUsTitle}
          </h1> */}
          {/* Add two inline buttons here inspired by Whatsapp and PhoneCall styles */}
          {/* <div className="flex gap-4 mt-4"> */}
          {/* WhatsApp Button */}
          {/* <Link href="https://wa.me/971545866066" target="_blank">
              <div
                className="rounded-full p-3 bg-[#25d366] hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                title="Contact us via WhatsApp"
              >
                <Image
                  priority
                  quality={1}
                  width={24}
                  height={24}
                  alt="WhatsApp Icon"
                  src="/images/whats.svg"
                />
              </div>
            </Link> */}

          {/* Phone Call Button */}
          {/* <Link href="tel:+971545866066" target="_blank">
              <div
                className="rounded-full p-3 bg-[#3b86ff] hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                title="Call us"
              >
                <Image
                  priority
                  quality={1}
                  width={24}
                  height={24}
                  alt="Phone Icon"
                  src="/images/phone_ic.svg"
                />
              </div>
            </Link> */}
          {/* </div> */}
        </header>
        <section className="w-screen flex flex-col items-center">
          <AnTitle title={dic?.someProjects} />
          <div className="max-w-7xl flex flex-wrap justify-center items-center gap-8 px-4 lg:px-12 pt-4">
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
                  <div className="max-w-[90vw] !p-0 relative w-80 flex flex-col justify-center overflow-hidden items-center transition-transform duration-300 box hover:scale-105 hover:shadow-sm">
                    <Image
                      loading="lazy"
                      quality={60}
                      width={318}
                      height={256}
                      className="w-full object-cover aspect-video"
                      src={card.src}
                      alt="service image"
                    />
                    <div className="p-3 flex-grow flex flex-col justify-between h-32">
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
                          className={`ms-2 h-8 w-8 aspect-square transition-transform duration-300 hover:translate-x-1 ${
                            dic.currLang === "ar" ? "rotate-180" : ""
                          }`}
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
        <video controls className="w-full max-w-[90vw] mt-4">
          <source src="/images/outro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
};

export default Page;
