import SEO from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import siteConfig from '../data/siteConfig.js';

/** Template terms of use. Have it reviewed before publishing. */
export default function Terms() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Terms', to: '/terms' }];
  return (
    <>
      <SEO title="Terms of Use" description={`Terms of use for the ${siteConfig.brandName} website.`} path="/terms" />
      <PageHeader title="Terms of Use" breadcrumbs={crumbs} />
      <section className="section">
        <div className="container narrow prose">
          <p><em>This is a template. Please review and adapt it to your business before publishing.</em></p>
          <h2>Website content</h2>
          <p>The information on this website is general and for reference only. It does not constitute a quotation, contract or professional engineering advice.</p>
          <h2>Quotations and work</h2>
          <p>Any project scope, pricing and timelines are agreed separately in writing after a consultation and, where needed, a site visit.</p>
          <h2>Images and media</h2>
          <p>Project photos and videos on this website are the property of {siteConfig.brandName} and may not be reused without consent. Photos marked “Design idea” are openly licensed images by other photographers; see the Photo Credits page for their licences.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, please reach us through the Contact page.</p>
        </div>
      </section>
    </>
  );
}
