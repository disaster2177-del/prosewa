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
        title="About Us: Interior & Renovation Team in Gurugram, Delhi NCR & Noida"
        description={`Learn about ${siteConfig.brandName}, a Gurugram team providing home interiors, renovation and finishing services across Delhi NCR and Noida.`}
        path="/about"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        title="About Us"
        lead="A Gurugram-based team for interiors, renovation and finishing work across Delhi NCR."
        breadcrumbs={crumbs}
        image="/assets/about/about-hero.jpg"
      />

      <section className="section">
        <div className="container split">
          <div className="split-content">
            <p className="eyebrow">Our Story</p>
            <h2>Focused on doing the work properly</h2>
            {/* TODO: replace these paragraphs with your own story */}
            <p>
              {siteConfig.brandName} works on home interiors, renovation and finishing in Gurugram, Delhi NCR
              and Noida: wall moulding, PVC panels, louvers, wallpaper, glass work, false ceilings and wooden
              flooring. We also take on interior work for shops, offices and other commercial spaces.
            </p>
            <p>
              Our approach is simple: understand what the client needs, agree the scope clearly, and carry out
              the work with care, from the first measurement to the last coat of paint.
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
              <img src="/assets/about/about-team.jpg" alt="Our craftsman cutting wall moulding on site" loading="lazy" width="720" height="560" />
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
