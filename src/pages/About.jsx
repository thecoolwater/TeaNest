import AnimatedSection from '../components/AnimatedSection.jsx';
import Newsletter from '../components/Newsletter.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { whyChoose } from '../data/site.js';

const milestones = [
  ['2018', 'TeaNest began with estate visits across Assam and a search for naturally aromatic lots.'],
  ['2020', 'The first premium CTC and orthodox ranges were refined for homes, hotels, and gifting.'],
  ['2023', 'Quality checks expanded with batch tasting, freshness grading, and packaging controls.'],
  ['2026', 'TeaNest continues building a modern Indian premium tea experience rooted in Assam.'],
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-36">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1800&q=85" alt="TeaNest Assam tea garden" />
        <div className="absolute inset-0 bg-night/78" />
        <div className="container-premium relative z-10 max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">About TeaNest</p>
          <h1 className="font-heading text-5xl font-bold md:text-7xl">A premium Assam tea house built on restraint, freshness, and trust.</h1>
        </div>
      </section>

      <section className="container-premium grid gap-10 py-24 lg:grid-cols-2 lg:items-center">
        <AnimatedSection>
          <SectionHeader align="left" eyebrow="Company Story" title="From selected gardens to a polished everyday ritual." />
          <p className="mt-6 leading-8 text-white/68">
            TeaNest works with carefully selected tea sources to create blends that feel rich without becoming harsh.
            We focus on clean sourcing, thoughtful processing, and packaging that protects freshness until the first brew.
          </p>
        </AnimatedSection>
        <AnimatedSection className="grid gap-4">
          {[
            ['Mission', 'To make premium Assam tea feel accessible, elegant, and consistently excellent.'],
            ['Vision', 'To become a trusted modern tea brand for homes, hotels, gifting, and connoisseurs.'],
            ['Quality', 'Every batch is reviewed for color, aroma, liquor, leaf grade, and freshness.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[8px] border border-gold/15 bg-forest/55 p-6">
              <h3 className="font-heading text-2xl text-gold">{title}</h3>
              <p className="mt-3 text-white/64">{text}</p>
            </div>
          ))}
        </AnimatedSection>
      </section>

      <section className="bg-forest-radial py-24">
        <div className="container-premium">
          <SectionHeader eyebrow="Why TeaNest" title="Designed for people who notice the difference." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} className="rounded-[8px] border border-gold/15 bg-night/55 p-6">
                  <Icon className="mb-5 h-8 w-8 text-gold" />
                  <h3 className="font-heading text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-premium py-24">
        <SectionHeader eyebrow="Timeline" title="The TeaNest journey." />
        <div className="mx-auto mt-14 max-w-3xl">
          {milestones.map(([year, text]) => (
            <AnimatedSection key={year} className="relative border-l border-gold/25 pb-10 pl-8 last:pb-0">
              <span className="absolute -left-3 top-0 h-6 w-6 rounded-full border border-gold bg-night" />
              <p className="font-heading text-3xl font-bold text-gold">{year}</p>
              <p className="mt-2 text-white/66">{text}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
