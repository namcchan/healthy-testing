import Image from "next/image";
import { HeroSection } from "@/features/home/HeroSection";
import { SuggestionSection } from "@/features/home/SuggestionSection";
import { GallerySection } from "@/features/home/GallerySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SuggestionSection />
      <GallerySection />
    </>
  );
}
