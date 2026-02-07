import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import VideoFrame from './VideoFrame';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-8">
            AI-Powered Growth Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          Engineering
          <br />
          <span className="gold-text">Scalable Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We turn attention into revenue using AI-driven growth systems,
          influencer networks, and performance marketing that scales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-300 flex items-center gap-2"
          >
            Start Your Growth
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="px-8 py-4 rounded-lg gold-border text-primary font-heading font-semibold text-sm tracking-wide hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            <Play size={16} />
            Watch Demo
          </a>
        </motion.div>

        {/* Floating video frame */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 relative"
        >
          <div className="relative rounded-2xl overflow-hidden gold-border p-[1px] gold-glow">
            <VideoFrame
              src="https://res.cloudinary.com/dhobvmeds/video/upload/v1770439948/WhatsApp_Video_2026-02-06_at_8.15.30_PM_eecmnv.mp4"
              poster="https://res.cloudinary.com/dhobvmeds/video/upload/so_1,f_jpg,q_auto,w_640/v1770439948/WhatsApp_Video_2026-02-06_at_8.15.30_PM_eecmnv.jpg"
              className="bg-card rounded-2xl overflow-hidden aspect-video"
              overlay={
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gold-border bg-background/70 backdrop-blur-sm shadow-lg flex items-center justify-center mx-auto mb-4 hover:bg-background/90 transition-colors">
                    <Play size={32} className="text-primary ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">Watch our growth systems in action</p>
                </div>
              }
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              {/* Simulated dashboard grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(hsl(42 76% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 76% 55%) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </VideoFrame>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
