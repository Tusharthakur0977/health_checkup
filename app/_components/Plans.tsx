"use client";

import React from "react";
import Slider from "react-slick";
import PlanData from "../_data/PlanData";
import PlanCard from "./PlanCard";

const Plans = () => {
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
    <div className="w-full sm:w-[90%] p-3 flex flex-col my-3 gap-4">
      <p className="text-center font-semibold text-xl sm:text:xl border-b border-black ">
        Best Plans
      </p>
      {window.innerWidth < 600 ? (
        <Slider
          arrows
          className="shadow-xl rounded w-[90%] self-center m-0 "
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
