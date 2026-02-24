import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gv-neon/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Ready to{" "}
            <span className="gradient-text">Dominate Your Market?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join 25+ brands already scaling with GrowVanta's growth engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="gradient-btn text-lg">
              Schedule Consultation
            </a>
            <a href="#" className="inline-block font-semibold px-8 py-4 rounded-xl border-2 border-gv-mid/40 text-foreground hover:border-gv-mid hover:bg-secondary transition-all">
              Get Proposal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
