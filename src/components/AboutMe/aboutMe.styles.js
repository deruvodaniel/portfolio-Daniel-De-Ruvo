import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
  margin: 80px 0;
  padding: 60px 0;
  z-index: 50;
  position: relative;
  scroll-margin-top: 120px;

  ${mediaQueries.desktop} {
    margin: 160px 0;
    padding: 100px 0;
  }
`;

export const AboutMeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  align-items: start;
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 150px;
  }
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 5rem;
  margin-bottom: 60px;
  line-height: 0.9;
  letter-spacing: -2px;
  
  ${mediaQueries.tablet} {
    font-size: 7rem;
    letter-spacing: -3px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 9rem;
    margin-bottom: 80px;
    letter-spacing: -5px;
  }
`;

export const AboutMeDescription = styled.p`
  color: var(--textSecondary);
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 40px;
  
  strong {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
    line-height: 1.9;
    margin-bottom: 48px;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 60px;
  
  & > a {
    color: var(--colorSecondary);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 16px 0;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    
    &:hover {
      border-bottom-color: var(--colorSecondary);
      transform: translateY(-4px);
    }
    
    &:first-child, &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: var(--backgroundCard);
      backdrop-filter: blur(20px);
      border: 1px solid var(--borderColor);
      border-radius: 50%;
      padding: 0;
      
      &:hover {
        background: var(--backgroundCardHover);
        border-color: var(--colorSecondary);
        transform: translateY(-8px);
        box-shadow: var(--shadowPrimary);
      }
      
      & > img {
        width: 24px;
        height: 24px;
        filter: brightness(1.2);
      }
    }
  }
  
  ${mediaQueries.desktop} {
    gap: 48px;
    
    & > a {
      font-size: 1.3rem;
      
      &:first-child, &:nth-child(2) {
        width: 70px;
        height: 70px;
        
        & > img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  ${mediaQueries.desktop} {
    gap: 60px;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--colorPrimary);
    margin-bottom: 16px;
    letter-spacing: -1px;
  }
  
  .description {
    font-size: 1.3rem;
    color: var(--textMuted);
    line-height: 1.7;
  }
  
  ${mediaQueries.desktop} {
    .icon {
      font-size: 3.5rem;
    }
    
    .title {
      font-size: 2.5rem;
    }
    
    .description {
      font-size: 1.5rem;
    }
  }
`;
