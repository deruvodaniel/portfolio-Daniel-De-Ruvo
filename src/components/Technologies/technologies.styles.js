import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionTechnologies = styled.section`
  margin: 160px 0;
  padding: 120px 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--colorPrimary);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -30%;
    width: 160%;
    height: 100%;
    background: 
      radial-gradient(circle at 70% 30%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 12s ease-in-out infinite;
  }
  
  & > h2 {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 100px;
    text-align: center;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
      width: 140px;
      height: 4px;
      background: var(--gradientPrimary);
      border-radius: 2px;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      background: var(--gradientPrimary);
      border-radius: 50%;
      opacity: 0.05;
      filter: blur(80px);
      z-index: -1;
      animation: pulse 6s ease-in-out infinite;
    }
  }
  
  ${mediaQueries.desktop} {
    margin: 200px 0;
    padding: 140px 0;
    
    & > h2 {
      font-size: 6rem;
      margin-bottom: 140px;
    }
  }
`;

export const ContainerTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  justify-items: center;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 48px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 56px;
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 32px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 220px;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradientPrimary);
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
    background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-20px) scale(1.05);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 
      var(--shadowPrimary),
      0 0 60px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    width: 250px;
    height: 250px;
  }
  
  .tech-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;
    transition: all 0.4s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }
  
  .tech-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--colorPrimary);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
  }
  
  &:hover .tech-icon {
    transform: scale(1.2) rotate(15deg);
    filter: 
      drop-shadow(0 12px 24px rgba(0, 212, 255, 0.4))
      drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
  }
  
  &:hover .tech-name {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateY(-4px);
  }
  
  ${mediaQueries.desktop} {
    padding: 48px 40px;
    min-height: 260px;
    
    .tech-icon {
      width: 80px;
      height: 80px;
      margin-bottom: 28px;
    }
    
    .tech-name {
      font-size: 1.3rem;
    }
  }
`;