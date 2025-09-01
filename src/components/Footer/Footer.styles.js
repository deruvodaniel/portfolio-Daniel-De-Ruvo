import styled from "styled-components";
import { mediaQueries } from "styles";

export const FooterStyle = styled.footer`
  margin-top: 200px;
  padding: 150px 0 80px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--borderColor);
  position: relative;
  
  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    cursor: pointer;
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-8px);
    }
    
    .logo-text {
      font-size: 3rem;
      font-weight: 900;
      background: var(--gradientPrimary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
    }
  }
  
  & > h3 {
    color: var(--textMuted);
    font-size: 1.1rem;
    font-weight: 400;
    text-align: center;
    margin-top: 80px;
  }
  
  ${mediaQueries.desktop} {
    padding: 200px 0 100px;
    
    .logo-container {
      margin-bottom: 100px;
      
      .logo-text {
        font-size: 4rem;
      }
    }
    
    & > h3 {
      font-size: 1.2rem;
      margin-top: 100px;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
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
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-8px);
      background: var(--backgroundCardHover);
      border-color: var(--colorSecondary);
      box-shadow: var(--shadowPrimary);
    }
    
    & > img {
      width: 24px;
      height: 24px;
      filter: brightness(1.2);
      transition: all 0.3s ease;
    }
    
    &:hover > img {
      filter: brightness(1.5);
      transform: scale(1.1);
    }
  }
  
  ${mediaQueries.desktop} {
    gap: 48px;
    
    & > a {
      width: 70px;
      height: 70px;
      
      & > img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;