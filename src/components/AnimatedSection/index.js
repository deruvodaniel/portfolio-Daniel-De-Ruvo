import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  opacity: 0;
  transform: translateY(24px);
  filter: blur(4px);
  transition: opacity 420ms ease-out, transform 420ms ease-out, filter 420ms ease-out;
  will-change: opacity, transform, filter;
  display: block;
  content-visibility: auto;
  contain-intrinsic-size: auto 1200px;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: none;
  }
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const AnimatedSection = ({ children, as = 'section', className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Wrapper as={as} ref={ref} className={`${className || ''} ${visible ? 'is-visible' : ''}`.trim()}>
      {children}
    </Wrapper>
  );
};

export default AnimatedSection;
