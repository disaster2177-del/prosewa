import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, PlayCircle, Expand } from 'lucide-react';
import { GALLERY_CATEGORIES, getGalleryItems } from '../data/projects.js';
import MediaPlayer from './MediaPlayer.jsx';

/**
 * Filterable photo + video gallery with an accessible lightbox.
 * Data comes from src/data/projects.js → getGalleryItems().
 */
export default function Gallery({ limit, showFilters = true, initialCategory = 'all' }) {
  const allItems = useMemo(() => getGalleryItems(), []);
  const [category, setCategory] = useState(initialCategory);
  const [activeIndex, setActiveIndex] = useState(null);

  const available = useMemo(
    () => GALLERY_CATEGORIES.filter((c) => c.id === 'all' || allItems.some((i) => i.category === c.id)),
    [allItems],
  );

  const filtered = useMemo(() => {
    const list = category === 'all' ? allItems : allItems.filter((i) => i.category === category);
    return limit ? list.slice(0, limit) : list;
  }, [allItems, category, limit]);

  return (
    <div className="gallery">
      {showFilters && (
        <div className="filter-bar" role="group" aria-label="Filter gallery by category">
          {available.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`filter-chip ${category === c.id ? 'is-active' : ''}`}
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="empty-state">No media in this category yet.</p>
      ) : (
        <ul className="gallery-grid" key={category}>
          {filtered.map((item, idx) => (
            <li key={item.key} style={{ '--i': idx }}>
              <button
                type="button"
                className="gallery-item"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Open ${item.type === 'video' ? 'video' : 'image'}: ${item.alt}`}
              >
                <img
                  src={item.type === 'video' ? item.poster : item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <span className="gallery-item-overlay" aria-hidden="true">
                  {item.type === 'video' ? <PlayCircle size={40} /> : <Expand size={28} />}
                </span>
                {item.stage && <span className={`badge badge-stage is-${item.stage}`}>{item.stage}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}

      {activeIndex !== null && (
        <Lightbox items={filtered} index={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} />
      )}
    </div>
  );
}

function Lightbox({ items, index, onChange, onClose }) {
  const item = items[index];
  const closeRef = useRef(null);
  const prev = useCallback(() => onChange((index - 1 + items.length) % items.length), [index, items.length, onChange]);
  const next = useCallback(() => onChange((index + 1) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const lastFocus = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      lastFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        {items.length > 1 && (
          <>
            <button type="button" className="lightbox-btn lightbox-prev" onClick={prev} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>
            <button type="button" className="lightbox-btn lightbox-next" onClick={next} aria-label="Next">
              <ChevronRight size={28} />
            </button>
          </>
        )}
        <figure>
          {item.type === 'video' ? (
            <MediaPlayer src={item.src} poster={item.poster} title={item.alt} />
          ) : (
            <img src={item.src} alt={item.alt} />
          )}
          <figcaption>
            <span>{item.alt}</span>
            <Link to={`/projects/${item.projectSlug}`} onClick={onClose}>
              View project: {item.projectTitle}
            </Link>
            <span className="lightbox-count">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
