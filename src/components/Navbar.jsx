import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/site.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-gold/15 bg-night/92 shadow-luxury backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-premium flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/45 bg-forest text-gold">
            TN
          </span>
          <span>
            <span className="block font-heading text-2xl font-bold leading-none text-white">TeaNest</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold">Assam Estate Tea</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-full text-sm font-medium transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-white/78'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/products"
            className="focus-ring btn-ripple inline-flex items-center gap-2 rounded-full border border-gold/45 px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-night"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop
          </Link>
        </div>

        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-gold/35 bg-white/5 text-white lg:hidden"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          className="container-premium pb-5 lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="glass-panel rounded-[8px] p-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-[8px] px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-gold text-night' : 'text-white/82 hover:bg-white/8'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
