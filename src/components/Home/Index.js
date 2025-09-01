import { useRefs } from "../../context/refsContext";
import {
  ContainerHome,
  TextHome,
  TitleHome,
  SubtitleHome,
  DescriptionHome,
  ButtonsContainer,
  ButtonHome,
  SecondaryButton,
  StatsContainer,
  StatItem,
} from "./home.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";

export const Home = () => {
  const { refHome } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? -500 : 0;

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ContainerHome ref={refHome}>
        <TextHome>Frontend Developer</TextHome>
        <TitleHome>Daniel De Ruvo</TitleHome>
        <SubtitleHome>Creating Digital Experiences</SubtitleHome>
        <DescriptionHome>
          I craft exceptional digital experiences through innovative frontend development, 
          focusing on performance, accessibility, and cutting-edge design patterns.
        </DescriptionHome>
        
        <ButtonsContainer>
          <ButtonHome>View Projects</ButtonHome>
          <SecondaryButton>Get In Touch</SecondaryButton>
        </ButtonsContainer>

        <StatsContainer>
          <StatItem>
            <span className="number">50+</span>
            <span className="label">Projects</span>
          </StatItem>
          <StatItem>
            <span className="number">3+</span>
            <span className="label">Years</span>
          </StatItem>
          <StatItem>
            <span className="number">15+</span>
            <span className="label">Technologies</span>
          </StatItem>
        </StatsContainer>
      </ContainerHome>
    </motion.div>
  );
};