import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import { hasPhone, hasWhatsApp, telLink, whatsappLink } from '../data/siteConfig.js';

/** Fixed bottom contact bar on small screens. Only shows actions that are configured. */
export default function MobileContactBar() {
  const { pathname } = useLocation();
  if (pathname === '/consultation') return null;

  return (
    <div className="mobile-contact-bar" role="region" aria-label="Quick contact">
      {hasPhone && (
        <a href={telLink}>
          <Phone size={20} aria-hidden="true" />
          <span>Call</span>
        </a>
      )}
      {hasWhatsApp && (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      )}
      <Link to="/consultation" className="is-primary">
        <ClipboardList size={20} aria-hidden="true" />
        <span>Free Consultation</span>
      </Link>
    </div>
  );
}
