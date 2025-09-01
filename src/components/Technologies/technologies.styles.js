import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionTechnologies = styled.section`
  margin: 100px 0;
  padding: 80px 0;
  z-index: 50;
  position: relative;
  
  & > h2 {
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 100px;
    text-align: center;
    color: var(--colorPrimary);
    letter-spacing: -2px;
    line-height: 0.9;
  }
  
  ${mediaQueries.desktop} {
    margin: 160px 0;
    padding: 100px 0;
    
    & > h2 {
      font-size: 9rem;
      margin-bottom: 150px;
      letter-spacing: -5px;
    }
  }
`;

export const ContainerTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--borderColor);
  border-radius: 24px;
  overflow: hidden;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 28px;
  background: var(--background);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 160px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    background: var(--backgroundCardHover);
    transform: scale(1.05);
  }
  
  &:hover::before {
    opacity: 0.1;
  }
  
  .tech-icon {
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
    transition: all 0.4s ease;
    filter: brightness(1.2);
  }
  
  .tech-fallback {
    width: 60px;
    height: 60px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundCard);
    border: 1px solid var(--borderColor);
    color: var(--colorSecondary);
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  .tech-name {
    font-size: 1rem;
    font-weight: 700;
    color: var(--colorPrimary);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }
  
  &:hover .tech-icon {
    transform: scale(1.2);
    filter: brightness(1.5) drop-shadow(0 0 20px rgba(100, 255, 218, 0.6));
  }
  
  &:hover .tech-name {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  ${mediaQueries.desktop} {
    padding: 48px 36px;
    min-height: 200px;

    .tech-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }

    .tech-name {
      font-size: 1.1rem;
    }
  }
`;
