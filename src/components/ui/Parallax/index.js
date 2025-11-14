import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';
import useWidth from 'hooks/useWidth';

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
  filter: blur(28px);
  mix-blend-mode: screen;
  will-change: transform, filter;
  transform: translateZ(0);
`;

const Blob2 = styled(Blob)`
  background: radial-gradient(closest-side, rgba(34,197,94,0.18), transparent 70%);
`;

const Blob3 = styled(Blob)`
  background: radial-gradient(closest-side, rgba(0,229,255,0.15), transparent 70%);
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ParallaxBackground = () => {
  const { width } = useWidth();
  const scroll = useMotionValue(0);
  const smooth = useSpring(scroll, { stiffness: 70, damping: 20, mass: 0.25 });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = null;
    const setScroll = () => scroll.set(window.scrollY || window.pageYOffset || 0);
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScroll();
        raf = null;
      });
    };
    setScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scroll]);

  const y1 = useTransform(smooth, [0, 1200], [0, -90]);
  const x1 = useTransform(smooth, [0, 1200], [0, -50]);
  const r1 = useTransform(smooth, [0, 1200], [0, 8]);
  const s1 = useTransform(smooth, [0, 1200], [1, 1.04]);

  const y2 = useTransform(smooth, [0, 1200], [0, 100]);
  const x2 = useTransform(smooth, [0, 1200], [0, 60]);
  const r2 = useTransform(smooth, [0, 1200], [0, -6]);
  const s2 = useTransform(smooth, [0, 1200], [1, 1.03]);

  const y3 = useTransform(smooth, [0, 1200], [0, -40]);
  const x3 = useTransform(smooth, [0, 1200], [0, 90]);
  const r3 = useTransform(smooth, [0, 1200], [0, 6]);
  const s3 = useTransform(smooth, [0, 1200], [1, 1.02]);

  if (width < 768 || prefersReducedMotion()) return null;

  return (
    <Layer aria-hidden>
      <Blob style={{ top: '6%', left: '6%', y: y1, x: x1, rotate: r1, scale: s1 }} />
      <Blob2 style={{ top: '28%', right: '10%', y: y2, x: x2, rotate: r2, scale: s2 }} />
      <Blob3 style={{ bottom: '8%', left: '10%', width: '40vmax', height: '40vmax', y: y3, x: x3, rotate: r3, scale: s3 }} />
    </Layer>
  );
};
