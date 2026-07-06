import AnimatedSection from '../components/AnimatedSection.jsx';
import Newsletter from '../components/Newsletter.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { brandAssets, business } from '../data/brand.js';
import { whyChoose } from '../data/site.js';

const milestones = [
  ['Brand', 'TeaNest was shaped as a dark green and gold premium Assam tea identity.'],
  ['Blend', 'Royal Gold focuses on rich taste, refreshing aroma, and 100% natural Assam tea.'],
  ['Pack', `Packed and marketed by ${business.legalName}, Bardoli, Gujarat with FSSAI ${business.fssai}.`],
  ['Supply', 'Built for retail, wholesale, trader, and packer enquiries with direct customer care support.'],
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-36">
        <img className="absolute inset-0 h-full w-full object-cover" src={brandAssets.printedLandscape} alt="TeaNest green brand mood" />
        <div className="absolute inset-0 bg-night/70" />
        <div className="container-premium relative z-10 max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">About TeaNest</p>
          <h1 className="font-heading text-5xl font-bold md:text-7xl">A premium Assam tea brand by T.N. Enterprise.</h1>
        </div>
      </section>

      <section className="container-premium grid gap-10 py-24 lg:grid-cols-2 lg:items-center">
        <AnimatedSection>
          <SectionHeader align="left" eyebrow="Company Story" title="From selected Assam leaves to a polished Royal Gold pack." />
          <p className="mt-6 leading-8 text-white/68">
            TeaNest is crafted from carefully selected Assam leaves for rich taste and refreshing aroma. The brand is
            packed and marketed by {business.legalName}, {business.businessType.toLowerCase()}, from Bardoli, Gujarat.
          </p>
        </AnimatedSection>
        <AnimatedSection className="grid gap-4">
          {[
            ['Mission', 'To make Royal Gold Assam tea feel premium, natural, and easy to trust.'],
            ['Vision', 'To grow TeaNest as a recognizable Indian tea brand for homes, retailers, and trade buyers.'],
            ['Quality', `${business.ingredients}, careful packing, ${business.bestBefore.toLowerCase()}, and clear storage guidance.`],
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
