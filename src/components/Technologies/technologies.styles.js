import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionTechnologies = styled.section`
  margin: 60px 0;
  padding: 40px 0;
  z-index: 50;
  position: relative;
  scroll-margin-top: 120px;

  & > h2 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 60px;
    text-align: center;
    color: var(--colorPrimary);
    letter-spacing: -2px;
    line-height: 0.9;
  }

  ${mediaQueries.desktop} {
    margin: 120px 0;
    padding: 60px 0;

    & > h2 {
      font-size: 7rem;
      margin-bottom: 100px;
      letter-spacing: -5px;
    }
  }
`;

export const ContainerTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: var(--borderColor);
  border-radius: 24px;
  overflow: hidden;

  ${mediaQueries.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQueries.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TechCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px 20px;
  background: var(--background);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  min-height: 140px;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    background: var(--backgroundCardHover);
    transform: scale(1.04);
  }

  &:hover::before {
    opacity: 0.08;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
    transition: all 0.4s ease;
    filter: brightness(1.2);
  }

  .tech-fallback {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backgroundCard);
    border: 1px solid var(--borderColor);
    color: var(--colorSecondary);
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .tech-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--colorPrimary);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
  }

  &:hover .tech-icon {
    transform: scale(1.12);
    filter: brightness(1.5) drop-shadow(0 0 20px rgba(100, 255, 218, 0.6));
  }

  &:hover .tech-name {
    background: var(--gradientPrimary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  ${mediaQueries.desktop} {
    padding: 36px 28px;
    min-height: 180px;

    .tech-icon {
      width: 56px;
      height: 56px;
      margin-bottom: 18px;
    }

    .tech-name {
      font-size: 1.05rem;
    }
  }
`;
