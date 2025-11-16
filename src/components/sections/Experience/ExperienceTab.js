import Accordion from 'components/ui/Accordion';
import { useI18n } from 'context/i18nContext';
import { Timeline, BulletList, BulletItem, TabContent } from './experience.styles';
import { ExperienceRoleTitle } from './ExperienceRoleTitle';

export const ExperienceTab = () => {
  const { t } = useI18n();
  const roles = t('experience.roles') || [];

  return (
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
  );
};
