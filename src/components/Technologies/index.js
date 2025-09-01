import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard,
} from "./technologies.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { technologies } from "../../arrays/arrayTechnologies";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";

const Icon = ({ name }) => {
  const stroke = "var(--colorSecondary)";
  const size = 48;
  const common = { width: size, height: size, fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch ((name || '').toLowerCase()) {
    case 'react':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <circle cx="32" cy="32" r="6" fill="var(--colorSecondary)" />
          <ellipse cx="32" cy="32" rx="26" ry="10" />
          <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(120 32 32)" />
        </svg>
      );
    case 'next.js':
    case 'nextjs':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M10 32a22 22 0 1 0 44 0 22 22 0 1 0-44 0Z" />
          <path d="M24 24h16M24 32h10" />
          <path d="M26 22l20 24" />
        </svg>
      );
    case 'vue.js':
    case 'vue':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M8 16l24 40L56 16H42L32 32 22 16Z" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <rect x="10" y="10" width="44" height="44" rx="6" />
          <path d="M24 24v20M40 24c6 0 6 8 0 8s-6 8 0 8" />
        </svg>
      );
    case 'mui':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M12 44V20l20 12 20-12v24L32 32 12 44Z" />
        </svg>
      );
    case 'styled components':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <circle cx="20" cy="28" r="8" />
          <circle cx="44" cy="36" r="8" />
          <path d="M16 40c8 6 24 6 32 0" />
        </svg>
      );
    case 'sass':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M12 40c0-10 28-14 28-4 0 6-8 6-12 4 4 4 16 8 16 0 0-10-32-8-32 0Z" />
        </svg>
      );
    case 'css modules':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <rect x="10" y="10" width="44" height="44" rx="8" />
          <path d="M20 24h24M20 32h24M20 40h24" />
        </svg>
      );
    case 'cypress':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <circle cx="32" cy="32" r="22" />
          <path d="M44 40c-4 0-6-4-6-8s2-8 6-8M20 40l8-16" />
        </svg>
      );
    case 'jest':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M16 28l8-14 8 14" />
          <circle cx="50" cy="16" r="4" fill="var(--colorSecondary)" />
          <path d="M16 34c0 10 12 14 16 14s16-4 16-14H16Z" />
        </svg>
      );
    case 'git':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M12 32l20-20 20 20-20 20-20-20Z" />
          <circle cx="32" cy="22" r="3" fill="var(--colorSecondary)" />
          <circle cx="40" cy="30" r="3" fill="var(--colorSecondary)" />
          <circle cx="24" cy="30" r="3" fill="var(--colorSecondary)" />
          <path d="M32 22v16M24 30h16" />
        </svg>
      );
    case 'docker':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M8 36h48c0 8-10 12-24 12S8 44 8 36Z" />
          <rect x="20" y="24" width="8" height="8" />
          <rect x="30" y="24" width="8" height="8" />
          <rect x="40" y="24" width="8" height="8" />
        </svg>
      );
    case 'ci/cd':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <circle cx="24" cy="32" r="10" />
          <circle cx="40" cy="32" r="10" />
          <path d="M34 32h-4" />
        </svg>
      );
    case 'figma':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <circle cx="24" cy="20" r="8" />
          <circle cx="40" cy="20" r="8" />
          <circle cx="24" cy="32" r="8" />
          <circle cx="40" cy="32" r="8" />
          <circle cx="32" cy="44" r="8" />
        </svg>
      );
    case 'a11y / seo / analytics':
      return (
        <svg {...common} viewBox="0 0 64 64" aria-hidden>
          <path d="M10 32s10-12 22-12 22 12 22 12-10 12-22 12S10 32 10 32Z" />
          <circle cx="32" cy="32" r="6" />
          <path d="M14 50h8V34M28 50h8V26M42 50h8V38" />
        </svg>
      );
    default:
      return null;
  }
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
        <h2>{t('tech.title')}</h2>
        <ContainerTechnologies>
          {technologies.map(({ id, img, text }) => (
            <TechCard key={id}>
              {img ? (
                <img className="tech-icon" src={img} alt={text} />
              ) : (
                <Icon name={text} />
              )}
              <span className="tech-name">{text}</span>
            </TechCard>
          ))}
        </ContainerTechnologies>
      </SectionTechnologies>
    </motion.div>
  );
};
