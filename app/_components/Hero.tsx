"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import useWindowDimensions from "../_hooks/useWindowDimensions";

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
      <div className="flex justify-between items-center w-full px-2 sm:px-0 pb-1 shadow-md">
        <Image
          className="w-auto h-auto"
          src="/images/logo.jpeg"
          alt=""
          width={width! < 600 ? 100 : 130}
          height={50}
        />
        <p className="flex-1 text-sm sm:text-xl font-medium font-sans text-center px-4">
          Looking for a Health Checkup? We got you Covered.
        </p>
      </div>

      <div className="w-full overflow-hidden px-3 py-3 sm:px-0  ">
        <Slider {...settings}>
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner1.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
        </Slider>
      </div>

      <div className="w-full grid gap-2 grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none px-3 py-3 sm:px-0 sm:py-5">
        <div className="relative flex flex-col items-center p-2 sm:p-6 bg-[#38a3a5] rounded ">
          <Image
          
            src={"/images/delivery.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={width! < 600 ? 40 : 60}
            height={width! < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1 text-white">
            Free Home Sample Collection
          </h4>
        </div>

        <div className="relative flex flex-col items-center p-2 sm:p-6 bg-[#38a3a5] rounded ">
          <Image
            src={"/images/discount.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={width! < 600 ? 40 : 60}
            height={width! < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1 text-white">
            Up to 60% Discount on all test
          </h4>
        </div>

        <div className="relative flex flex-col items-center p-2 sm:p-6 bg-[#38a3a5] rounded ">
          <Image
            src={"/images/test.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={width! < 600 ? 40 : 60}
            height={width! < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1 text-white">
            500+ Test Available
          </h4>
        </div>

        <div className="relative flex flex-col items-center p-2 sm:p-6 bg-[#38a3a5] rounded ">
          <Image
            src={"/images/certified.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={width! < 600 ? 40 : 60}
            height={width! < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1 text-white">
            Certified Labs
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
