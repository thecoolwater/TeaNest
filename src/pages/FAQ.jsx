import FAQAccordion from '../components/FAQAccordion.jsx';
import Newsletter from '../components/Newsletter.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { faqs } from '../data/site.js';

export default function FAQ() {
  return (
    <>
      <section className="bg-forest-radial pb-16 pt-36">
        <div className="container-premium">
          <SectionHeader eyebrow="FAQ" title="Everything worth knowing before you brew." text="Clear answers about TeaNest sourcing, product selection, storage, wholesale enquiries, and shipping." />
        </div>
      </section>
      <section className="container-premium py-20">
        <FAQAccordion items={faqs} />
      </section>
      <Newsletter />
    </>
  );
}
