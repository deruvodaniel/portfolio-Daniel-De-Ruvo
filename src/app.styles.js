import styled, { keyframes } from "styled-components";
import { mediaQueries } from "styles";

const floatOne = keyframes`
  0% { transform: translate(-10px, 0) scale(1); opacity: 0.6; }
  50% { transform: translate(10px, 10px) scale(1.05); opacity: 0.8; }
  100% { transform: translate(-10px, 0) scale(1); opacity: 0.6; }
`;

const floatTwo = keyframes`
  0% { transform: translate(10px, -10px) scale(1); opacity: 0.5; }
  50% { transform: translate(-10px, 5px) scale(1.03); opacity: 0.7; }
  100% { transform: translate(10px, -10px) scale(1); opacity: 0.5; }
`;

export const ContainerApp = styled.div`
  background: var(--background);
  z-index: 50;
  position: relative;
  isolation: isolate;

  &::before,
  &::after {
    content: "";
    position: fixed;
    inset: -20% -10% auto auto;
    width: 70vmax;
    height: 70vmax;
    pointer-events: none;
    z-index: -1;
    border-radius: 50%;
    display: none;
  }

  ${mediaQueries.desktop} {
    &::before,
    &::after {
      display: block;
      filter: blur(60px);
      opacity: 0.45;
    }

    &::before {
      background: radial-gradient(closest-side, rgba(0,229,255,0.16), transparent 60%);
      animation: ${floatOne} 20s ease-in-out infinite;
      right: 5%;
      top: 10%;
      transform: translateY(calc(var(--scrollY, 0) * 0.05px));
    }

    &::after {
      background: radial-gradient(closest-side, rgba(34,197,94,0.14), transparent 60%);
      animation: ${floatTwo} 24s ease-in-out infinite;
      left: 10%;
      bottom: 10%;
      transform: translateY(calc(var(--scrollY, 0) * -0.03px));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after { animation: none; transform: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after {
      animation: none;
      transform: none;
    }
  }
`;

export const ContainerSections = styled.div`
  max-width: 1400px;
  z-index: 50;
  margin: 0 auto;
  padding: 0 20px;
  ${mediaQueries.tablet} {
    padding: 0 100px;
  }
`;
