import services from '../data/services.js';
import { useCountUp } from '../lib/motion.js';

/**
 * Animated count-up strip.
 * These figures describe the SERVICE (number of services, process steps, etc.), not
 * invented performance claims. If you want to show years of experience or completed
 * projects, only add them here once they are real and verifiable.
 */
const STATS = [
  { end: services.length, suffix: '', label: 'Specialised services' },
  { end: 4, suffix: '', label: 'Step clear consultation process' },
  { end: 1, suffix: '', label: 'Team from structure to finish' },
  { end: 0, prefix: '₹', suffix: '', label: 'Cost for your first consultation' },
];

function Stat({ end, prefix = '', suffix = '', label }) {
  const [ref, value] = useCountUp(end);
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value">{prefix}{value}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="At a glance">
      <div className="container stats-grid">
        {STATS.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  );
}
