import Lenis from 'lenis';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let singleton = null;
let rafId = null;

export function initLenis() {
  if (typeof window === 'undefined') return () => {};

  if (singleton) {
    return () => {
      // no-op; singleton managed globally
    };
  }

  if (prefersReducedMotion()) {
    // Respect users who prefer reduced motion
    return () => {};
  }

  // Disable smooth scrolling on touch devices / small screens to improve mobile performance
  const isCoarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const isSmallViewport = window.innerWidth && window.innerWidth < 768;
  if (isCoarsePointer || isSmallViewport) {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 0.75,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  });

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  const handleVisibility = () => {
    if (document.hidden) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    } else if (!rafId) {
      rafId = requestAnimationFrame(raf);
    }
  };
  document.addEventListener('visibilitychange', handleVisibility);

  // Expose for scroll helpers
  window.__lenis = lenis;
  singleton = { lenis, cleanup: () => {
    document.removeEventListener('visibilitychange', handleVisibility);
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    lenis.destroy();
    window.__lenis = undefined;
    singleton = null;
  }};

  return () => {
    if (singleton) {
      singleton.cleanup();
    }
  };
}

export default initLenis;
