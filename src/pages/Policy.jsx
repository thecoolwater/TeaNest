import SectionHeader from '../components/SectionHeader.jsx';
import { policies } from '../data/site.js';

export default function Policy({ type }) {
  const policy = policies[type] || policies.privacy;

  return (
    <section className="container-premium min-h-[70vh] pb-24 pt-36">
      <SectionHeader eyebrow="TeaNest" title={policy.title} text="Simple, transparent policies for a premium customer experience." />
      <div className="mx-auto mt-12 max-w-3xl rounded-[8px] border border-gold/15 bg-forest/55 p-8 shadow-luxury">
        {policy.body.map((paragraph) => (
          <p key={paragraph} className="mb-5 leading-8 text-white/68 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
