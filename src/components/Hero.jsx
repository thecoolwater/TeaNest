import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Leaf, PlayCircle } from 'lucide-react';
import Button from './Button.jsx';
import { brandAssets, business } from '../data/brand.js';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          className="h-full w-full scale-110 object-cover opacity-72"
          src={brandAssets.printedLandscape}
          alt="Dark green TeaNest landscape"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/84 to-night/30" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-night to-transparent" />
      <motion.div
        className="pointer-events-none absolute left-[12%] top-[24%] h-28 w-28 rounded-full bg-gold/18 blur-3xl"
        animate={{ x: [0, 34, 0], opacity: [0.35, 0.68, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-premium relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cream backdrop-blur">
            <Leaf className="h-4 w-4 text-gold" />
            Handpicked Assam Estate Leaves
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-[1.02] text-white md:text-7xl">
            Experience the Royal Taste of TeaNest
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            Royal Gold Assam Tea by {business.legalName}, crafted from carefully selected Assam leaves for rich taste and refreshing aroma.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/products">Shop Now</Button>
            <Button to="/about" variant="secondary">
              <PlayCircle className="h-4 w-4" />
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hidden justify-self-end lg:block"
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18 }}
        >
          <div className="intro-frame relative">
            <div className="absolute -inset-8 rounded-full bg-gold/20 blur-3xl" />
            <motion.div
              className="absolute -left-10 top-8 z-10 rounded-full border border-gold/25 bg-night/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {business.tagline}
            </motion.div>
            <img
              className="relative aspect-square w-[430px] object-contain drop-shadow-2xl"
              src={brandAssets.brandedCup}
              alt="TeaNest branded tea cup"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-xs uppercase tracking-[0.28em] text-white/64">
        Scroll
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="mx-auto mt-2 h-5 w-5 text-gold" />
        </motion.div>
      </div>
    </section>
  );
}
