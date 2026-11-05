import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import siteConfig from '../data/siteConfig.js';
import services from '../data/services.js';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }];

/**
 * EDIT THIS PAGE with your real company story.
 * Only add years of experience, project counts, licences or awards that are true and verifiable.
 */
export default function About() {
  return (
    <>
      <SEO
        title="About Us: Construction & Renovation Team in Gurugram"
        description={`Learn about ${siteConfig.brandName}, a Gurugram team providing civil construction, home construction, renovation and finishing services for homes and commercial properties.`}
        path="/about"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        title="About Us"
        lead="A Gurugram-based team for construction, renovation and finishing work."
        breadcrumbs={crumbs}
        image="/assets/about/about-hero.svg"
      />

      <section className="section">
        <div className="container split">
          <div className="split-content">
            <p className="eyebrow">Our Story</p>
            <h2>Focused on doing the work properly</h2>
            {/* TODO: replace these paragraphs with your own story */}
            <p>
              {siteConfig.brandName} works on residential construction, renovation, finishing and civil-related
              services in {siteConfig.city}, {siteConfig.region}. We also take on improvement work for shops,
              offices and other commercial properties.
            </p>
            <p>
              Our approach is simple: understand what the client needs, agree the scope clearly, and carry out
              the work with care, from the structure to the last coat of paint.
            </p>
            <h3>Our work approach</h3>
            <p>
              Every project starts with a conversation and, where needed, a site visit. We discuss requirements,
              materials and the sequence of work before preparing a scope and quotation, and keep you informed as
              the work moves through each stage.
            </p>
            <h3>Service coverage</h3>
            <p className="inline-icon">
              <MapPin size={18} aria-hidden="true" /> {siteConfig.areasServed.join(', ')}
            </p>
          </div>
          <div className="split-media">
            <Reveal variant="clip">
              <img src="/assets/about/about-team.svg" alt="Our team on a construction site in Gurugram" loading="lazy" width="720" height="560" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <h2 className="h3">What we work on</h2>
          <ul className="tag-list">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <CTASection />
    </>
  );
}
