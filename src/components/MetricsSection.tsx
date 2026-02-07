import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: 300, suffix: '%', label: 'Avg Growth', prefix: '' },
  { icon: Users, value: 5, suffix: 'M+', label: 'Monthly Reach', prefix: '' },
  { icon: Zap, value: 120, suffix: '+', label: 'Creators Scaled', prefix: '' },
  { icon: DollarSign, value: 10, suffix: 'Cr+', label: 'Revenue Influenced', prefix: '₹' },
];

function AnimatedCounter({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{prefix}{count}{suffix}</span>;
}

export default function MetricsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center group cursor-default"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="font-heading text-3xl md:text-4xl font-bold gold-text mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
