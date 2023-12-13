"use client";

import React from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import StickyButton from "./StickyButton";
interface IPlanCard {
  name: string;
  title: string;
  test: string[];
  amount: {
    withDiscount: string;
    withoutDiscount: string;
    discount: string;
  };
  isSwiped: boolean;
}

const PlanCard: React.FC<IPlanCard> = ({
  name,
  title,
  amount,
  test,
  isSwiped,
}) => {
  const [showmore, setShowmore] = React.useState(!(test.length > 12));

  const displayedTests = showmore ? test : test.slice(0, 12);

  const renderTests = React.useMemo(
    () =>
      displayedTests.map((item) => (
        <li key={item} className="flex gap-2 items-center justify-start">
          <svg
            className="flex-shrink-0 w-5 h-5 font-bold text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-xs text-white font-semibold">{item}</span>
        </li>
      )),
    [displayedTests]
  );

  React.useEffect(() => {
    setShowmore(false);

    return () => {
      setShowmore(false);
    };
  }, [isSwiped]);

  return (
    <div
      className={`flex min-h-[560px] flex-col p-6 justify-between sm:mx-auto sm:max-w-lg text-center text-gray-900 bg-[#22577a] rounded-lg`}
    >
      <h3 className=" text-xl sm:text-2xl text-white font-bold font-sans">
        {name}
      </h3>
      {/* <p className="font-semibold w-full font-sans text-sm text-gray-300 sm:text-lg">
        {title}
      </p> */}
      <div className="flex text-white  justify-center items-center my-2">
        <span className="mr-2 ms-1 text-2xl text-white font-bold">
          ₹ {amount.withDiscount}
        </span>
        <span className="text-gray-400 line-through">
          {amount.withoutDiscount}
        </span>
      </div>
      <p className="font-medium font-serif self-center text-center mb-8 text-sm sm:text-lg px-4 rounded-2xl text-white bg-[#14AE70]">
        Includes {test.length}+ Tests
      </p>

      <ul role="list" className="mb-4 text-left grid gap-4 grid-cols-2">
        {renderTests}
      </ul>
      {test.length > 12 && (
        <button
          className="text-white font-semibold self-center py-2 underline cursor-pointer"
          onClick={() => setShowmore(!showmore)}
        >
          {showmore ? (
            <MdKeyboardDoubleArrowUp size="2rem" />
          ) : (
            <MdKeyboardDoubleArrowDown size="2rem" />
          )}
        </button>
      )}
      <StickyButton label="Selce a Plan" bgColor="#FCF5EC" color="#22577a" />
    </div>
  );
};

export default PlanCard;
