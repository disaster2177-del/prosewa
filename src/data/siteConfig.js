/**
 * ============================================================
 *  SITE CONFIGURATION — edit your business details here ONLY.
 * ============================================================
 *
 * Every phone button, email button, footer detail, WhatsApp button,
 * canonical URL and structured-data field reads from this file.
 *
 * IMPORTANT
 * - Leave a value as an empty string ("") if you don't have it yet.
 *   Buttons that depend on an empty value are hidden automatically,
 *   so the site never shows a dead "Call Us" or "Email Us" button.
 * - Never put invented details here. Search engines and customers
 *   rely on these being accurate.
 */

const siteConfig = {
  // Brand name, shown in the header, footer, page titles and structured data.
  brandName: 'PROSEWA',

  // Short tagline under the logo / in the footer.
  tagline: 'Home Improvement & Civil Construction',

  // Your live production domain, without a trailing slash.
  // Used for canonical URLs, Open Graph tags and sitemap.xml.
  siteUrl: 'https://www.example.com', // TODO: replace with your real domain

  // ------------------------------------------------------------
  // CONTACT DETAILS: TODO, fill these in.
  // ------------------------------------------------------------

  // Phone number shown to visitors, e.g. '+91 98765 43210'
  phoneDisplay: '', // TODO

  // Same number in international format, digits only with +, e.g. '+919876543210'
  // Used for tel: links.
  phoneE164: '', // TODO

  // Business email address, e.g. 'info@yourdomain.com'
  email: '', // TODO

  // WhatsApp number in international format WITHOUT '+', e.g. '919876543210'.
  // Leave empty to hide the WhatsApp button entirely.
  whatsappNumber: '', // optional

  // Pre-filled WhatsApp message.
  whatsappMessage: 'Hello, I would like to discuss a construction / renovation project.',

  // ------------------------------------------------------------
  // LOCATION / SERVICE AREA
  // ------------------------------------------------------------
  city: 'Gurugram',
  region: 'Haryana',
  country: 'India',
  countryCode: 'IN',

  // Optional street address. Leave empty unless it is your real, verified address.
  streetAddress: '',
  postalCode: '',

  // Areas served (shown in content + structured data).
  areasServed: ['Gurugram', 'Haryana'],

  // Optional: business hours in plain text, e.g. 'Mon–Sat, 9:00 AM – 7:00 PM'
  businessHours: '',

  // Social profiles. Only add real URLs; empty arrays show nothing.
  socialLinks: [
    // { label: 'Instagram', url: 'https://instagram.com/yourpage' },
  ],

  // Genuine customer testimonials only. The section is hidden while this is empty.
  // { name: 'Customer name', location: 'Sector 57, Gurugram', quote: '...', service: 'Home Renovation' }
  testimonials: [],

  // Default social-share image (1200×630 recommended).
  ogImage: '/assets/og/og-default.png',
};

/* ---------- Derived helpers (no need to edit below) ---------- */

export const hasPhone = Boolean(siteConfig.phoneE164);
export const hasEmail = Boolean(siteConfig.email);
export const hasWhatsApp = Boolean(siteConfig.whatsappNumber);

export const telLink = hasPhone ? `tel:${siteConfig.phoneE164}` : null;
export const mailLink = hasEmail ? `mailto:${siteConfig.email}` : null;
export const whatsappLink = hasWhatsApp
  ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
  : null;

export const absoluteUrl = (path = '/') =>
  `${siteConfig.siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;

export default siteConfig;
