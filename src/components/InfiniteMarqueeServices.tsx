import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const services = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Performance Marketing Infrastructure',
    description: 'Data-driven paid acquisition systems engineered for predictable scaling, CAC optimization, and revenue growth across all major platforms.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Influencer & Creator Growth Systems',
    description: 'Structured creator ecosystems, ambassador networks, and monetization frameworks that turn influence into scalable revenue engines.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><polygon points="12,2 22,22 2,22" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'AI Agents & Automation Infrastructure',
    description: 'Custom-built AI agents, chatbots, workflow automation, CRM intelligence, and internal tools that eliminate manual operations and drive efficiency.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Website & App Engineering',
    description: 'High-performance websites, SaaS platforms, dashboards, and mobile apps built for conversion, scalability, and product-led growth.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Custom AI Models & Data Intelligence',
    description: 'Predictive analytics, lead scoring models, recommendation engines, content AI systems, and decision-support dashboards for enterprise-grade intelligence.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Funnel Architecture & Revenue Engineering',
    description: 'Full-funnel systems covering acquisition, conversion, retention, and monetization—engineered to maximize LTV and margin.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><polygon points="12,2 22,22 2,22" stroke="currentColor" strokeWidth="2" /></svg>,
    title: 'Social Media & Community Scaling',
    description: 'Platform-native growth systems that turn audience attention into owned communities and revenue channels at scale.',
  },
];

function InfiniteMarqueeServices({ speed = 60 }) {
  const marqueeRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!marqueeRef.current) return;
    const marqueeWidth = marqueeRef.current.scrollWidth;
    controls.start({
      x: [0, -marqueeWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    });
  }, [controls, speed]);

  // Pause on hover
  const handleMouseEnter = () => {
    controls.stop();
  };
  const handleMouseLeave = () => {
    if (!marqueeRef.current) return;
    const marqueeWidth = marqueeRef.current.scrollWidth;
    controls.start({
      x: [0, -marqueeWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    });
  };

  return (
    <div className="overflow-hidden py-8 border-y border-gray-200 bg-white">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span
            key={idx}
            className="font-heading text-2xl md:text-4xl text-black mx-8 inline-block"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            GrowVanta Media
          </span>
        ))}
      </div>
    </div>
  );
}

export default InfiniteMarqueeServices;
