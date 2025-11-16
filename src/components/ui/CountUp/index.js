import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const CountUp = ({ to = 0, duration = 2500, suffix = '+', 'aria-label': ariaLabel }) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    const el = ref.current;
    if (!el || hasAnimated) return;

    const animate = () => {
      setHasAnimated(true);
      const startTime = Date.now();
      
      const updateValue = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(to * eased);
        
        setValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };
      
      requestAnimationFrame(updateValue);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate();
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '50px 0px'
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [to, duration, hasAnimated]);

  return (
    <span 
      ref={ref} 
      className="number"
      aria-label={ariaLabel}
      role="status"
      aria-live="polite"
    >
      {value}{suffix}
    </span>
  );
};

export default CountUp;
