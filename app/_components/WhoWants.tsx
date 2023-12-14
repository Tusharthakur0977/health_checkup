"use client";

import Image from "next/image";
import React from "react";
import useWindowDimensions from "../_hooks/useWindowDimensions";

const WhoWants = () => {
  const { width } = useWindowDimensions();

  const WhoNeedData = [
    {
      title: "Preventive Health Checkup",
      subTitle:
        "Discover How Your Lifestyle Shapes Your Well-being with Our Preventive Packages",
    },
    {
      title: "Detective Health Checkup",
      subTitle:
        "Our Detective Packages Reveal What's Lurking Beneath, Before It Becomes a Major Concern",
    },
    {
      title: "Curative Health Checkup",
      subTitle:
        "Explore Our Curative Packages to Ensure Your Treatment is delivering Optimal Health",
    },
  ];

  return (
    <div className="w-full sm:w-[95%] sm:justify-center sm:items-center mb-4 p-5 flex flex-col sm:flex-row">
      <div className="flex justify-between mb-5 sm:gap-3 sm:flex-col  items-center">
        <p className="text-xl sm:text-3xl font-bold px-3 sm:px-20 text-left">
          Who Needs These <span className="text-[#22577a]">Packages?</span>
        </p>
        <Image
          src="/images/whowantsImg.png"
          width={width! < 600 ? 170 : 350}
          className="rounded-2xl shadow-lg"
          height={100}
          alt=""
        />
      </div>

      <div className="flex gap-3 sm:flex-col justify-between ">
        {WhoNeedData.map((item, i) => (
          <div className="flex flex-col gap-2" key={item.title + i.toString()}>
            <p className="text-gray-900 text-sm font-medium px-2">
              {item.title}
            </p>
            <p className="text-gray-600 text-[10px] px-2 font-medium">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWants;
