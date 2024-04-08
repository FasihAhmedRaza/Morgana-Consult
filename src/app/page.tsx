'use client'
import HeroSection from "@/components/HeroSection";
import CardStackDemo from "@/components/Cardsection";
import NewSection from "@/components/Newsection";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-while (/0.02) bg-black text-white">

      <HeroSection />
      <NewSection />
      <UpcomingWebinars />
      <CardStackDemo />
      <Skills />
      <Reviews />


    </main>


  );
}
