import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Leaf, MapPin, PlayCircle } from 'lucide-react';
import Button from './Button.jsx';
import { brandAssets, business } from '../data/brand.js';

export default function Hero() {
  const videoRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection?.saveData;
    if (reducedMotion || saveData) return undefined;

    const start = () => setLoadVideo(true);
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(start, 450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    videoRef.current.load();
    videoRef.current.play().catch(() => undefined);
  }, [loadVideo]);

  return (
    <section className="hero-fresh relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#1b5f4d]/30 blur-3xl" />

      <div className="container-premium relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur">
            <Leaf className="h-4 w-4 text-gold" />
            Premium Assam Tea · Packed in Gujarat
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-[.98] text-white sm:text-6xl lg:text-[5.15rem]">
            Assam&apos;s bold character, <span className="text-gold">poured fresh.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
            TeaNest Royal Gold brings together selected Assam tea leaves, deep amber colour, a smooth malty body, and the refreshing aroma of a truly satisfying cup.
          </p>

          <blockquote className="mt-7 border-l-2 border-gold pl-5 font-heading text-xl italic leading-8 text-cream/90">
            “From Assam&apos;s gardens to your cup — full-bodied, fragrant, and made to awaken the senses.”
          </blockquote>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/products">Explore Royal Gold</Button>
            <Button to="/about" variant="secondary">
              <PlayCircle className="h-4 w-4" />
              Our Tea Story
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[.16em] text-white/58">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" />100% natural</span>
            <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-gold" />Selected Assam leaves</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />Bardoli, Gujarat</span>
          </div>
        </motion.div>

        <motion.div
          className="relative order-first mx-auto w-full max-w-[650px] justify-self-end lg:order-none"
          initial={{ opacity: 0, scale: 0.96, x: 22 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          <div className="hero-video-frame relative aspect-[4/5] max-h-[72vh] overflow-hidden rounded-[28px] border border-gold/25 bg-forest shadow-luxury sm:aspect-[5/4] lg:aspect-[4/5]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={brandAssets.brandedCup}
              aria-label="Real footage of freshly brewed tea being poured into a cup"
            >
              {loadVideo ? <source src={brandAssets.heroVideo} type="video/mp4" /> : null}
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-transparent to-night/16" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-night/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.2em] text-cream backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gold" />
              Real tea footage
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.28em] text-gold">The TeaNest Ritual</p>
              <p className="mt-2 max-w-sm font-heading text-2xl font-bold text-white sm:text-3xl">Warmth you can see. Character you can taste.</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gold/20 bg-night/88 px-5 py-4 shadow-luxury backdrop-blur-md sm:block">
            <p className="text-[10px] uppercase tracking-[.24em] text-gold">Signature blend</p>
            <p className="mt-1 font-heading text-xl font-bold">{business.productLine}</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.28em] text-white/45 xl:block">
        Scroll
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="mx-auto mt-2 h-5 w-5 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
