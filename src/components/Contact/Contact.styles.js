import styled from 'styled-components';
import { mediaQueries } from 'styles';
import { secondaryButton, sectionTitlePlain } from 'styles/mixins';

export const ContactTitle = styled.h2`
  ${sectionTitlePlain}
  margin-top: 60px;
  padding-top: 40px;

  ${mediaQueries.desktop} {
    margin-top: 50px;
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

    & > svg {
      width: 20px;
      height: 20px;
      color: var(--textMuted);
      transition: all 0.3s ease;
    }

    &:hover > svg {
      color: var(--colorSecondary);
      transform: scale(1.05);
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
