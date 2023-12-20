"use client";

import React from "react";
import BookingCard from "./_components/BookingCard";
import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import BookTestModal from "./_components/Modals/BookTestModal";
import Plans from "./_components/Plans";
import StickyButton from "./_components/StickyButton";
import TopHeader from "./_components/TopHeader";
import WhyChooseUS from "./_components/WhyChooseUS";
import { BookModalContext } from "./_context/BookModalContext";
import StepsJourney from "./_components/StepsJourney";
import WhoWants from "./_components/WhoWants";
import Accreditation from "./_components/Accreditation";

export default function Home() {
  const { isBookModal, setIsBookModal } = React.useContext(BookModalContext);

  return (
    <main className="flex flex-col justify-center items-center pb-10 bg-[#f4ede5]">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />
      <WhoWants />
      <WhyChooseUS />
      <StepsJourney />
      <Accreditation />
      <FAQ />
      <BookTestModal />
      <StickyButton
        label="Request a Callback"
        bgColor="#ff9800"
        color="white"
        isSticky
        extraClasses="w-[90%] sm:hidden"
        onClick={() => setIsBookModal(!isBookModal)}
      />
    </main>
  );
}
