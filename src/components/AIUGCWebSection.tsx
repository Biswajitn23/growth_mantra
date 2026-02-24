import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Video, Monitor } from "lucide-react";

const boxes = [
  {
    icon: Brain,
    title: "AI Systems",
    desc: "Intelligent automation that learns, adapts, and scales your marketing beyond human limits.",
    cta: "Explore AI →",
  },
  {
    icon: Video,
    title: "UGC Engine",
    desc: "Creator-driven content that converts. Authentic stories from real voices that resonate.",
    cta: "See UGC →",
  },
  {
    icon: Monitor,
    title: "Web Experiences",
    desc: "Lightning-fast, beautifully designed digital platforms that turn visitors into loyal customers.",
    cta: "View Work →",
  },
];

const AIUGCWebSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-3 gap-8">
          {boxes.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl border border-border bg-card group hover:border-gv-mid/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gv-mid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gv-mid/20 transition-colors">
                  <b.icon className="w-7 h-7 text-gv-mid" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{b.desc}</p>
                <span className="text-gv-mid font-semibold text-sm group-hover:text-gv-light transition-colors cursor-pointer">
                  {b.cta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIUGCWebSection;
