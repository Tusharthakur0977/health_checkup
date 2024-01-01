"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import useWindowDimensions from "../_hooks/useWindowDimensions";
import { IoCall } from "react-icons/io5";
import FeatureData from "../_data/FeatureCardData";

const Hero = () => {
  const { width } = useWindowDimensions();
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[100%] sm:w-[95%] flex flex-col mb-4">
      <div className="flex justify-between items-center w-full px-2 sm:px-0 pb-1 ">
        <Image
          src="/images/logo.png"
          alt=""
          width={width! < 600 ? 140 : 130}
          height={50}
        />
        <a
          href="tel:8669988868"
          id="contact_us"
          className="flex items-center gap-1 flex-col"
        >
          <div className="bg-[#22577a] items-center flex gap-2 py-2 px-3 rounded-md">
            <p className="text-white text-xs">Call Us at</p>

            <IoCall style={{ color: "white" }} />
          </div>
          <p className="flex-1 sm:text- font-bold text-[#22577a] text-center px-1">
            +91 8669988868
          </p>
        </a>
      </div>
      <p className="w-full text-xl sm:text-2xl p-3 font-extrabold text-center">
        <span className="underline-offset-4 underline decoration-[#22577a]">
          Be CLEAR on your health.
        </span>{" "}
        <span className="text-[#22577a] font-sans">
          Say YES to preventive health checkup
        </span>
      </p>
      <div className="w-full overflow-hidden py-3 sm:px-0  ">
        {width! < 600 ? (
          <img src="/images/banner/creat0ive.jpg" width={"100%"} alt="" />
        ) : (
          <Slider {...settings}>
            <img src="/images/banner/1.png" alt="" />
            <img src="/images/banner/2.png" alt="" />
            <img src="/images/banner/3.png" alt="" />
            <img src="/images/banner/4.png" alt="" />
          </Slider>
        )}
      </div>

      <div className="w-full grid gap-4 grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none px-3 py-3 sm:px-0 sm:py-5">
        {FeatureData.map((card, index) => (
          <div
            key={card.title + index.toString()}
            className="relative flex flex-col items-center p-2 sm:p-6 bg-white shadow-xl rounded-md"
          >
            <Image
              src={card.img}
              className="p-1 -mt-1 mb-2"
              alt=""
              width={width! < 600 ? 70 : 60}
              height={width! < 600 ? 70 : 60}
            />
            <h4 className="text-[14px] text-[#22577a] px-4 sm:px-10  sm:text-xl text-center font-bold leading-snug tracking-tight mb-1">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
