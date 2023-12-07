import React from "react";
import StepData from "../_data/StepsData";

const StepsJourney = () => {
  return (
    <div className="w-[100%] sm:w-[95%] flex flex-col my-4 items-center">
      <p className="text-center text-[#22577a] font-semibold px-3 mb-4">
        Your Health Checkup journey with Clear Vikalp simplified in 4 Easy
        Steps.
      </p>

      {StepData.map((steps, index) => (
        <div
          key={index}
          className="w-[90%] rounded-md p-3 shadow-lg ring-1 ring-slate-900/10 mb-3"
        >
          <div className="flex items-center gap-6">
            <p className="px-4 py-2 font-bold bg-[#38a3a5] text-white rounded-full">
              {index + 1}
            </p>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-start text-[#38a3a5]">
                {steps.title}
              </p>
              <ul>
                {steps.subtitles.map((sub) => (
                  <li
                    key={sub}
                    className="text-xs font-normal text-start list-disc"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsJourney;
