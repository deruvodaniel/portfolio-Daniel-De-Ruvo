import styled from "styled-components";
import { mediaQueries } from "styles";

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
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 2.6rem;
  margin-bottom: 28px;
  line-height: 0.9;
  letter-spacing: -2px;
  transform: translateY(calc(var(--scrollY, 0) * 0.02px));
  will-change: transform;

  ${mediaQueries.tablet} {
    font-size: 6rem;
    letter-spacing: -3px;
  }

  ${mediaQueries.desktop} {
    font-size: 7.5rem;
    margin-bottom: 60px;
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
  gap: 40px;
  
  ${mediaQueries.tablet} {
    flex-direction: row;
    gap: 30px;
  }
  
  ${mediaQueries.desktop} {
    gap: 60px;
  }
`;

export const SkillCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  align-items: start;
  column-gap: 20px;
  row-gap: 8px;
  padding: 0;
  flex: 1;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .title {
    grid-column: 2;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--colorPrimary);
    margin: 0;
    letter-spacing: -1px;
  }

  .description {
    grid-column: 2;
    font-size: 1.2rem;
    color: var(--textMuted);
    line-height: 1.7;
  }

  ${mediaQueries.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 16px;
    
    .icon {
      grid-column: 1;
      grid-row: 1;
      justify-self: center;
    }
    
    .title {
      grid-column: 1;
      grid-row: 2;
      font-size: 1.9rem;
    }
    
    .description {
      grid-column: 1;
      grid-row: 3;
      font-size: 1.3rem;
    }
  }

  ${mediaQueries.desktop} {
    column-gap: 24px;
    
    .icon {
      font-size: 3.5rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .description {
      font-size: 1.4rem;
    }
  }
`;
