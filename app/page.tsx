import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import MainContent from "@/components/content/MainContent";
import ImageSlider from "@/components/slider/ImageSlider";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <ImageSlider />
      <Features />
      <MainContent />
      <Faq />
    </main>
  );
}