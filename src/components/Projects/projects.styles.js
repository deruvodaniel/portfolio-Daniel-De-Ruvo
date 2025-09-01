import styled from "styled-components";
import { mediaQueries } from "styles";
import { motion } from "framer-motion";

export const SectionProjects = styled.section`
  margin: 120px 0;
  z-index: 40;
  color: var(--colorPrimary);
  
  & > h2 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 80px;
    text-align: center;
    z-index: 60;
    position: relative;
    background: linear-gradient(135deg, var(--colorPrimary) 0%, var(--colorSecondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
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
  
  ${mediaQueries.projects} {
    margin: 150px 0;
    
    & > h2 {
      font-size: 5rem;
      margin-bottom: 120px;
    }
  }
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  z-index: 40;
  
  ${mediaQueries.tablet} {
    gap: 100px;
  }
  
  ${mediaQueries.projects} {
    gap: 120px;
  }
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  z-index: 50;
  
  ${mediaQueries.projects} {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    
    &:nth-child(even) {
      direction: rtl;
      
      & > * {
        direction: ltr;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.4s ease;
  
  ${mediaQueries.projects} {
    height: 400px;
  }
  
  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 55;
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--colorPrimary);
  margin-bottom: 8px;
  
  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 2.8rem;
  }
`;

export const ProjectSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--colorSecondary);
  margin-bottom: 16px;
  
  ${mediaQueries.tablet} {
    font-size: 1.3rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.4rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  ${mediaQueries.mobile} {
    flex-direction: column;
  }
`;

export const ProjectButton = styled.a`
  ${(props) => props.disabled === true && "display: none;"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: ${props => props.primary ? 
    'linear-gradient(135deg, var(--colorSecondary), var(--colorAccent))' : 
    'transparent'
  };
  border: 2px solid var(--colorSecondary);
  border-radius: 50px;
  color: ${props => props.primary ? 'white' : 'var(--colorSecondary)'};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 140px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => props.primary ? '0' : '-100%'};
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px);
    color: white;
    border-color: var(--colorAccent);
    box-shadow: 
      0 15px 30px rgba(0, 212, 255, 0.3),
      0 0 30px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  ${mediaQueries.tablet} {
    padding: 16px 32px;
    font-size: 1rem;
    min-width: 160px;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TechTag = styled.span`
  padding: 6px 16px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--colorSecondary);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-2px);
  }
`;