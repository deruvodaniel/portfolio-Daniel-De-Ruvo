import styled from "styled-components";
import { mediaQueries } from "styles";

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

    .logo-text {
      font-size: 2.2rem;
      font-weight: 900;
      background: var(--gradientPrimary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
      line-height: 1;
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
      margin-bottom: 28px;

      .logo-text {
        font-size: 2.6rem;
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
    width: 44px;
    height: 44px;
    background: var(--backgroundCard);
    backdrop-filter: blur(14px);
    border: 1px solid var(--borderColor);
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      background: var(--backgroundCardHover);
      border-color: var(--colorSecondary);
      box-shadow: var(--shadowPrimary);
    }

    & > img {
      width: 18px;
      height: 18px;
      filter: var(--socialIconFilter);
      transition: all 0.3s ease;
    }

    &:hover > img {
      filter: brightness(1.5);
      transform: scale(1.05);
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
    }
  }
`;
