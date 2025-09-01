import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 120px;
  padding-top: 80px;
  color: var(--colorPrimary);
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  z-index: 55;
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
  
  ${mediaQueries.desktop} {
    margin-top: 150px;
    font-size: 5rem;
  }
`;

export const SectionContact = styled.section`
  margin: 80px 0 120px;
  z-index: 50;
  color: var(--colorPrimary);
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin: 120px 0 150px;
  }
`;

export const BoxContactInfo = styled.div`
  z-index: 50;
  
  ${mediaQueries.desktop} {
    padding-right: 40px;
  }
`;

export const ContactText = styled.h3`
  color: var(--colorPrimary);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 40px;
  
  ${mediaQueries.tablet} {
    font-size: 2.2rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 2.5rem;
    text-align: left;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 40px 0;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
  
  ${mediaQueries.desktop} {
    justify-content: flex-start;
  }
  
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
`;

export const ButtonCopy = styled.button`
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 16px;
  padding: 20px 32px;
  color: var(--colorPrimary);
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: var(--colorSecondary);
    transform: translateY(-4px);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 24px 36px;
  }
`;