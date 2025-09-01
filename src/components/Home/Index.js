import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionProjects = styled.section`
  margin: 200px 0;
  padding: 150px 0;
  z-index: 40;
  position: relative;
  
  & > h2 {
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 100px;
    text-align: center;
    color: var(--colorPrimary);
    letter-spacing: -2px;
    line-height: 0.9;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--gradientPrimary);
      border-radius: 2px;
    }
  }
  
  ${mediaQueries.desktop} {
    margin: 300px 0;
    padding: 200px 0;
    
    & > h2 {
      font-size: 8rem;
      margin-bottom: 150px;
      letter-spacing: -4px;
    }
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ProjectItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  padding: 80px 0;
  border-bottom: 1px solid var(--borderColor);
  position: relative;
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &::before {
    content: '${props => String(props.index).padStart(2, '0')}';
    position: absolute;
    top: 40px;
    left: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--colorSecondary);
    letter-spacing: 2px;
  }
  
  &:hover {
    background: var(--backgroundCard);
    border-radius: 24px;
    padding: 80px 40px;
    margin: 0 -40px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 2fr;
    gap: 120px;
    padding: 120px 0;
    
    &:hover {
      padding: 120px 60px;
      margin: 0 -60px;
    }
    
    &:nth-child(even) {
      grid-template-columns: 2fr 1fr;
      direction: rtl;
      
      & > * {
        direction: ltr;
      }
    }
    
    &::before {
      font-size: 1.4rem;
      top: 60px;
    }
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProjectYear = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--colorSecondary);
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const ProjectCategory = styled.span`
  font-size: 1rem;
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

export const TechStackTitle = styled.h4`
  font-size: 1rem;
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TechTag = styled.span`
  font-size: 0.9rem;
  color: var(--colorSecondary);
  font-weight: 500;
  letter-spacing: 1px;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: 12px;
    color: var(--textMuted);
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ProjectTitle = styled.h3`
  font-size: 3rem;
  font-weight: 900;
  color: var(--colorPrimary);
  margin-bottom: 24px;
  letter-spacing: -1px;
  line-height: 1.1;
  
  ${mediaQueries.tablet} {
    font-size: 4rem;
    letter-spacing: -2px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 5rem;
    letter-spacing: -3px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  color: var(--textSecondary);
  margin-bottom: 40px;
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
    line-height: 1.8;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 80px;
`;

export const ProjectLink = styled.a`
  color: var(--colorSecondary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 12px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '→';
    margin-left: 12px;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    border-bottom-color: var(--colorSecondary);
    transform: translateY(-4px);
  }
  
  &:hover::after {
    transform: translateX(8px);
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
  }
`;