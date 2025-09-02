import { useEffect, useRef, useState } from 'react';

export const ParallaxText = ({ As = 'div', children, amount = 28, fade = 0, className }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: 'translateY(0px)' });

  useEffect(() => {
    let raf;
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = vh * 0.5;
      const middle = rect.top + rect.height / 2;
      const distance = middle - center; // px from center
      const progress = Math.max(-1, Math.min(1, distance / vh));
      const y = progress * amount;
      const s = { transform: `translateY(${y.toFixed(2)}px)` };
      if (fade > 0) {
        const op = 1 - Math.min(1, Math.abs(progress) * fade);
        s.opacity = op;
      }
      setStyle(s);
      raf = null;
    };

    const onScroll = () => {
      if (raf) return; raf = requestAnimationFrame(update);
    };
    const onResize = () => update();

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount, fade]);

  const Comp = As; // can be tag name or component
  return <Comp ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }}>{children}</Comp>;
};

export default ParallaxText;
