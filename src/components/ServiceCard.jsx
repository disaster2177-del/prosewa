import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getIcon } from '../lib/icons.js';

export default function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);
  const href = `/services/${service.slug}`;
  return (
    <article className="service-card">
      <Link to={href} className="service-card-media" tabIndex={-1} aria-hidden="true">
        <img src={service.image} alt="" loading="lazy" width="640" height="420" />
      </Link>
      <div className="service-card-body">
        <span className="service-card-icon" aria-hidden="true">
          <Icon size={22} />
        </span>
        <h3>
          <Link to={href} className="stretched-link">
            {service.title}
          </Link>
        </h3>
        <p>{service.summary}</p>
        <div className="service-card-actions">
          <span className="link-arrow">
            View Details <ArrowRight size={16} aria-hidden="true" />
          </span>
          <Link to={`/consultation?service=${service.slug}`} className="card-cta">
            Get Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
