import SEO from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import siteConfig from '../data/siteConfig.js';
import ideas from '../data/ideas.js';

/** Credits for the openly licensed "design idea" photos (required by their licences). */
export default function Credits() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Photo Credits', to: '/photo-credits' }];
  return (
    <>
      <SEO
        title="Photo Credits"
        description={`Credits for the openly licensed design-idea photos used on the ${siteConfig.brandName} website.`}
        path="/photo-credits"
      />
      <PageHeader title="Photo Credits" breadcrumbs={crumbs} />
      <section className="section">
        <div className="container narrow prose">
          <p>
            Project photos on this website show work by {siteConfig.brandName}. Images marked
            <strong> “Design idea”</strong> are openly licensed photos by other photographers, used to illustrate
            the kind of finish each service can deliver. They are credited below as their licences require.
          </p>
          <ul className="credits-list">
            {ideas.map((p) => (
              <li key={p.src}>
                <img src={p.src} alt="" loading="lazy" width="96" height="72" />
                <span>
                  <strong>{p.alt}</strong>
                  <br />
                  {p.sourceUrl ? (
                    <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">“{p.title || 'Photo'}”</a>
                  ) : (
                    `“${p.title || 'Photo'}”`
                  )}{' '}
                  by {p.author}, licensed under{' '}
                  <a href={p.licenseUrl} target="_blank" rel="noopener noreferrer">{p.license}</a>. Resized for the web.
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
