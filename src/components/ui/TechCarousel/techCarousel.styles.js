import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { baseCard, spacing, fontSize, textStyles } from 'styles/mixins';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: visible;
  padding: 20px 0 40px 0;
  margin: 0 -20px;
  position: relative;

  ${mediaQueries.tablet} {
    margin: 0 -40px;
  }

  ${mediaQueries.desktop} {
    margin: 0 -60px;
  }
`;

export const TechSlide = styled.div`
  ${baseCard}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.md};
  width: 100%;
  height: 120px;
  opacity: 0.5;
  cursor: grab;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  user-select: none;
  
  &:active {
    cursor: grabbing;
  }

  ${mediaQueries.tablet} {
    padding: ${spacing.md};
    height: 130px;
  }

  ${mediaQueries.desktop} {
    padding: ${spacing.lg};
    height: 140px;
  }
`;

export const TechIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
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
  transition: all 0.3s ease;
`;

export const CarouselContainer = styled.div`
  .swiper {
    width: 100%;
    padding: 20px 20px 50px 20px;
    position: relative;
    overflow: visible;

    ${mediaQueries.tablet} {
      padding: 20px 40px 50px 40px;
    }

    ${mediaQueries.desktop} {
      padding: 20px 60px 50px 60px;
    }
  }

  .swiper-slide {
    width: 140px !important;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    
    ${mediaQueries.tablet} {
      width: 150px !important;
    }

    ${mediaQueries.desktop} {
      width: 160px !important;
    }
  }

  /* Center slide gets highlighted */
  .swiper-slide-active {
    transform: scale(1.1);
    z-index: 2;

    ${TechSlide} {
      opacity: 1;
      box-shadow: 0 8px 24px rgba(8, 145, 178, 0.25);
      border-color: var(--colorPrimary);
    }

    ${TechIcon} svg {
      transform: scale(1.05);
    }

    ${TechName} {
      color: var(--colorPrimary);
      font-weight: 600;
    }
  }

  /* Pagination dots */
  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-pagination-bullet {
    background: var(--colorPrimary);
    opacity: 0.3;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 24px;
    border-radius: 4px;
  }
`;