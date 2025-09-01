import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerHome = styled.div`
  z-index: 50;
  margin: 0;
  padding: 120px 0 80px;
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
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
    border-radius: 40px;
    z-index: -1;
  }
  
  ${mediaQueries.desktop} {
    padding: 180px 0 120px;
    align-items: flex-start;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, var(--colorSecondary), var(--colorAccent));
    border-radius: 2px;
    animation: slideInFromLeft 0.8s ease-out 0.8s forwards;
    transform: scaleX(0);
    transform-origin: left;
  }
  
  @keyframes slideInFromLeft {
    to {
      transform: scaleX(1);
    }
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    letter-spacing: 4px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  margin: 24px 0 32px;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, var(--colorSecondary) 50%, var(--colorAccent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
    border-radius: 30px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(20px);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  ${mediaQueries.tablet} {
    font-size: 4.5rem;
  }
  
  ${mediaQueries.desktop} {
    font-size: 6rem;
    margin: 32px 0 40px;
  }
`;

export const SubtitleHome = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
  
  ${mediaQueries.desktop} {
    font-size: 2.2rem;
  }
`;

export const DescriptionHome = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.8s forwards;
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    line-height: 1.9;
    max-width: 700px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1s forwards;
  
  ${mediaQueries.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ButtonHome = styled.button`
  position: relative;
  padding: 18px 36px;
  background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
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
  min-width: 200px;
  
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
    transform: translateY(-4px);
    box-shadow: 
      0 20px 40px rgba(0, 212, 255, 0.3),
      0 0 40px rgba(0, 212, 255, 0.2);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 20px 40px;
    min-width: 220px;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  padding: 18px 36px;
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
  min-width: 200px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    transition: width 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: var(--colorAccent);
    transform: translateY(-4px);
    box-shadow: 
      0 15px 30px rgba(0, 212, 255, 0.2),
      0 0 30px rgba(0, 212, 255, 0.1);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    padding: 20px 40px;
    min-width: 220px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.2s forwards;
  
  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--colorSecondary);
    display: block;
    line-height: 1;
  }
  
  .label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 8px;
  }
  
  ${mediaQueries.desktop} {
    .number {
      font-size: 3rem;
    }
    
    .label {
      font-size: 1rem;
    }
  }
`;