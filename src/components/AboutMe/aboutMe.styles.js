import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
  margin: 80px 0;
  padding-top: 120px;
  z-index: 50;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 60px;
  
  ${mediaQueries.tablet} {
    grid-template-columns: 1fr;
    gap: 80px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr;
    gap: 100px;
    margin: 120px 0;
    text-align: center;
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 800;
  font-size: 3.5rem;
  margin-bottom: 32px;
  background: linear-gradient(135deg, var(--colorPrimary) 0%, var(--colorSecondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--colorSecondary), var(--colorAccent));
    border-radius: 2px;
  }
  
  ${mediaQueries.tablet} {
    font-size: 4rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 4.5rem;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  ${mediaQueries.desktop} {
    font-size: 1.4rem;
    line-height: 1.9;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--backgroundCard);
    backdrop-filter: blur(20px);
    border: 1px solid var(--borderColor);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-8px);
      border-color: var(--colorSecondary);
      box-shadow: var(--glowPrimary);
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    &:last-child {
      background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
      color: white;
      font-size: 1.2rem;
      font-weight: 700;
      width: auto;
      min-width: 120px;
      border-radius: 30px;
      
      &::before {
        background: linear-gradient(135deg, var(--colorAccent), var(--colorSecondary));
      }
    }
    
    & > img {
      width: 28px;
      height: 28px;
      filter: brightness(1.2);
      transition: all 0.3s ease;
    }
    
    &:hover > img {
      filter: brightness(1.5) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
    }
  }
  
  ${mediaQueries.tablet} {
    gap: 32px;
    
    & > a {
      width: 70px;
      height: 70px;
      
      & > img {
        width: 32px;
        height: 32px;
      }
      
      &:last-child {
        font-size: 1.3rem;
        min-width: 140px;
      }
    }
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 80px;
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const SkillCard = styled.div`
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
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
  
  &:hover {
    transform: translateY(-8px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--colorPrimary);
    margin-bottom: 12px;
  }
  
  .description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;