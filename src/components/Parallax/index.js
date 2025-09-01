import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

const Layer = styled(motion.div)`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled(motion.div)`
  position: absolute;
  width: 56vmax;
  height: 56vmax;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0,229,255,0.22), transparent 70%);
  filter: blur(40px);
  mix-blend-mode: screen;
`;

const Blob2 = styled(Blob)`
  background: radial-gradient(closest-side, rgba(34,197,94,0.18), transparent 70%);
`;

const Blob3 = styled(Blob)`
  background: radial-gradient(closest-side, rgba(0,229,255,0.15), transparent 70%);
`;

export const ParallaxBackground = () => {
  const scroll = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => scroll.set(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll]);

  const y1 = useTransform(scroll, [0, 1200], [0, -140]);
  const x1 = useTransform(scroll, [0, 1200], [0, -80]);
  const r1 = useTransform(scroll, [0, 1200], [0, 12]);
  const s1 = useTransform(scroll, [0, 1200], [1, 1.06]);

  const y2 = useTransform(scroll, [0, 1200], [0, 160]);
  const x2 = useTransform(scroll, [0, 1200], [0, 90]);
  const r2 = useTransform(scroll, [0, 1200], [0, -10]);
  const s2 = useTransform(scroll, [0, 1200], [1, 1.05]);

  const y3 = useTransform(scroll, [0, 1200], [0, -60]);
  const x3 = useTransform(scroll, [0, 1200], [0, 120]);
  const r3 = useTransform(scroll, [0, 1200], [0, 8]);
  const s3 = useTransform(scroll, [0, 1200], [1, 1.04]);

  return (
    <Layer aria-hidden>
      <Blob style={{ top: '6%', left: '6%', y: y1, x: x1, rotate: r1, scale: s1 }} />
      <Blob2 style={{ top: '28%', right: '10%', y: y2, x: x2, rotate: r2, scale: s2 }} />
      <Blob3 style={{ bottom: '8%', left: '10%', width: '42vmax', height: '42vmax', y: y3, x: x3, rotate: r3, scale: s3 }} />
    </Layer>
  );
};
