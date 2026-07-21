import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/site.js';
import { brandAssets, business } from '../data/brand.js';
import BrandMark from './BrandMark.jsx';

const policies = [
  ['Privacy Policy', '/privacy-policy'],
  ['Terms', '/terms'],
  ['Shipping Policy', '/shipping-policy'],
  ['Return Policy', '/return-policy'],
];

export default function Footer() {
  return (
    <footer className="printed-footer relative overflow-hidden border-t border-gold/20 bg-[#06130f] pt-16">
      <img
        className="absolute inset-x-0 top-0 h-full w-full object-cover opacity-22 mix-blend-screen"
        src={brandAssets.printedLandscape}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/72 via-[#06130f]/92 to-[#06130f]" />

      <div className="container-premium relative z-10 mb-12 grid gap-5 rounded-[8px] border border-gold/22 bg-night/70 p-5 shadow-luxury md:grid-cols-3 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Packed & Marketed By</p>
          <p className="mt-2 font-heading text-3xl font-bold text-white">{business.legalName}</p>
        </div>
        <div className="text-sm leading-7 text-white/68">
          {business.addressLines.map((line) => <p key={line}>{line}</p>)}
        </div>
        <div className="grid gap-2 text-sm text-white/72">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" />FSSAI Lic. No. {business.fssai}</span>
          <span>{business.bestBefore}</span>
        </div>
      </div>

      <div className="container-premium relative z-10 grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1.25fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Royal Gold Assam Tea by {business.legalName}. 100% natural taste, rich aroma, and a printed pack identity built around dark green, gold, and cream.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Explore</h3>
          <div className="grid gap-3 text-sm text-white/66">
            {navLinks.map((link) => (
              <Link key={link.href} className="transition hover:text-gold" to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Policies</h3>
          <div className="grid gap-3 text-sm text-white/66">
            {policies.map(([label, href]) => (
              <Link key={href} className="transition hover:text-gold" to={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-xl text-white">Contact</h3>
          <div className="grid gap-4 text-sm text-white/66">
            <span className="flex gap-3"><MapPin className="h-5 w-5 text-gold" />{business.addressLines.join(', ')}</span>
            <a className="flex gap-3 transition hover:text-gold" href="tel:+919664650240"><Phone className="h-5 w-5 text-gold" />{business.phone}</a>
            <a className="flex gap-3 transition hover:text-gold" href={`mailto:${business.email}`}><Mail className="h-5 w-5 text-gold" />{business.email}</a>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-gold/10 bg-night/45 py-5 text-center text-xs text-white/48">
        Copyright {new Date().getFullYear()} TeaNest. All rights reserved. {business.businessType}.
      </div>
    </footer>
  );
}
