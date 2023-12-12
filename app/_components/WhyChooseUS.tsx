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
    <div className="w-full sm:w-[95%] px-4 sm:px-6 py-7 sm:py-12 flex flex-col shadow-xl rounded-lg mb-3 gap-4 bg-gradient-to-br from-green-500 to-blue-800 custom-radial-gradient">
      <p className="text-center font-bold text-xl sm:text:2xl text-white">
        Why Choose ClearVikalp?
      </p>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          {WhyChooseUsData.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 px-4 justify-between items-center"
            >
              <Image
                className="w-auto h-auto"
                alt=""
                src={item.image}
                width={40}
                height={30}
              />
              <p className="text-white flex-1 font-medium font-serif text-sm sm:text-xl text-left">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Slider
        autoplay
        className="w-[90%] sm:w-[70%] self-center m-0 "
        {...settings}
      >
        {renderReviews}
      </Slider>
      {/* <button className="self-center font-bold bg-white rounded-lg text-sm px-5 py-2.5 w-[70%] lg:w-[35%] shadow-lg sm:self-center text-center">
        Book Now
      </button> */}
    </div>
  );
};

export default WhyChooseUS;
