import { useState } from 'react';
import { 
  SectionExperience, 
  ExperienceTitle, 
  Timeline, 
  BulletList, 
  BulletItem,
  TabContainer,
  TabButton,
  TabContent
} from './experience.styles';
import Accordion from 'components/ui/Accordion';
import ClientsCarousel from 'components/ui/ClientsCarousel';
import { motion, AnimatePresence } from 'framer-motion';
import useWidth from 'hooks/useWidth';
import { useRefs } from 'context/refsContext';
import { useI18n } from 'context/i18nContext';
import { courses } from '../../../arrays/arrayCourses';
import { clients } from '../../../arrays/arrayClients';
import { 
  ContainerCourses,
  ContainerCourse,
  ContainerCourseName,
  CourseName,
  CourseText,
  CourseAcademy,
} from '../Courses/courses.styles';

// Experience title component for better organization
const ExperienceRoleTitle = ({ role, company }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px', 
    alignItems: 'flex-start' 
  }}>
    <span style={{ 
      fontSize: '1.4rem', 
      fontWeight: '600', 
      color: 'var(--textPrimary)', 
      lineHeight: '1.2'
    }}>
      {role}
    </span>
    <span style={{ 
      fontSize: '1.1rem', 
      fontWeight: '400', 
      color: 'var(--textMuted)', 
      lineHeight: '1.3'
    }}>
      {company}
    </span>
  </div>
);

export const Experience = () => {
  const { refExperience } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();
  const roles = t('experience.roles') || [];
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionExperience ref={refExperience}>
        <ExperienceTitle>{t('experience.title')}</ExperienceTitle>
        
        <TabContainer>
          <TabButton 
            $active={activeTab === 'experience'}
            onClick={() => setActiveTab('experience')}
          >
            {t('experience.tabs.experience') || 'Experience'}
          </TabButton>
          <TabButton 
            $active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
          >
            {t('experience.tabs.courses') || 'Courses & Certifications'}
          </TabButton>
          <TabButton 
            $active={activeTab === 'clients'}
            onClick={() => setActiveTab('clients')}
          >
            {t('experience.tabs.clients') || 'Clients'}
          </TabButton>
        </TabContainer>

        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <TabContent
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Timeline>
                {roles.map((role, idx) => (
                  <Accordion
                    key={`role-${idx}`}
                    title={<ExperienceRoleTitle role={role.role} company={role.company} />}
                    defaultOpen={idx === 0}
                  >
                    <div className="period">{role.period}</div>
                    <BulletList>
                      {(role.bullets || []).map((bullet, i) => (
                        <BulletItem key={`bullet-${idx}-${i}`}>{bullet}</BulletItem>
                      ))}
                    </BulletList>
                  </Accordion>
                ))}
              </Timeline>
            </TabContent>
          ) : activeTab === 'courses' ? (
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
          ) : (
            <TabContent
              key="clients"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ClientsCarousel clients={clients} />
            </TabContent>
          )}
        </AnimatePresence>
      </SectionExperience>
    </motion.div>
  );
};
