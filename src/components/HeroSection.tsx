import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Rising Particle System (Firefly Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 10 + 2;
          const duration = 7 + Math.random() * 4; // 7s to 11s
          const delay = Math.random() * 11;
          const startX = Math.random() * 100;
          const endX = startX + (Math.random() * 20 - 10); // Slight horizontal drift

          return (
            <motion.div
              key={`firefly-${i}`}
              className="absolute"
              initial={{
                x: `${startX}vw`,
                y: "110vh",
                opacity: 0
              }}
              animate={{
                x: `${endX}vw`,
                y: "-20vh",
                opacity: [0, 1, 1, 0] // Fade in, hold, fade out
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
              }}
              style={{ width: size, height: size }}
            >
              <motion.div
                className="w-full h-full rounded-full"
                style={{
                  background: "radial-gradient(hsl(0, 0%, 100%), hsla(265, 100%, 95%, 0.8) 10%, hsla(265, 100%, 90%, 0) 60%)",
                  mixBlendMode: "screen",
                }}
                animate={{
                  scale: [0.4, 2.2, 0.4],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/logo.svg"
            alt="GrowVanta Media"
            className="h-32 md:h-48 w-auto object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight mb-6"
        >
          Scale Brands.{" "}
          <span className="gradient-text">Dominate Markets.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto font-body"
        >
          The 360° Growth Engine for Ambitious Brands
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="gradient-btn text-lg animate-pulse-glow">
            🔥 Get Growth Proposal
          </a>
          <a href="#services" className="outline-btn text-lg">
            ▶ Explore Services
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
