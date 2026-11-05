import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Gallery from '../components/Gallery.jsx';
import CTASection from '../components/CTASection.jsx';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Gallery', to: '/gallery' }];

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Photo Gallery: Interiors & Renovation in Gurugram, Delhi NCR & Noida"
        description="Photos of wall moulding, PVC panels, louvers, wallpaper, glass work, false ceilings, flooring and before-and-after transformations in Gurugram, Delhi NCR and Noida."
        path="/gallery"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title="Gallery" lead="Photos from our interior, renovation and finishing work, plus design ideas for each category." breadcrumbs={crumbs} />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <CTASection />
    </>
  );
}
