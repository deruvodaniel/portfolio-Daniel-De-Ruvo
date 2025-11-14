import styled from 'styled-components';
import { mediaQueries } from '../../../styles';

export const MobileCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0 40px 0;

  .projects-swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    align-items: stretch;
  }

  .swiper-pagination {
    bottom: 10px !important;
  }

  .swiper-pagination-bullet {
    background: var(--colorSecondary);
    opacity: 0.4;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
  }

  ${mediaQueries.tablet} {
    display: none;
  }
`;

export const CarouselContainer = styled.div`
  display: none;

  ${mediaQueries.tablet} {
    display: block;
    position: relative;
    width: 100%;
    max-height: 500px;
    
    &:hover {
      ${'' /* Trigger para mostrar los botones de navegación */}
    }
  }

  ${mediaQueries.desktop} {
    max-height: 550px;
  }
`;

export const CarouselWrapper = styled.div`
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.tablet} {
    height: 500px;
  }

  ${mediaQueries.desktop} {
    height: 550px;
  }
`;

export const CarouselPage = styled.div`
  height: 600px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  ${mediaQueries.tablet} {
    height: 500px;
  }

  ${mediaQueries.desktop} {
    height: 550px;
  }
`;

export const ProjectPair = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 0;
  }

  ${mediaQueries.desktop} {
    gap: 40px;
  }
`;

export const NavigationDots = styled.div`
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${mediaQueries.tablet} {
    gap: 16px;
  }
  
  ${CarouselContainer}:hover & {
    opacity: 1;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--colorSecondary);
  background: ${props => props.$active ? 'var(--colorSecondary)' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    transform: scale(1.2);
    background: var(--colorSecondary);
  }

  &:focus {
    outline: 2px solid var(--colorSecondary);
    outline-offset: 2px;
  }

  ${mediaQueries.desktop} {
    width: 14px;
    height: 14px;
  }
`;

export const NavigationButtons = styled.div`
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;
  gap: 12px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${mediaQueries.tablet} {
    display: flex;
  }
  
  ${CarouselContainer}:hover & {
    opacity: 1;
  }
`;

export const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--borderColor);
  background: var(--backgroundCard);
  color: var(--colorPrimary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover:not(:disabled) {
    background: var(--colorSecondary);
    border-color: var(--colorSecondary);
    color: var(--buttonOnGradientText);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid var(--colorSecondary);
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CarouselProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--borderColor);
  border-radius: 2px;
  overflow: hidden;

  ${mediaQueries.tablet} {
    display: none;
  }
`;
