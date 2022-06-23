
import styled from "styled-components";
import { mediaQueries } from "styles";

export const ContainerApp = styled.div`
  background: var(--background);
  z-index: 50;
`;

export const ContainerSections = styled.div`
  max-width: 1400px;
  z-index: 50;
  margin: 0 auto;
  padding: 0 50px;
  ${mediaQueries.tablet} {
    padding: 0 100px;
  }
`;

