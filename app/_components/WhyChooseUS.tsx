"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ReviewsData from "../_data/ReviewsData";
import WhyChooseUsData from "../_data/WhyChooseUsData";
import ReviewCard from "./ReviewCard";

const WhyChooseUS = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderReviews = React.useMemo(
    () =>
      ReviewsData.map((review) => (
        <ReviewCard
          key={review.name}
          name={review.name}
          desc={review.desc}
          image={review.image}
          rating={review.rating}
        />
      )),
    []
  );

  return (
    <div className="w-full sm:w-[95%] px-4 sm:px-6 py-7 sm:py-12 flex flex-col shadow-xl  mb-3 gap-4 bg-gradient-to-b from-[#22577a] to-cyan-600">
      <div className="flex flex-col gap-1">
        <p className="text-xl sm:text-2xl font-bold text-center text-white">
          Why Choose <span className="text-white">ClearVikalp?</span>
        </p>
        <div className="h-1 w-[30%] sm:w-[10%] self-center rounded-sm bg-cyan-500" />
      </div>
      <div className="flex flex-col sm:justify-between sm:items-center md:flex-row gap-3">
        <div className="flex flex-col gap-4">
          {WhyChooseUsData.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 px-4 justify-between items-center"
            >
              <div className="flex p-4 bg-white rounded-full items-center justify-center">
                <Image
                  className="w-auto h-auto "
                  alt=""
                  src={item.image}
                  width={25}
                  height={25}
                />
              </div>
              <p className="text-white flex-1 font-medium font-serif text-base sm:text-lg text-left">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <Slider
          autoplay
          className="w-[90%] sm:w-[40%] self-center"
          {...settings}
        >
          {renderReviews}
        </Slider>
      </div>
      {/* <button className="self-center font-bold bg-white rounded-lg text-sm px-5 py-2.5 w-[70%] lg:w-[35%] shadow-lg sm:self-center text-center">
        Book Now
      </button> */}
    </div>
  );
};

export default WhyChooseUS;
