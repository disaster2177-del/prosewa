import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/** items: [{ label, to }] — last item is the current page. */
export default function Breadcrumbs({ items, light = false }) {
  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs ${light ? 'is-light' : ''}`}>
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.to}>
              {last ? (
                <span aria-current="page">{it.label}</span>
              ) : (
                <>
                  <Link to={it.to}>{it.label}</Link>
                  <ChevronRight size={14} aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
