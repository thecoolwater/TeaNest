import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import Button from '../components/Button.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import Hero from '../components/Hero.jsx';
import Newsletter from '../components/Newsletter.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { faqs, gallery, processSteps, testimonials, whyChoose } from '../data/site.js';
import { products } from '../data/products.js';

export default function Home() {
  const [modalProduct, setModalProduct] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));
  };

  return (
    <>
      <Hero />

      <AnimatedSection className="container-premium grid gap-10 py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">Our Story</p>
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">TeaNest brings the quiet grandeur of Assam to your table.</h2>
          <p className="mt-6 leading-8 text-white/68">
            TeaNest was created for tea drinkers who want purity, presence, and polish in every cup. Our leaves are
            selected for natural character, rich aroma, balanced strength, and a fresh garden-to-pack experience.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Premium Assam Tea', 'Natural Tea', 'Rich Aroma', 'Handpicked Leaves'].map((item) => (
              <div key={item} className="rounded-[8px] border border-gold/15 bg-forest/55 p-4 text-sm font-semibold text-cream">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="h-72 w-full rounded-[8px] object-cover shadow-luxury" src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=900&q=80" alt="Tea estate harvest" loading="lazy" />
          <img className="mt-12 h-72 w-full rounded-[8px] object-cover shadow-luxury" src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80" alt="Premium tea leaves" loading="lazy" />
        </div>
      </AnimatedSection>

      <section className="bg-forest-radial py-24">
        <div className="container-premium">
          <SectionHeader eyebrow="Why Choose Us" title="Four promises behind every TeaNest pack." text="Luxury is not loud. It is the freshness of the leaf, the restraint of the blend, and the confidence of a cup that tastes exactly as promised." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.06} className="rounded-[8px] border border-gold/15 bg-night/54 p-6 shadow-luxury transition hover:-translate-y-2 hover:border-gold/40">
                  <Icon className="mb-6 h-9 w-9 text-gold" />
                  <h3 className="font-heading text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader align="left" eyebrow="Featured Products" title="Signature teas for refined daily rituals." />
          <Button to="/products" variant="secondary">View All <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} wishlist={wishlist} onWishlist={toggleWishlist} onQuickView={setModalProduct} />
          ))}
        </div>
      </section>

      <section className="bg-[#06130f] py-24">
        <div className="container-premium">
          <SectionHeader eyebrow="Our Process" title="A careful journey from garden to cup." text="Every stage protects the aroma, liquor, freshness, and premium Assam character TeaNest is built on." />
          <div className="relative mt-16 grid gap-6 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-11 hidden h-px bg-gold-line lg:block" />
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={index * 0.05} className="relative">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/35 bg-forest p-5 shadow-glow">
                    <Icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="mt-6 text-center font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-center text-sm leading-6 text-white/58">{step.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <SectionHeader eyebrow="Testimonials" title="Served in homes, boutique stays, and thoughtful gifting rituals." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.06} className="rounded-[8px] border border-gold/15 bg-forest/55 p-7 shadow-luxury">
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: item.rating }).map((_, star) => <Star key={star} className="h-4 w-4 fill-gold" />)}
              </div>
              <p className="leading-7 text-white/72">"{item.text}"</p>
              <div className="mt-7 border-t border-gold/12 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/48">{item.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-forest-radial py-24">
        <div className="container-premium">
          <SectionHeader eyebrow="Gallery" title="Gardens, leaves, packaging, and the cup they become." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <button key={item.title} className="focus-ring group relative aspect-[4/3] overflow-hidden rounded-[8px] border border-gold/15" type="button" onClick={() => setLightbox(item)}>
                <img className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={item.image} alt={item.title} loading="lazy" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/92 to-transparent p-5 text-left font-semibold">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <SectionHeader eyebrow="FAQ" title="Questions before your first cup?" />
        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
      </section>

      <Newsletter />
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />

      {lightbox ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/82 p-4 backdrop-blur" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <motion.img
            className="max-h-[86vh] rounded-[8px] border border-gold/25 object-contain shadow-luxury"
            src={lightbox.image}
            alt={lightbox.title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>
      ) : null}
    </>
  );
}
