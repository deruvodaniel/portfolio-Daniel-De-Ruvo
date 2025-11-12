import { css } from 'styled-components';
import { mediaQueries } from 'styles';

// Common spacing utilities
export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px'
};

// Gradient mixins for consistent branding
export const gradientText = css`
  background: var(--gradientPrimary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const gradientButton = css`
  background: var(--gradientPrimary);
  color: var(--buttonOnGradientText);
  border: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadowPrimary);
  }
`;

export const gradientBorder = css`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: var(--gradientPrimary);
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
  }
`;

// Common responsive padding mixin
export const sectionPadding = css`
  padding: 30px 0;
  
  ${mediaQueries.desktop} {
    padding: 60px 0;
  }
`;

// Common title styling mixin
export const sectionTitle = css`
  ${gradientText}
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  letter-spacing: -2px;
  line-height: 0.9;
  margin: 28px 0 40px 0;
  transform: translateY(calc(var(--scrollY, 0) * 0.018px));
  will-change: transform;

  ${mediaQueries.desktop} {
    font-size: 4.5rem;
    margin: 40px 0 60px 0;
    letter-spacing: -3px;
  }
`;

// Common card styling mixin
export const baseCard = css`
  background: var(--cardBackground);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: var(--colorPrimary);
  }

  [data-theme="dark"] & {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(0, 229, 255, 0.2);
    }
  }

  ${mediaQueries.tablet} {
    border-radius: 16px;
  }
`;

// Common responsive padding for cards
export const cardPadding = css`
  padding: 16px 20px;

  ${mediaQueries.tablet} {
    padding: 20px 24px;
  }

  ${mediaQueries.desktop} {
    padding: 24px 28px;
  }
`;

// Common focus styles for accessibility
export const focusStyles = css`
  outline: none;

  &:focus {
    outline: 2px solid var(--colorPrimary);
    outline-offset: -2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--colorPrimary);
    outline-offset: -2px;
  }
`;

// Common text styles
export const textStyles = {
  primary: css`
    color: var(--textPrimary);
    font-weight: 600;
  `,
  secondary: css`
    color: var(--textSecondary);
    font-weight: 400;
  `,
  muted: css`
    color: var(--textMuted);
    font-weight: 400;
  `
};

// Common responsive font sizes
export const fontSize = {
  xs: css`
    font-size: 0.8rem;
    ${mediaQueries.tablet} { font-size: 0.9rem; }
    ${mediaQueries.desktop} { font-size: 1rem; }
  `,
  sm: css`
    font-size: 0.9rem;
    ${mediaQueries.tablet} { font-size: 1rem; }
    ${mediaQueries.desktop} { font-size: 1.1rem; }
  `,
  md: css`
    font-size: 1rem;
    ${mediaQueries.tablet} { font-size: 1.1rem; }
    ${mediaQueries.desktop} { font-size: 1.2rem; }
  `,
  lg: css`
    font-size: 1.2rem;
    ${mediaQueries.tablet} { font-size: 1.4rem; }
    ${mediaQueries.desktop} { font-size: 1.6rem; }
  `,
  xl: css`
    font-size: 1.4rem;
    ${mediaQueries.tablet} { font-size: 1.6rem; }
    ${mediaQueries.desktop} { font-size: 1.8rem; }
  `
};