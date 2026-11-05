import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, ClipboardCheck, Phone, Mail, ArrowRight } from 'lucide-react';
import SEO, { breadcrumbSchema, faqSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FAQ from '../components/FAQ.jsx';
import MediaPlayer from '../components/MediaPlayer.jsx';
import CTASection from '../components/CTASection.jsx';
import NotFound from './NotFound.jsx';
import { getServiceBySlug } from '../data/services.js';
import { projectsForService } from '../data/projects.js';
import ideas from '../data/ideas.js';
import siteConfig, { absoluteUrl, hasPhone, hasEmail, telLink, mailLink } from '../data/siteConfig.js';
import { getIcon } from '../lib/icons.js';

const consultSteps = [
  'Share your requirements through the form, by phone or by email.',
  'We discuss the project and arrange a site visit if needed.',
  'You receive a scope of work and quotation to review.',
  'Once agreed, we plan the schedule and begin the work.',
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;

  const Icon = getIcon(service.icon);
  const path = `/services/${service.slug}`;
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: service.title, to: path },
  ];
  const related = service.related.map(getServiceBySlug).filter(Boolean);
  const projects = projectsForService(service);
  const videos = projects.filter((p) => p.videoUrl);
  const serviceIdeas = ideas.filter((d) => d.category === service.galleryCategory);
  const consultHref = `/consultation?service=${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: absoluteUrl(path),
    areaServed: siteConfig.areasServed.map((name) => ({ '@type': 'Place', name })),
    provider: { '@type': 'GeneralContractor', name: siteConfig.brandName, url: siteConfig.siteUrl },
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        image={service.image}
        jsonLd={[breadcrumbSchema(crumbs), serviceSchema, faqSchema(service.faqs)]}
      />
      <PageHeader title={`${service.title} in Gurugram & Delhi NCR`} lead={service.summary} breadcrumbs={crumbs} image={service.image}>
        <div className="hero-actions">
          <Link to={consultHref} className="btn btn-primary btn-lg">
            Get Free Consultation <ArrowRight size={20} aria-hidden="true" />
          </Link>
          {hasPhone && (
            <a href={telLink} className="btn btn-outline-light btn-lg">
              <Phone size={18} aria-hidden="true" /> Call Us
            </a>
          )}
        </div>
      </PageHeader>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main prose">
            <h2>About our {service.title} service</h2>
            {service.intro.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}

            <h2>Types of work we handle</h2>
            <ul className="check-grid">
              {service.workTypes.map((w) => (
                <li key={w}><CheckCircle2 size={20} aria-hidden="true" /> {w}</li>
              ))}
            </ul>

            <h2>What helps us understand your project</h2>
            <p>Sharing these details in your enquiry helps us prepare for the first discussion:</p>
            <ul className="bullet-list">
              {service.requirements.map((r) => <li key={r}>{r}</li>)}
            </ul>

            <h2>How the consultation works</h2>
            <ol className="steps-list">
              {consultSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </article>

          <aside className="detail-aside" aria-label="Contact options">
            <div className="aside-card">
              <span className="aside-icon"><Icon size={26} aria-hidden="true" /></span>
              <h2 className="h4">Discuss your {service.title} project</h2>
              <p>Tell us what you need. The first consultation is free, with no obligation.</p>
              <Link to={consultHref} className="btn btn-primary btn-block">
                <ClipboardCheck size={18} aria-hidden="true" /> Get Free Consultation
              </Link>
              {hasPhone && (
                <a href={telLink} className="btn btn-outline btn-block">
                  <Phone size={18} aria-hidden="true" /> {siteConfig.phoneDisplay}
                </a>
              )}
              {hasEmail && (
                <a href={mailLink} className="btn btn-outline btn-block">
                  <Mail size={18} aria-hidden="true" /> Email Us
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section section-ivory" aria-labelledby="svc-projects">
          <div className="container">
            <h2 id="svc-projects">Related projects</h2>
            <div className="card-grid">
              {projects.slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
            {videos.length > 0 && (
              <div className="video-grid mt-lg">
                {videos.map((p) => (
                  <MediaPlayer key={p.slug} src={p.videoUrl} poster={p.videoPoster || p.coverImage} title={`${p.title} video`} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {serviceIdeas.length > 0 && (
        <section className="section" aria-labelledby="svc-ideas">
          <div className="container">
            <h2 id="svc-ideas">Design ideas for {service.title}</h2>
            <p className="muted">
              Inspiration photos showing the kind of finish we can create. See{' '}
              <Link to="/photo-credits">photo credits</Link>.
            </p>
            <ul className="idea-grid">
              {serviceIdeas.map((d) => (
                <li key={d.src}>
                  <figure>
                    <img src={d.src} alt={d.alt} loading="lazy" width="600" height="450" />
                    <span className="badge badge-idea">Design idea</span>
                    <figcaption>{d.alt}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="svc-faq">
        <div className="container narrow">
          <h2 id="svc-faq" className="center">{service.title}: frequently asked questions</h2>
          <FAQ items={service.faqs} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-ivory" aria-labelledby="svc-related">
          <div className="container">
            <h2 id="svc-related">Related services</h2>
            <div className="card-grid">
              {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Planning ${service.title} work in Gurugram or Delhi NCR?`}
        text="Share your requirements and we will get in touch to discuss the scope and next steps."
        serviceSlug={service.slug}
      />
    </>
  );
}
