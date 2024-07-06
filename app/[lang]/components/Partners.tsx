"use client";
import React from "react";
import AnTitle from "./AnTitle.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { type getDictionary } from "../../../get-dictionary";
import Image from "next/image";
import "./Partners.css";
import Link from "next/link";

type Partner = {
  id: number;
  src: string;
  titleen: string;
  titlear: string;
  titleru: string;
  route: string;
};

type PartnersProps = {
  dic: Awaited<ReturnType<typeof getDictionary>>;
  data: Partner[];
  title: string;
};

const Partners = ({ dic, data, title }: PartnersProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="our-partners-section px-[5vw] py-8">
      <AnTitle title={title} />
      <br />
      <br />
      <Slider {...settings}>
        {data.map((card, index) => {
          let title;

          if (dic.currLang === "ar") {
            title = card.titlear;
          } else if (dic.currLang === "ru") {
            title = card.titleru;
          } else {
            title = card.titleen;
          }

          return (
            <div key={index} className="p-4">
              <Link href={`/${dic.currLang}/airLinesBrief/${card.route}`}>
                <div className="bg-gray-200 relative border rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-center items-center overflow-hidden">
                  <div className="bg-white w-full">
                    <Image
                      loading="lazy"
                      quality={10}
                      width={400}
                      height={200}
                      className="rounded-t-lg aspect-video object-contain"
                      src={card.src}
                      alt={title}
                    />
                  </div>
                  <div className="p-4 pb-7 flex-grow flex flex-col justify-between h-28">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary text-center">
                      {title}
                    </h5>

                    <span className={`flex items-center justify-center font-bold mt-4 absolute ${dic.currLang == "ar" ?  `left-2 flex-row-reverse` : `right-2` } bottom-2`}>
                      {dic.learnMore}
                      <Image
                        width={50}
                        height={50}
                        quality={1}
                        src="/images/arrow.svg"
                        alt="arrow"
                        className={`ms-2 h-10 w-10 aspect-square transition-transform duration-300 hover:translate-x-1 ${dic.currLang == "ar" ?  `rotate-180` : `` }  `}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Partners;
