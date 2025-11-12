import {
  ContainerCourse,
  ContainerCourseName,
  ContainerCourses,
  CourseAcademy,
  CourseName,
  CoursesTitle,
  CourseText,
  SectionCourses,
} from "./courses.styles";
import { motion } from "framer-motion";
import ParallaxText from "components/ParallaxText";
import useWidth from "hooks/useWidth";
import { courses } from "arrays/arrayCourses";
import { useI18n } from "context/i18nContext";
import { useRefs } from "context/refsContext";

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
          <ParallaxText As={CoursesTitle} amount={40} fade={0.18}>{t('courses.title')}</ParallaxText>
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
