import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Star, X } from 'lucide-react';
import Button from './Button.jsx';
import { formatPrice } from '../utils/format.js';

export default function ProductModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} details`}
          onClick={onClose}
        >
          <motion.div
            className="grid w-full max-w-4xl overflow-hidden rounded-[8px] border border-gold/20 bg-night shadow-luxury md:grid-cols-2"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img className="h-full min-h-[320px] w-full object-cover" src={product.image} alt={product.name} />
            <div className="relative p-7 md:p-9">
              <button
                className="focus-ring absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-white transition hover:bg-gold hover:text-night"
                type="button"
                aria-label="Close product modal"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{product.category}</p>
              <h2 className="mt-4 font-heading text-4xl font-bold text-white">{product.name}</h2>
              <p className="mt-4 text-white/66">{product.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="rounded-full border border-gold/25 px-4 py-2 text-cream">{product.weight}</span>
                <span className="rounded-full border border-gold/25 px-4 py-2 text-cream">{product.stock}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 px-4 py-2 text-cream">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  {product.rating}
                </span>
              </div>
              <p className="mt-8 font-heading text-4xl font-bold text-gold">{formatPrice(product.price)}</p>
              <Button className="mt-8 w-full sm:w-auto">
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
