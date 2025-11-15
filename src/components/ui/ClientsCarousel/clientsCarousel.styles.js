import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { baseCard, spacing } from 'styles/mixins';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 30px 0 50px 0;
  margin: 0;
  position: relative;

  ${mediaQueries.tablet} {
    padding: 40px 0 60px 0;
  }

  ${mediaQueries.desktop} {
    padding: 50px 0 70px 0;
  }
`;

export const ClientLink = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ClientSlide = styled.div`
  ${baseCard}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg};
  width: 100%;
  min-height: 160px;
  opacity: 0.6;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  user-select: none;
  background: var(--cardBackground);
  border: 1px solid var(--borderColor);
  
  ${mediaQueries.tablet} {
    padding: ${spacing.xl};
    min-height: 180px;
  }

  ${mediaQueries.desktop} {
    padding: 32px;
    min-height: 200px;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(8, 145, 178, 0.25);
    border-color: var(--colorPrimary);
  }
`;

export const ClientLogo = styled.img`
  width: 100%;
  max-width: 140px;
  height: 70px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.7) contrast(1.3);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  margin-bottom: 16px;

  [data-theme="dark"] & {
    filter: grayscale(100%) brightness(2) contrast(0.85);
  }

  ${mediaQueries.tablet} {
    max-width: 160px;
    height: 80px;
    margin-bottom: 18px;
  }

  ${mediaQueries.desktop} {
    max-width: 180px;
    height: 90px;
    margin-bottom: 20px;
  }

  ${ClientSlide}:hover & {
    filter: grayscale(0%) brightness(1) contrast(1);
    transform: scale(1.05);

    [data-theme="dark"] & {
      filter: grayscale(0%) brightness(1.1) contrast(1);
    }
  }
`;

export const ClientName = styled.span`
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.3;
  letter-spacing: 0.5px;
  opacity: 0;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--textSecondary);
  max-width: 90%;

  ${mediaQueries.tablet} {
    font-size: 0.8rem;
  }

  ${mediaQueries.desktop} {
    font-size: 0.85rem;
  }

  ${ClientSlide}:hover & {
    opacity: 1;
    color: var(--colorPrimary);
  }
`;

export const CarouselContainer = styled.div`
  .swiper {
    width: 100%;
    padding: 20px 10px 50px 10px;
    position: relative;
    overflow: hidden;

    ${mediaQueries.tablet} {
      padding: 20px 30px 50px 30px;
    }

    ${mediaQueries.desktop} {
      padding: 20px 50px 50px 50px;
    }
  }

  .swiper-slide {
    width: 180px !important;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    
    ${mediaQueries.tablet} {
      width: 200px !important;
    }

    ${mediaQueries.desktop} {
      width: 220px !important;
    }
  }

  .swiper-slide-active {
    transform: scale(1.05);
    z-index: 2;

    ${ClientSlide} {
      opacity: 1;
    }
  }

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
