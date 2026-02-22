import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoFrame from './VideoFrame';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
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
    title: 'Success Story 1',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871509/WhatsApp_Video_2026-02-09_at_2.16.44_PM_ty64it.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871509/WhatsApp_Video_2026-02-09_at_2.16.44_PM_ty64it.jpg',
  },
  {
    id: '2',
    title: 'Success Story 2',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871483/WhatsApp_Video_2026-02-09_at_2.16.44_PM_1_oqr2bu.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871483/WhatsApp_Video_2026-02-09_at_2.16.44_PM_1_oqr2bu.jpg',
  },
  {
    id: '3',
    title: 'Success Story 3',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871482/WhatsApp_Video_2026-02-09_at_2.17.08_PM_ie9lks.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871482/WhatsApp_Video_2026-02-09_at_2.17.08_PM_ie9lks.jpg',
  },
  {
    id: '4',
    title: 'Success Story 4',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871480/WhatsApp_Video_2026-02-09_at_2.16.43_PM_irm4zx.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871480/WhatsApp_Video_2026-02-09_at_2.16.43_PM_irm4zx.jpg',
  },
  {
    id: '5',
    title: 'Success Story 5',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871478/WhatsApp_Video_2026-02-09_at_2.17.07_PM_1_uapuug.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871478/WhatsApp_Video_2026-02-09_at_2.17.07_PM_1_uapuug.jpg',
  },
  {
    id: '6',
    title: 'Success Story 6',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871470/WhatsApp_Video_2026-02-09_at_2.17.07_PM_i1xy4h.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871470/WhatsApp_Video_2026-02-09_at_2.17.07_PM_i1xy4h.jpg',
  },
  {
    id: '7',
    title: 'Success Story 7',
    description: 'Client testimonial',
    src: 'https://res.cloudinary.com/dhobvmeds/video/upload/v1770871474/WhatsApp_Video_2026-02-09_at_2.16.40_PM_zerrlo.mp4',
    poster: 'https://res.cloudinary.com/dhobvmeds/video/upload/so_1/v1770871474/WhatsApp_Video_2026-02-09_at_2.16.40_PM_zerrlo.jpg',
  },
];

export default function PortfolioVideosSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section ref={sectionRef} id="portfolio" className="section-padding relative z-10">
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
            Enterprise-Level <span className="gold-text">Growth Systems</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Transforming brands through AI, automation, and scalable growth systems.
          </p>
        </motion.div>
        <Carousel setApi={setApi} className="w-full relative">
          <CarouselPrevious />
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="basis-full sm:basis-1/2 md:basis-1/3 px-3">
                <div className="relative rounded-3xl overflow-hidden gold-border gold-glow shadow-2xl">
                  <VideoFrame
                    src={video.src}
                    poster={video.poster}
                    className="aspect-[9/16] bg-card"
                    overlay={
                      <>
                        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full gold-border bg-background/70 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-background/90 transition-all duration-300 group"
                          >
                            <Play size={40} className="text-primary ml-2 group-hover:scale-125 transition-transform" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
                        <div
                          className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage:
                              'linear-gradient(hsl(42 76% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 76% 55%) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                          }}
                        />
                      </>
                    }
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-heading text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">{activeIndex + 1}</span> /{' '}
            <span className="font-semibold">{videos.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
