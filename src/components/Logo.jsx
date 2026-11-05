import siteConfig from '../data/siteConfig.js';

/**
 * Text-based logo. To use an image logo instead, place it at
 * /public/assets/brand/logo.svg and replace the markup below with:
 *   <img src="/assets/brand/logo.svg" alt={siteConfig.brandName} width="160" height="40" />
 */
export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="34" height="34">
          <circle cx="16" cy="16" r="16" fill={light ? '#C2562E' : '#2F3A2F'} />
          <path d="M8 22V14l8-6 8 6v8" fill="none" stroke={light ? '#F4EFE6' : '#E9A07F'} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M13 22v-5h6v5" fill="none" stroke="#F4EFE6" strokeWidth="2.4" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="logo-text">
        <span className="logo-name">{siteConfig.brandName}</span>
        <span className="logo-tagline">{siteConfig.tagline}</span>
      </span>
    </span>
  );
}
