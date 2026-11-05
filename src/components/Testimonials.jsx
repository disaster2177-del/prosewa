import { Quote, Star } from 'lucide-react';
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
        <p className="testimonial-summary">
          <span className="stars" aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={18} fill="currentColor" />)}</span>
          Rated 5 out of 5 by our customers
        </p>
        <div className="testimonial-grid">
          {list.map((t) => (
            <figure key={t.name + t.quote.slice(0, 10)} className="testimonial-card">
              <Quote size={28} aria-hidden="true" className="testimonial-icon" />
              {t.rating && (
                <span className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }, (_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden="true" />)}
                </span>
              )}
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {(t.location || t.service || t.date) && <span>{[t.service, t.location, t.date].filter(Boolean).join(' · ')}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
