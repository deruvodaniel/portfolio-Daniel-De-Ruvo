import { motion } from "framer-motion";
import SkillCard from "components/ui/SkillCard";
import { useI18n } from "context/i18nContext";
import {
  GradientZap,
  GradientLayout,
  GradientTrendingUp,
} from "../../../assets/icons/GradientIcons";
import { SkillSection, SkillSectionHeader, SkillGrid } from "./aboutMe.styles";

const TechnicalSkills = () => {
  const { t } = useI18n();

  return (
    <SkillSection>
      <SkillSectionHeader>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ flexShrink: 0 }}>
          <defs>
            <linearGradient id="gCode" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--colorSecondary)" />
              <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <polyline points="16 18 22 12 16 6" stroke="url(#gCode)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 6 2 12 8 18" stroke="url(#gCode)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Technical Focus</h3>
      </SkillSectionHeader>

      <SkillGrid>
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <SkillCard
            icon={<GradientZap />}
            title={t('about.skillFrontend')}
            description={t('about.skillFrontendDesc')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <SkillCard
            icon={<GradientLayout />}
            title={t('about.skillDesign')}
            description={t('about.skillDesignDesc')}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <SkillCard
            icon={<GradientTrendingUp />}
            title={t('about.skillPerf')}
            description={t('about.skillPerfDesc')}
          />
        </motion.div>
      </SkillGrid>
    </SkillSection>
  );
};

export default TechnicalSkills;
