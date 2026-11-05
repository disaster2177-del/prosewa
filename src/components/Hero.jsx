import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../data/siteConfig.js';
import { useParallax } from '../lib/motion.js';

// Headline split into words for the staggered reveal. `em: true` renders that word in italic terracotta.
const HEADLINE = [
  { w: 'Professional' }, { w: 'Home' }, { w: 'Improvement' }, { w: '&' },
  { w: 'Civil', em: true }, { w: 'Construction', em: true }, { w: 'in' }, { w: 'Gurugram' },
];

export default function Hero() {
  const mediaRef = useParallax(0.3);
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Replace /assets/hero/hero-home.jpg with your best project photo (e.g. hero-home.webp, ~1920px wide). */}
      <div className="hero-media parallax" ref={mediaRef}>
        <img className="hero-bg" src="/assets/hero/hero-home.jpg" alt="" width="1920" height="1080" fetchpriority="high" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="eyebrow eyebrow-light hero-fade" style={{ '--d': '0.2s' }}>
          {siteConfig.city}, {siteConfig.region}
        </p>
        <h1 id="hero-title" aria-label="Professional Home Improvement & Civil Construction in Gurugram">
          {HEADLINE.map((item, i) => (
            <span className="hero-word" key={i} aria-hidden="true">
              <span style={{ '--i': i }}>{item.em ? <em>{item.w}</em> : item.w}</span>
              {i < HEADLINE.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        <p className="hero-lead hero-fade" style={{ '--d': '1s' }}>
          From civil construction and home renovation to finishing and property improvements, we help
          transform your space with thoughtful planning, quality workmanship, and dependable project
          execution.
        </p>
        <div className="hero-actions hero-fade" style={{ '--d': '1.15s' }}>
          <Link to="/consultation" className="btn btn-primary btn-lg">
            Get Free Consultation <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <Link to="/projects" className="btn btn-outline-light btn-lg">
            Explore Our Projects
          </Link>
        </div>
      </div>

      {/* Slowly rotating circular badge */}
      <svg className="hero-badge" viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text><textPath href="#badge-circle">FREE CONSULTATION · GURUGRAM · </textPath></text>
        <circle cx="60" cy="60" r="20" fill="#C2562E" />
        <path d="M52 64V57l8-6 8 6v7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>

      <a href="#services" className="scroll-indicator" aria-label="Scroll to services">
        <span />
      </a>
    </section>
  );
}
