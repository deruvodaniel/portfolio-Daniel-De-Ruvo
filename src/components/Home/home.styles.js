import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 200px 0 100px;
  position: relative;
  z-index: 50;
  
  ${mediaQueries.desktop} {
    padding: 250px 0 150px;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 24px;
  position: relative;
  opacity: 0;
  animation: slideInLeft 1s ease-out 0.2s forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 80px;
    height: 2px;
    background: var(--gradientPrimary);
    border-radius: 1px;
    animation: slideInLeft 1s ease-out 0.8s forwards;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    letter-spacing: 8px;
    margin-bottom: 32px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin: 0 0 32px;
  line-height: 0.9;
  background: var(--gradientPrimary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  animation: fadeInUp 1.2s ease-out 0.4s forwards;
  letter-spacing: -2px;
  
  ${mediaQueries.tablet} {
    font-size: 7rem;
    letter-spacing: -3px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 10rem;
    margin: 0 0 40px;
    letter-spacing: -5px;
  }
`;

export const SubtitleHome = styled.h2`
  font-size: 2.2rem;
  font-weight: 300;
  color: var(--textSecondary);
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s forwards;
  letter-spacing: 1px;
  
  ${mediaQueries.desktop} {
    font-size: 3rem;
    margin-bottom: 64px;
  }
`;

export const LocationTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border: 1px solid var(--borderColor);
  border-radius: 9999px;
  color: var(--textMuted);
  background: var(--backgroundCard);
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 8px 0 40px;
`;

export const DescriptionHome = styled.p`
  color: var(--textMuted);
  max-width: 600px;
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 64px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.8s forwards;
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
    line-height: 1.8;
    max-width: 700px;
    margin-bottom: 80px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
  margin-bottom: 80px;

  ${mediaQueries.mobile} {
    flex-direction: column;
    width: 100%;
  }

  ${mediaQueries.tablet} {
    margin-bottom: 80px;
  }
`;

export const ButtonHome = styled.button`
  position: relative;
  padding: 24px 48px;
  background: var(--gradientPrimary);
  border: none;
  border-radius: 60px;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  min-width: 240px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.8s;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 40px rgba(100, 255, 218, 0.35),
      0 0 40px rgba(100, 255, 218, 0.25);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    padding: 28px 56px;
    min-width: 280px;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  padding: 24px 48px;
  background: transparent;
  border: 2px solid var(--colorSecondary);
  border-radius: 60px;
  color: var(--colorSecondary);
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  min-width: 240px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--gradientPrimary);
    transition: width 0.5s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-4px);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    padding: 28px 56px;
    min-width: 280px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 28px;
  width: 100%;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;

  ${mediaQueries.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, minmax(160px, 1fr));
    gap: 40px;
  }
`;

export const StatItem = styled.div`
  text-align: left;
  
  .number {
    font-size: 4rem;
    font-weight: 900;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
    line-height: 1;
    margin-bottom: 8px;
    letter-spacing: -2px;
  }
  
  .label {
    font-size: 1rem;
    color: var(--textMuted);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
  
  ${mediaQueries.desktop} {
    .number {
      font-size: 5rem;
      margin-bottom: 12px;
    }
    
    .label {
      font-size: 1.1rem;
    }
  }
`;
