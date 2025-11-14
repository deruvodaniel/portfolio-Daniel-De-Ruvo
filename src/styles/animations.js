// Centralized Framer Motion animation variants
// Use these instead of repeating animation configs across components

export const fadeInSlide = {
  initial: { opacity: 0, x: -500 },
  whileInView: { opacity: 1, x: 0 },
  transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export const fadeInSlideRight = {
  initial: { opacity: 0, x: 500 },
  whileInView: { opacity: 1, x: 0 },
  transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export const fadeInBlur = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-50px" }
});

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 }
});

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay },
  viewport: { once: true, amount: 0.3 }
});

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.3 }
});

// Stagger children animation
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, amount: 0.2 }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};
