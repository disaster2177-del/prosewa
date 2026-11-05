import { useMemo, useState } from 'react';
import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import projects, { GALLERY_CATEGORIES } from '../data/projects.js';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Our Projects', to: '/projects' }];

export default function Projects() {
  const [cat, setCat] = useState('all');
  const cats = GALLERY_CATEGORIES.filter((c) => c.id === 'all' || projects.some((p) => p.category === c.id));
  const list = useMemo(() => (cat === 'all' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <>
      <SEO
        title="Our Projects: Construction & Renovation Work in Gurugram"
        description="Browse construction, renovation, flooring, interior finishing and painting projects in Gurugram, with photos, videos and project details."
        path="/projects"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title="Our Projects" lead="A look at construction, renovation and finishing work we have carried out." breadcrumbs={crumbs} />
      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {cats.map((c) => (
              <button key={c.id} type="button" className={`filter-chip ${cat === c.id ? 'is-active' : ''}`} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          {list.length ? (
            <div className="card-grid">
              {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          ) : (
            <p className="empty-state">No projects in this category yet.</p>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
