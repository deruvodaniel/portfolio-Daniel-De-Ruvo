import styled from "styled-components";
import { mediaQueries } from "styles";

export const SectionCourses = styled.section`
  padding: 30px 0;
  z-index: 50;
  position: relative;
  scroll-margin-top: 70px;
`;

export const CoursesTitle = styled.h2`
  color: var(--colorPrimary);
  font-weight: 900;
  font-size: 2.6rem;
  margin-bottom: 28px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 0.9;
  transform: translateY(calc(var(--scrollY, 0) * 0.016px));
  will-change: transform;

  ${mediaQueries.desktop} {
    font-size: 7rem;
    margin-bottom: 80px;
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
  transition: background 0.4s ease;
  cursor: default;
  position: relative;
  overflow: hidden;

  /* subtle looping sheen, not hover-based */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 40%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);
    transform: skewX(-12deg);
    animation: sheen 5s ease-in-out infinite;
    animation-delay: var(--delay, 0s);
    pointer-events: none;
  }

  @keyframes sheen {
    0% { left: -120%; }
    60% { left: 140%; }
    100% { left: 140%; }
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
