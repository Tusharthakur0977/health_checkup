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
    autoplay: true,
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
        <div className="flex items-center gap-1">
          <p className="flex-1 text-lg sm:text-xl font-bold text-[#22577a] text-center px-1">
            1234-123-456
          </p>
          <div className="bg-[#22577a] p-2 rounded-full">
            <IoCall style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <p className="w-full text-lg p-3 text-center">
        Be CLEAR on your health. Say YES to preventive health checkup
      </p>
      <div className="w-full overflow-hidden px-3 py-3 sm:px-0  ">
        <Slider {...settings}>
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner1.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
        </Slider>
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
              width={width! < 600 ? 40 : 60}
              height={width! < 600 ? 40 : 60}
            />
            <h4 className="text-[14px] px-4 sm:text-xl text-center font-bold leading-snug tracking-tight mb-1 text-black">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
