import {
  SectionAboutMe,
  AboutMeContent,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeBoxLinks,
  SkillsContainer,
  SkillCard,
} from "./aboutMe.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";
import { FiZap, FiLayout, FiTrendingUp } from "react-icons/fi";

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
            <AboutMeTitle>{t('about.title')}</AboutMeTitle>
            <AboutMeDescription>
              {t('about.p1')}
            </AboutMeDescription>
            <AboutMeDescription>
              {t('about.p2')}
            </AboutMeDescription>
            <AboutMeBoxLinks>
              <a
                href="https://github.com/deruvodaniel"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <img
                  alt="GitHub"
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
                  src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653917728/portfolio%20daniel/logoinblanco_isyvzt.svg"
                />
              </a>
              <a
                href="https://cdn.builder.io/o/assets%2Feb9edba76d874a5385833a00b6be2b6e%2F44c199474638431da9d1c7d8d0e28707?alt=media&token=1af667d8-3632-4777-b419-39ad015be4eb&apiKey=eb9edba76d874a5385833a00b6be2b6e"
                target="_blank"
                rel="noreferrer"
                title="Resume"
              >
                {t('about.resume')}
              </a>
            </AboutMeBoxLinks>
          </div>

          <SkillsContainer>
            <SkillCard>
              <div className="icon">⚡</div>
              <h3 className="title">{t('about.skillFrontend')}</h3>
              <p className="description">
                {t('about.skillFrontendDesc')}
              </p>
            </SkillCard>

            <SkillCard>
              <div className="icon">🎨</div>
              <h3 className="title">{t('about.skillDesign')}</h3>
              <p className="description">
                {t('about.skillDesignDesc')}
              </p>
            </SkillCard>

            <SkillCard>
              <div className="icon">🚀</div>
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
