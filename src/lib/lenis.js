import Lenis from 'lenis';

export function initLenis() {
  const lenis = new Lenis({
    duration: 0.75,
    smoothWheel: true,
    smoothTouch: true,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });

  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}

export default initLenis;
