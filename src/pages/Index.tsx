import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import SocialEngine from "@/components/SocialEngine";
import WhatWeDeliverSection from "@/components/WhatWeDeliverSection";
import ProjectsSection from "@/components/ProjectsSection";
import AnimatedTextStrip from "@/components/AnimatedTextStrip";
import DemoSection from "@/components/DemoSection";
import GrowthSystem from "@/components/GrowthSystem";
import FinalCTA from "@/components/FinalCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <SocialEngine />
      <WhatWeDeliverSection />
      <ProjectsSection />
      <AnimatedTextStrip />
      <DemoSection />
      <GrowthSystem />
      <FinalCTA />
      <FooterSection />
    </main>
  );
};

export default Index;
