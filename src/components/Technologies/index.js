import {
  SectionTechnologies,
  TechnologiesTitle,
} from "./technologies.styles";
import TechCarousel from "components/TechCarousel";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { technologies } from "../../arrays/arrayTechnologies";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";
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

export const Technologies = () => {
  const { refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? 500 : 0;
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
      <SectionTechnologies ref={refTechnologies}>
        <TechnologiesTitle>{t('tech.title')}</TechnologiesTitle>
        <TechCarousel technologies={techsWithIcons} />
      </SectionTechnologies>
    </motion.div>
  );
};
