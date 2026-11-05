import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import services from '../data/services.js';
import { absoluteUrl } from '../data/siteConfig.js';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }];

export default function Services() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  };
  return (
    <>
      <SEO
        title="Home Interior & Renovation Services in Gurugram, Delhi NCR & Noida"
        description="Explore our services in Gurugram: wall moulding, PVC panels, louvers, wallpaper, glass work, false ceilings, wooden flooring, painting, renovation, kitchens and bathrooms."
        path="/services"
        jsonLd={[breadcrumbSchema(crumbs), itemList]}
      />
      <PageHeader
        title="Our Services"
        lead="Interior, renovation and finishing services for homes, offices and shops in Gurugram, Delhi NCR and Noida."
        breadcrumbs={crumbs}
      />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <HowItWorks />
      <CTASection />
    </>
  );
}
