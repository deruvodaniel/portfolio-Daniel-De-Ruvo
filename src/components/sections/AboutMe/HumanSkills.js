import { motion } from "framer-motion";
import SkillCard from "components/ui/SkillCard";
import { useI18n } from "context/i18nContext";
import { staggerContainer, staggerItem } from "styles/animations";
import {
  GradientUsers,
  GradientHeart,
  GradientBulb,
} from "../../../assets/icons/GradientIcons";
import { SkillSection, SkillSectionHeader, SkillGrid } from "./aboutMe.styles";

const HumanSkills = () => {
  const { t } = useI18n();

  return (
    <SkillSection>
      <SkillSectionHeader>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ flexShrink: 0 }}>
          <defs>
            <linearGradient id="gPeople" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--colorSecondary)" />
              <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#gPeople)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="url(#gPeople)" strokeWidth="2" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#gPeople)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#gPeople)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Human Focus</h3>
      </SkillSectionHeader>

      <SkillGrid as={motion.div} {...staggerContainer(0.15)}>
        <motion.div {...staggerItem}>
          <SkillCard
            icon={<GradientUsers />}
            title={t('about.skillLeadership')}
            description={t('about.skillLeadershipDesc')}
          />
        </motion.div>

        <motion.div {...staggerItem}>
          <SkillCard
            icon={<GradientHeart />}
            title={t('about.skillCollaboration')}
            description={t('about.skillCollaborationDesc')}
          />
        </motion.div>

        <motion.div {...staggerItem}>
          <SkillCard
            icon={<GradientBulb />}
            title={t('about.skillCreativity')}
            description={t('about.skillCreativityDesc')}
          />
        </motion.div>
      </SkillGrid>
    </SkillSection>
  );
};

export default HumanSkills;
