import { courses } from '../../../arrays/arrayCourses';
import { TabContent } from './experience.styles';
import styled from 'styled-components';

// Courses styled components (moved from deleted Courses section)
const ContainerCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ContainerCourse = styled.div`
  background: var(--cardBgSecondary);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: var(--delay, 0s);
  opacity: 0;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: var(--colorPrimary);
  }
`;

const ContainerCourseName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--colorPrimary);
  }
`;

const CourseName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--textPrimary);
  margin: 0;
`;

const CourseText = styled.p`
  font-size: 0.95rem;
  color: var(--textSecondary);
  line-height: 1.6;
  margin: 0.5rem 0;
`;

const CourseAcademy = styled.p`
  font-size: 0.875rem;
  color: var(--colorPrimary);
  font-weight: 500;
  margin-top: 0.75rem;
`;

export const CoursesTab = () => {
  return (
    <TabContent
      key="courses"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerCourses>
        {courses.map(({ id, name, text, academy }) => {
          return (
            <ContainerCourse key={id} style={{ '--delay': `${(id % 6) * 0.35}s` }}>
              <ContainerCourseName>
                <div></div>
                <CourseName>{name}</CourseName>
              </ContainerCourseName>
              <CourseText>{text}</CourseText>
              <CourseAcademy>{academy}</CourseAcademy>
            </ContainerCourse>
          );
        })}
      </ContainerCourses>
    </TabContent>
  );
};
