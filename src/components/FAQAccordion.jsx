import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="rounded-[8px] border border-gold/15 bg-forest/55">
            <button
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-[8px] p-5 text-left"
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span className="font-semibold text-white">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-gold transition ${active ? 'rotate-180' : ''}`} />
            </button>
            {active ? (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-white/64">{item.answer}</p>
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
