import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionAboutMe = styled.section`
margin: 0 0 50px;
padding-top: 150px;
z-index: 50;
display: grid;
align-items: center;
  grid-template-columns: 1fr;
  gap: 30px;
  padding-left: 0px;
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(275px, 2fr));
    gap: 30px;
  }
  ${mediaQueries.desktop}{
    grid-template-columns: repeat(auto-fill, minmax(475px, 1fr));
    gap: 30px;
    margin: 0 0 100px;
    align-items: start;
    justify-items: start;
  }
`;

export const AboutMeBoxImg = styled.div`
  background: #59c9a5;
  position: relative;
  width: 230px;
  margin-bottom: 45px;
  z-index: 50;
  margin-left: 0px;
  height: 200px;
  & > div {
    box-sizing: border-box;
    position: absolute;
    width: 99%;
    height: 99%;
    z-index: 50;
    left: 20px;
    top: 20px;
    border: 6px solid #56e39f;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & > img {
    cursor: pointer;
    position: absolute;
    width: 93%;
    height: auto;
    left: 28px;
    z-index: 50;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.8));
    bottom: 0px;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
  }
  ${mediaQueries.tablet} {
    width: 330px;
    height: 297px;
    & > div {
      width: 325px;
      height: 297px;
      left: 38px;
      top: 38px;
    }
    & > img {
      width: 312px;
      height: auto;
      left: 45px;
      bottom: 0px;
    }
  }
  ${mediaQueries.desktop} {
    width: 400px;
    height: 357px;
    margin: 75px 0px;
    & > div {
      width: 395px;
      height: 357px;
      left: 38px;
      top: 38px;
    }
    & > img {
      width: 382px;
      height: auto;
      left: 45px;
      bottom: 0px;
    }
  }
`;

export const AboutMeBoxText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: var(--colorPrimary);
  align-content: space-evenly;
  max-width: 550px;
  width: 95%;
  row-gap: 0px;
  height: 400px;
  z-index: 50;
  & > p {
    font-size: 1.2rem;
    margin: 0 0 25px;
    z-index: 50;
  }
  ${mediaQueries.desktop}{
    display:; flex
    flex-flow: column wrap;
    width: 100%;
    height: 500px;
    & > p {
      font-size: 1.5rem;
      margin: 0;
    }
  }
`;

export const AboutMeTitle = styled.h2`
  color: var(--colorSecondary);
  font-weigth: 600;
  z-index: 50;
  margin: 0 0 20px;
  font-size: 3rem;
  ${mediaQueries.tablet}{
    margin: 0 0 20px;
    font-size: 3.2rem;
  }
  ${mediaQueries.desktop}{
    margin: 0;
    font-size: 3.5rem;
  }
`;

export const AboutMeBoxLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  z-index: 50;
  & > a {
    text-decoration: none;
    z-index: 50;
    margin-right: 20px;
    font-size: 1.5rem;
    color: #fff;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
    }
    &:last-child {
      width: 40px;
      height: 35px;
      z-index: 50;
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--colorSecondary);
      transition: 0.3s ease all;
      &:hover {
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
    }
    & > img {
      filter: brightness(1.1);
      z-index: 50;
    }
  }
  ${mediaQueries.tablet}{
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: center;
    z-index: 50;
    & > a {
      text-decoration: none;
      z-index: 50;
      margin-right: 20px;
      font-size: 1.5rem;
      color: #fff;
      transition: 0.3s ease all;
      &:hover {
        transition: 0.3s ease all;
        filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
      }
      &:last-child {
        width: 55px;
        height: 50px;
        z-index: 50;
        font-size: 3rem;
        font-weight: 800;
        color: var(--colorSecondary);
        transition: 0.3s ease all;
        &:hover {
          transition: 0.3s ease all;
          filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.8));
        }
      }
      & > img {
        filter: brightness(1.1);
        z-index: 50;
      }
    }
  }
`;
