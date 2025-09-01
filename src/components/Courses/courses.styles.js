import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionCourses = styled.section`
  z-index: 50;
  padding: 40px 0;
  margin: 60px 0;
  position: relative;
  scroll-margin-top: 120px;

  ${mediaQueries.desktop} {
    margin: 120px 0;
    padding: 60px 0;
  }
`;

export const CoursesTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 0.9;

  ${mediaQueries.desktop} {
    font-size: 7rem;
    margin-bottom: 100px;
    letter-spacing: -5px;
  }
`;

export const ContainerCourses = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;
  background: var(--borderColor);
  border-radius: 24px;
  overflow: hidden;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ContainerCourse = styled.div`
  background: var(--background);
  padding: 40px 28px;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover::before {
    opacity: 0.05;
  }

  ${mediaQueries.desktop} {
    padding: 56px 40px;
  }
`;

export const ContainerCourseName = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
  
  & > div {
    width: 8px;
    height: 8px;
    margin-right: 16px;
    margin-top: 12px;
    border-radius: 50%;
    background: var(--colorSecondary);
    flex-shrink: 0;
  }
`;

export const CourseName = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--colorPrimary);
  line-height: 1.3;
  letter-spacing: -0.5px;
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
  }
`;

export const CourseText = styled.p`
  margin: 16px 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--textSecondary);

  ${mediaQueries.desktop} {
    font-size: 1.15rem;
    line-height: 1.7;
  }
`;

export const CourseAcademy = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--colorSecondary);
  text-transform: uppercase;
  letter-spacing: 2px;
  
  ${mediaQueries.desktop} {
    font-size: 1.1rem;
  }
`;
