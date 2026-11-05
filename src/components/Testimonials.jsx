import { Quote } from 'lucide-react';
import siteConfig from '../data/siteConfig.js';
import SectionHeading from './SectionHeading.jsx';

/** Renders ONLY genuine testimonials from siteConfig.testimonials; hidden when empty. */
export default function Testimonials() {
  const list = siteConfig.testimonials;
  if (!list || list.length === 0) return null;
  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading id="testimonials-title" eyebrow="Client Feedback" title="What our clients say" align="center" />
        <div className="testimonial-grid">
          {list.map((t) => (
            <figure key={t.name + t.quote.slice(0, 10)} className="testimonial-card">
              <Quote size={28} aria-hidden="true" className="testimonial-icon" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {(t.location || t.service) && <span>{[t.service, t.location].filter(Boolean).join(' · ')}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
