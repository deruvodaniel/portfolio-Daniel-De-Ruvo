export const mediaQueries = {
    bigScreen: "@media screen and (min-width: 1800px)",
    projects: "@media screen and (min-width: 1300px)",
    desktop: "@media screen and (min-width: 1024px)",
    tablet: "@media screen and (min-width: 767px)",
    mobile: "@media screen and (min-width: 320px)",
  };

// Design tokens - Spacing scale
export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
  xxxl: '96px',
};

// Design tokens - Typography scale
export const fontSize = {
  xs: '0.875rem',    // 14px
  sm: '1rem',        // 16px
  md: '1.125rem',    // 18px
  lg: '1.5rem',      // 24px
  xl: '2rem',        // 32px
  '2xl': '3rem',     // 48px
  '3xl': '4rem',     // 64px
  '4xl': '6rem',     // 96px
};

// Design tokens - Border radius scale
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
};

// Design tokens - Transitions
export const transition = {
  fast: '0.15s ease',
  base: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
};