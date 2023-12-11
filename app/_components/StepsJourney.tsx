import React from "react";
import StepData from "../_data/StepsData";
import Image from "next/image";

const StepsJourney = () => {
  return (
    <div className="w-[100%] sm:w-[95%] flex flex-col my-4 items-center">
      <p className="text-center text-[#22577a] font-semibold px-3 mb-4">
        Your Health Checkup journey with Clear Vikalp simplified in 4 Easy
        Steps.
      </p>
      {StepData.map((steps, index) => (
        <React.Fragment key={index}>
          <div className="w-[90%] relative rounded-md p-3 shadow-lg ring-1 ring-slate-900/10">
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
              {index <= 2 && (
                <Image
                  src={
                    index === 1
                      ? "/images/dashed-arrow-inv.png"
                      : "/images/dashed-arrow.png"
                  }
                  alt=""
                  width={30}
                  height={30}
                  className={`w-auto h-auto absolute -bottom-10 ${
                    index === 1 ? "-right-4" : "-left-4"
                  }  `}
                />
              )}
            </div>
          </div>
          {index + 1 < StepData.length && (
            <div className="h-4 bg-[#22577a] self-center w-[2px]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepsJourney;
