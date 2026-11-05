import Breadcrumbs from './Breadcrumbs.jsx';

/** Navy page banner with breadcrumb, H1 and optional background image. */
export default function PageHeader({ title, lead, breadcrumbs, image, children }) {
  return (
    <section className={`page-header ${image ? 'has-image' : ''}`}>
      {image && <img className="page-header-bg" src={image} alt="" width="1600" height="600" />}
      <div className="page-header-overlay" aria-hidden="true" />
      <div className="container page-header-inner">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} light />}
        <h1>{title}</h1>
        {lead && <p className="page-header-lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
