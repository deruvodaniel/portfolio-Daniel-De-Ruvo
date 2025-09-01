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
import { useRefs } from "../../context/refsContext";

export const Home = () => {
  const { refHome, refProjects, refContact } = useRefs();

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ContainerHome ref={refHome}>
      <TextHome>Frontend Developer</TextHome>
      <TitleHome>Daniel De Ruvo</TitleHome>
      <SubtitleHome>Creating Digital Experiences</SubtitleHome>
      <DescriptionHome>
        I craft exceptional digital experiences through clean code, modern design, 
        and user-centered thinking. Specialized in React, Vue.js, and performance optimization.
      </DescriptionHome>
      
      <ButtonsContainer>
        <ButtonHome onClick={() => scrollToSection(refProjects)}>
          View Projects
        </ButtonHome>
        <SecondaryButton onClick={() => scrollToSection(refContact)}>
          Get In Touch
        </SecondaryButton>
      </ButtonsContainer>
      
      <StatsContainer>
        <StatItem>
          <span className="number">3+</span>
          <span className="label">Years Experience</span>
        </StatItem>
        <StatItem>
          <span className="number">50+</span>
          <span className="label">Projects Completed</span>
        </StatItem>
        <StatItem>
          <span className="number">100%</span>
          <span className="label">Client Satisfaction</span>
        </StatItem>
      </StatsContainer>
    </ContainerHome>
  );
};