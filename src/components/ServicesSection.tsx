import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Users, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Video Creation",
    desc: "Cutting-edge AI tools to produce scroll-stopping video content at scale.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Curated creator partnerships that drive authentic engagement and conversions.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, conversion-optimized websites and digital experiences.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth Optimization",
    desc: "Data-driven SEO strategies that compound organic growth month over month.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 section-lavender">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gv-mid font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Key Services Overview
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            What We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card bg-card p-8 rounded-2xl border border-border group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gv-mid/20 transition-colors">
                <s.icon className="w-7 h-7 text-gv-mid" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="text-gv-mid font-semibold text-sm group-hover:text-gv-light transition-colors">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
