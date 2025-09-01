import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionCourses = styled.section`
  z-index: 50;
  padding: 120px 0;
  margin: 160px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -40%;
    width: 180%;
    height: 100%;
    background: 
      radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    border-radius: 50%;
    z-index: -1;
    animation: float 14s ease-in-out infinite reverse;
  }
  
  ${mediaQueries.desktop} {
    margin: 200px 0;
    padding: 140px 0;
  }
`;

export const CoursesTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 4.5rem;
  margin-bottom: 100px;
  text-align: center;
  background: var(--gradientPrimary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 4px;
    background: var(--gradientPrimary);
    border-radius: 2px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 350px;
    background: var(--gradientPrimary);
    border-radius: 50%;
    opacity: 0.04;
    filter: blur(90px);
    z-index: -1;
    animation: pulse 7s ease-in-out infinite;
  }
  
  ${mediaQueries.desktop} {
    font-size: 6rem;
    margin-bottom: 140px;
  }
`;

export const ContainerCourses = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  list-style: none;
  
  ${mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 48px;
  }
  
  ${mediaQueries.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 56px;
  }
`;

export const ContainerCourse = styled.li`
  background: var(--backgroundCard);
  backdrop-filter: blur(30px);
  border: 1px solid var(--borderColor);
  border-radius: 32px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--gradientPrimary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-12px);
    background: var(--backgroundCardHover);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: var(--shadowPrimary);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover::after {
    width: 300px;
    height: 300px;
  }
`;

export const ContainerCourseName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  & > div {
    width: 16px;
    height: 16px;
    margin-right: 20px;
    border-radius: 50%;
    background: var(--gradientPrimary);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
    animation: pulse 3s ease-in-out infinite;
  }
`;

export const CourseName = styled.h3`
  margin: 0;
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--colorPrimary);
  line-height: 1.3;
  
  ${mediaQueries.desktop} {
    font-size: 1.8rem;
  }
`;

export const CourseText = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  
  ${mediaQueries.desktop} {
    font-size: 1.3rem;
    line-height: 1.8;
  }
`;

export const CourseAcademy = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  background: var(--gradientSecondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${mediaQueries.desktop} {
    font-size: 1.2rem;
  }
`;