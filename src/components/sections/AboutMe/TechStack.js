import TechCarousel from "components/ui/TechCarousel";
import ParallaxText from "components/ui/ParallaxText";
import { useI18n } from "context/i18nContext";
import { useRefs } from "../../../context/refsContext";
import { technologies } from "../../../arrays/arrayTechnologies";
import { addIconsToTechnologies } from "../../../utils/techIcons";
import { SkillSection, SkillSectionHeader } from "./aboutMe.styles";

const TechStack = () => {
  const { refTechnologies } = useRefs();
  const { t } = useI18n();
  const techsWithIcons = addIconsToTechnologies(technologies);

  return (
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
  );
};

export default TechStack;
