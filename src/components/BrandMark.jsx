import { Link } from 'react-router-dom';

export default function BrandMark({ compact = false, onClick }) {
  return (
    <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-[8px]" onClick={onClick}>
      <span className="brand-seal grid h-12 w-12 place-items-center rounded-full border border-gold/55 bg-night text-gold shadow-glow" aria-hidden="true">
        <svg className="h-9 w-9" viewBox="0 0 64 64" fill="none">
          <path d="M17 31h29v4c0 10-6 16-14.5 16S17 45 17 35v-4Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M46 34h3.5a6 6 0 0 1 0 12H45" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M32 31V14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M32 20c-6-1-9-5-9-11 6 1 9 5 9 11Z" fill="currentColor" />
          <path d="M32 24c6-1 10-5 10-11-6 1-10 5-10 11Z" fill="currentColor" />
          <path d="M11 48c10 10 31 11 42 0M14 53c10 8 26 9 36 1" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
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
