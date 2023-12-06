"use client";

import { BookModalContext } from "@/app/_context/BookModalContext";
import Image from "next/image";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const BookTestModal = () => {
  const { isBookModal, setIsBookModal } = React.useContext(BookModalContext);

  const handleOpen = () => {
    setIsBookModal(!isBookModal);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full w-full flex justify-center items-center  bg-[rgba(0,0,0,0.3)] ${
        isBookModal ? "flex" : "hidden"
      }`}
    >
      <div className="w-[80%] p-3 z-[100] flex flex-col justify-center items-center bg-white rounded-lg">
        <div className="relative w-full px-3">
          <p className="font-bold text-center text-lg sm:text-xl mb-5 ">
            Book your Test
          </p>
          <button className="absolute top-1 right-0" onClick={handleOpen}>
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <input
            type="name"
            className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
            placeholder="Your Name"
            aria-label="Your Name"
          />
          <input
            type="mobile"
            className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
            placeholder="Your Mobile Number"
            aria-label="Your Mobile Number"
          />
          <input
            type="text"
            className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
            placeholder="Your Location"
            aria-label="Your Location"
          />
        </div>
        <div className="flex items-center sm:self-center mb-4 sm:mt-3">
          <input
            id="opt-in-for-whatsapp"
            type="checkbox"
            value=""
            className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <Image src="/images/whatsapp.png" alt="" width={20} height={20} />
          <label
            htmlFor="opt-in-for-whatsapp"
            className="ms-1 text-sm font-medium text-gray-900"
          >
            Opt in for whatsapp updates
          </label>
        </div>
        <button
          onClick={() => setIsBookModal(!isBookModal)}
          className="text-white font-bold bg-[#14AE70] rounded-lg text-sm px-5 py-2.5 sm:w-[50%] lg:w-[35%] shadow-lg sm:self-center text-center"
        >
          Request a Callback
        </button>
      </div>
    </div>
  );
};

export default BookTestModal;
