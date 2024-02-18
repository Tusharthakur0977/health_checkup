"use client";

import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Accreditation from "./_components/Accreditation";
import BookingCard from "./_components/BookingCard";
import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import BookTestModal from "./_components/Modals/BookTestModal";
import Plans from "./_components/Plans";
import StepsJourney from "./_components/StepsJourney";
import StickyButton from "./_components/StickyButton";
import TopHeader from "./_components/TopHeader";
import WhoWants from "./_components/WhoWants";
import { BookModalContext } from "./_context/BookModalContext";

const paramNames = [
  "campaignid",
  "adgroupid",
  "targetid",
  "matchtype",
  "network",
  "device",
  "gclid",
  "creative",
  "keyword",
  "placement",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
];

export default function Home() {
  const { isBookModal, setIsBookModal, setParameters } =
    useContext(BookModalContext);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = paramNames.reduce(
      (acc: Record<string, string>, paramName) => {
        const paramValue = searchParams.get(paramName);
        if (paramValue) acc[paramName] = paramValue;
        return acc;
      },
      {}
    );

    setParameters(params);
  }, [searchParams]);

  return (
    <main className="flex flex-col justify-center items-center pb-10 bg-[#f1ede8]">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />
      <WhoWants />
      <StepsJourney />
      <Accreditation />
      <FAQ />
      <BookTestModal />
      <StickyButton
        id="sticky_request_call_back"
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
