import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/marquee.css";

interface Slide {
  id: number;
  title: string;
  description: string;
  cta: string;
  media?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "AI Systems",
    description: "Intelligent automation that learns, adapts, and scales your marketing beyond human limits.",
    cta: "Explore AI →",
    media: "https://media.giphy.com/media/aYp9pukBYKvPMKrmPw/giphy.gif",

  },
  {
    id: 2,
    title: "UGC Engine",
    description: "Creator-driven content that converts. Authentic stories from real voices that resonate.",
    cta: "See UGC →",
    media: "https://media.giphy.com/media/idsPDBUSBfu60KlULc/giphy.gif",

  },
  {
    id: 3,
    title: "Web Experiences",
    description: "Lightning-fast, beautifully designed digital platforms that turn visitors into loyal customers.",
    cta: "View Work →",
    media: "https://media.giphy.com/media/6nTBQEv1ToixZnXoss/giphy.gif",

  },
  {
    id: 4,
    title: "UGC Ads",
    description: "High-converting user-generated content designed to drive authentic engagement and scale revenue.",
    cta: "Explore Ads →",
    media: "https://media.giphy.com/media/E0nOjextqGK0WCSK2f/giphy.gif",

  },
  {
    id: 5,
    title: "AI Video Production",
    description: "Cinematic video creation at scale with AI precision, no agents or production delays required.",
    cta: "Watch Demos →",
    media: "https://media.giphy.com/media/62MMXnakROOG0Z4awm/giphy.gif",


  },
  {
    id: 6,
    title: "Influencer Marketing",
    description: "Curated creator partnerships that drive authentic engagement and measurable conversions.",
    cta: "Connect Creators →",
    media: "https://media.giphy.com/media/vEqTvEdZf1Q89ZJSJa/giphy.gif",

  },
  {
    id: 7,
    title: "Web & App Development",
    description: "High-performance, conversion-optimized digital solutions that scale with your ambitions.",
    cta: "Build Together →",
    media: "https://media.giphy.com/media/aRlPYAKW5xP4MZtQWN/giphy.gif",


  },
  {
    id: 8,
    title: "Social Media Marketing",
    description: "Strategic social strategies that build communities and drive sustainable organic growth.",
    cta: "Grow Social →",
    media: "https://media.giphy.com/media/4VdCUpvBp37ny0205W/giphy.gif",

  },
  {
    id: 9,
    title: "Performance Marketing / Paid Ads",
    description: "Data-driven paid campaigns optimized for ROI, scale, and measurable business impact.",
    cta: "Maximize ROI →",
    media: "https://media.giphy.com/media/pPefhaMoJYPsSwVdCp/giphy.gif",

  },
];

const WhatWeDoSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate slides for seamless infinite loop
  const duplicatedSlides = [...slides, ...slides];

  return (
    <section id="services" className="py-24 section-deep overflow-hidden" ref={sectionRef}>

      <div className="mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-gv-light font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Our Expertise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            What We <span className="gradient-text">Do</span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Marquee Track */}
          <div className="marquee-container overflow-hidden w-full">
            <div
              ref={containerRef}
              className={`marquee-track flex gap-8 md:gap-6 lg:gap-8 ${isPaused ? "marquee-paused" : "marquee-scrolling"
                }`}
              style={{
                width: `${duplicatedSlides.length * (280 + 32)}px`, // card width + gap
              }}
            >
              {duplicatedSlides.map((slide, index) => (
                <motion.div
                  key={`${slide.id}-${Math.floor(index / slides.length)}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: (index % slides.length) * 0.05 }}
                  className="marquee-slide flex-shrink-0 w-72 h-96"
                >
                  <div className="marquee-card group h-full">
                    {/* Card Content */}
                    <div className="relative h-full p-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 via-white/2 to-transparent">
                      {/* Media/Image - Display at top if available */}
                      {slide.media && (
                        <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                          <img
                            src={slide.media}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />

                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                        </div>
                      )}

                      {/* Text Content */}
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        {/* Title */}
                        <div>
                          <h3 className="font-heading text-sm lg:text-base font-bold text-white leading-tight">
                            {slide.title}
                          </h3>

                          {/* Description - Hidden if media exists */}
                          {!slide.media && (
                            <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mt-4">
                              {slide.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fade Gradient Overlays */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-section-deep to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-section-deep to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Pause Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: isPaused ? 1 : 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mt-8 text-center text-white/50 text-sm pointer-events-none"
        >
          {isPaused && "Paused - move mouse away to resume"}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
