import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import AnTitle from "./components/AnTitle";
import Locations from "./components/Locations";
import { ourServecis } from "./data";

// No need to import Whatsapp or PhoneCall components here
// since we are only using their styling/idea, not embedding them.

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const lang = (await params).lang as Locale;
  const dic = await getDictionary(lang);

  return (
    <>
      <Image
        priority
        quality={60}
        src="/images/hero.webp"
        className={`absolute top-0 -z-10 lg:object-fill object-cover h-[90dvh] ${
          lang === "ar" && "-scale-x-[1]"
        } w-screen`}
        sizes="100vw"
        alt="Travel from Damascus to Dubai hero background"
        width={1280}
        height={720}
      />
      <main className="max-w-[90vw] mx-auto flex items-center flex-col gap-8">
        <header className="h-[80dvh] gap-4 flex flex-col items-center justify-center lg:items-start lg:justify-start w-full">
          <Image
            quality={60}
            src="/images/logo.webp"
            alt="arrow"
            width={320}
            priority
            height={219}
            className="w-52 lg:w-80 object-cover"
          />
          <h1 className="text-3xl max-w-3xl font-bold text-litePrimary text-center lg:text-start">
            {dic.heroTitle}
          </h1>
          <p className="text-center lg:text-start max-w-3xl text-lg text-primary">
            {dic.heroSubtitle}
          </p>
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
                className="rounded-full p-3 bg-[#316792] hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
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
        <section className="w-full flex flex-col items-center">
          <p className="text-primary text-xl lg:text-2xl mb-8 text-center max-w-3xl px-4">
            {dic.discover_services}
          </p>

          <AnTitle title={dic?.someProjects} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl px-4 pt-4">
            {ourServecis.map((card) => {
              const title =
                dic.currLang === "ar"
                  ? card.titlear
                  : dic.currLang === "ru"
                  ? card.titleru
                  : card.titleen;
              const isRTL = dic.currLang === "ar";
              return (
                <Link
                  href={`/${lang}/Services/${card.route}`}
                  key={card.id}
                  className="group block"
                >
                  <article className="card-elegant flex h-full flex-col overflow-hidden">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        loading="lazy"
                        quality={70}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={card.src}
                        alt={title}
                      />
                    </div>
                    <div
                      dir={isRTL ? "rtl" : "ltr"}
                      className="flex flex-1 flex-col justify-between gap-3 p-4"
                    >
                      <h3 className="text-base font-bold leading-snug text-primary lg:text-lg">
                        {title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 ${
                          isRTL
                            ? "group-hover:-translate-x-1"
                            : "group-hover:translate-x-1"
                        }`}
                      >
                        {dic.learnMore}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          <path d="M13.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
                        </svg>
                      </span>
                    </div>
                  </article>
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
        <video
          controls
          preload="metadata"
          className="w-full max-w-[90vw] mt-4"
        >
          <source src="/images/outro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
};

export default Page;
