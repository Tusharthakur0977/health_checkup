import BookingCard from "./_components/BookingCard";
import Hero from "./_components/Hero";
import Plans from "./_components/Plans";
import TopHeader from "./_components/TopHeader";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <TopHeader />
      <Hero />
      <BookingCard />
      <Plans />
    </main>
  );
}
