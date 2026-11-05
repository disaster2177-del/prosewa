import SEO from '../components/SEO.jsx';
import PageHeader from '../components/PageHeader.jsx';
import siteConfig, { hasEmail, mailLink } from '../data/siteConfig.js';

/** Template privacy policy. Have it reviewed so it matches how you actually handle data. */
export default function Privacy() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Privacy Policy', to: '/privacy-policy' }];
  return (
    <>
      <SEO title="Privacy Policy" description={`How ${siteConfig.brandName} collects and uses information submitted through this website.`} path="/privacy-policy" />
      <PageHeader title="Privacy Policy" breadcrumbs={crumbs} />
      <section className="section">
        <div className="container narrow prose">
          <p><em>This is a template. Please review and adapt it to your business before publishing.</em></p>
          <h2>Information we collect</h2>
          <p>When you submit a consultation request, we collect the details you provide: your phone number, email address and project description, and optionally your name, service category, project location, approximate budget and preferred contact method.</p>
          <h2>How we use it</h2>
          <p>We use this information only to respond to your enquiry, discuss your project and prepare quotations. We do not sell your information.</p>
          <h2>Third-party services</h2>
          <p>Form submissions may be processed by a form-handling or email service provider that delivers your enquiry to us. Embedded videos may be served by third-party platforms subject to their own policies.</p>
          <h2>Retention and your choices</h2>
          <p>You may ask us to update or delete the information you have shared with us{hasEmail ? <> by emailing <a href={mailLink}>{siteConfig.email}</a></> : ''}.</p>
          <h2>Changes</h2>
          <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
        </div>
      </section>
    </>
  );
}
