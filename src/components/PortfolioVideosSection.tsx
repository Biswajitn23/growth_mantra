import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoFrame from './VideoFrame';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';

interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Campaign Performance',
    description: 'Growth metrics showcase',
    src: '/WhatsApp Video 2026-02-09 at 2.16.40 PM.mp4',
  },
  {
    id: '2',
    title: 'Influencer Reach',
    description: 'Creator collaboration results',
    src: '/WhatsApp Video 2026-02-09 at 2.16.43 PM.mp4',
  },
  {
    id: '3',
    title: 'Content Strategy',
    description: 'Performance analytics',
    src: '/WhatsApp Video 2026-02-09 at 2.16.44 PM (1).mp4',
  },
  {
    id: '4',
    title: 'Revenue Growth',
    description: 'Conversion metrics',
    src: '/WhatsApp Video 2026-02-09 at 2.16.44 PM.mp4',
  },
  {
    id: '5',
    title: 'Engagement Rise',
    description: 'Audience interaction data',
    src: '/WhatsApp Video 2026-02-09 at 2.17.07 PM (1).mp4',
  },
  {
    id: '6',
    title: 'Market Expansion',
    description: 'Reach growth analysis',
    src: '/WhatsApp Video 2026-02-09 at 2.17.07 PM.mp4',
  },
  {
    id: '7',
    title: 'Success Stories',
    description: 'Client testimonials',
    src: '/WhatsApp Video 2026-02-09 at 2.17.08 PM.mp4',
  },
];

export default function PortfolioVideosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section id="portfolio" ref={ref} className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-4">
            Campaign Gallery
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Our <span className="gold-text">Success Stories.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Real results from real campaigns. Explore our portfolio of successful industry transformations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            className="w-full"
            setApi={(carouselApi) => {
              setApi(carouselApi);
              if (carouselApi) {
                carouselApi.on('select', () => {
                  setActiveIndex(carouselApi.selectedScrollSnap());
                });
              }
            }}
          >
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id} className="basis-full">
                  <div className="relative rounded-3xl overflow-hidden gold-border gold-glow shadow-2xl">
                    <VideoFrame
                      src={video.src}
                      poster={video.poster}
                      className="aspect-video bg-card"
                      overlay={
                        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full gold-border bg-background/70 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-background/90 transition-all duration-300 group"
                          >
                            <Play size={40} className="text-primary ml-2 group-hover:scale-125 transition-transform" />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center mt-8 sm:mt-10"
                          >
                            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">{video.title}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">{video.description}</p>
                          </motion.div>
                        </div>
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
                      <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage:
                            'linear-gradient(hsl(42 76% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 76% 55%) 1px, transparent 1px)',
                          backgroundSize: '60px 60px',
                        }}
                      />
                    </VideoFrame>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2" />
            <CarouselNext className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2" />
          </Carousel>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden gap-3 justify-center mt-6 items-center">
            <button
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} className="text-primary" />
            </button>
            <div className="flex gap-2 items-center">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
              aria-label="Next video"
            >
              <ChevronRight size={20} className="text-primary" />
            </button>
          </div>

          {/* Desktop Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden sm:flex justify-center gap-2 mt-10"
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </motion.div>

          {/* Video Counter */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">{activeIndex + 1}</span> / <span className="font-semibold">{videos.length}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
