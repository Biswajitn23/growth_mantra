import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, TrendingUp, Bot, BarChart3, Award } from "lucide-react";

const deliverables = [
  { icon: Rocket, title: "High-Conversion Campaigns" },
  { icon: TrendingUp, title: "Revenue-Focused Funnels" },
  { icon: Bot, title: "AI-Powered Automation" },
  { icon: BarChart3, title: "Data-Driven Scaling Systems" },
  { icon: Award, title: "Brand Authority Positioning" },
];

const WhatWeDeliverSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-lavender">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            What We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card bg-card p-8 rounded-2xl border border-border text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 mx-auto group-hover:bg-gv-mid/20 transition-colors">
                <d.icon className="w-7 h-7 text-gv-mid" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground leading-snug">{d.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
