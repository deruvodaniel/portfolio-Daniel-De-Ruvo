import { SectionExperience, ExperienceTitle, Timeline, BulletList, BulletItem } from './experience.styles';
import Accordion from 'components/Accordion';
import { motion } from 'framer-motion';
import useWidth from 'hooks/useWidth';
import { useRefs } from 'context/refsContext';
import { useI18n } from 'context/i18nContext';

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

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionExperience ref={refExperience}>
        <ExperienceTitle>{t('experience.title')}</ExperienceTitle>
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
      </SectionExperience>
    </motion.div>
  );
};
