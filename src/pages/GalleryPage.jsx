import SEO, { breadcrumbSchema } from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Gallery from '../components/Gallery.jsx';
import CTASection from '../components/CTASection.jsx';

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Gallery', to: '/gallery' }];

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Photo & Video Gallery: Construction and Renovation in Gurugram"
        description="Photos and videos of civil work, construction, renovation, interiors, flooring, painting and before-and-after transformations in Gurugram."
        path="/gallery"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader title="Gallery" lead="Photos and videos from our construction, renovation and finishing sites." breadcrumbs={crumbs} />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <CTASection />
    </>
  );
}
