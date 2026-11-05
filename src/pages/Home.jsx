import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO, { businessSchema, faqSchema } from '../components/SEO.jsx';
import Hero from '../components/Hero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Gallery from '../components/Gallery.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import StatsStrip from '../components/StatsStrip.jsx';
import services from '../data/services.js';
import { featuredProjects } from '../data/projects.js';
import faqs from '../data/faqs.js';

export default function Home() {
  const featured = featuredProjects().slice(0, 6);
  return (
    <>
      <SEO
        title="Home Interiors & Renovation in Gurugram, Delhi NCR & Noida"
        description="Wall moulding, PVC panels, louvers, wallpaper, glass work, false ceilings, wooden flooring and renovation in Gurugram, Delhi NCR and Noida. Explore our projects and request a free consultation."
        path="/"
        jsonLd={[businessSchema(), faqSchema(faqs)]}
      />
      <Hero />
      <StatsStrip />

      {/* Services */}
      <section id="services" className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            eyebrow="What We Do"
            title="Interior, renovation & finishing services"
            text="One team for walls, ceilings, floors and finishes, for homes, offices and shops across Gurugram, Delhi NCR and Noida."
          />
          <div className="card-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 110}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="section section-ivory" aria-labelledby="about-intro-title">
        <div className="container split">
          <div className="split-media">
            <Reveal variant="clip">
              {/* Replace with a photo of your team or a site in progress */}
              <img src="/assets/about/about-team.jpg" alt="Our craftsman cutting wall moulding on site" loading="lazy" width="720" height="560" />
            </Reveal>
          </div>
          <Reveal className="split-content" variant="right" delay={150}>
            <p className="eyebrow">About Us</p>
            <h2 id="about-intro-title">Transforming homes <em>across Delhi NCR</em></h2>
            <p>
              We are a Gurugram-based interiors team serving Delhi NCR and Noida. From a single feature wall to a
              full home makeover, we bring moulding, panelling, wallpaper, glass, ceilings, flooring and
              painting together under one coordinated plan.
            </p>
            <ul className="check-list">
              <li><CheckCircle2 size={20} aria-hidden="true" /> Wall moulding, PVC panels, louvers and wallpaper</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Glass and mirror work, false ceilings and wooden flooring</li>
              <li><CheckCircle2 size={20} aria-hidden="true" /> Complete home renovation, painting and finishing</li>
            </ul>
            <Link to="/about" className="btn btn-outline">
              More About Us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      {/* Featured projects */}
      <section className="section" aria-labelledby="projects-title">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading id="projects-title" eyebrow="Our Projects" title="Featured work" text="A selection of interior, renovation and finishing projects." />
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
          <div className="card-grid">
            {featured.map((p, i) => (
              <Reveal key={p.slug} variant="zoom" delay={(i % 3) * 110}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section section-ivory" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading id="gallery-title" eyebrow="Gallery" title="Photos & videos from our sites" />
            <Link to="/gallery" className="btn btn-outline">Open Full Gallery</Link>
          </div>
          <Gallery limit={8} />
        </div>
      </section>

      <HowItWorks />
      <Testimonials />

      <section className="section section-ivory" aria-labelledby="faq-title">
        <div className="container narrow">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Frequently asked questions" align="center" />
          <FAQ items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
