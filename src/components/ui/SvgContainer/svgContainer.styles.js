import styled from "styled-components";
import VectorOne from "../../../assets/VectorOne";
import { mediaQueries } from "../../../styles";

export const SvgVectorHome = styled(VectorOne)`
  position: fixed;
  top: 0;
  left: 0;
  min-width: fit-content;
  pointer-events: none;
  transform: scaleX(-1);
  max-width: 100vw;
  overflow: hidden;
  
  ${mediaQueries.tablet} {
    transform: scaleX(1);
    left: -10%;
  }
  
  ${mediaQueries.desktop} {
    left: -20%;
  }
`;

