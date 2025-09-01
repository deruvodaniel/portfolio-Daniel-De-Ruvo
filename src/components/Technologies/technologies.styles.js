import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionTechnologies = styled.section`
  margin: 120px 0;
  padding-top: 80px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--colorPrimary);
  
  & > h2 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 80px;
    text-align: center;
    background: linear-gradient(135deg, var(--colorPrimary) 0%, var(--colorSecondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 4px;
      background: linear-gradient(90deg, var(--colorSecondary), var(--colorAccent));
      border-radius: 2px;
    }
  }
  
  ${mediaQueries.desktop} {
    margin: 150px 0;
    
    & > h2 {
      font-size: 5rem;
      margin-bottom: 120px;
    }
  }
`;

export const ContainerTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 32px;
  max-width: 1000px;
  width: 100%;
  justify-items: center;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 40px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 180px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--colorSecondary), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-12px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    width: 200px;
    height: 200px;
  }
  
  .tech-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
  
  .tech-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--colorPrimary);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &:hover .tech-icon {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3));
  }
  
  &:hover .tech-name {
    color: var(--colorSecondary);
  }
  
  ${mediaQueries.desktop} {
    padding: 40px 32px;
    min-height: 200px;
    
    .tech-icon {
      width: 70px;
      height: 70px;
    }
    
    .tech-name {
      font-size: 1.2rem;
    }
  }
`;