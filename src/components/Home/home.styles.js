import styled from "styled-components";
import { mediaQueries } from "styles";
import { primaryButton, gradientText } from 'styles/mixins';

export const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 160px 0 120px;
  position: relative;
  z-index: 50;
  
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
  opacity: 0;
  animation: slideInLeft 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
  will-change: transform, opacity;
  
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
  opacity: 0;
  animation: fadeInUp 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
  letter-spacing: -2px;
  will-change: transform, opacity;

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
  opacity: 0;
  animation: fadeInUp 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
  letter-spacing: 0.5px;
  will-change: transform, opacity;
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
  opacity: 0;
  animation: fadeInUp 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards;
  will-change: transform, opacity;

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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
  margin-bottom: 40px;

  ${mediaQueries.desktop} {
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    width: auto;
    margin-bottom: 56px;
  }
`;

export const ButtonHome = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 180px;
  height: 56px;
  ${primaryButton}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 24px rgba(100, 255, 218, 0.25),
      0 0 24px rgba(100, 255, 218, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  ${mediaQueries.desktop} {
    font-size: 1.05rem;
    padding: 18px 28px;
    min-width: 200px;
    border-radius: 10px;
    height: 60px;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px;
  background: transparent;
  border: 2px solid var(--colorSecondary);
  border-radius: 8px;
  color: var(--colorSecondary);
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: background 220ms ease, color 220ms ease, border-color 220ms ease, transform 180ms ease, box-shadow 220ms ease;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  min-width: 190px;
  height: 56px;

  svg { width: 18px; height: 18px; }

  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-2px);
    box-shadow: none;
  }

  ${mediaQueries.desktop} {
    font-size: 1.05rem;
    padding: 16px 30px;
    min-width: 210px;
    border-radius: 10px;
    height: 60px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 28px;
  width: 100%;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
  margin-top: 20px;

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
