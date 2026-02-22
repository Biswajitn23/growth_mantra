import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import GrowVantaMarquee from '@/components/GrowVantaMarquee';
import InfiniteMarqueeServices from '@/components/InfiniteMarqueeServices';
import HighEndMarquee from '@/components/HighEndMarquee';
import HeroSection from '@/components/HeroSection';
import MetricsSection from '@/components/MetricsSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import PortfolioVideosSection from '@/components/PortfolioVideosSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import BrandsSection from '@/components/BrandsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Scene3D = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-background" />}>
        <Scene3D />
      </Suspense>
      <Navbar />
      <HeroSection />
      <div className="my-16">
        <HighEndMarquee />
      </div>
      <ServicesSection />
      <div className="my-16">
        <InfiniteMarqueeServices />
      </div>
      <ResultsSection />
      <PortfolioVideosSection />
      <CaseStudiesSection />
      <BrandsSection />
      <TestimonialsSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
