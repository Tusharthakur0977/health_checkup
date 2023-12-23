"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { BookModalContext } from "../_context/BookModalContext";
import StickyButton from "./StickyButton";

interface CustomWindow extends Window {
  dataLayer: any[]; // You might want to define a specific type for your dataLayer items
}

const BookingCard = () => {
  const {
    isBookModal,
    setIsBookModal,
    isFormFilled,
    setIsFormFilled,
    selectedPLan,
  } = React.useContext(BookModalContext);

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    location: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setIsBookModal(!isBookModal);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
      isValid = false;
    } else {
      newErrors.phone = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      (window as unknown as CustomWindow).dataLayer.push({
        event: "booking_card_submit",
        card_type: isBookModal ? "popup_card" : "top-card",
      });
      await fetch("/api/submitdetails", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          plan: selectedPLan,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setIsFormFilled(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div
      className={`w-[95%] ${
        isFormFilled && "bg-white border border-[#22577a]"
      } bg-white rounded-md flex flex-col px-4 py-6 sm:py-10 justify-center gap-2 shadow-lg ring-1 ring-slate-900/10`}
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
              Get a Quick{" "}
              <span className="text-[#22577a] font-bold tracking-wide text-[20px] sm:text-2xl">
                CallBack
              </span>
            </>
          )}
        </p>
        {isBookModal && (
          <button className="absolute top-1 right-0" onClick={handleOpen}>
            <IoMdCloseCircle
              style={{ color: "black", width: 20, height: 20 }}
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
              value={formData.name}
              name="name"
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 font-semibold text-sm pb-2">
                {errors.name}
              </p>
            )}
            <input
              type="number"
              className="form-input w-full appearance-none bg-white border border-gray-700 focus:border-gray-600 rounded-md text-sm sm:text-base px-4 py-2 sm:py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
              placeholder="Your Mobile Number"
              aria-label="Your Mobile Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 font-semibold text-sm pb-2">
                {errors.phone}
              </p>
            )}
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
            id={isBookModal ? "pop_up_booking_card" : "top_booking_card"}
            label="Request a Callback"
            bgColor="#22577a"
            color="white"
            extraClasses="w-full sm:w-[50%] lg:w-[35%] sm:self-center mt-3"
            type="submit"
            // isLoading={isLoading}
          />
        </form>
      )}
    </div>
  );
};

export default BookingCard;
