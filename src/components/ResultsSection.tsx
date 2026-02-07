import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoFrame from './VideoFrame';

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="results" ref={ref} className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-4">
            Proof of Performance
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Growth You Can <span className="gold-text">Measure.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden gold-border gold-glow"
        >
          <VideoFrame
            src="https://res.cloudinary.com/dhobvmeds/video/upload/v1770439912/WhatsApp_Video_2026-02-06_at_8.15.31_PM_npy2vr.mp4"
            poster="https://res.cloudinary.com/dhobvmeds/video/upload/so_1,f_jpg,q_auto,w_640/v1770439912/WhatsApp_Video_2026-02-06_at_8.15.31_PM_npy2vr.jpg"
            className="aspect-video bg-card"
            overlay={
              <div className="text-center">
                <div className="w-24 h-24 rounded-full gold-border bg-background/70 backdrop-blur-sm shadow-lg flex items-center justify-center mx-auto mb-6 hover:bg-background/90 transition-colors group">
                  <Play size={40} className="text-primary ml-1.5 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Campaign Results Reel</h3>
                <p className="text-sm text-muted-foreground">Before/after metrics • Campaign visuals • Creator reach growth</p>
              </div>
            }
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(42 76% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 76% 55%) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </VideoFrame>
        </motion.div>
      </div>
    </section>
  );
}
