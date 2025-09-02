import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const CountUp = ({ to = 0, duration = 1200, suffix = '+' }) => {
  const [value, setValue] = useState(0);
  const startTs = useRef(null);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf;
    const animate = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const p = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(animate); else done.current = true;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          raf = requestAnimationFrame(animate);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return <span ref={ref} className="number">{value}{suffix}</span>;
};

export default CountUp;
