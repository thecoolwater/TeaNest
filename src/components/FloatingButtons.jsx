import { ArrowUp, Leaf, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { business } from '../data/brand.js';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        className="focus-ring grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-luxury transition hover:-translate-y-1"
        href={`https://wa.me/${business.whatsapp}`}
        aria-label="Chat on WhatsApp"
      >
        <Leaf className="h-5 w-5" />
      </a>
      <a
        className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-forest text-gold shadow-luxury transition hover:-translate-y-1"
        href="tel:+919664650240"
        aria-label="Call TeaNest"
      >
        <Phone className="h-5 w-5" />
      </a>
      {visible ? (
        <button
          className="focus-ring grid h-12 w-12 place-items-center rounded-full bg-gold text-night shadow-glow transition hover:-translate-y-1"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
