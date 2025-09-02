import { SectionExperience, ExperienceTitle, Timeline, RoleItem, RoleHeader, RoleCompany, RolePeriod, BulletList, BulletItem } from './experience.styles';
import { motion } from 'framer-motion';
import ParallaxText from 'components/ParallaxText';
import useWidth from 'hooks/useWidth';
import { useRefs } from 'context/refsContext';
import { useI18n } from 'context/i18nContext';

export const Experience = () => {
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();
  const { refExperience } = useRefs();
  const roles = t('experience.roles') || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionExperience ref={refExperience}>
        <ParallaxText As={ExperienceTitle} amount={48} fade={0.2}>{t('experience.title')}</ParallaxText>
        <Timeline>
          {roles.map((r, idx) => (
            <RoleItem key={idx} index={idx + 1}>
              <RoleHeader>
                <RoleCompany>{r.company}</RoleCompany>
                <RolePeriod>{r.period}</RolePeriod>
              </RoleHeader>
              <h3>{r.role}</h3>
              <BulletList>
                {(r.bullets || []).map((b, i) => (
                  <BulletItem key={i}>{b}</BulletItem>
                ))}
              </BulletList>
            </RoleItem>
          ))}
        </Timeline>
      </SectionExperience>
    </motion.div>
  );
};
