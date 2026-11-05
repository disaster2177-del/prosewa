import { MessagesSquare, ClipboardList, Ruler, FileSearch, Building, Handshake } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

// Presented as service commitments, not performance claims.
const items = [
  { icon: MessagesSquare, title: 'Clear project communication', text: 'Regular updates on progress, decisions needed and any changes, so you always know where things stand.' },
  { icon: ClipboardList, title: 'Planning around your requirements', text: 'Work is planned around how you use your space, your preferences and your budget range.' },
  { icon: Ruler, title: 'Attention to workmanship', text: 'We pay attention to levels, joints, alignment and the finishing details that decide the final result.' },
  { icon: FileSearch, title: 'Transparent scope discussions', text: 'Scope, materials and exclusions are discussed openly and written down before work starts.' },
  { icon: Building, title: 'Residential & commercial support', text: 'Support for homes, builder floors, villas, shops and offices across Gurugram.' },
  { icon: Handshake, title: 'Customer-focused consultation', text: 'A no-obligation first conversation to understand your project before anything is committed.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-ivory" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading id="why-title" eyebrow="Our Commitments" title="How we work with every client" text="What you can expect from us on every project, big or small." align="center" />
        <div className="why-grid">
          {items.map((it, i) => (
            <Reveal key={it.title} className="why-card" variant="zoom" delay={(i % 3) * 110}>
              <span className="why-icon"><it.icon size={24} aria-hidden="true" /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
