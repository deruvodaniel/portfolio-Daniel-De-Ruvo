import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { sectionPadding, sectionTitlePlain } from 'styles/mixins';

export const SectionTechnologies = styled.section`
  ${sectionPadding}
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const TechnologiesTitle = styled.h2`
  ${sectionTitlePlain}
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
  cursor: default;
  position: relative;
  overflow: hidden;
  min-height: 140px;
  transition: background 240ms ease, transform 240ms ease, box-shadow 240ms ease;

  /* subtle looping sheen */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 40%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
    transform: skewX(-12deg);
    animation: sheen 4.5s ease-in-out infinite;
    animation-delay: var(--delay, 0s);
    pointer-events: none;
  }

  @keyframes sheen {
    0% { left: -120%; }
    60% { left: 140%; }
    100% { left: 140%; }
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 14px;
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
