import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/site.js';

const policies = [
  ['Privacy Policy', '/privacy-policy'],
  ['Terms', '/terms'],
  ['Shipping Policy', '/shipping-policy'],
  ['Return Policy', '/return-policy'],
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-[#06130f] pt-16">
      <div className="container-premium grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/45 bg-forest font-semibold text-gold">
              TN
            </span>
            <span className="font-heading text-3xl font-bold">TeaNest</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Premium Assam tea crafted for people who value natural leaves, rich aroma, and a quietly luxurious cup.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-night"
                href="https://example.com"
                aria-label="TeaNest social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
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
            <span className="flex gap-3"><MapPin className="h-5 w-5 text-gold" />Guwahati, Assam 781001</span>
            <a className="flex gap-3 transition hover:text-gold" href="tel:+919876543210"><Phone className="h-5 w-5 text-gold" />+91 98765 43210</a>
            <a className="flex gap-3 transition hover:text-gold" href="mailto:care@teanest.in"><Mail className="h-5 w-5 text-gold" />care@teanest.in</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-white/48">
        Copyright {new Date().getFullYear()} TeaNest. All rights reserved.
      </div>
    </footer>
  );
}
