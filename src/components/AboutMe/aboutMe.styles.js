import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
  margin: 120px 0;
  padding: 100px 0;
  z-index: 50;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20%;
    width: 140%;
    height: 100%;
    background: 
      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 10s ease-in-out infinite reverse;
  }
  
  ${mediaQueries.desktop} {
    margin: 160px 0;
    padding: 120px 0;
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 40px;
  background: var(--gradientSecondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: var(--gradientSecondary);
    border-radius: 2px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: var(--gradientSecondary);
    border-radius: 50%;
    opacity: 0.1;
    filter: blur(60px);
    z-index: -1;
    animation: pulse 4s ease-in-out infinite;
  }
  
  ${mediaQueries.tablet} {
    font-size: 5rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 6rem;
    margin-bottom: 48px;
  }
`;

export const AboutMeDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 32px;
  
  strong {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.5rem;
    line-height: 1.9;
    margin-bottom: 40px;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 60px;
  
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: var(--backgroundCard);
    backdrop-filter: blur(20px);
    border: 1px solid var(--borderColor);
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--gradientPrimary);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-12px) scale(1.1);
      border-color: var(--colorSecondary);
      box-shadow: var(--glowPrimary);
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    &:last-child {
      background: var(--gradientPrimary);
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
      width: auto;
      min-width: 160px;
      border-radius: 35px;
      text-decoration: none;
      
      &::before {
        background: var(--gradientSecondary);
      }
    }
    
    & > img {
      width: 32px;
      height: 32px;
      filter: brightness(1.2);
      transition: all 0.3s ease;
    }
    
    &:hover > img {
      filter: brightness(1.5) drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
      transform: scale(1.1);
    }
  }
  
  ${mediaQueries.tablet} {
    gap: 40px;
    
    & > a {
      width: 80px;
      height: 80px;
      
      & > img {
        width: 36px;
        height: 36px;
      }
      
      &:last-child {
        font-size: 1.3rem;
        min-width: 180px;
      }
    }
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 100px;
  width: 100%;
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    margin-top: 120px;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 240px;
  
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
    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-16px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
  
  .icon {
    font-size: 4rem;
    margin-bottom: 24px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--colorPrimary);
    margin-bottom: 16px;
    text-align: center;
  }
  
  .description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    text-align: center;
  }
  
  &:hover .icon {
    transform: scale(1.2) rotate(10deg);
    filter: drop-shadow(0 8px 16px rgba(0, 212, 255, 0.4));
  }
  
  &:hover .title {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  ${mediaQueries.desktop} {
    padding: 56px 40px;
    min-height: 280px;
    
    .icon {
      font-size: 4.5rem;
    }
    
    .title {
      font-size: 1.6rem;
    }
    
    .description {
      font-size: 1.2rem;
    }
  }
`;