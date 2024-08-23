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
    <footer className="footer pt-10 flex pb-4 justify-center items-center flex-col w-full">
      <span className="text-3xl text-primary">{dic?.followUs}</span>
      <div className="flex gap-4 items-center justify-center">
        <a
          title="facebook"
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61561523323618&mibextid=ZbWKwL"
        >
          <Image
            loading="lazy"
            quality={1}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            src="/images/facebook.svg"
            width={100}
            height={100}
            alt="facebook icon"
          />
        </a>
        <a
          title="instagram"
          target="_blank"
          href="https://www.instagram.com/alnujoom_almasiya?igsh=Z3duaThqemhtZXpr&utm_source=qr"
        >
          <Image
            loading="lazy"
            quality={80}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            src="/images/insta.svg"
            width={100}
            height={100}
            alt="instagram link"
          />
        </a>
        <a
          title="UAE location"
          target="_blank"
          href="https://maps.app.goo.gl/7qC5aEFBgittwxY68"
        >
          <Image
            loading="lazy"
            quality={80}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            src="/images/uaeLocation.svg"
            width={100}
            height={100}
            alt="UAE location"
          />
        </a>
        <a
          title="SAR location"
          target="_blank"
          href="https://maps.app.goo.gl/AURZZ5qdu8yfD9NH9"
        >
          <Image
            loading="lazy"
            quality={80}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            src="/images/sarLocation.svg"
            width={100}
            height={100}
            alt="syria location"
          />
        </a>
        <a
          title="email Farouk Dakkak"
          target="_blank"
          href="mailto:farouk@alnujoomalmasiya.com"
        >
          <Image
            loading="lazy"
            quality={80}
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            src="/images/email.svg"
            width={100}
            height={100}
            alt="syria location"
          />
        </a>
      </div>
    </footer>
  );
}
