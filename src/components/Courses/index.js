import {
  SectionCourses,
  CoursesTitle,
  ContainerCourses,
  ContainerCourse,
  ContainerCourseName,
  CourseName,
  CourseText,
  CourseAcademy,
} from "./courses.styles";
import { courses } from "../../arrays/arrayCourses";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";

export const Courses = () => {
  const { refCourses } = useRefs();
  const {width} = useWidth()
  const initial = width > 700 ? -500 : 0
  const { t } = useI18n();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: initial }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
                <SectionCourses ref={refCourses}>
          <CoursesTitle>{t('courses.title')}</CoursesTitle>
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
        </SectionCourses>
      </motion.div>
    </>
  );
};
