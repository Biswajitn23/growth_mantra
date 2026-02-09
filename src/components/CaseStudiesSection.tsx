import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Plywood Homee',
    description: 'Premium wood furniture and home decor marketplace with seamless online experience',
    category: 'E-Commerce',
    url: 'https://www.plywoodhomee.com/',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300&fit=crop',
  },
  {
    id: '2',
    title: 'Kainos Verse',
    description: 'Innovative digital platform showcasing cutting-edge technology and creative solutions',
    category: 'Tech Platform',
    url: 'http://kainosverse.com/',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    id: '3',
    title: 'Digital Growth Studio',
    description: 'Comprehensive digital marketing and brand building solutions',
    category: 'Digital Marketing',
    url: '#',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" ref={ref} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full gold-border text-primary mb-4">
            Case Studies
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Projects We've <span className="gold-text">Built.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Discover the innovative digital solutions we've crafted for our clients. From e-commerce platforms to digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden gold-border gold-glow transition-all duration-300 hover:shadow-2xl"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-card">
                  {project.image && (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40">
                    <span className="text-xs font-semibold text-primary">{project.category}</span>
                  </div>

                  {/* External Link Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-14 h-14 rounded-full gold-border bg-background/80 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <ExternalLink size={24} className="text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-heading text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Visit Button */}
                  <motion.div
                    className="flex items-center gap-2 text-primary font-semibold text-sm group-hover/link:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <span>Visit Project</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                  </motion.div>
                </div>

                {/* Golden Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      'linear-gradient(hsl(42 76% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(42 76% 55%) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }}
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-16 border-t border-primary/10"
        >
          <p className="text-center text-muted-foreground">
            Have an interesting project in mind?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Let's work together.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
