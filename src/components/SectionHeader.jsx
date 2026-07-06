import AnimatedSection from './AnimatedSection.jsx';

export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const centered = align === 'center';

  return (
    <AnimatedSection className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-white/68">{text}</p> : null}
    </AnimatedSection>
  );
}
