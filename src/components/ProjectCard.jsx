import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, PlayCircle } from 'lucide-react';
import { GALLERY_CATEGORIES } from '../data/projects.js';

const catLabel = (id) => GALLERY_CATEGORIES.find((c) => c.id === id)?.label || id;

export default function ProjectCard({ project }) {
  const href = `/projects/${project.slug}`;
  return (
    <article className="project-card">
      <div className="project-card-media">
        <img src={project.coverImage} alt={project.coverAlt} loading="lazy" width="800" height="600" />
        {project.videoUrl && (
          <span className="badge badge-video">
            <PlayCircle size={14} aria-hidden="true" /> Video
          </span>
        )}
        {project.isSample && <span className="badge badge-sample">Sample</span>}
      </div>
      <div className="project-card-body">
        <p className="project-cat">{catLabel(project.category)}</p>
        <h3>
          <Link to={href} className="stretched-link">
            {project.title}
          </Link>
        </h3>
        {project.location && (
          <p className="project-loc">
            <MapPin size={14} aria-hidden="true" /> {project.location}
          </p>
        )}
        <p className="project-desc">{project.description}</p>
        <span className="link-arrow">
          View Project <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
}

export { catLabel };
