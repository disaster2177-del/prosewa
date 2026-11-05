import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import siteConfig, { hasPhone, hasEmail, telLink, mailLink } from '../data/siteConfig.js';
import services from '../data/services.js';
import { NAV_ITEMS } from './Header.jsx';
import Logo from './Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Civil construction, home construction, renovation and finishing services for homes and
            commercial properties in {siteConfig.city}, {siteConfig.region}.
          </p>
          <Link to="/consultation" className="btn btn-primary btn-sm">
            Get Free Consultation
          </Link>
        </div>

        <div>
          <h2 className="footer-title">Services</h2>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Company</h2>
          <ul className="footer-links">
            {NAV_ITEMS.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/consultation">Consultation</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <ul className="footer-contact">
            {hasPhone && (
              <li>
                <Phone size={18} aria-hidden="true" />
                <a href={telLink}>{siteConfig.phoneDisplay}</a>
              </li>
            )}
            {hasEmail && (
              <li>
                <Mail size={18} aria-hidden="true" />
                <a href={mailLink}>{siteConfig.email}</a>
              </li>
            )}
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>
                {siteConfig.streetAddress && (
                  <>
                    {siteConfig.streetAddress}
                    <br />
                  </>
                )}
                {siteConfig.city}, {siteConfig.region}, {siteConfig.country}
              </span>
            </li>
            {siteConfig.businessHours && (
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>{siteConfig.businessHours}</span>
              </li>
            )}
          </ul>
          {siteConfig.socialLinks.length > 0 && (
            <ul className="footer-social">
              {siteConfig.socialLinks.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
