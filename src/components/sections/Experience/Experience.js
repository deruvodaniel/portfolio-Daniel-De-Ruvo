import { useState } from 'react';
import { 
  SectionExperience, 
  ExperienceTitle, 
  TabContainer,
  TabButton,
} from './experience.styles';
import { motion, AnimatePresence } from 'framer-motion';
import useWidth from 'hooks/useWidth';
import { useRefs } from 'context/refsContext';
import { useI18n } from 'context/i18nContext';
import { ExperienceTab } from './ExperienceTab';
import { CoursesTab } from './CoursesTab';
import { ClientsTab } from './ClientsTab';

export const Experience = () => {
  const { refExperience } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();
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
            <ExperienceTab />
          ) : activeTab === 'courses' ? (
            <CoursesTab />
          ) : (
            <ClientsTab />
          )}
        </AnimatePresence>
      </SectionExperience>
    </motion.div>
  );
};
