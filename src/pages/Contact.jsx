import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock, ClipboardList } from 'lucide-react';
import SEO, { breadcrumbSchema, businessSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import FAQ from '../components/FAQ.jsx';
import siteConfig, { hasPhone, hasEmail, hasWhatsApp, telLink, mailLink, whatsappLink } from '../data/siteConfig.js';
import faqs from '../data/faqs.js';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Contact', to: '/contact' }];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us: Construction & Home Improvement in Gurugram"
        description={`Contact ${siteConfig.brandName} about civil construction, home renovation, flooring, painting and finishing work in Gurugram, Haryana. Call, email or request a consultation.`}
        path="/contact"
        jsonLd={[breadcrumbSchema(crumbs), businessSchema()]}
      />
      <PageHeader title="Contact Us" lead="Get in touch to discuss your construction, renovation or finishing project." breadcrumbs={crumbs} />

      <section className="section">
        <div className="container contact-grid">
          <Link to="/consultation" className="contact-card is-primary">
            <ClipboardList size={28} aria-hidden="true" />
            <h2 className="h4">Request a consultation</h2>
            <p>Share your project details online. This is the quickest way to give us the full picture.</p>
            <span className="link-arrow">Open form →</span>
          </Link>
          {hasPhone && (
            <a href={telLink} className="contact-card">
              <Phone size={28} aria-hidden="true" />
              <h2 className="h4">Call us</h2>
              <p>{siteConfig.phoneDisplay}</p>
              {siteConfig.businessHours && <p className="muted"><Clock size={14} aria-hidden="true" /> {siteConfig.businessHours}</p>}
            </a>
          )}
          {hasEmail && (
            <a href={mailLink} className="contact-card">
              <Mail size={28} aria-hidden="true" />
              <h2 className="h4">Email us</h2>
              <p>{siteConfig.email}</p>
            </a>
          )}
          {hasWhatsApp && (
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-card">
              <MessageCircle size={28} aria-hidden="true" />
              <h2 className="h4">WhatsApp</h2>
              <p>Send us a message with photos of your site.</p>
            </a>
          )}
          <div className="contact-card is-static">
            <MapPin size={28} aria-hidden="true" />
            <h2 className="h4">Service area</h2>
            <p>
              {siteConfig.streetAddress && <>{siteConfig.streetAddress}<br /></>}
              {siteConfig.city}, {siteConfig.region}, {siteConfig.country}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container narrow">
          <h2 className="center">Common questions</h2>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
