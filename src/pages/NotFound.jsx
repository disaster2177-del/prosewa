import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import services from '../data/services.js';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" noindex />
      <section className="section notfound">
        <div className="container narrow center">
          <p className="eyebrow">404</p>
          <h1>We couldn’t find that page</h1>
          <p>The link may be outdated, or the page may have moved. Try one of these instead:</p>
          <div className="hero-actions center-actions">
            <Link to="/" className="btn btn-primary">Go to Home</Link>
            <Link to="/services" className="btn btn-outline">View Services</Link>
            <Link to="/consultation" className="btn btn-outline">Get Free Consultation</Link>
          </div>
          <ul className="tag-list mt-lg">
            {services.slice(0, 6).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
