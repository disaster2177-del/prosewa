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
  tagline: 'Home Interiors & Renovation',

  // Your live production domain, without a trailing slash.
  // Used for canonical URLs, Open Graph tags and sitemap.xml.
  siteUrl: 'https://www.example.com', // TODO: replace with your real domain

  // ------------------------------------------------------------
  // CONTACT DETAILS: TODO, fill these in.
  // ------------------------------------------------------------

  // Phone number shown to visitors, e.g. '+91 98765 43210'
  phoneDisplay: '+91 95404 33898',

  // Same number in international format, digits only with +, e.g. '+919876543210'
  // Used for tel: links.
  phoneE164: '+919540433898',

  // Person customers speak to (shown next to the phone number).
  contactPerson: 'Vishal Lakhera',

  // Business email address, e.g. 'info@yourdomain.com'
  email: '', // TODO

  // WhatsApp number in international format WITHOUT '+', e.g. '919876543210'.
  // Leave empty to hide the WhatsApp button entirely.
  whatsappNumber: '919540433898',

  // Pre-filled WhatsApp message.
  whatsappMessage: 'Hello, I would like to discuss an interior / renovation project.',

  // ------------------------------------------------------------
  // LOCATION / SERVICE AREA
  // ------------------------------------------------------------
  city: 'Gurugram',
  region: 'Haryana',
  country: 'India',
  countryCode: 'IN',

  // Optional street address. Leave empty unless it is your real, verified address.
  streetAddress: 'Block B, Rajendra Park, Sector 105',
  postalCode: '122006',

  // Google Maps link and map pin coordinates for the office.
  mapUrl: 'https://maps.app.goo.gl/zye95gi4pLvNwFBJA',
  latitude: 28.4967297,
  longitude: 77.0074015,

  // Areas served (shown in content + structured data).
  areasServed: ['Gurugram', 'Delhi NCR', 'Noida', 'New Delhi', 'Faridabad', 'Ghaziabad'],

  // Optional: business hours in plain text, e.g. 'Mon–Sat, 9:00 AM – 7:00 PM'
  businessHours: '',

  // Social profiles. Only add real URLs; empty arrays show nothing.
  socialLinks: [
    // { label: 'Instagram', url: 'https://instagram.com/yourpage' },
  ],

  // Genuine customer testimonials only. The section is hidden while this is empty.
  // { name: 'Customer name', location: 'Sector 57, Gurugram', quote: '...', service: 'Home Renovation' }
  // 5-star reviews from verified customers (copied from the review screenshots in Drive).
  testimonials: [
    { name: 'Verified customer', date: 'Mar 2026', service: 'Painting', rating: 5, quote: "Vishal and his team are true professionals. They just completed a full-house painting project for me, and I am beyond impressed. Vishal’s ability to listen to the client’s vision while offering expert recommendations. The crew, Karan and others, was efficient, respectful, and the quality of work is top-tier. I highly recommend them for any high-end residential work." },
    { name: 'Verified customer', date: 'Mar 2026', service: '', rating: 5, quote: "Vishal is thorough professional, soft spoken, takes ownership. I am glad I took service from him. Highly recommended." },
    { name: 'Verified customer', date: 'Sep 2024', service: 'Painting', rating: 5, quote: "Vishal and his team was very professional. They did the job very well. There is no spot of paint left. Just amazing work. Excellent service and most importantly their behaviour was top notch, very polite and respectful." },
    { name: 'Verified customer', date: 'Apr 2024', service: '', rating: 5, quote: "Vishal is dignified and very professional in terms of dealing with the work from the beginning to an end. Explained everything diligently and supported to get completed the job nicely." },
    { name: 'Verified customer', date: 'May 2021', service: 'Wall design', rating: 5, quote: "Vishal did a great work. He made the lifeless wall living. The execution of my taste and preference is seen in his work. We are extremely happy and satisfied with the work." },
    { name: 'Verified customer', date: 'Jun 2021', service: 'Painting & repairs', rating: 5, quote: "Vishal Lakher did an excellent job with his team of painting and repairing some rooms. Polite, punctual, flexible where requested, would fully recommend his services to friends. 5+ star work. Well done." },
    { name: 'Verified customer', date: 'Oct 2021', service: '', rating: 5, quote: "Vishal as supervisor has been especially good with very good followup and focus on getting work done as per plan." },
    { name: 'Verified customer', date: 'Oct 2024', service: 'Home painting', rating: 5, quote: "Mr. Vishal was very good in nature and cooperation, under his guidance, his team done the good home painting job." },
    { name: 'Verified customer', date: 'Mar 2021', service: '', rating: 5, quote: "Vishal and his team did an amazing job. Very professional and responsible attitude and on time completion." },
  ],

  // Default social-share image (1200×630 recommended).
  ogImage: '/assets/og/og-default.jpg',
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
