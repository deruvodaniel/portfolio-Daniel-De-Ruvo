import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionCourses = styled.section`
  z-index: 50;
  padding-top: 120px;
  margin: 120px 0;
  
  ${mediaQueries.desktop} {
    margin: 150px 0;
    padding-top: 80px;
  }
`;

export const CoursesTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 800;
  font-size: 4rem;
  margin-bottom: 80px;
  text-align: center;
  background: linear-gradient(135deg, var(--colorPrimary) 0%, var(--colorSecondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--colorSecondary), var(--colorAccent));
    border-radius: 2px;
  }
  
  ${mediaQueries.desktop} {
    font-size: 5rem;
    margin-bottom: 120px;
  }
`;

export const ContainerCourses = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  list-style: none;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 48px;
  }
`;

export const ContainerCourse = styled.li`
  background: var(--backgroundCard);
  backdrop-filter: blur(20px);
  border: 1px solid var(--borderColor);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--colorSecondary), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const ContainerCourseName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  & > div {
    width: 12px;
    height: 12px;
    margin-right: 16px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--colorSecondary), var(--colorAccent));
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  }
`;

export const CourseName = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--colorPrimary);
  line-height: 1.3;
  
  ${mediaQueries.desktop} {
    font-size: 1.6rem;
  }
`;

export const CourseText = styled.p`
  margin: 16px 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
    line-height: 1.7;
  }
`;

export const CourseAcademy = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--colorSecondary);
  
  ${mediaQueries.desktop} {
    font-size: 1.1rem;
  }
`;