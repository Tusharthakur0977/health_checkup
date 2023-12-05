"use client";

import React from "react";

const TopHeader = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea sunt voluptatem neque perferendis? Iusto modi ullam accusamus quisquam minus.";
  const isTextLongEnough = text.length > 50;

  return (
    <div className="scrollable-text-container w-[100%] sm:w-[80%] px-3 py-2 text-center text-white text-sm sm:text-base bg-[#14AE70] font-bold">
      <div
        className={`${
          isTextLongEnough &&
          window.innerWidth < 900 &&
          "scrollable-text-content"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default TopHeader;
