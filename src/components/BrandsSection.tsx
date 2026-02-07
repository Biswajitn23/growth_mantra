import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brands = [
  'Meta', 'Google', 'Shopify', 'HubSpot', 'Stripe', 'Notion', 'Figma', 'Slack',
];

export default function BrandsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Trusted Technology Partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {brands.map((brand) => (
            <div
              key={brand}
              className="font-heading text-lg md:text-xl font-semibold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-500 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
