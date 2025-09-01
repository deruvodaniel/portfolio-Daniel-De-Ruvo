import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 160px;
  padding-top: 100px;
  color: var(--colorPrimary);
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;
  z-index: 55;
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
    width: 350px;
    height: 350px;
    background: var(--gradientPrimary);
    border-radius: 50%;
    opacity: 0.05;
    filter: blur(80px);
    z-index: -1;
    animation: pulse 6s ease-in-out infinite;
  }
  
  ${mediaQueries.desktop} {
    margin-top: 200px;
    font-size: 6rem;
  }
`;

export const SectionContact = styled.section`
  margin: 100px 0 160px;
  padding: 80px 0;
  z-index: 50;
  color: var(--colorPrimary);
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: start;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: 
      radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 18s ease-in-out infinite;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 120px;
    margin: 140px 0 200px;
    padding: 100px 0;
  }
`;

export const BoxContactInfo = styled.div`
  z-index: 50;
  
  ${mediaQueries.desktop} {
    padding-right: 60px;
  }
`;

export const ContactText = styled.h3`
  color: var(--colorPrimary);
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 48px;
  
  ${mediaQueries.tablet} {
    font-size: 2.8rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 3.2rem;
    text-align: left;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 48px 0;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 60px;
  
  ${mediaQueries.desktop} {
    justify-content: flex-start;
  }
  
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
  
  ${mediaQueries.desktop} {
    gap: 40px;
    
    & > a {
      width: 80px;
      height: 80px;
      
      & > img {
        width: 36px;
        height: 36px;
      }
    }
  }
`;

export const ButtonCopy = styled.button`
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 20px;
  padding: 24px 36px;
  color: var(--colorPrimary);
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: var(--colorSecondary);
    transform: translateY(-6px);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    left: 0;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    padding: 28px 40px;
  }
`;