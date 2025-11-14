export const smoothScrollTo = (target, options = {}) => {
  // Default offset: 80px for header on mobile, 100px on desktop
  const defaultOffset = window.innerWidth < 768 ? 80 : 100;
  const o = { offset: defaultOffset, duration: 900, easing: (t) => 1 - Math.pow(1 - t, 4), ...options };
  const el = typeof target === 'number' ? null : target;
  const top = typeof target === 'number'
    ? target
    : (el?.getBoundingClientRect().top || 0) + (window.pageYOffset || window.scrollY || 0);
  const finalTop = top - (o.offset || 0);

  const lenis = window.__lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(finalTop, { duration: o.duration / 1000, easing: o.easing });
    return;
  }
  try {
    window.scrollTo({ top: finalTop, behavior: 'smooth' });
  } catch {
    window.scrollTo(0, finalTop);
  }
};

export default smoothScrollTo;
