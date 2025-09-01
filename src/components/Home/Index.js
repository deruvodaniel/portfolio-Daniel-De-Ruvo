import { useRefs } from "context/refsContext";
import {
  ButtonHome,
  SecondaryButton,
  ButtonsContainer,
  ContainerHome,
  DescriptionHome,
  TextHome,
  TitleHome,
  SubtitleHome,
  StatsContainer,
  StatItem,
} from "./home.styles";
import { motion } from "framer-motion";

export const Home = () => {
  const { refHome, refContact, refProjects } = useRefs();

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      <motion.div
        style={{ zIndex: 50 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <ContainerHome ref={refHome}>
          <motion.div variants={itemVariants}>
            <TextHome>Senior UX Frontend Developer</TextHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TitleHome>DANIEL<br />DE RUVO</TitleHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SubtitleHome>Crafting Digital Experiences</SubtitleHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <DescriptionHome>
              I design and develop exceptional digital experiences with a focus on 
              performance, accessibility, and user-centered design. Currently building 
              scalable solutions for global clients.
            </DescriptionHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ButtonsContainer>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonHome onClick={() => scrollToSection(refContact)}>
                  Let's Connect
                </ButtonHome>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SecondaryButton onClick={() => scrollToSection(refProjects)}>
                  View Work
                </SecondaryButton>
              </motion.div>
            </ButtonsContainer>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <StatsContainer>
              <StatItem>
                <span className="number">5+</span>
                <span className="label">Years Experience</span>
              </StatItem>
              
              <StatItem>
                <span className="number">80+</span>
                <span className="label">Projects Delivered</span>
              </StatItem>
              
              <StatItem>
                <span className="number">10+</span>
                <span className="label">Global Clients</span>
              </StatItem>
            </StatsContainer>
          </motion.div>
        </ContainerHome>
      </motion.div>
    </>
  );
};