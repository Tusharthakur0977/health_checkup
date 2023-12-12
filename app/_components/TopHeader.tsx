"use client";

import React from "react";
import useWindowDimensions from "../_hooks/useWindowDimensions";

const TopHeader = () => {
  const { width } = useWindowDimensions();

  const text =
    "Looking for a health checkup? Book the full body health Check-up Today";
  const isTextLongEnough = text.length > 50;

  return (
    <div className="scrollable-text-container w-[100%] sm:w-[95%] px-3 py-2 text-center text-white text-sm sm:text-base bg-[#22577a] font-bold">
      <div
        className={`${
          isTextLongEnough && width! < 900 && "scrollable-text-content"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default TopHeader;
