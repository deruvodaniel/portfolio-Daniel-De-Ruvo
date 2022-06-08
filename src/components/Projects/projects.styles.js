import styled from "styled-components";
import { mediaQueries } from "styles";
import { motion } from "framer-motion";

export const SectionProjects = styled.section`
  margin: 0px;
  z-index: 40;
  color: var(--colorPrimary);
  & > h2 {
    font-size: 2.5rem;
    margin-bottom: 80px;
  }
  ${mediaQueries.projects} {
    & > h2 {
      font-size: 3.5rem;
    }
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  row-gap: 50px;
  z-index: 40;
${mediaQueries.projects}{
  display: grid;
  justify-content: center;
  row-gap: 150px;
  z-index: 40;
  & > div:nth-child(2n+1){
    flex-flow: row-reverse wrap;
    & > div:first-child > div{
        left: -30px;
        top: 30px;
    }
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  z-index: 50;
  margin: 0 0 50px;
  ${mediaQueries.projects} {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    gap: 0;
    & > div:last-child {
      text-align: start;
      & > button {
        align-self: start;
      }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 45;
  border-radius: 9px 9px 0 0;
`;

export const ContainerBoxImg = styled.div`
  ${mediaQueries.projects} {
    position: relative;
    width: 475px;
    height: 427px;
    grid-area: img;
    background: rgba(89, 201, 165, 0.34);
  }
`;

export const ContainerImg = styled.div`
  ${mediaQueries.projects} {
    box-sizing: border-box;
    position: absolute;
    width: 475px;
    height: 427px;
    left: 30px;
    top: 30px;
    border: 4px solid #56e39f;
    transition: 0.5s ease all;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & > img {
      width: 100.1%;
      height: 100.1%;
      filter: brightness(0.9);
    }
  }
`;

export const ContainerTexts = styled.div`
  background: #3b2c35;
  width: 100%;
  z-index: 55;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 9px 9px;
  height: 100%;
  padding: 15px 0;
  ${mediaQueries.projects} {
    border-radius: 0;
    padding: 20px 50px;
    grid-area: text;
    margin-top: 70px;
    align-items: start;
    display: flex;
    z-index: 2;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 475px;
    height: 300px;
  }
`;

export const ProjectTitle = styled.h3`
  z-index: 55;
  padding: 0 10px;
  font-weigth: 600;
  color: var(--colorPrimary);
  margin: 0 0 5px;
  font-size: 1.5rem;
  ${mediaQueries.tablet} {
    font-size: 1.8rem;
  }
`;

export const ProjectSubtitle = styled.p`
  font-weigth: 600;
  z-index: 55;
  padding: 0 10px;
  color: var(--colorPrimary);
  margin: 0 0 5px;
  font-size: 1.3rem;
  ${mediaQueries.tablet} {
    font-size: 1.5rem;
  }
`;

export const ProjectDescription = styled.p`
  font-weigth: 600;
  display: none;
  z-index: 55;
  font-size: 1rem;
  padding: 0 10px;
  color: var(--colorPrimary);
  margin: 0 0 20px;
  ${mediaQueries.tablet} {
    display: block;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0 10px;
`;

export const ProjectButton = styled.a`
  ${(props) => props.disabled === true && "display: none;"};
  font-weigth: 600;
  color: var(--colorPrimary);
  text-transform: uppercase;
  margin: 20px 20px 0;
  font-size: 0.7rem;
  text-align: center; 
  width: 100%;
  text-decoration: none;
  background: transparent;
  z-index: 55;
  border-radius: 33px;
  border: 1px solid var(--colorPrimary);
  cursor: pointer;
  padding: 10px 40px;
  transition: 0.3s ease all;
  &:hover {
    z-index: 55;
    color: var(--colorSecondary);
    transition: 0.3s ease all;
    border: 1px solid var(--colorSecondary);
  }
  ${mediaQueries.tablet}{
    margin: 20px 15px 0 0;
    width: fit-content;
  }
  ${mediaQueries.desktop}{
    font-size: 1rem;
  }
`;
