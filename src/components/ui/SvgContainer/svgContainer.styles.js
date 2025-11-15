import styled from "styled-components";
import VectorOne from "../../../assets/VectorOne";
import { mediaQueries } from "../../../styles";

export const SvgVectorHome = styled(VectorOne)`
  position: fixed;
  top: 0;
  left: -20%;
  min-width: fit-content;
  pointer-events: none;
  transform: scaleX(-1);
  
  ${mediaQueries.tablet} {
    transform: scaleX(1);
  }
`;

