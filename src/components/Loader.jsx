import { AnimatePresence, motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-night"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          aria-label="TeaNest loading"
        >
          <div className="text-center">
            <motion.div
              className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/35 bg-forest shadow-glow"
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <Leaf className="h-9 w-9 text-gold" />
            </motion.div>
            <p className="mt-5 font-heading text-3xl font-bold text-white">TeaNest</p>
            <p className="mt-2 text-xs uppercase tracking-[0.36em] text-gold">Premium Assam Tea</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
