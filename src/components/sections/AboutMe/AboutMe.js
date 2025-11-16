import { SectionAboutMe, AboutMeContent, SkillsContainer } from "./aboutMe.styles";
import { motion } from "framer-motion";
import useWidth from "../../../hooks/useWidth";
import { useRefs } from "../../../context/refsContext";
import TechnicalSkills from "./TechnicalSkills";
import HumanSkills from "./HumanSkills";
import TechStack from "./TechStack";

export const AboutMe = () => {
  const { refAboutMe } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionAboutMe ref={refAboutMe}>
        <AboutMeContent>
          <SkillsContainer>
            <TechnicalSkills />
            <HumanSkills />
            <TechStack />
          </SkillsContainer>
        </AboutMeContent>
      </SectionAboutMe>
    </motion.div>
  );
};
