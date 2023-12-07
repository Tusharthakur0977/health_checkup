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

export default function Home() {
  const { isBookModal, setIsBookModal } = React.useContext(BookModalContext);

  return (
    <main className="flex flex-col justify-center items-center pb-10">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />
      <WhyChooseUS />
      <FAQ />
      <BookTestModal />
      <StickyButton
        label="Request a Callback"
        bgColor="#22577a"
        color="white"
        isSticky
        extraClasses="w-[90%]"
        onClick={() => setIsBookModal(!isBookModal)}
      />
    </main>
  );
}
