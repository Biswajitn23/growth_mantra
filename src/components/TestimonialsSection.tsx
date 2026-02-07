import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Kapoor',
    role: 'Founder, ScaleUp Digital',
    quote: 'Growth Mantra transformed our acquisition strategy. We went from burning cash to a 4x ROAS in under 90 days.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Creator, 2M+ Followers',
    quote: 'Their influencer systems helped me monetize my audience like never before. Revenue grew 300% in 6 months.',
    stars: 5,
  },
  {
    name: 'Vikram Mehta',
    role: 'CEO, NexGen Commerce',
    quote: 'The AI automation they built saved us 40 hours a week and tripled our content output. Absolute game changers.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" ref={ref} className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-4">
            Client Voices
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Trusted by <span className="gold-text">Leaders.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary opacity-70" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
