import { MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactCards } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <section className="bg-forest-radial pb-16 pt-36">
        <div className="container-premium">
          <SectionHeader eyebrow="Contact" title="Let us help you choose your next cup." text="For orders, wholesale, hospitality supply, gifting, or product questions, TeaNest is ready to assist." />
        </div>
      </section>

      <section className="container-premium grid gap-8 py-20 lg:grid-cols-[1fr_.85fr]">
        <AnimatedSection className="rounded-[8px] border border-gold/15 bg-forest/58 p-6 shadow-luxury md:p-8">
          <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-cream">Name<input className="focus-ring rounded-[8px] border border-gold/20 bg-night/70 px-4 py-3 text-white" required /></label>
              <label className="grid gap-2 text-sm font-semibold text-cream">Email<input className="focus-ring rounded-[8px] border border-gold/20 bg-night/70 px-4 py-3 text-white" type="email" required /></label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-cream">Phone<input className="focus-ring rounded-[8px] border border-gold/20 bg-night/70 px-4 py-3 text-white" type="tel" /></label>
            <label className="grid gap-2 text-sm font-semibold text-cream">Message<textarea className="focus-ring min-h-36 rounded-[8px] border border-gold/20 bg-night/70 px-4 py-3 text-white" required /></label>
            <Button className="w-full sm:w-auto"><Send className="h-4 w-4" />Send Message</Button>
          </form>
        </AnimatedSection>

        <div className="grid gap-5">
          {contactCards.map((card) => (
            <AnimatedSection key={card.label} className="rounded-[8px] border border-gold/15 bg-forest/55 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{card.label}</p>
              <p className="mt-3 text-white/74">{card.value}</p>
            </AnimatedSection>
          ))}
          <Button href="https://wa.me/919876543210" className="w-full"><MessageCircle className="h-4 w-4" />WhatsApp TeaNest</Button>
        </div>
      </section>

      <section className="container-premium pb-24">
        <AnimatedSection className="grid min-h-[360px] place-items-center rounded-[8px] border border-gold/15 bg-forest-radial bg-forest text-center shadow-luxury">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Map</p>
            <h2 className="mt-3 font-heading text-4xl font-bold">Guwahati, Assam</h2>
            <p className="mt-4 max-w-xl text-white/62">Google Map placeholder for TeaNest House, Pan Bazaar, Guwahati. Replace with an embedded map when the official listing is ready.</p>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
