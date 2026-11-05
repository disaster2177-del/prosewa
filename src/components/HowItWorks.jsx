import { Link } from 'react-router-dom';
import { MessageSquareText, Users, FileCheck2, CalendarCheck } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const steps = [
  { icon: MessageSquareText, title: 'Share Your Requirements', text: 'Tell us about your property, the work you have in mind and your preferred timeline.' },
  { icon: Users, title: 'Discuss Your Project', text: 'We talk through your goals and, where needed, visit the site to understand conditions.' },
  { icon: FileCheck2, title: 'Review the Proposed Scope', text: 'You receive a clear scope of work and quotation to review, question and refine.' },
  { icon: CalendarCheck, title: 'Plan the Work and Execution', text: 'Once agreed, we plan the stages and schedule, and keep you updated as work progresses.' },
];

export default function HowItWorks({ showCta = true }) {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" eyebrow="How It Works" title="A clear process from first call to finished work" align="center" />
        <ol className="process-grid">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="process-step" delay={i * 140}>
              <span className="process-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <s.icon size={28} className="process-icon" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        {showCta && (
          <div className="center mt-lg">
            <Link to="/consultation" className="btn btn-primary btn-lg">Start with a Free Consultation</Link>
          </div>
        )}
      </div>
    </section>
  );
}
