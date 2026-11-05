import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import MediaPlayer from '../components/MediaPlayer.jsx';
import ProjectCard, { catLabel } from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import NotFound from './NotFound.jsx';
import projects, { getProjectBySlug } from '../data/projects.js';
import { getServiceBySlug } from '../data/services.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [active, setActive] = useState(0);
  if (!project) return <NotFound />;

  const path = `/projects/${project.slug}`;
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Our Projects', to: '/projects' },
    { label: project.title, to: path },
  ];
  const service = project.serviceSlug ? getServiceBySlug(project.serviceSlug) : null;
  const images = project.galleryImages.length ? project.galleryImages : [{ src: project.coverImage, alt: project.coverAlt }];
  const current = images[Math.min(active, images.length - 1)];
  const others = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 3);
  const moreProjects = others.length ? others : projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${project.title}${project.location ? `, ${project.location}` : ''}`}
        description={project.description}
        path={path}
        image={project.coverImage}
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title={project.title} lead={project.description} breadcrumbs={crumbs}>
        <ul className="meta-row">
          <li><Tag size={16} aria-hidden="true" /> {catLabel(project.category)}</li>
          {project.location && <li><MapPin size={16} aria-hidden="true" /> {project.location}</li>}
          {project.isSample && <li className="badge badge-sample">Sample project</li>}
        </ul>
      </PageHeader>

      <section className="section">
        <div className="container detail-layout">
          <div className="detail-main">
            <figure className="project-hero-img">
              <img src={current.src} alt={current.alt} width="1200" height="800" />
              <figcaption>{current.alt}</figcaption>
            </figure>
            {images.length > 1 && (
              <ul className="thumb-row" aria-label="Project photos">
                {images.map((img, i) => (
                  <li key={img.src + i}>
                    <button type="button" className={`thumb ${i === active ? 'is-active' : ''}`} onClick={() => setActive(i)} aria-label={`Show photo: ${img.alt}`} aria-pressed={i === active}>
                      <img src={img.src} alt="" loading="lazy" width="160" height="120" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {project.beforeAfter && (
              <div className="before-after">
                <h2>Before &amp; after</h2>
                <div className="ba-grid">
                  {['before', 'after'].map((k) => (
                    <figure key={k}>
                      <img src={project.beforeAfter[k].src} alt={project.beforeAfter[k].alt} loading="lazy" width="600" height="450" />
                      <figcaption className={`badge badge-stage is-${k}`}>{k}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {project.videoUrl && (
              <div className="mt-lg">
                <h2>Project video</h2>
                <MediaPlayer src={project.videoUrl} poster={project.videoPoster || project.coverImage} title={`${project.title} video`} />
              </div>
            )}

            <div className="prose mt-lg">
              <h2>Project overview</h2>
              {(project.details || [project.description]).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>

          <aside className="detail-aside">
            {project.scope?.length > 0 && (
              <div className="aside-card">
                <h2 className="h4">Scope of work</h2>
                <ul className="check-list">
                  {project.scope.map((s) => <li key={s}><CheckCircle2 size={18} aria-hidden="true" /> {s}</li>)}
                </ul>
              </div>
            )}
            <div className="aside-card">
              <h2 className="h4">Planning something similar?</h2>
              <Link to={`/consultation${service ? `?service=${service.slug}` : ''}`} className="btn btn-primary btn-block">Get Free Consultation</Link>
              {service && (
                <Link to={`/services/${service.slug}`} className="link-arrow mt-sm">
                  About our {service.title} service <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </section>

      {moreProjects.length > 0 && (
        <section className="section section-ivory">
          <div className="container">
            <h2>More projects</h2>
            <div className="card-grid">
              {moreProjects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </div>
        </section>
      )}
      <CTASection serviceSlug={service?.slug} />
    </>
  );
}
