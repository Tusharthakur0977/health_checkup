"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import FaqData from "../_data/FaqData";
import { HiPlusCircle } from "react-icons/hi";
import { HiMiniMinusCircle } from "react-icons/hi2";

const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-full sm:w-[90%] p-3 flex flex-col my-3 gap-4">
      <p className="text-center font-semibold text-xl sm:text:xl ">
        Frequently Asked{" "}
        <span className="text-[#22577a] font-extrabold">Questions</span>
      </p>
      <div className="h-1 w-[20%] self-center rounded-sm bg-[#22577a]" />
      <div className="flex flex-col gap-4">
        {FaqData.map((faq, index) => (
          <Accordion
            className={`w-full sm:w-[80%]  ${
              open === index + 1 ? "bg-[#22577a]" : "bg-[#ccdbfd]"
            }   sm:self-center shadow-md rounded-t-md`}
            open={open === index + 1}
            key={faq.title}
          >
            <AccordionHeader
              className="p-3 flex justify-between items-center gap-4  "
              onClick={() => handleOpen(index + 1)}
            >
              <p
                className={`text-sm ${
                  open === index + 1 ? "text-white" : "text-black"
                } font-bold flex-1`}
              >
                {faq.title}
              </p>
              {open === index + 1 ? (
                <HiMiniMinusCircle
                  className="rounded-full"
                  style={{
                    height: 30,
                    width: 30,
                    color: "white",
                  }}
                />
              ) : (
                <HiPlusCircle
                  className="bg-[#ccdbfd] rounded-full"
                  style={{
                    height: 25,
                    width: 25,
                    color: "#22577a",
                  }}
                />
              )}
            </AccordionHeader>
            <AccordionBody className="px-4 text-left bg-[#ccdbfd] text-black rounded-b-md">
              {faq.desc}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
