import Navbar from "./_components/Navbar";
import FeaturesBlocks from "./_components/features-blocks";
import Hero from "./_components/hero";
import MainBlocks from "./_components/mainBlocks";
import Newsletter from "./_components/newsletter";

export default function Home() {
  return (
    <main className="grow">
      <Hero />
      <MainBlocks />

      <FeaturesBlocks />

      <Newsletter />
    </main>
  );
}
