"use client";

import React from "react";
import Slider from "react-slick";
import PlanData from "../_data/PlanData";
import PlanCard from "./PlanCard";
import useWindowDimensions from "../_hooks/useWindowDimensions";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Plans = () => {
  const { width } = useWindowDimensions();
  const [isSwiped, setIsSwiped] = React.useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderPLanCard = React.useMemo(
    () =>
      PlanData.map((plan) => (
        <PlanCard
          key={plan.name}
          title={plan.title}
          name={plan.name}
          amount={plan.amount}
          test={plan.test}
          isSwiped={isSwiped}
        />
      )),
    [isSwiped]
  );

  return (
    <div className="w-full sm:w-[95%] px-3 py-6 flex flex-col my-5 gap-2">
      <div className="flex gap-1 px-1 self-center">
        <RiDoubleQuotesL style={{ color: "#22577a" }} size="1.2rem" />
        <p className="text-center font-bold text-xl sm:text-2xl text-[#22577a]">
          Your Health, Your Way <br /> Clearvikalp Plan Selection
        </p>
        <RiDoubleQuotesR style={{ color: "#22577a" }} size="1.2rem" />
      </div>
      <p className="text-center font-medium text-sm sm:text:lg mb-3 text-gray-700 w-[80%] self-center">
        Select Your Wellness Journey with Basic, Plus, and Pro Options
      </p>
      {width! < 1050 ? (
        <Slider
          arrows
          initialSlide={1}
          onSwipe={() => setIsSwiped(!isSwiped)}
          className="w-[90%] self-center m-0 overflow-visible"
          {...settings}
        >
          {renderPLanCard}
        </Slider>
      ) : (
        <div className="w-full grid gap-3 grid-cols-3 sm:p-5">
          {renderPLanCard}
        </div>
      )}
    </div>
  );
};

export default Plans;
