import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Handshake, BarChart3, Layers } from "lucide-react";

const bullets = [
  { icon: Target, text: "Brand Positioning Strategy" },
  { icon: Handshake, text: "Creator Collaborations" },
  { icon: Layers, text: "Paid + Organic Integration" },
  { icon: BarChart3, text: "Performance Analytics" },
];

const SocialEngine = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-lavender">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-card border border-border flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full p-10">
                <div className="absolute inset-8 rounded-2xl bg-gv-mid/10 border border-gv-mid/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gv-mid/20 flex items-center justify-center mx-auto mb-4">
                      <TrendingIcon className="w-10 h-10 text-gv-mid" />
                    </div>
                    <p className="font-heading font-bold text-foreground text-xl">Growth Engine</p>
                    <p className="text-gv-mid text-sm mt-1">AI-Powered Analytics</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gv-neon/10 animate-float" />
                <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-gv-mid/15 animate-float" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl font-extrabold text-foreground mb-8">
              Social Media &{" "}
              <span className="gradient-text">UGC Engine</span>
            </h2>

            <div className="space-y-6">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <b.icon className="w-6 h-6 text-gv-mid" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{b.text}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="gradient-btn inline-block mt-10">
              Request Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrendingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default SocialEngine;
