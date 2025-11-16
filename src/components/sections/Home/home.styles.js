import styled from "styled-components";
import { mediaQueries } from "styles";
import { gradientText } from 'styles/mixins';

export const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 60px 0 40px;
  position: relative;
  z-index: 50;
  
  ${mediaQueries.tablet} {
    padding: 140px 0 100px;
  }
  
  ${mediaQueries.desktop} {
    padding: 180px 0 140px;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 20px 0 24px;
  position: relative;
  visibility: hidden;
  opacity: 0;
  animation: slideInLeft 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
  will-change: transform, opacity;
  
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
      visibility: visible;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 80px;
    height: 2px;
    background: var(--gradientPrimary);
    border-radius: 1px;
    animation: slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
    will-change: transform, opacity;
  }
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    letter-spacing: 8px;
    margin-bottom: 32px;
  }
`;

export const TitleHome = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 10px 0 28px;
  line-height: 0.92;
  ${gradientText}
  visibility: hidden;
  opacity: 0;
  animation: fadeInUp 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
  letter-spacing: -2px;
  will-change: transform, opacity;
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
      visibility: visible;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

  ${mediaQueries.tablet} {
    font-size: 6rem;
    letter-spacing: -3px;
  }

  ${mediaQueries.desktop} {
    font-size: 9rem;
    margin: 10px 0 40px;
    letter-spacing: -5px;
  }
`;

export const SubtitleHome = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--textSecondary);
  margin-bottom: 40px;
  visibility: hidden;
  opacity: 0;
  animation: fadeInUpSubtitle 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
  letter-spacing: 0.5px;
  will-change: transform, opacity;
  
  @keyframes fadeInUpSubtitle {
    0% {
      opacity: 0;
      transform: translateY(20px);
      visibility: visible;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
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
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 56px;
  visibility: hidden;
  opacity: 0;
  animation: fadeInUpDesc 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards;
  will-change: transform, opacity;
  
  @keyframes fadeInUpDesc {
    0% {
      opacity: 0;
      transform: translateY(20px);
      visibility: visible;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

  @media (max-width: 767px) {
    max-width: 100%;
    font-size: 1.1rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 60px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 28px;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  animation: fadeInUpStats 1s ease-out 1.5s forwards;
  margin-top: 20px;
  
  @keyframes fadeInUpStats {
    0% {
      opacity: 0;
      transform: translateY(20px);
      visibility: visible;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

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
