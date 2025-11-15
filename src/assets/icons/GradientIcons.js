/**
 * Iconos SVG con gradientes para las skill cards
 * Todos los iconos usan el mismo esquema de color del tema
 */

export const GradientZap = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gZap" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M13 2L3 14h7l-1 8 12-14h-8l1-6z" stroke="url(#gZap)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const GradientLayout = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gLayout" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="url(#gLayout)" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="url(#gLayout)" strokeWidth="2" />
    <line x1="10" y1="10" x2="10" y2="20" stroke="url(#gLayout)" strokeWidth="2" />
  </svg>
);

export const GradientTrendingUp = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gTrend" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <polyline points="3,17 9,11 13,15 21,7" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="15,7 21,7 21,13" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const GradientUsers = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gUsers" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#gUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="9" cy="7" r="4" stroke="url(#gUsers)" strokeWidth="2" fill="none" />
    <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z" stroke="url(#gUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const GradientHeart = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gHeart" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" stroke="url(#gHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 5L8 21l4-7 4 7-4-16" stroke="url(#gHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const GradientBulb = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gBulb" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M9 21h6" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 17v4" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="12" cy="9" r="7" stroke="url(#gBulb)" strokeWidth="2" fill="none" />
    <path d="M12 2v2" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="m4.22 4.22 1.42 1.42" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="m18.36 5.64 1.42-1.42" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const GradientCode = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gCode" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--colorSecondary)" />
        <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <polyline points="16 18 22 12 16 6" stroke="url(#gCode)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="8 6 2 12 8 18" stroke="url(#gCode)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GradientMessageSquare = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gMessage" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--colorSecondary)" />
        <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="url(#gMessage)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GradientBrain = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gBrain" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="var(--colorSecondary)" />
        <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="3" stroke="url(#gBrain)" strokeWidth="2" />
    <path d="M3 12h6m6 0h6M12 3v6m0 6v6" stroke="url(#gBrain)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="5.5" r="1.5" fill="url(#gBrain)" />
    <circle cx="18.5" cy="12" r="1.5" fill="url(#gBrain)" />
    <circle cx="12" cy="18.5" r="1.5" fill="url(#gBrain)" />
    <circle cx="5.5" cy="12" r="1.5" fill="url(#gBrain)" />
  </svg>
);
