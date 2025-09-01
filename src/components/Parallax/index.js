import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

const Layer = styled(motion.div)`
  position: fixed;
  inset: -20vh -20vw auto auto;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled(motion.div)`
  position: absolute;
  width: 48vmax;
  height: 48vmax;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0,229,255,0.16), transparent 70%);
  filter: blur(36px);
  mix-blend-mode: screen;
`;

const Blob2 = styled(Blob)`
  right: 10%;
  top: 30%;
  background: radial-gradient(closest-side, rgba(34,197,94,0.14), transparent 70%);
`;

export const ParallaxBackground = () => {
  const scroll = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => scroll.set(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll]);

  const y1 = useTransform(scroll, [0, 800], [0, -100]);
  const y2 = useTransform(scroll, [0, 800], [0, 120]);
  const x1 = useTransform(scroll, [0, 800], [0, -60]);
  const x2 = useTransform(scroll, [0, 800], [0, 60]);
  const y3 = useTransform(scroll, [0, 800], [0, -40]);
  const x3 = useTransform(scroll, [0, 800], [0, 80]);

  return (
    <Layer aria-hidden>
      <Blob style={{ y: y1, x: x1 }} />
      <Blob2 style={{ y: y2, x: x2 }} />
      <Blob style={{ top: '60%', left: '5%', width: '36vmax', height: '36vmax', y: y3, x: x3 }} />
    </Layer>
  );
};
