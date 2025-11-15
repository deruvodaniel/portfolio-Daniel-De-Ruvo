import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { secondaryButton, sectionTitlePlain } from 'styles/mixins';

export const ContactTitle = styled.h2`
  ${sectionTitlePlain}
  margin-top: 30px;
  padding-top: 20px;

  ${mediaQueries.desktop} {
    margin-top: 50px;
    padding-top: 40px;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  position: relative;

  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`;

export const SectionContact = styled.section`
  margin: 30px 0 50px;
  padding: 30px 0;
  z-index: 50;
  scroll-margin-top: 70px;
  color: var(--colorPrimary);
  position: relative;

  ${mediaQueries.desktop} {
    margin: 70px 0 100px;
    padding: 30px 0;
  }
`;

export const BoxContactInfo = styled.div`
  z-index: 50;
`;

export const ContactText = styled.h3`
  color: var(--colorPrimary);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 40px;
  letter-spacing: -1px;
  font-family: var(--fontBody);

  ${mediaQueries.tablet} {
    font-size: 2rem;
  }

  ${mediaQueries.desktop} {
    font-size: 3rem;
    text-align: left;
    letter-spacing: -2px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  margin: 32px 0;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  ${mediaQueries.desktop} {
    justify-content: flex-start;
    gap: 24px;
  }

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

export const ButtonCopy = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  flex: 1 1 260px;
  ${secondaryButton}

  svg { width: 18px; height: 18px; }

  ${mediaQueries.desktop} {
    font-size: 1.05rem;
    padding: 16px 22px;
    flex: 0 0 auto;
  }
`;
