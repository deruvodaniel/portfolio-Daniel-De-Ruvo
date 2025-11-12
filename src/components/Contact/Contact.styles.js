import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContactTitle = styled.h2`
  margin-top: 60px;
  padding-top: 40px;
  color: var(--colorPrimary);
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  z-index: 55;
  position: relative;
  letter-spacing: -2px;
  line-height: 0.9;
  transform: translateY(calc(var(--scrollY, 0) * 0.015px));
  will-change: transform;

  ${mediaQueries.desktop} {
    margin-top: 50px;
    font-size: 7rem;
    letter-spacing: -4px;
  }
`;

export const SectionContact = styled.section`
  margin: 30px 0 50px;
  padding: 30px 0;
  z-index: 50;
  scroll-margin-top: 120px;
  color: var(--colorPrimary);
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  position: relative;

  ${mediaQueries.desktop} {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
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

  ${mediaQueries.tablet} {
    font-size: 2.6rem;
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
  gap: 28px;
  margin-top: 40px;

  ${mediaQueries.desktop} {
    justify-content: flex-start;
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: var(--backgroundCard);
    backdrop-filter: blur(20px);
    border: 1px solid var(--borderColor);
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-8px);
      background: var(--backgroundCardHover);
      border-color: var(--colorSecondary);
      box-shadow: var(--shadowPrimary);
    }

    & > img {
      width: 22px;
      height: 22px;
      filter: var(--socialIconFilter);
      transition: all 0.3s ease;
    }

    &:hover > img {
      filter: brightness(1.5);
      transform: scale(1.1);
    }
  }
`;

export const ButtonCopy = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 14px 20px;
  color: var(--colorPrimary);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: left;
  flex: 1 1 260px;

  &:hover {
    background: var(--backgroundCardHover);
    border-color: var(--colorSecondary);
    transform: translateY(-2px);
    color: var(--colorSecondary);
  }

  svg { width: 18px; height: 18px; }

  ${mediaQueries.desktop} {
    font-size: 1.05rem;
    padding: 16px 22px;
    flex: 0 0 auto;
  }
`;
