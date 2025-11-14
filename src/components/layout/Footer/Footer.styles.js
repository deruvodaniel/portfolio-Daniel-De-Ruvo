import styled from 'styled-components';
import { mediaQueries } from 'styles';

export const FooterStyle = styled.footer`
  margin-top: 40px;
  padding: 24px 0 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--borderColor);
  position: relative;

  .logo-container {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover { transform: translateY(-4px); }

        .logo-image {
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  & > h3 {
    color: var(--textMuted);
    font-size: 0.95rem;
    font-weight: 400;
    text-align: center;
    margin-top: 16px;
  }

  ${mediaQueries.desktop} {
    padding: 36px 0 36px;

    .logo-container {
      margin: 28px 0;

      .logo-text {
        font-size: 2rem;
      }
    }

    & > h3 {
      font-size: 1rem;
      margin-top: 12px;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 50;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: var(--backgroundCard);
    backdrop-filter: blur(14px);
    border: 2px solid var(--borderColor);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &:hover {
      transform: scale(1.1);
      background: var(--backgroundCardHover);
      border-color: transparent;
      box-shadow: var(--shadowPrimary);
      
      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      padding: 2px;
      background: var(--gradientPrimary);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    & > img {
      width: 18px;
      height: 18px;
      filter: brightness(0) saturate(100%) invert(45%) sepia(84%) saturate(2270%) hue-rotate(160deg) brightness(95%) contrast(101%);
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
    }

    &:hover > img {
      filter: brightness(0) saturate(100%) invert(82%) sepia(55%) saturate(3345%) hue-rotate(138deg) brightness(102%) contrast(101%);
      transform: scale(1.05);
    }

    & > svg {
      width: 20px;
      height: 20px;
      position: relative;
      z-index: 1;
      
      path, line, rect, polyline {
        stroke: var(--colorPrimary);
        transition: all 0.3s ease;
      }
    }

    &:hover > svg {
      path, line, rect, polyline {
        stroke: var(--colorSecondary);
      }
    }
  }

  ${mediaQueries.desktop} {
    gap: 24px;

    & > a {
      width: 50px;
      height: 50px;

      & > img {
        width: 20px;
        height: 20px;
      }

      & > svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
