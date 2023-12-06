import BookingCard from "./_components/BookingCard";
import FAQ from "./_components/FAQ";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import TopHeader from "./_components/TopHeader";
import WhyChooseUS from "./_components/WhyChooseUS";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />
      <WhyChooseUS />
      <FAQ />
    </main>
  );
}
