import { Helmet } from 'react-helmet-async';
import siteConfig, { absoluteUrl, hasPhone, hasEmail } from '../data/siteConfig.js';

/**
 * Page-level SEO: title, description, canonical, Open Graph, Twitter,
 * and optional JSON-LD structured data.
 */
export default function SEO({ title, description, path = '/', image, jsonLd = [], noindex = false }) {
  const fullTitle = title ? `${title} | ${siteConfig.brandName}` : siteConfig.brandName;
  const url = absoluteUrl(path);
  const img = absoluteUrl(image || siteConfig.ogImage);
  const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.brandName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {schemas.filter(Boolean).map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

/** LocalBusiness-style structured data built ONLY from values in siteConfig. */
export const businessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.brandName,
    description:
      'Home improvement, civil construction, renovation and finishing services in Gurugram, Haryana.',
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.ogImage),
    areaServed: siteConfig.areasServed.map((name) => ({ '@type': 'Place', name })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
      ...(siteConfig.streetAddress && { streetAddress: siteConfig.streetAddress }),
      ...(siteConfig.postalCode && { postalCode: siteConfig.postalCode }),
    },
  };
  if (hasPhone) schema.telephone = siteConfig.phoneE164;
  if (hasEmail) schema.email = siteConfig.email;
  if (siteConfig.socialLinks.length) schema.sameAs = siteConfig.socialLinks.map((s) => s.url);
  return schema;
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.label,
    item: absoluteUrl(it.to),
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
