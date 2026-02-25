import { motion, useInView } from "framer-motion";

import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Campaigns" },
  { value: 10, suffix: "M+", label: "Reach" },
  { value: 4, suffix: "X", label: "Avg ROAS" },
  { value: 25, suffix: "+", label: "Brand Partners" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="stat-counter gradient-text">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">

      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
              We Don't Do Marketing.{" "}
              <span className="gradient-text">We Build Growth Systems.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At GrowVanta, we combine <strong className="text-foreground">AI-powered systems</strong>, a curated{" "}
              <strong className="text-foreground">influencer network</strong>, and{" "}
              <strong className="text-foreground">data-driven execution</strong> to create unstoppable growth
              engines for ambitious brands.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every strategy is built on performance data, every campaign is optimized in real-time,
              and every partnership is hand-picked for maximum impact.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedCounter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground font-medium mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
