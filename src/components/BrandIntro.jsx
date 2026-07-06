import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { brandAssets, business } from '../data/brand.js';
import AnimatedSection from './AnimatedSection.jsx';

export default function BrandIntro() {
  return (
    <AnimatedSection className="container-premium py-20">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="intro-video-shell relative overflow-hidden rounded-[8px] border border-gold/25 bg-night shadow-luxury">
          <img
            className="aspect-video w-full object-cover"
            src={brandAssets.introVideo}
            alt="TeaNest Royal Gold intro in lightweight WebP format"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/58 via-transparent to-transparent" />
          <motion.div
            className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-night/76 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur"
            animate={{ opacity: [0.78, 1, 0.78] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Play className="h-4 w-4 text-gold" />
            WebP Intro
          </motion.div>
          <motion.span
            className="absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-gold text-night shadow-glow"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <Sparkles className="h-6 w-6" />
          </motion.span>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">Brand Intro</p>
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            A fast-loading TeaNest film look without the weight of video.
          </h2>
          <p className="mt-6 leading-8 text-white/68">
            This intro uses an optimized WebP visual, animated steam accents, and the printed Royal Gold language from
            your packaging so the first screen feels premium while staying lightweight.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <span className="rounded-[8px] border border-gold/15 bg-forest/55 p-4">{business.productLine}</span>
            <span className="rounded-[8px] border border-gold/15 bg-forest/55 p-4">{business.tagline}</span>
            <span className="rounded-[8px] border border-gold/15 bg-forest/55 p-4">{business.ingredients}</span>
            <span className="rounded-[8px] border border-gold/15 bg-forest/55 p-4">FSSAI {business.fssai}</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
