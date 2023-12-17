"use client";

import Image from "next/image";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { BookModalContext } from "../_context/BookModalContext";
import StickyButton from "./StickyButton";

const BookingCard = () => {
  const { isBookModal, setIsBookModal, isFormFilled, setIsFormFilled } =
    React.useContext(BookModalContext);

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setIsBookModal(!isBookModal);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      formData.name.length > 0 ||
      formData.phone.length === 10 ||
      formData.location.length > 0
    ) {
      setIsFormFilled(true);
    }
  };

  return (
    <div
      className={`w-[95%] ${
        !isFormFilled && "bg-white border-1 border-[#22577a]"
      } rounded-md flex flex-col px-4 py-6 sm:py-10 justify-center gap-2 shadow-lg ring-1 ring-slate-900/10`}
    >
      <div className="relative w-full px-3">
        <p
          className={` ${isFormFilled ? "font-semibold" : "font-bold "} ${
            isFormFilled && "font-inter"
          } text-center text-black text-xl sm:text-2xl ${!isFormFilled && ""}`}
        >
          {isFormFilled ? (
            "Thank you for Booking your Call"
          ) : (
            <>
              Get a Call in{" "}
              <span className="text-[#22577a] font-bold tracking-wide text-[20px] sm:text-2xl">
                20 Mins
              </span>
            </>
          )}
        </p>
        {isBookModal && (
          <button className="absolute top-1 right-0" onClick={handleOpen}>
            <IoMdCloseCircle
              style={{ color: "white", width: 20, height: 20 }}
            />
          </button>
        )}
      </div>
      <div className="h-[2px] sm:h-[3px] w-[30%] sm:w-[10%] -mt-2 mb-2 self-center bg-[#22577a]" />

      {isFormFilled ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-center font-normal text-sm sm:text-xl">
            Our Team will shortly Reach you back
          </p>
          <Image src="/images/checklist.png" alt="" width={50} height={50} />
        </div>
      ) : (
        <form className="flex flex-col gap-2 sm:px-6" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
              placeholder="Your Name"
              aria-label="Your Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
              placeholder="Your Mobile Number"
              aria-label="Your Mobile Number"
              name="phone"
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base  px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
              placeholder="Your Location"
              aria-label="Your Location"
              name="location"
              onChange={handleChange}
            />
          </div>

          <StickyButton
            label="Request a Callback"
            bgColor="#22577a"
            color="white"
            extraClasses="w-full sm:w-[50%] lg:w-[35%] sm:self-center mt-3"
            type="submit"
          />
        </form>
      )}
    </div>
  );
};

export default BookingCard;
