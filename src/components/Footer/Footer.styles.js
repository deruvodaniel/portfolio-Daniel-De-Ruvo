import styled from "styled-components";
import { mediaQueries } from "styles";

export const FooterStyle = styled.footer`
  margin-top: 120px;
  padding: 100px 0 60px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--backgroundCard);
  backdrop-filter: blur(30px);
  border-top: 1px solid var(--borderColor);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradientPrimary);
    opacity: 0.6;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 300px;
    background: var(--gradientPrimary);
    border-radius: 50%;
    opacity: 0.03;
    filter: blur(100px);
    z-index: -1;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
    cursor: pointer;
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-8px);
    }
    
    .logo-text {
      font-size: 2.5rem;
      font-weight: 900;
      background: var(--gradientPrimary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 3px;
    }
  }
  
  & > h3 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    margin-top: 60px;
  }
  
  ${mediaQueries.desktop} {
    padding: 120px 0 80px;
    
    .logo-container {
      margin-bottom: 80px;
      
      .logo-text {
        font-size: 3rem;
      }
    }
    
    & > h3 {
      font-size: 1.2rem;
      margin-top: 80px;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  z-index: 50;
  
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