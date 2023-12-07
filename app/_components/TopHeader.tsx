"use client";

import React from "react";
import useWindowDimensions from "../_hooks/useWindowDimensions";

const TopHeader = () => {
  const { width } = useWindowDimensions();

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea sunt voluptatem neque perferendis? Iusto modi ullam accusamus quisquam minus.";
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
