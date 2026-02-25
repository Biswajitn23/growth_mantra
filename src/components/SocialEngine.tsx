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
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-3xl"
              >
                <source src="/Growth Engine Video.mp4" type="video/mp4" />

              </video>
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

export default SocialEngine;
