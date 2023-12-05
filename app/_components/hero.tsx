"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[100%] sm:w-[80%] flex flex-col ">
      <div className="flex justify-between items-center w-full px-4 pb-3 shadow-md">
        <Image
          src="/images/logo.png"
          alt=""
          width={window.innerWidth < 600 ? 100 : 130}
          height={40}
        />
        <p className="flex-1 text-sm sm:text-xl font-medium font-sans text-center px-10">
          Looking for a Health Checkup?
          <br /> We got you Covered
        </p>
      </div>

      <div className="w-full overflow-hidden p-3">
        <Slider {...settings}>
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner1.jpg" alt="" width={100} height={10} />
          <Image src="/images/banner.jpg" alt="" width={100} height={10} />
        </Slider>
      </div>

      <div className="w-full grid gap-3 grid-cols-2 lg:grid-cols-4 md:max-w-2xl lg:max-w-none p-3 sm:p-5">
        {/* 1st item */}
        <div className="relative flex flex-col items-center p-2 sm:p-6 bg-white rounded shadow-xl">
          <Image
            src={"/images/delivery.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={window.innerWidth < 600 ? 40 : 60}
            height={window.innerWidth < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1">
            Free Home Sample Collection
          </h4>
        </div>

        {/* 2nd item */}
        <div className="relative flex flex-col items-center p-3 sm:p-6 bg-white rounded shadow-xl">
          <Image
            src={"/images/discount.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={window.innerWidth < 600 ? 40 : 60}
            height={window.innerWidth < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1">
            Up to 60% Discount on all test
          </h4>
        </div>

        {/* 3rd item */}
        <div className="relative flex flex-col items-center p-3 sm:p-6 bg-white rounded shadow-xl">
          <Image
            src={"/images/test.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={window.innerWidth < 600 ? 40 : 60}
            height={window.innerWidth < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1">
            400+ Test Available
          </h4>
        </div>

        {/* 4th item */}
        <div className="relative flex flex-col items-center p-3 sm:p-6 bg-white rounded shadow-xl">
          <Image
            src={"/images/certified.png"}
            className="p-1 -mt-1 mb-2"
            alt=""
            width={window.innerWidth < 600 ? 40 : 60}
            height={window.innerWidth < 600 ? 40 : 60}
          />
          <h4 className="text-[12px] sm:text-xl text-center font-bold leading-snug tracking-tight mb-1">
            Certified Lebas
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
