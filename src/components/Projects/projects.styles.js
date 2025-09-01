import styled from "styled-components";
import { mediaQueries } from "styles";
import { motion } from "framer-motion";

export const SectionProjects = styled.section`
  margin: 160px 0;
  padding: 120px 0;
  z-index: 40;
  color: var(--colorPrimary);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40%;
    width: 180%;
    height: 100%;
    background: 
      radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 15s ease-in-out infinite reverse;
  }
  
  & > h2 {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 120px;
    text-align: center;
    z-index: 60;
    position: relative;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
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
      width: 400px;
      height: 400px;
      background: var(--gradientPrimary);
      border-radius: 50%;
      opacity: 0.03;
      filter: blur(100px);
      z-index: -1;
      animation: pulse 8s ease-in-out infinite;
    }
  }
  
  ${mediaQueries.projects} {
    margin: 200px 0;
    padding: 160px 0;
    
    & > h2 {
      font-size: 6rem;
      margin-bottom: 160px;
    }
  }
`;

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 120px;
  z-index: 40;
  
  ${mediaQueries.tablet} {
    gap: 140px;
  }
  
  ${mediaQueries.projects} {
    gap: 160px;
  }
`;

export const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  z-index: 50;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    right: -40px;
    bottom: -40px;
    background: var(--backgroundCard);
    border-radius: 40px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  ${mediaQueries.projects} {
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    
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
  border-radius: 32px;
  overflow: hidden;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-20px) scale(1.02);
    box-shadow: 
      var(--shadowPrimary),
      0 0 80px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    opacity: 0.1;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: all 0.5s ease;
  
  ${mediaQueries.projects} {
    height: 450px;
  }
  
  ${ImageContainer}:hover & {
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.1);
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 55;
`;

export const ProjectTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--colorPrimary);
  margin-bottom: 12px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--gradientPrimary);
    border-radius: 2px;
  }
  
  ${mediaQueries.tablet} {
    font-size: 3rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }
`;

export const ProjectSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  background: var(--gradientSecondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  
  ${mediaQueries.tablet} {
    font-size: 1.4rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    line-height: 1.9;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
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
  padding: 16px 32px;
  background: ${props => props.primary ? 
    'var(--gradientPrimary)' : 
    'transparent'
  };
  border: 2px solid var(--colorSecondary);
  border-radius: 50px;
  color: ${props => props.primary ? 'white' : 'var(--colorSecondary)'};
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 160px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => props.primary ? '0' : '-100%'};
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-6px);
    color: white;
    border-color: var(--colorAccent);
    box-shadow: 
      0 20px 40px rgba(0, 212, 255, 0.3),
      0 0 40px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    left: 0;
  }
  
  ${mediaQueries.tablet} {
    padding: 18px 36px;
    font-size: 1.1rem;
    min-width: 180px;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
`;

export const TechTag = styled.span`
  padding: 8px 20px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  background: var(--gradientSecondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 212, 255, 0.2);
  }
`;