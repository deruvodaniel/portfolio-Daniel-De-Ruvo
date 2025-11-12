import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { baseCard, spacing, fontSize, textStyles } from 'styles/mixins';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  margin: 0 -20px;
  position: relative;

  /* Fade effect on edges */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 60px;
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right, 
      var(--backgroundColor) 0%, 
      var(--backgroundColor) 20%, 
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left, 
      var(--backgroundColor) 0%, 
      var(--backgroundColor) 20%, 
      transparent 100%
    );
  }

  ${mediaQueries.tablet} {
    margin: 0 -40px;
    
    &::before,
    &::after {
      width: 80px;
    }
  }

  ${mediaQueries.desktop} {
    margin: 0 -60px;
    
    &::before,
    &::after {
      width: 100px;
    }
  }
`;

export const CarouselContainer = styled.div`
  .swiper {
    width: 100%;
    padding: 20px 20px 40px 20px;
    position: relative;

    ${mediaQueries.tablet} {
      padding: 20px 40px 40px 40px;
    }

    ${mediaQueries.desktop} {
      padding: 20px 60px 40px 60px;
    }
  }

  .swiper-slide {
    width: auto !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }

  .swiper-wrapper {
    transition-timing-function: linear !important;
    animation: fadeSlide 20s linear infinite;
  }

  @keyframes fadeSlide {
    0% {
      opacity: 0.8;
    }
    10%, 90% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

export const TechSlide = styled.div`
  ${baseCard}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.sm};
  width: 140px;
  height: 120px;
  flex-shrink: 0;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-8px) scale(1.05);
    z-index: 5;
  }

  ${mediaQueries.tablet} {
    padding: ${spacing.md};
    width: 150px;
    height: 130px;
  }

  ${mediaQueries.desktop} {
    padding: ${spacing.lg};
    width: 160px;
    height: 140px;
  }
`;

export const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  ${TechSlide}:hover & {
    transform: scale(1.1);
  }

  ${mediaQueries.tablet} {
    margin-bottom: 14px;
    
    svg {
      width: 36px;
      height: 36px;
    }
  }

  ${mediaQueries.desktop} {
    margin-bottom: 16px;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const TechName = styled.span`
  ${fontSize.sm}
  ${textStyles.secondary}
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.3px;
  transition: color 0.3s ease;

  ${TechSlide}:hover & {
    ${textStyles.primary}
  }
`;