"use client";

import React from "react";
import PlanCard from "./PlanCard";
import Slider from "react-slick";
import { PiArrowSquareLeftFill, PiArrowSquareRightFill } from "react-icons/pi";

const Plans = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full sm:w-[90%] p-3 flex flex-col my-3 gap-4">
      <p className="text-center font-semibold text-xl sm:text:xl ">
        Best Plans
      </p>
      {window.innerWidth < 600 ? (
        <Slider
          // nextArrow={<h1 className="text-black ">djkslf</h1>}
          // prevArrow={<PiArrowSquareLeftFill />}
          arrows
          className="shadow-xl rounded w-[90%] self-center m-0 "
          {...settings}
        >
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </Slider>
      ) : (
        <div className="w-full grid gap-3 grid-cols-3 sm:p-5">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      )}
    </div>
  );
};

export default Plans;
