import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionProjects = styled.section`
  padding: 30px 0 60px;
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background: var(--backgroundCard);
  border: 1px solid var(--colorBorder);
  height: fit-content;
  
  ${mediaQueries.desktop} {
    padding: 28px;
    gap: 18px;
  }
`;

export const ProjectMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  order: 3;
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
  gap: 8px;
  margin-top: 12px;
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
  gap: 12px;
  order: 2;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--colorPrimary);
  margin-bottom: 8px;
  letter-spacing: -1px;
  line-height: 1.1;
  
  ${mediaQueries.tablet} {
    font-size: 2.2rem;
    letter-spacing: -1.5px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 2.6rem;
    letter-spacing: -2px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: var(--textSecondary);
  margin-bottom: 12px;
  
  /* Limitar a 3 líneas para ahorrar espacio */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  ${mediaQueries.desktop} {
    font-size: 1.1rem;
    line-height: 1.6;
    -webkit-line-clamp: 4;
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

export const LinkPreviewWrapper = styled.div`
  margin: 0 0 12px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  order: 1;
  
  ${mediaQueries.desktop} {
    margin: 0 0 16px;
  }
`;
