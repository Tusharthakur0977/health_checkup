"use client";

import React from "react";
import Slider from "react-slick";
import PlanData from "../_data/PlanData";
import PlanCard from "./PlanCard";
import useWindowDimensions from "../_hooks/useWindowDimensions";

const Plans = () => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: false,
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
        />
      )),
    []
  );

  return (
    <div className="w-full sm:w-[95%] bg-[#edf6f9] px-3 py-8 flex flex-col mt-5 gap-2">
      <p className="text-center font-semibold text-xl sm:text:xl ">
        Best Plans
      </p>
      <p className="text-center font-medium text-base sm:text:lg mb-3 text-gray-500">
        Empowering your health with tailored test solutions.
      </p>
      {width! < 600 ? (
        <Slider arrows className="w-[90%] self-center m-0" {...settings}>
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
