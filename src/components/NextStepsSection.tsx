import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Play, DollarSign } from "lucide-react";

const cards = [
  {
    icon: MessageSquare,
    title: "Consultation Services",
    bullets: ["Define goals", "Discuss strategy"],
  },
  {
    icon: Play,
    title: "Demo Availability",
    bullets: ["Experience live solutions", "Interactive session"],
  },
  {
    icon: DollarSign,
    title: "Pricing Information",
    bullets: ["Tailored packages", "Transparent ROI model"],
  },
];

const NextStepsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-deep">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gv-neon font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-3">
            Next Steps
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground">
            Let's Get <span className="gradient-text">Started</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center group hover:border-gv-neon/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gv-mid/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gv-mid/30 transition-colors">
                <c.icon className="w-7 h-7 text-gv-neon" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">{c.title}</h3>
              <ul className="space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="text-primary-foreground/60 text-sm">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;
