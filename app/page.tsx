import BookingCard from "./_components/BookingCard";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import TopHeader from "./_components/TopHeader";
import FeaturesBlocks from "./_components/features-blocks";
import MainBlocks from "./_components/mainBlocks";
import Newsletter from "./_components/newsletter";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />

      <Newsletter />
    </main>
  );
}
