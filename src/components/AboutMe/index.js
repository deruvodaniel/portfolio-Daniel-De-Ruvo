import {
  SectionAboutMe,
  AboutMeContent,
  AboutMeTitle,
  AboutMeDescription,
  SkillsContainer,
  SkillCard,
} from "./aboutMe.styles";
import { motion } from "framer-motion";
import ParallaxText from "components/ParallaxText";
import useWidth from "../../hooks/useWidth";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";
const GradientZap = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gZap" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="60%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#7CFFCB" />
      </linearGradient>
    </defs>
    <path d="M13 2L3 14h7l-1 8 12-14h-8l1-6z" stroke="url(#gZap)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const GradientLayout = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="gLayout" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="60%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#7CFFCB" />
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
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="60%" stopColor="#00FFA3" />
        <stop offset="100%" stopColor="#7CFFCB" />
      </linearGradient>
    </defs>
    <polyline points="3,17 9,11 13,15 21,7" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="15,7 21,7 21,13" stroke="url(#gTrend)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const AboutMe = () => {
  const { refAboutMe } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;
  const { t } = useI18n();

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
            <ParallaxText As={AboutMeTitle} amount={50} fade={0.2}>{t('about.title')}</ParallaxText>
            {/* <AboutMeDescription>
              {t('about.p1')}
            </AboutMeDescription> */}
            <AboutMeDescription>
              {t('about.p2')}
            </AboutMeDescription>
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
            <SkillCard>
              <div className="icon"><GradientZap /></div>
              <h3 className="title">{t('about.skillFrontend')}</h3>
              <p className="description">
                {t('about.skillFrontendDesc')}
              </p>
            </SkillCard>

            <SkillCard>
              <div className="icon"><GradientLayout /></div>
              <h3 className="title">{t('about.skillDesign')}</h3>
              <p className="description">
                {t('about.skillDesignDesc')}
              </p>
            </SkillCard>

            <SkillCard>
              <div className="icon"><GradientTrendingUp /></div>
              <h3 className="title">{t('about.skillPerf')}</h3>
              <p className="description">
                {t('about.skillPerfDesc')}
              </p>
            </SkillCard>
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};
