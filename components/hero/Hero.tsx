import { Heart } from "lucide-react";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section className="relative mt-12 flex items-center justify-center bg-[#151820]">
      <div className="absolute inset-0 bg-[url('/images/ai-girlfriend-banner.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-row w-fit mx-auto items-center mb-6 gap-10">
          <HeroTitle />
          <Heart className="hidden md:block w-12 h-12 text-pink-500 animate-pulse" />
        </div>
        <HeroDescription />
        <HeroButton />
      </div>
    </section>
  );
}