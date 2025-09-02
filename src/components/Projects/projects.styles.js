import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionProjects = styled.section`
  margin: 24px 0;
  padding: 24px 0;
  z-index: 40;
  position: relative;
  scroll-margin-top: 120px;
  
  & > h2 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 40px;
    text-align: center;
    color: var(--colorPrimary);
    letter-spacing: -2px;
    line-height: 0.9;
    position: relative;
    transform: translateY(calc(var(--scrollY, 0) * 0.016px));
    will-change: transform;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: var(--gradientPrimary);
      border-radius: 2px;
    }
  }
  
  ${mediaQueries.desktop} {
    margin: 80px 0;
    padding: 50px 0;
    
    & > h2 {
      font-size: 7rem;
      margin-bottom: 80px;
      letter-spacing: -5px;
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
  gap: 32px;
  padding: 40px 0;
  border-bottom: none;
  position: relative;
  transition: all 0.3s ease;
  
  &:last-child {}
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 2fr;
    gap: 64px;
    padding: 64px 0;

    &:hover {
      background: var(--backgroundCard);
      border-radius: 20px;
      padding: 64px 48px;
      margin: 0 -48px;
    }
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProjectYear = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--colorSecondary);
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const ProjectCategory = styled.span`
  font-size: 0.95rem;
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const TechStackTitle = styled.h4`
  font-size: 0.95rem;
  color: var(--textMuted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechTag = styled.span`
  font-size: 0.9rem;
  color: var(--colorSecondary);
  font-weight: 500;
  letter-spacing: 1px;
  
  &:not(:last-child)::after {
    content: '•';
    margin-left: 10px;
    color: var(--textMuted);
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 900;
  color: var(--colorPrimary);
  margin-bottom: 16px;
  letter-spacing: -1px;
  line-height: 1.1;
  
  ${mediaQueries.tablet} {
    font-size: 3.2rem;
    letter-spacing: -2px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 4rem;
    letter-spacing: -3px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--textSecondary);
  margin-bottom: 20px;
  
  ${mediaQueries.desktop} {
    font-size: 1.35rem;
    line-height: 1.8;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProjectLink = styled.a`
  color: var(--colorSecondary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '→';
    margin-left: 10px;
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
    font-size: 1.05rem;
  }
`;
