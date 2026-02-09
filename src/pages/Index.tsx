import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
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
      <MetricsSection />
      <ServicesSection />
      <ResultsSection />
      <PortfolioVideosSection />
      <CaseStudiesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
