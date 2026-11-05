import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { hasPhone, hasEmail, hasWhatsApp, telLink, mailLink, whatsappLink } from '../data/siteConfig.js';

export default function CTASection({
  title = 'Planning a Home Interior or Renovation Project?',
  text = 'Tell us what you have in mind. Contact our team to discuss your requirements and the next steps.',
  serviceSlug,
}) {
  const consultHref = serviceSlug ? `/consultation?service=${serviceSlug}` : '/consultation';
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to={consultHref} className="btn btn-primary btn-lg">
            Get Free Consultation <ArrowRight size={20} aria-hidden="true" />
          </Link>
          {hasPhone && (
            <a href={telLink} className="btn btn-outline-light btn-lg">
              <Phone size={18} aria-hidden="true" /> Call Us
            </a>
          )}
          {hasEmail && (
            <a href={mailLink} className="btn btn-outline-light btn-lg">
              <Mail size={18} aria-hidden="true" /> Email Us
            </a>
          )}
          {hasWhatsApp && (
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
