import {
  SectionAboutMe,
  AboutMeContent,
  SkillsContainer,
  SkillGrid,
} from "./aboutMe.styles";
import SkillCard from "components/ui/SkillCard";
import TechCarousel from "components/ui/TechCarousel";
import CollapsibleSkillSection from "components/ui/CollapsibleSkillSection";
import { motion } from "framer-motion";
import useWidth from "../../../hooks/useWidth";
import { useRefs } from "../../../context/refsContext";
import { useI18n } from "context/i18nContext";
import { technologies } from "../../../arrays/arrayTechnologies";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiStorybook,
  SiMui,
  SiStyledcomponents,
  SiSass,
  SiCss3,
  SiCypress,
  SiJest,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiGoogleanalytics,
  SiTailwindcss,
  SiRadixui,
  SiOpenai,
} from 'react-icons/si';

const techIconsMap = {
  'react': SiReact,
  'next.js': SiNextdotjs,
  'nextjs': SiNextdotjs,
  'vue.js': SiVuedotjs,
  'vue': SiVuedotjs,
  'javascript': SiJavascript,
  'typescript': SiTypescript,
  'ai tools': SiOpenai,
  'tailwind css': SiTailwindcss,
  'radix ui': SiRadixui,
  'storybook': SiStorybook,
  'mui': SiMui,
  'styled components': SiStyledcomponents,
  'sass': SiSass,
  'css modules': SiCss3,
  'cypress': SiCypress,
  'jest': SiJest,
  'git': SiGit,
  'docker': SiDocker,
  'ci/cd': SiGithubactions,
  'figma': SiFigma,
  'a11y / seo / analytics': SiGoogleanalytics,
};

// Tech icon mapping utility
const createTechIcon = (Icon, text) => {
  if (Icon) {
    return <Icon color="var(--colorPrimary)" />;
  }
  
  return (
    <span style={{ 
      fontSize: '24px', 
      fontWeight: 'bold', 
      color: 'var(--colorPrimary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      background: 'var(--borderColor)',
      borderRadius: '8px'
    }}>
      {(text || '').slice(0, 2).toUpperCase()}
    </span>
  );
};
const GradientZap = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gZap" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M13 2L3 14h7l-1 8 12-14h-8l1-6z" stroke="url(#gZap)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const GradientLayout = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gLayout" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="url(#gLayout)" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" stroke="url(#gLayout)" strokeWidth="2" />
    <line x1="10" y1="10" x2="10" y2="20" stroke="url(#gLayout)" strokeWidth="2" />
  </svg>
);

const GradientTrendingUp = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gTrend" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <polyline points="3,17 9,11 13,15 21,7" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="15,7 21,7 21,13" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const GradientUsers = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gUsers" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#gUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="9" cy="7" r="4" stroke="url(#gUsers)" strokeWidth="2" fill="none" />
    <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z" stroke="url(#gUsers)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const GradientHeart = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gHeart" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" stroke="url(#gHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 5L8 21l4-7 4 7-4-16" stroke="url(#gHeart)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const GradientBulb = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gBulb" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891b2" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M9 21h6" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 17v4" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="12" cy="9" r="7" stroke="url(#gBulb)" strokeWidth="2" fill="none" />
    <path d="M12 2v2" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="m4.22 4.22 1.42 1.42" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="m18.36 5.64 1.42-1.42" stroke="url(#gBulb)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const AboutMe = () => {
  const { refAboutMe, refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();

  // Transform technologies data to include icons
  const techsWithIcons = technologies.map(tech => {
    const key = (tech.text || '').toLowerCase();
    const Icon = techIconsMap[key] || null;
    
    return {
      ...tech,
      name: tech.text,
      icon: createTechIcon(Icon, tech.text)
    };
  });

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
            {/* <AboutMeBoxLinks>
              <a
                href="https://github.com/deruvodaniel"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <img
                  alt="GitHub"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logogblanco_imqksz.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/deruvodaniel/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <img
                  alt="LinkedIn"
                  loading="lazy"
                  decoding="async"
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                />
              </a>
              <a
                href="https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e"
                target="_blank"
                rel="noreferrer"
                title="Resume"
                aria-label="Open resume in a new tab"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                  <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
                  <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              </a>
            </AboutMeBoxLinks> */}
          </div>

          <SkillsContainer>
            {/* Technical Focus Section */}
            <CollapsibleSkillSection
              defaultExpanded={true}
              icon={
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
              }
              title="Technical Focus"
            >
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
            </CollapsibleSkillSection>

            {/* Human Focus Section */}
            <CollapsibleSkillSection
              defaultExpanded={false}
              icon={
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
              }
              title="Human Focus"
            >
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
            </CollapsibleSkillSection>

            {/* Tech Stack Section */}
            <div ref={refTechnologies}>
              <CollapsibleSkillSection
                defaultExpanded={false}
                icon={
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
                }
                title={t('tech.title')}
              >
                <TechCarousel technologies={techsWithIcons} />
              </CollapsibleSkillSection>
            </div>
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};
