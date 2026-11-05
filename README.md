# PROSEWA: Home Improvement & Civil Construction Website (Gurugram)

A responsive React.js (Vite) website for a civil construction, renovation and home-improvement business in Gurugram, Haryana.

- No login, signup or dashboard
- 10 individual service pages (`/services/<slug>`), each with its own content, FAQs, related projects and consultation CTA
- Projects with detail pages, plus a filterable photo and video gallery with a lightbox
- `/consultation` form with mandatory **phone, email and project description**, validation, and loading/success/error states
- Click-to-call, click-to-email and optional WhatsApp, all driven by one config file
- SEO: unique titles/descriptions, canonical URLs, Open Graph, JSON-LD (GeneralContractor, Service, BreadcrumbList, FAQPage), sitemap.xml and robots.txt

---

## 1. Run it locally

You need **Node.js 18+**.

```bash
npm install
npm run dev          # http://localhost:5173
```

While developing, a small yellow banner lists anything you haven't configured yet (phone, email, form endpoint). It never appears in the production build.

## 2. Add your business details (required)

Open **`src/data/siteConfig.js`** and fill in:

| Field | Example |
|---|---|
| `brandName` | `PROSEWA` |
| `siteUrl` | `https://www.prosewa.in` (your real domain, no trailing slash) |
| `phoneDisplay` | `+91 98765 43210` |
| `phoneE164` | `+919876543210` |
| `email` | `info@yourdomain.com` |
| `whatsappNumber` | `919876543210` (optional, no `+`) |
| `businessHours`, `streetAddress`, `postalCode`, `socialLinks` | optional |
| `testimonials` | genuine reviews only; the section stays hidden while this is empty |

If a field is empty, the buttons that depend on it are hidden, so the site never shows a dead "Call Us" or "Email Us" button.

## 3. Connect the consultation form (required to receive enquiries)

The form validates input in the browser, but it needs somewhere to send the data. Until you connect it, the form tells visitors honestly that online submission isn't available yet and shows your phone and email instead. It never pretends a request was sent.

**Easiest: Formspree (free tier, no server needed)**
1. Sign up at https://formspree.io → *New form* → copy the endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
2. Copy `.env.example` to `.env` and set:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
3. Restart `npm run dev` (or rebuild). Submissions arrive in your inbox.
   On Vercel or Netlify, add `VITE_FORM_ENDPOINT` under *Environment Variables* instead.

**Your own backend:** point `VITE_FORM_ENDPOINT` at an API that accepts a JSON `POST`. **Validate phone, email and projectDescription again on the server**, then return a 2xx status on success. The fields sent are:
`phone, email, projectDescription, fullName, serviceCategory, projectLocation, budget, contactMethod, _subject, submittedAt, page`.

The integration code is in `src/lib/submitConsultation.js`.

## 4. Add your own photos and videos

1. Put files under `public/assets/…`, for example:
   ```
   public/assets/projects/home-renovation/sector-57-living-room.jpg
   public/assets/projects/videos/sector-57-walkthrough.mp4
   ```
2. Edit **`src/data/projects.js`** and reference them **without** `public`:
   ```js
   coverImage: '/assets/projects/home-renovation/sector-57-living-room.jpg',
   galleryImages: [{ src: '/assets/projects/home-renovation/sector-57-kitchen.jpg', alt: 'Renovated kitchen with quartz counter' }],
   videoUrl: '/assets/projects/videos/sector-57-walkthrough.mp4',   // or a YouTube embed URL
   videoPoster: '/assets/projects/home-renovation/sector-57-living-room.jpg',
   ```
3. Set `isSample: false` on real projects, and delete the sample entries when you have your own.

The homepage, Projects page, Gallery filters, project detail pages and service pages all read from this one file.

**Other images to replace** (the current ones are labelled navy "PLACEHOLDER" graphics):

| Image | Path | Suggested size |
|---|---|---|
| Homepage hero | `public/assets/hero/hero-home.svg` → update the path in `src/components/Hero.jsx` | 1920×1080 |
| Service images | `public/assets/services/*.svg` → update `image` in `src/data/services.js` | 1280×840 |
| About images | `public/assets/about/*` → update in `About.jsx` / `Home.jsx` | 1440×1120 |
| Social share image | `public/assets/og/og-default.png` → `ogImage` in siteConfig | 1200×630 JPG/PNG |

**Media tips:** use descriptive file names; export photos as WebP or JPG at about 1600px wide and under ~300 KB (https://squoosh.app is free); keep MP4s under ~20 MB and host longer videos on YouTube; always write meaningful `alt` text.

## 5. Editing content

| What | File |
|---|---|
| Services (titles, descriptions, work types, FAQs, SEO title/description) | `src/data/services.js` |
| Projects and media | `src/data/projects.js` |
| General FAQs | `src/data/faqs.js` |
| About page story | `src/pages/About.jsx` (only add verifiable facts) |
| Colours and fonts (Earthy Architect theme: sand, terracotta, olive; Fraunces + Manrope) | top of `src/styles/global.css` |
| Animations (scroll reveals, hero text, parallax, count-up stats) | `src/components/Reveal.jsx`, `src/lib/motion.js`, `src/components/Hero.jsx`, `src/components/StatsStrip.jsx`. All animations switch off automatically for visitors who enable "reduce motion" on their device |
| Logo | `src/components/Logo.jsx` (instructions inside to switch to an image logo) |
| Privacy / Terms (templates, please review) | `src/pages/Privacy.jsx`, `src/pages/Terms.jsx` |

## 6. Build and deploy

```bash
npm run build     # regenerates sitemap.xml + robots.txt from your data, outputs /dist
npm run preview   # test the production build locally
```

Set `siteUrl` in `siteConfig.js` **before** building so the canonical URLs and sitemap point to your real domain.

- **Vercel:** import the repo; framework *Vite*. `vercel.json` already handles page routes.
- **Netlify:** build command `npm run build`, publish dir `dist`. `public/_redirects` handles routes.
- **cPanel / Hostinger / Apache:** upload the *contents* of `dist/` to `public_html`. The included `.htaccess` handles routes.

After going live, submit `https://yourdomain/sitemap.xml` in Google Search Console and set up a Google Business Profile with the same name, phone and area as in `siteConfig.js`.

## 7. SEO notes

- Every page sets a unique `<title>`, meta description, canonical URL and Open Graph tags (`src/components/SEO.jsx`).
- Structured data only uses values from `siteConfig.js`; nothing is invented.
- This is a client-rendered single-page app. Google renders JavaScript, but for the strongest SEO you can add static prerendering later, e.g. with `vite-react-ssg` or a prerender step on your host, without changing the page components.
- SEO improves discoverability but cannot guarantee rankings.

## Project structure

```
src/
  components/   Header, Footer, Hero, ServiceCard, ProjectCard, Gallery (+lightbox),
                ConsultationForm, CTASection, FAQ, SEO, Breadcrumbs, PageHeader,
                HowItWorks, WhyChooseUs, Testimonials, MediaPlayer, MobileContactBar, …
  pages/        Home, About, Services, ServiceDetail, Projects, ProjectDetail,
                GalleryPage, Consultation, Contact, Privacy, Terms, NotFound
  data/         siteConfig.js, services.js, projects.js, faqs.js
  lib/          submitConsultation.js, icons.js
  routes/       AppRoutes.jsx
  styles/       global.css
public/
  assets/       hero/, about/, services/, projects/<category>/, projects/videos/, og/
  robots.txt, sitemap.xml (generated), _redirects, .htaccess, favicon.svg
scripts/
  generate-sitemap.mjs
```
