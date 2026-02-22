import { useRef } from 'react';
import InfiniteMarqueeServices from './InfiniteMarqueeServices';
import Autoplay from 'embla-carousel-autoplay';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Users, Bot, Target, Share2 } from 'lucide-react';
import MarqueeCards from './MarqueeCards';

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

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative z-10">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Growth, <span className="gold-text">Engineered.</span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden w-full p-0 m-0">
          <MarqueeCards />
        </div>
      </div>
    </section>
  );
}
