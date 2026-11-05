import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ConsultationForm from '../components/ConsultationForm.jsx';
import siteConfig, { hasPhone, hasEmail, hasWhatsApp, telLink, mailLink, whatsappLink } from '../data/siteConfig.js';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Free Consultation', to: '/consultation' }];

export default function Consultation() {
  const [params] = useSearchParams();
  const service = params.get('service') || '';

  return (
    <>
      <SEO
        title="Get a Free Consultation: Interiors & Renovation in Gurugram, Delhi NCR & Noida"
        description="Request a free consultation for moulding, panelling, wallpaper, glass, ceiling, flooring or renovation work in Gurugram, Delhi NCR and Noida. Share your phone, email and project details."
        path="/consultation"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        title="Get a Free Consultation"
        lead="Tell us about your project. We will review your requirements and get in touch to discuss the next steps."
        breadcrumbs={crumbs}
      />
      <section className="section">
        <div className="container consult-layout">
          <div className="consult-form-wrap">
            {/* key resets the form if the ?service= query changes */}
            <ConsultationForm key={service} defaultService={service} />
          </div>
          <aside className="consult-aside">
            <div className="aside-card">
              <h2 className="h4">What to expect</h2>
              <ul className="icon-list">
                <li><ShieldCheck size={20} aria-hidden="true" /> No login or account needed</li>
                <li><Clock size={20} aria-hidden="true" /> We review every request and respond personally</li>
                <li><MapPin size={20} aria-hidden="true" /> Site visits in {siteConfig.city} where needed</li>
              </ul>
            </div>
            {(hasPhone || hasEmail || hasWhatsApp) && (
              <div className="aside-card">
                <h2 className="h4">Prefer to talk directly?</h2>
                {hasPhone && <a href={telLink} className="btn btn-outline btn-block"><Phone size={18} aria-hidden="true" /> {siteConfig.phoneDisplay}</a>}
                {hasEmail && <a href={mailLink} className="btn btn-outline btn-block"><Mail size={18} aria-hidden="true" /> {siteConfig.email}</a>}
                {hasWhatsApp && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a>}
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
