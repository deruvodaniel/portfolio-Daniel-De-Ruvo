import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  opacity: 0;
  transform: translateY(18px);
  filter: blur(2px);
  transition: opacity 680ms cubic-bezier(0.22, 1, 0.36, 1), transform 680ms cubic-bezier(0.22, 1, 0.36, 1), filter 680ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform, filter;
  display: block;
  content-visibility: ${({ $cv }) => $cv || 'auto'};
  contain-intrinsic-size: ${({ $cis }) => $cis || 'auto 1200px'};

  @media (max-width: 767px) {
    content-visibility: visible;
    contain-intrinsic-size: auto;
  }

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: none;
  }
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const AnimatedSection = ({ children, as = 'section', className, ...rest }) => {
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
    <Wrapper as={as} ref={ref} className={`${className || ''} ${visible ? 'is-visible' : ''}`.trim()} {...rest}>
      {children}
    </Wrapper>
  );
};

export default AnimatedSection;
