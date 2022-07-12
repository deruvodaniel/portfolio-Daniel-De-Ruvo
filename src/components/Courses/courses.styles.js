import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionCourses = styled.section`
z-index: 50;
padding-top: 100px;
padding-left: 0;
${mediaQueries.desktop}{
    margin-top: 80px;
    padding-top: 50px;

  }
`;

export const CoursesTitle = styled.h2`
  color: var(--colorSecondary);
  font-weigth: 600;
  z-index: 60;
  margin: 0 0 35px;
  font-size: 3rem;
  text-align: center;
  color: #fff;
  ${mediaQueries.desktop}{
    margin: 0 0 75px;
    font-size: 3.5rem;
  }
`;

export const ContainerCourses = styled.ul`
  margin-top: 50px;
  padding: 0;
  display: grid;
  z-index: 50;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  color: var(--colorPrimary);
  gap: 20px;
  row-gap: 75px;
  list-style: none;
  ${mediaQueries.desktop}{
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 50px;
  }
`;

export const ContainerCourse = styled.li`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 99%;
  z-index: 50;
  ${mediaQueries.desktop}{
    width: 100%;
  }
`;

export const ContainerCourseName = styled.div`
  display: flex;
  flex-flow: row nowrap;
  z-index: 50;
  align-items: center;
  & > div {
    z-index: 50;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px 15px 0;
    border-radius: 10%;
    background: var(--colorSecondary);
    color: var(--colorSecondary);
  }
`;

export const CourseName = styled.p`
  margin: 0 0 15px;
  z-index: 50;
  font-weight: 600;
  width: 100%;
  font-size: 1.3rem;
  ${mediaQueries.desktop}{
    font-size: 2.1rem;
    width: 100%;
  }
`;

export const CourseText = styled.p`
  margin: 0;
  z-index: 50;
  font-size: 1rem;
  max-width: 95%;
  ${mediaQueries.desktop}{
    max-width: 85%;
    font-size: 1.3rem;
  }
`;

export const CourseAcademy = styled.p`
  margin: 0;
  z-index: 50;  
  font-size: 1rem;
  font-weight: 800;
  ${mediaQueries.desktop}{
    font-size: 1.3rem;
  }
`;
