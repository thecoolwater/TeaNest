import { Mail } from 'lucide-react';
import Button from './Button.jsx';
import AnimatedSection from './AnimatedSection.jsx';

export default function Newsletter() {
  return (
    <AnimatedSection className="container-premium py-20">
      <div className="overflow-hidden rounded-[8px] border border-gold/20 bg-forest-radial bg-forest p-8 shadow-luxury md:p-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">TeaNest Journal</p>
            <h2 className="mt-3 font-heading text-4xl font-bold md:text-5xl">Receive private tea notes and early harvest drops.</h2>
            <p className="mt-4 max-w-2xl text-white/66">
              Join our list for brewing guides, seasonal Assam lots, and limited edition premium tea releases.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
              <input
                id="newsletter-email"
                className="focus-ring h-14 w-full rounded-full border border-gold/25 bg-night/65 pl-12 pr-4 text-sm text-white placeholder:text-white/40"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
