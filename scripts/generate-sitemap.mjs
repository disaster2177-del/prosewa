/**
 * Generates public/sitemap.xml and public/robots.txt from the site data.
 * Runs automatically before `npm run build` (or manually: `npm run sitemap`).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import siteConfig from '../src/data/siteConfig.js';
import services from '../src/data/services.js';
import projects from '../src/data/projects.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const base = siteConfig.siteUrl.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

const pages = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/services', priority: '0.9', freq: 'monthly' },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: '0.9', freq: 'monthly' })),
  { path: '/projects', priority: '0.8', freq: 'weekly' },
  ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: '0.6', freq: 'monthly' })),
  { path: '/gallery', priority: '0.7', freq: 'weekly' },
  { path: '/about', priority: '0.7', freq: 'yearly' },
  { path: '/consultation', priority: '0.8', freq: 'yearly' },
  { path: '/contact', priority: '0.7', freq: 'yearly' },
  { path: '/privacy-policy', priority: '0.2', freq: 'yearly' },
  { path: '/terms', priority: '0.2', freq: 'yearly' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${base}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml);
writeFileSync(resolve(root, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${pages.length} URLs) and robots.txt written for ${base}`);
