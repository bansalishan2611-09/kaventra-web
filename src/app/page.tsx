import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhatWeBuildSection from "@/components/home/WhatWeBuildSection";
import EcosystemSection from "@/components/home/EcosystemSection";
import VenturesSection from "@/components/home/VenturesSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import DirectorSection from "@/components/home/DirectorSection";
import ValuesSection from "@/components/home/ValuesSection";
import FutureAndUpdatesSection from "@/components/home/FutureAndUpdatesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeBuildSection />
      <EcosystemSection />
      <VenturesSection />
      <PhilosophySection />
      <DirectorSection />
      <ValuesSection />
      <FutureAndUpdatesSection />
    </>
  );
}
