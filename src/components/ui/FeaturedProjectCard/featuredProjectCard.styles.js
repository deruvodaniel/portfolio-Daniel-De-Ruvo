import styled from 'styled-components';
import { mediaQueries } from '../../../styles';
import { primaryButton, secondaryButton, cardStyle } from '../../../styles/mixins';

export const FeaturedCard = styled.div`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  position: relative;
  
  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }

  [data-theme="dark"] &:hover {
    box-shadow: 0 20px 60px rgba(0, 229, 255, 0.3);
  }

  ${mediaQueries.tablet} {
    flex-direction: row;
    min-height: 400px;
  }

  ${mediaQueries.desktop} {
    min-height: 450px;
    border-radius: 28px;
  }
`;

export const FeaturedImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  
  ${mediaQueries.tablet} {
    width: 50%;
    height: auto;
  }

  ${mediaQueries.desktop} {
    width: 55%;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${FeaturedCard}:hover & {
    transform: scale(1.08);
  }
`;

export const FeaturedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;

  ${mediaQueries.tablet} {
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  [data-theme="dark"] & {
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.6) 100%
    );

    ${mediaQueries.tablet} {
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
`;

export const FeaturedGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(100, 255, 218, 0.1) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  
  ${FeaturedCard}:hover & {
    opacity: 1;
  }
`;

export const FeaturedContent = styled.div`
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  justify-content: center;

  ${mediaQueries.tablet} {
    padding: 32px 28px;
    gap: 18px;
  }

  ${mediaQueries.desktop} {
    padding: 40px 36px;
    gap: 20px;
  }
`;

export const FeaturedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  background: var(--gradientPrimary);
  color: var(--buttonOnGradientText);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: var(--fontUI);

  ${mediaQueries.desktop} {
    font-size: 0.8rem;
    padding: 10px 18px;
  }
`;

export const FeaturedTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--colorPrimary);
  margin: 0;
  line-height: 1.2;
  font-family: var(--fontHeading);
  letter-spacing: -1px;

  ${mediaQueries.tablet} {
    font-size: 2.2rem;
  }

  ${mediaQueries.desktop} {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
  }
`;

export const FeaturedSubtitle = styled.p`
  font-size: 1rem;
  color: var(--colorSecondary);
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--fontUI);

  ${mediaQueries.desktop} {
    font-size: 1.1rem;
  }
`;

export const FeaturedDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--textSecondary);
  margin: 0;
  font-family: var(--fontBody);

  ${mediaQueries.tablet} {
    font-size: 1.1rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.15rem;
    line-height: 1.8;
  }
`;

export const FeaturedActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;

  ${mediaQueries.tablet} {
    gap: 16px;
    margin-top: 12px;
  }
`;

export const FeaturedPrimaryButton = styled.button`
  flex: 1;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  ${primaryButton}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${mediaQueries.desktop} {
    padding: 16px 32px;
    font-size: 1rem;
    border-radius: 12px;
    min-width: 160px;
  }
`;

export const FeaturedSecondaryButton = styled.button`
  flex: 1;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 0.95rem;
  cursor: pointer;
  font-weight: 700;
  ${secondaryButton}

  ${mediaQueries.desktop} {
    padding: 16px 32px;
    font-size: 1rem;
    border-radius: 12px;
    min-width: 160px;
  }
`;
