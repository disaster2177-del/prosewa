import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered entrance animation.
 * variant: 'up' (default) | 'left' | 'right' | 'zoom' | 'clip' (image wipe)
 * delay:   ms. Use it to stagger items in a grid.
 * Automatically disabled for users who prefer reduced motion (see global.css).
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', className = '', delay = 0, children, style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -70px 0px', threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
