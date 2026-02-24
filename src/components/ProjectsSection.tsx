import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "AI Campaign", tag: "AI", color: "bg-gv-mid" },
  { title: "UGC Campaign", tag: "UGC", color: "bg-gv-neon" },
  { title: "Influencer Campaign", tag: "Influencer", color: "bg-gv-deep" },
  { title: "Web Project", tag: "Web", color: "bg-gv-mid" },
  { title: "App Project", tag: "App", color: "bg-gv-neon" },
  { title: "Social Media Growth Case Study", tag: "Social", color: "bg-gv-deep" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
            Our <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card bg-card rounded-2xl overflow-hidden border border-border group cursor-pointer"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gv-mid/20 to-gv-neon/10 group-hover:from-gv-mid/30 group-hover:to-gv-neon/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gv-mid/20 flex items-center justify-center">
                    <span className="text-gv-mid font-heading font-bold text-2xl">{p.title[0]}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-accent-foreground ${p.color}/20 mb-3`}>
                  {p.tag}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <button className="text-gv-mid font-semibold text-sm hover:text-gv-light transition-colors">
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
