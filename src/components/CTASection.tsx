import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');

  return (
    <section id="contact" ref={ref} className="section-padding relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to Grow Like a
            <br />
            <span className="gold-text">Market Leader?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join the founders and creators who trust Growth Mantra to scale their revenue with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-body text-sm"
            />
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
              Build My Growth
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
