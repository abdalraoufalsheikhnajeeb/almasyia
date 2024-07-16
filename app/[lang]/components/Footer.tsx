import Image from "next/image";
import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";

export default async function Footer({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dic = await getDictionary(lang);
  return (
    <footer
      className={`footer pt-10 flex pb-4 justify-center items-center flex-col  w-full`}
    >
      <span className="text-3xl text-primary ">{dic?.followUs}</span>
      <div className="flex gap-4 items-center justify-center">
        <a
          title="facebook"
          target="_blank"
          href={
            "https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL"
          }
        >
          <Image
            loading="lazy"
            quality={1}
            className="transform transition-transform duration-300 h-36 ease-in-out hover:scale-110"
            src={"/images/face.svg"}
            width={100}
            height={100}
            alt={"facebook icon"}
          />
        </a>
        <a
          title="instagram"
          target="_blank"
          href={
            "https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr"
          }
        >
          <Image
            loading="lazy"
            quality={20}
            className="h-36 duration-300 transform  transition-transform ease-in-out hover:scale-110"
            src={"/images/insta.svg"}
            width={100}
            height={100}
            alt={"instagram link"}
          />
        </a>
        <a
          title="UAE location"
          target="_blank"
          href={"https://maps.app.goo.gl/7qC5aEFBgittwxY68"}
        >
          <Image
            loading="lazy"
            quality={20}
            className="h-20 duration-300 transform  transition-transform ease-in-out hover:scale-110"
            src={"/images/map-uae.svg"}
            width={100}
            height={100}
            alt={"UAE location"}
          />
        </a>
        <a
          title="SAR location"
          target="_blank"
          href={"https://maps.app.goo.gl/AURZZ5qdu8yfD9NH9"}
        >
          <Image
            loading="lazy"
            quality={20}
            className="h-20 duration-300 transform  transition-transform ease-in-out hover:scale-110"
            src={"/images/map-sar.svg"}
            width={100}
            height={100}
            alt={"syria location"}
          />
        </a>
      </div>
      <p className="mt-4 text-lg text-primary">
        <a className="text-2xl underline underline-offset-4" href="mailto:farouk@alnujoomalmasiya.com">farouk@alnujoomalmasiya.com</a>
      </p>
    </footer>
  );
}
