import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 80px;
  padding-top: 60px;
  color: var(--colorPrimary);
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  z-index: 55;
  position: relative;
  letter-spacing: -2px;
  line-height: 0.9;
  
  ${mediaQueries.desktop} {
    margin-top: 300px;
    font-size: 8rem;
    letter-spacing: -4px;
  }
`;

export const SectionContact = styled.section`
  margin: 50px 0 80px;
  padding: 50px 0;
  z-index: 50;
  scroll-margin-top: 120px;
  color: var(--colorPrimary);
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  align-items: start;
  position: relative;
  
  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin: 100px 0 160px;
    padding: 80px 0;
  }
`;

export const BoxContactInfo = styled.div`
  z-index: 50;
`;

export const ContactText = styled.h3`
  color: var(--colorPrimary);
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 60px;
  letter-spacing: -1px;
  
  ${mediaQueries.tablet} {
    font-size: 3.5rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 4rem;
    text-align: left;
    letter-spacing: -2px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 60px 0;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 80px;
  
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
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
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
`;

export const ButtonCopy = styled.button`
  background: transparent;
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 20px 32px;
  color: var(--colorPrimary);
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  
  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-4px);
    color: var(--colorSecondary);
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 24px 36px;
  }
`;
