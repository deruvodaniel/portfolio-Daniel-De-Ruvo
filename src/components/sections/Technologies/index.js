import {
  SectionTechnologies,
  TechnologiesTitle,
} from "./technologies.styles";
import TechCarousel from "components/ui/TechCarousel";
import { motion } from "framer-motion";
import useWidth from "../../../hooks/useWidth";
import { technologies } from "../../../arrays/arrayTechnologies";
import { useRefs } from "../../../context/refsContext";
import { useI18n } from "context/i18nContext";
import { addIconsToTechnologies } from "../../../utils/techIcons";

export const Technologies = () => {
  const { refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? 500 : 0;
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
      <SectionTechnologies ref={refTechnologies}>
        <TechnologiesTitle>{t('tech.title')}</TechnologiesTitle>
        <TechCarousel technologies={techsWithIcons} />
      </SectionTechnologies>
    </motion.div>
  );
};
