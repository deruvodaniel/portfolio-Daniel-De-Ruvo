import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionTechnologies = styled.section`
  margin: 50px 0 0px;
  padding-top: 50px;
  z-index: 50;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  color: var(--colorPrimary);
  & > h2 {
    font-size: 3rem;
    z-index: 50;
    margin-bottom: 100px;
  }
  ${mediaQueries.desktop} {
    margin: 50px 0 150px;
    align-items: center;
    & > h2 {
      font-size: 3.5rem;
    }
  }
`;

export const ContainerTechnologies = styled.div`
z-index: 50;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(75px, 100px));
justify-items: center;
justify-content: center;
align-items: center;
gap: 20px;
max-width: 100%;
margin-bottom: 20px;
${mediaQueries.tablet}{
  grid-template-columns: repeat(auto-fill, minmax(75px, 200px));
  max-width: 1000px;
}
${mediaQueries.desktop} {
    gap: 50px;
  }
`;

export const ImgTechnologies = styled.img`
  cursor: pointer;
  z-index: 50;
  padding: 15px;
  width: 60px;
  height: auto;
  &:hover {
    filter: drop-shadow(0 2px 5px rgba(86, 227, 159, 0.7));
  }
  ${mediaQueries.tablet}{
    width: 75px;
    height: auto;
  }
  ${mediaQueries.desktop} {
    width: 80px;
    height: auto;
  }
`;
