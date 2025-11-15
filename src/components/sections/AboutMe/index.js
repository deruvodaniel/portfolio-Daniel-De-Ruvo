import {
  SectionAboutMe,
  AboutMeContent,
  SkillsContainer,
  SkillSection,
  SkillSectionHeader,
  SkillGrid,
} from "./aboutMe.styles";
import SkillCard from "components/ui/SkillCard";
import TechCarousel from "components/ui/TechCarousel";
import ParallaxText from "components/ui/ParallaxText";
import { motion } from "framer-motion";
import useWidth from "../../../hooks/useWidth";
import { useRefs } from "../../../context/refsContext";
import { useI18n } from "context/i18nContext";
import { technologies } from "../../../arrays/arrayTechnologies";
import { addIconsToTechnologies } from "../../../utils/techIcons";
import {
  GradientZap,
  GradientLayout,
  GradientTrendingUp,
  GradientUsers,
  GradientHeart,
  GradientBulb,
} from "../../../assets/icons/GradientIcons";

export const AboutMe = () => {
  const { refAboutMe, refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();

  // Transform technologies data to include icons
  const techsWithIcons = addIconsToTechnologies(technologies);

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeContent>
          <div>
            {/* <ParallaxText As={AboutMeTitle} amount={50} fade={0.2}>{t('about.title')}</ParallaxText> */}
            {/* <AboutMeDescription>
              {t('about.p1')}
            </AboutMeDescription> */}
            {/* <AboutMeDescription>
              {t('about.p2')}
            </AboutMeDescription> */}
          </div>

          <SkillsContainer>
            {/* Technical Focus Section */}
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

            {/* Human Focus Section */}
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

              <SkillGrid>
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <SkillCard
                    icon={<GradientUsers />}
                    title={t('about.skillLeadership')}
                    description={t('about.skillLeadershipDesc')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <SkillCard
                    icon={<GradientHeart />}
                    title={t('about.skillCollaboration')}
                    description={t('about.skillCollaborationDesc')}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <SkillCard
                    icon={<GradientBulb />}
                    title={t('about.skillCreativity')}
                    description={t('about.skillCreativityDesc')}
                  />
                </motion.div>
              </SkillGrid>
            </SkillSection>

            {/* Tech Stack Section */}
            <SkillSection ref={refTechnologies}>
              <SkillSectionHeader>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ flexShrink: 0 }}>
                  <defs>
                    <linearGradient id="gStack" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="var(--colorSecondary)" />
                      <stop offset="100%" stopColor="var(--colorSecondary)" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#gStack)" strokeWidth="2" fill="none"/>
                  <path d="M3 9h18M9 21V9" stroke="url(#gStack)" strokeWidth="2"/>
                </svg>
                <ParallaxText As="h3" amount={30} fade={0.1}>{t('tech.title')}</ParallaxText>
              </SkillSectionHeader>
              
              <TechCarousel technologies={techsWithIcons} />
            </SkillSection>
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};
