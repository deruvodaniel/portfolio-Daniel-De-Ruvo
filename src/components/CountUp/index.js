import { useEffect, useRef, useState } from 'react';

export const CountUp = ({ to = 0, duration = 1200, suffix = '+' }) => {
  const [value, setValue] = useState(0);
  const startTs = useRef(null);

  useEffect(() => {
    let raf;
    const animate = (ts) => {
      if (!startTs.current) startTs.current = ts;
      const p = Math.min(1, (ts - startTs.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span className="number">{value}{suffix}</span>;
};

export default CountUp;
