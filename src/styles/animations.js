// Centralized Framer Motion animation variants
// Use these instead of repeating animation configs across components

// Easing curves
export const easeOut = [0.22, 1, 0.36, 1];
export const easeInOut = [0.4, 0, 0.2, 1];

// Basic fade animations
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: easeOut },
  viewport: { once: true, amount: 0.3 }
});

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeOut },
  viewport: { once: true, amount: 0.2 }
});

export const fadeInDown = (delay = 0) => ({
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeOut },
  viewport: { once: true, amount: 0.2 }
});

export const fadeInBlur = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.6, delay, ease: easeOut },
  viewport: { once: true, margin: "-50px" }
});

// Slide animations
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

// Scale animations
export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: easeOut },
  viewport: { once: true, amount: 0.3 }
});

export const scaleInSpring = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { type: "spring", stiffness: 200, damping: 15, delay },
  viewport: { once: true, amount: 0.3 }
});

// Stagger animations
export const staggerContainer = (staggerDelay = 0.1) => ({
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: staggerDelay
    }
  },
  viewport: { once: true, amount: 0.2 }
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut }
};

// Hover interactions (for buttons, cards, etc.)
export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 }
};

export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2, ease: easeOut } },
  whileTap: { y: 0 }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
    transition: { duration: 0.3 }
  }
};

// Tab/Modal animations
export const tabFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.2, ease: easeInOut }
};

export const modalFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2, ease: easeInOut }
};

// Page transitions
export const pageSlide = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.3, ease: easeOut }
};
