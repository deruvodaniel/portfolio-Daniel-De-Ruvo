import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard,
} from "./technologies.styles";
import { motion } from "framer-motion";
import ParallaxText from "components/ParallaxText";
import useWidth from "../../hooks/useWidth";
import { technologies } from "../../arrays/arrayTechnologies";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
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
} from 'react-icons/si';

const techIconsMap = {
  'react': SiReact,
  'next.js': SiNextdotjs,
  'nextjs': SiNextdotjs,
  'vue.js': SiVuedotjs,
  'vue': SiVuedotjs,
  'javascript': SiJavascript,
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

export const Technologies = () => {
  const { refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? 500 : 0;
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <ParallaxText As="h2" amount={24} fade={0.1}>{t('tech.title')}</ParallaxText>
        <ContainerTechnologies>
          {technologies.map(({ id, img, text }) => {
            const key = (text || '').toLowerCase();
            const Icon = techIconsMap[key] || null;
            return (
              <TechCard key={id} style={{ ['--delay']: `${(id % 6) * 0.3}s` }}>
                {img ? (
                  <img className="tech-icon" src={img} alt={text} />
                ) : Icon ? (
                  <Icon className="tech-icon" color="var(--colorSecondary)" />
                ) : (
                  <span className="tech-fallback">{(text || '').slice(0, 2).toUpperCase()}</span>
                )}
                <span className="tech-name">{text}</span>
              </TechCard>
            );
          })}
        </ContainerTechnologies>
      </SectionTechnologies>
    </motion.div>
  );
};
