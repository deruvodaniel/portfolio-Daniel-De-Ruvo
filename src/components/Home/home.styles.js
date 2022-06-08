import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerHome = styled.div`
  z-index: 50;
  margin: 0;
  padding-top: 100px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  padding-left: 0;
  ${mediaQueries.desktop} {
    margin: 0px auto;
    padding-top: 180px;
    align-content: start;
  }
`;

export const TextHome = styled.p`
  color: var(--colorSecondary);
  font-size: 1.2rem;
  ${mediaQueries.desktop}{
    font-size: 1.5rem;
  }
  z-index: 50;
  margin: 0;
`;

export const TitleHome = styled.h1`
  color: var(--colorSecondary);
  z-index: 50;
  margin: 20px 0 30px;
  font-size: 2rem;
  ${mediaQueries.tablet}{
    font-size: 3rem;
  }
  ${mediaQueries.desktop}{
    font-size: 4.5rem;
  }
`;

export const DescriptionHome = styled.p`
  color: var(--colorPrimary);
  max-width: 700px;
  font-size: 1rem;
  ${mediaQueries.desktop}{
    font-size: 1.3rem;
  }
  z-index: 50;
  margin: 0;
`;

export const ButtonHome = styled.button`
margin-top: 40px;
background: transparent;
  z-index: 50;
  width: fit-content;
  border: 1px solid var(--colorPrimary);
  color: var(--colorPrimary);
  transition: 0.3s ease all;
  padding: 10px 15px 8px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    z-index: 50;
    transition: 0.3s ease all;
    color: var(--colorSecondary);
    border: 1px solid var(--colorSecondary);
  }
  ${mediaQueries.desktop}{
    font-size: 1.2rem;
  }
`;
