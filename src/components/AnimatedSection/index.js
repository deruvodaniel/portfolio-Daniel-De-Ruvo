import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease, transform 600ms ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
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
          if (entry.isIntersecting) {
            setVisible(true);
            // Unobserve to keep it simple, fade-in once
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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
