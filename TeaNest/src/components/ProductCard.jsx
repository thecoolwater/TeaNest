import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button.jsx';
import { formatPrice } from '../utils/format.js';

export default function ProductCard({ product, onQuickView, wishlist, onWishlist }) {
  const wished = wishlist.includes(product.id);

  return (
    <motion.article
      className="group overflow-hidden rounded-[8px] border border-gold/18 bg-forest/62 shadow-luxury"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-gold/15">
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <button
          className={`focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur transition ${
            wished ? 'bg-gold text-night' : 'bg-night/70 text-white hover:text-gold'
          }`}
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={() => onWishlist(product.id)}
        >
          <Heart className="h-4 w-4" fill={wished ? 'currentColor' : 'none'} />
        </button>
        <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-night/72 px-3 py-1 text-xs font-semibold text-cream backdrop-blur">
          {product.stock}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{product.category}</span>
          <span className="flex items-center gap-1 text-sm text-cream">
            <Star className="h-4 w-4 fill-gold text-gold" />
            {product.rating}
          </span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">{product.name}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/64">{product.description}</p>
        <div className="mt-5 flex items-center justify-between border-t border-gold/12 pt-5">
          <div>
            <p className="text-xs text-white/48">{product.weight}</p>
            <p className="font-heading text-2xl font-bold text-gold">{formatPrice(product.price)}</p>
          </div>
          <button
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-cream transition hover:text-gold"
            type="button"
            onClick={() => onQuickView(product)}
          >
            <Eye className="h-4 w-4" />
            Quick View
          </button>
        </div>
        <Button className="mt-5 w-full" onClick={() => onQuickView(product)}>
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </motion.article>
  );
}
