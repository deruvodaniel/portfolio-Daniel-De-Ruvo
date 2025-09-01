import styled from "styled-components";
import { mediaQueries } from "styles";

export const FooterStyle = styled.footer`
  margin-top: 80px;
  padding: 80px 0 40px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--borderColor);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--colorSecondary), transparent);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
    }
    
    .logo-text {
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 2px;
    }
  }
  
  & > h3 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    margin-top: 40px;
  }
  
  ${mediaQueries.desktop} {
    padding: 100px 0 60px;
    
    .logo-container {
      margin-bottom: 60px;
      
      .logo-text {
        font-size: 2.5rem;
      }
    }
    
    & > h3 {
      font-size: 1.1rem;
      margin-top: 60px;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  z-index: 50;
  
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
  
  ${mediaQueries.desktop} {
    gap: 32px;
    
    & > a {
      width: 70px;
      height: 70px;
      
      & > img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;