import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Bot, Target, Share2 } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Performance Marketing Infrastructure',
    description:
      'Data-driven paid acquisition systems engineered for predictable scaling, CAC optimization, and revenue growth across all major platforms.',
  },
  {
    icon: Users,
    title: 'Influencer & Creator Growth Systems',
    description:
      'Structured creator ecosystems, ambassador networks, and monetization frameworks that turn influence into scalable revenue engines.',
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation Infrastructure',
    description:
      'Custom-built AI agents, chatbots, workflow automation, CRM intelligence, and internal tools that eliminate manual operations and drive efficiency.',
  },
  {
    icon: Target,
    title: 'Website & App Engineering',
    description:
      'High-performance websites, SaaS platforms, dashboards, and mobile apps built for conversion, scalability, and product-led growth.',
  },
  {
    icon: BarChart3,
    title: 'Custom AI Models & Data Intelligence',
    description:
      'Predictive analytics, lead scoring models, recommendation engines, content AI systems, and decision-support dashboards for enterprise-grade intelligence.',
  },
  {
    icon: Target,
    title: 'Funnel Architecture & Revenue Engineering',
    description:
      'Full-funnel systems covering acquisition, conversion, retention, and monetization—engineered to maximize LTV and margin.',
  },
  {
    icon: Share2,
    title: 'Social Media & Community Scaling',
    description:
      'Platform-native growth systems that turn audience attention into owned communities and revenue channels at scale.',
  },
];

export default function MarqueeCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [rowWidth, setRowWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    if (rowRef.current) {
      setRowWidth(rowRef.current.scrollWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
      if (rowRef.current) setRowWidth(rowRef.current.scrollWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full p-0 m-0">
      <motion.div
        ref={rowRef}
        className="flex gap-8 w-max"
        animate={{ x: [0, -(rowWidth - containerWidth)] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {[...services, ...services].map((service, i, arr) => (
          <div
            key={service.title + '-' + i}
            className={
              `glass-card rounded-2xl p-8 group min-w-[320px] max-w-xs` +
              (i === 0 ? ' ml-0' : '') +
              (i === arr.length - 1 ? ' mr-0' : '')
            }
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              {React.createElement(service.icon, { className: 'w-6 h-6 text-primary' })}
            </div>
            <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
