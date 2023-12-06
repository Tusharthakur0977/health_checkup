import React from "react";

interface IPlanCard {
  name: string;
  title: string;
  test: string[];
  amount: {
    withDiscount: string;
    withoutDiscount: string;
  };
}

const PlanCard: React.FC<IPlanCard> = ({ name, title, amount, test }) => {
  return (
    <div
      className={`flex flex-col p-6 sm:mx-auto sm:max-w-lg text-center text-gray-900 bg-white rounded-lg border border-[#14AE70]`}
    >
      <h3 className="mb-2 text-xl sm:text-2xl font-semibold font-sans">
        {name}
      </h3>
      <p className="font-semibold w-full font-sans text-sm text-gray-500 sm:text-lg">
        {title}
      </p>
      <div className="flex justify-center items-baseline my-2">
        ₹
        <span className="mr-2 ms-1 text-2xl text-[#14AE70] font-bold">
          {amount.withDiscount}
        </span>
        <span className="text-gray-500 dark:text-gray-400 line-through">
          {amount.withoutDiscount}
        </span>
      </div>
      <p className="font-medium font-serif self-center text-center mb-8 text-sm sm:text-lg px-4 rounded-2xl text-white bg-[#14AE70]">
        Includes {test.length} Tests
      </p>

      <ul role="list" className="mb-8  text-left grid gap-4 grid-cols-2">
        {test.map((item) => (
          <li key={item} className="flex gap-2 items-center justify-start">
            <svg
              className="flex-shrink-0 w-5 h-5 font-bold text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="text-xs font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <button className="text-white font-bold bg-[#14AE70] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200  rounded-lg text-sm px-5 py-2.5 text-center">
        Select a Plan
      </button>
    </div>
  );
};

export default PlanCard;
