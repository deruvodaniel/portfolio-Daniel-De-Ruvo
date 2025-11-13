import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const SectionAboutMe = styled.section`
  
  padding: 30px 0;
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: start;

  ${mediaQueries.desktop} {
    gap: 60px;
  }
`;

export const AboutMeTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  line-height: 1;
  text-align: center;
  margin-bottom: 48px;
  font-family: var(--fontHeading);
  color: var(--colorPrimary);

  ${mediaQueries.tablet} {
    font-size: 4rem;
  }
`;

export const AboutMeDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--textSecondary);
  margin-bottom: 40px;
  font-family: var(--fontBody);
  
  ${mediaQueries.tablet} {
    font-size: 1.2rem;
    line-height: 1.8;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 60px;
  }
  
  p {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  strong {
    color: var(--colorPrimary);
    font-weight: 600;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
  
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
    
    &:first-child, &:nth-child(2), &:nth-child(3) {
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
      border-bottom: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      color: var(--colorPrimary);

      &:hover {
        background: var(--backgroundCardHover);
        border-color: var(--colorSecondary);
        transform: translateY(-8px);
        box-shadow: var(--shadowPrimary);
      }

      & > img {
        width: 24px;
        height: 24px;
        filter: var(--socialIconFilter);
      }
    }
  }
  
  ${mediaQueries.desktop} {
    gap: 48px;
    
    & > a {
      font-size: 1.3rem;
      
      &:first-child, &:nth-child(2), &:nth-child(3) {
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
  gap: 24px;
  
  ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 24px;
  }
  
  ${mediaQueries.desktop} {
    gap: 32px;
  }
`;

// Removed SkillCard styled component as it's now a separate component
