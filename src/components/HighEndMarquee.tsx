import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Example SVG icons (replace with your own)
const icons = [
  <svg key="icon1" width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>,
  <svg key="icon2" width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" /></svg>,
  <svg key="icon3" width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary"><polygon points="12,2 22,22 2,22" stroke="currentColor" strokeWidth="2" /></svg>
];

const texts = [
  'Growth',
  'AI',
  'Automation',
  'Creators',
  'Scale',
  'Revenue',
];

const items = [
  ...texts.map((t, i) => <span key={t} className="font-bold text-xl md:text-2xl font-sans tracking-tight text-white px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm shadow-lg glass-card">{t}</span>),
  ...icons,
];

function MarqueeRow({ items, direction = 'left', speed = 40 }) {
  const marqueeRef = useRef(null);
  const controls = useAnimation();
  const [paused, setPaused] = React.useState(false);

  // Calculate width for seamless loop
  useEffect(() => {
    if (!marqueeRef.current) return;
    const marqueeWidth = marqueeRef.current.scrollWidth;
    controls.start({
      x: direction === 'left' ? [0, -marqueeWidth] : [0, marqueeWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    });
  }, [controls, direction, speed]);

  // Pause on hover
  const handleMouseEnter = () => {
    setPaused(true);
    controls.stop();
  };
  const handleMouseLeave = () => {
    setPaused(false);
    if (!marqueeRef.current) return;
    const marqueeWidth = marqueeRef.current.scrollWidth;
    controls.start({
      x: direction === 'left' ? [0, -marqueeWidth] : [0, marqueeWidth],
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
    <div
      className="relative overflow-hidden w-full h-20 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient mask edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)'}} />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.8), transparent)'}} />
      {/* Marquee content */}
      <motion.div
        ref={marqueeRef}
        animate={controls}
        className="flex gap-12 items-center glass-card"
        style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '2rem',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {item}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, idx) => (
          <div key={idx + items.length} className="flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HighEndMarquee() {
  return (
    <div className="w-full overflow-hidden bg-background py-8 border-y border-border">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span
            key={idx}
            className="font-heading text-2xl md:text-4xl text-gold mx-8 inline-block"
          >
            We Build. We Market. We Scale.
          </span>
        ))}
      </div>
    </div>
  );
}
