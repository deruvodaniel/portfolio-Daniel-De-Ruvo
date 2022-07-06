import styled from "styled-components";
import TrianglesOne from "assets/TrianglesOne";
import TrianglesThree from "assets/TrianglesThree";
import TrianglesTwo from "assets/TrianglesTwo";
import VectorFour from "assets/VectorFour";
import VectorOne from "assets/VectorOne";
import VectorThree from "assets/VectorThree";
import VectorTwo from "assets/VectorTwo";
import { mediaQueries } from "styles";

export const SvgVectorHome = styled(VectorOne)`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events:none;
`;

export const TrianglesVectorHome = styled(TrianglesOne)`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events:none;
`;

export const SvgVectorCourses = styled(VectorTwo)`
  position: absolute;
  top: 150%;
  right: 0;
  pointer-events:none;
`;

export const TrianglesVectorCourses = styled(TrianglesTwo)`
  position: absolute;
  top: 120%;
  right: 0;
  pointer-events:none;
`;

export const SvgVectorProjects = styled(VectorThree)`
  position: absolute;
  top: 500%;
  right: 0;
  pointer-events:none;
  ${mediaQueries.bigScreen}{
    display: none;
  }
`;

export const TrianglesVectorProjects = styled(TrianglesThree)`
  position: absolute;
  top: 300%;
  right: 0;
  pointer-events:none;
  ${mediaQueries.bigScreen}{
    display: none;
  }
`;

export const SvgVectorFooter = styled(VectorFour)`
  position: absolute;
  top: 640%;
  right: 0;
  pointer-events:none;
  ${mediaQueries.bigScreen}{
    display: none;
  }
`;

