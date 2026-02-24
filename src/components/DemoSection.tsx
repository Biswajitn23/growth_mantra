import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Film, Users } from "lucide-react";

const demos = [
  { icon: Play, title: "AI Video Demo", desc: "See how our AI systems create scroll-stopping content at scale." },
  { icon: Film, title: "UGC Ad Demo", desc: "Watch authentic creator-driven ads that drive real conversions." },
  { icon: Users, title: "Influencer Campaign Reel", desc: "Discover how curated creator partnerships amplify brand reach." },
];

const DemoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Experience Our Systems <span className="gradient-text">in Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {demos.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video bg-secondary relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gv-mid/20 to-gv-neon/10 group-hover:from-gv-mid/30 group-hover:to-gv-neon/20 transition-all" />
                <div className="relative w-16 h-16 rounded-full bg-gv-mid/20 flex items-center justify-center group-hover:bg-gv-mid/30 transition-colors">
                  <d.icon className="w-8 h-8 text-gv-mid" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="gradient-btn text-lg">
            Book Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
