import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerHome = styled.div`
  z-index: 50;
  margin: 0;
  padding: 140px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 8s ease-in-out infinite;
  }
  
  ${mediaQueries.desktop} {
    padding: 200px 0 140px;
    align-items: flex-start;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  opacity: 0;
  animation: slideInLeft 1s ease-out 0.2s forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--gradientPrimary);
    border-radius: 2px;
    animation: slideInLeft 1s ease-out 0.8s forwards;
  }
  
  @keyframes slideInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    letter-spacing: 5px;
    margin-bottom: 24px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 32px 0 40px;
  line-height: 1;
  background: var(--gradientPrimary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  opacity: 0;
  animation: fadeInUp 1.2s ease-out 0.4s forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background: var(--gradientPrimary);
    border-radius: 40px;
    z-index: -1;
    opacity: 0;
    filter: blur(40px);
    animation: glow 4s ease-in-out 2s infinite;
  }
  
  ${mediaQueries.tablet} {
    font-size: 5.5rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 7rem;
    margin: 40px 0 48px;
  }
`;

export const SubtitleHome = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s forwards;
  
  ${mediaQueries.desktop} {
    font-size: 2.4rem;
    margin-bottom: 40px;
  }
`;

export const DescriptionHome = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-width: 650px;
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.8s forwards;
  
  ${mediaQueries.desktop} {
    font-size: 1.4rem;
    line-height: 1.9;
    max-width: 750px;
    margin-bottom: 56px;
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
`;

export const ButtonHome = styled.button`
  position: relative;
  padding: 20px 40px;
  background: var(--gradientPrimary);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 220px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--glowPrimary);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 22px 44px;
    min-width: 240px;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  padding: 20px 40px;
  background: transparent;
  border: 2px solid var(--colorSecondary);
  border-radius: 50px;
  color: var(--colorSecondary);
  font-weight: 600;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 220px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--gradientPrimary);
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: var(--colorAccent);
    transform: translateY(-6px);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 22px 44px;
    min-width: 240px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 600px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;
  
  ${mediaQueries.desktop} {
    gap: 60px;
    max-width: 800px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 32px 24px;
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .number {
    font-size: 3rem;
    font-weight: 900;
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
    line-height: 1;
    margin-bottom: 12px;
  }
  
  .label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
  
  ${mediaQueries.desktop} {
    padding: 40px 32px;
    
    .number {
      font-size: 3.5rem;
    }
    
    .label {
      font-size: 1rem;
    }
  }
`;