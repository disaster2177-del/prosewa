import { useId, useState } from 'react';
import { Plus } from 'lucide-react';

/** Accessible accordion with a smooth height animation. items: [{ q, a }] */
export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();
  return (
    <div className="faq">
      {items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-toggle" aria-hidden="true"><Plus size={18} /></span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={!isOpen}
              className="faq-answer"
              {...(!isOpen && { inert: '' })}
            >
              <div className="faq-answer-inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
