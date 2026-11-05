import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, align = 'left', id }) {
  return (
    <Reveal className={`section-heading align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </Reveal>
  );
}
