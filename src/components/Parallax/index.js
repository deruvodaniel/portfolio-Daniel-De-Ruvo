import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Layer = styled(motion.div)`
  position: fixed;
  inset: -20vh -20vw auto auto;
  pointer-events: none;
  z-index: 0;
`;

const Blob = styled(motion.div)`
  position: absolute;
  width: 40vmax;
  height: 40vmax;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(0,229,255,0.10), transparent 70%);
  filter: blur(30px);
`;

const Blob2 = styled(Blob)`
  right: 10%;
  top: 30%;
  background: radial-gradient(closest-side, rgba(34,197,94,0.10), transparent 70%);
`;

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -60]);
  const y2 = useTransform(scrollY, [0, 800], [0, 80]);
  const x1 = useTransform(scrollY, [0, 800], [0, -40]);
  const x2 = useTransform(scrollY, [0, 800], [0, 40]);

  return (
    <Layer aria-hidden>
      <Blob style={{ y: y1, x: x1 }} />
      <Blob2 style={{ y: y2, x: x2 }} />
    </Layer>
  );
};
