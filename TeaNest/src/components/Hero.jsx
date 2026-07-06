import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Leaf, PlayCircle } from 'lucide-react';
import Button from './Button.jsx';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          className="h-full w-full scale-110 object-cover"
          src="https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=1800&q=85"
          alt="Assam tea plantation"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/78 to-night/24" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-night to-transparent" />

      <div className="container-premium relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cream backdrop-blur">
            <Leaf className="h-4 w-4 text-gold" />
            Handpicked Assam Estate Leaves
          </div>
          <h1 className="text-balance font-heading text-5xl font-bold leading-[1.02] text-white md:text-7xl">
            Experience the Royal Taste of Assam
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            Premium Assam Tea Leaves sourced directly from carefully selected gardens.
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
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gold/20 blur-3xl" />
            <img
              className="relative aspect-square w-[430px] rounded-full border border-gold/25 object-cover shadow-luxury"
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
              alt="Steaming cup of premium tea"
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
