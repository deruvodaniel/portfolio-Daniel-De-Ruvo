import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ParallaxText = ({ As = 'div', children, amount = 28, fade = 0, className }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: 'translate3d(0,0,0)' });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setStyle({ transform: 'none', opacity: 1 });
      return;
    }

    let raf = null;
    let active = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Only compute when near viewport for performance
      if (rect.bottom < 0 || rect.top > vh * 1.2) {
        raf = null;
        return;
      }
      const center = vh * 0.5;
      const middle = rect.top + rect.height / 2;
      const distance = middle - center;
      const progress = Math.max(-1, Math.min(1, distance / vh));
      const y = progress * amount;
      const s = { transform: `translate3d(0, ${y.toFixed(2)}px, 0)` };
      if (fade > 0) {
        const op = 1 - Math.min(1, Math.abs(progress) * fade);
        s.opacity = op;
      }
      setStyle(s);
      raf = null;
    };

    const onScroll = () => {
      if (!active) return;
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    const onResize = () => update();

    // IntersectionObserver to toggle active updates
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          active = entry.isIntersecting || entry.intersectionRatio > 0;
          if (active) {
            if (!raf) raf = requestAnimationFrame(update);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);

    // Initial paint
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount, fade]);

  const Comp = As;
  return <Comp ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }}>{children}</Comp>;
};

export default ParallaxText;
