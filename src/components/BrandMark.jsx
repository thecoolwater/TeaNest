import { Link } from 'react-router-dom';

export default function BrandMark({ compact = false, onClick }) {
  return (
    <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-[8px]" onClick={onClick}>
      <span className="brand-seal grid h-12 w-12 place-items-center rounded-full border border-gold/55 bg-night text-gold shadow-glow">
        TN
      </span>
      <span>
        <span className={`${compact ? 'text-2xl' : 'text-3xl'} block font-heading font-bold leading-none`}>
          <span className="text-white">Tea</span><span className="text-gold">Nest</span>
        </span>
        <span className="block text-[10px] uppercase tracking-[0.28em] text-cream/85">Test the Real Tea</span>
      </span>
    </Link>
  );
}
