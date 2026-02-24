import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = ["Concept", "Design", "Development", "Testing", "Launch"];

const GrowthSystem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 section-deep overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gv-neon font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Our Growth System
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground">
            5-Step Revenue Acceleration
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-white/10 rounded-full hidden md:block">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gv-mid/30 border-2 border-gv-neon/50 flex items-center justify-center mx-auto mb-4 text-primary-foreground font-heading font-bold text-lg">
                  {i + 1}
                </div>
                <p className="text-primary-foreground font-heading font-semibold text-sm">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center text-primary-foreground/60 mt-12 text-lg max-w-xl mx-auto"
        >
          From initial concept to market launch — every phase is optimized for maximum ROI.
        </motion.p>
      </div>
    </section>
  );
};

export default GrowthSystem;
