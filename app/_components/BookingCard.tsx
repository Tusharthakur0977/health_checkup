"use client";

import Image from "next/image";
import { BookModalContext } from "../_context/BookModalContext";
import React from "react";

const BookingCard = () => {
  const { isBookModal, setIsBookModal } = React.useContext(BookModalContext);

  return (
    <div className="w-[95%] border border-[#38a3a5] bg-[#22577a] rounded-md shadow-md flex flex-col px-4 py-6  justify-center sm:my-3">
      <p className="font-bold text-center text-white text-lg sm:text-xl mb-5">
        Book your Test
      </p>
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
      <div className="flex  items-center sm:self-center mb-4 mt-1 sm:mt-3">
        <input
          id="opt-in-for-whatsapp"
          type="checkbox"
          value=""
          className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
        <Image src="/images/whatsapp.png" alt="" width={20} height={20} />
        <label
          htmlFor="opt-in-for-whatsapp"
          className="ms-1 text-sm font-medium text-white"
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
    // <div className="relative :w-[80%] py-3 sm:max-w-xl sm:mx-auto">
    //   <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    //   <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    //     <div className="max-w-md mx-auto">
    //       <div>
    //         <h1 className="text-2xl font-semibold">
    //           Login Form with Floating Labels
    //         </h1>
    //       </div>
    //       <div className="divide-y divide-gray-200">
    //         <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
    //           <div className="relative">
    //             <input
    //               autoComplete="off"
    //               id="email"
    //               name="email"
    //               type="text"
    //               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
    //               placeholder="Email address"
    //             />
    //             <label
    //               htmlFor="email"
    //               className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
    //             >
    //               Email Address
    //             </label>
    //           </div>
    //           <div className="relative">
    //             <input
    //               autoComplete="off"
    //               id="password"
    //               name="password"
    //               type="password"
    //               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
    //               placeholder="Password"
    //             />
    //             <label
    //               htmlFor="password"
    //               className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
    //             >
    //               Password
    //             </label>
    //           </div>
    //           <div className="relative">
    //             <button className="bg-blue-500 text-white rounded-md px-2 py-1">
    //               Submit
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BookingCard;
