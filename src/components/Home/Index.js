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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1
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
            <TitleHome>DANIEL DE RUVO</TitleHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SubtitleHome>Crafting Digital Experiences</SubtitleHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <DescriptionHome>
              Senior UX Frontend Developer with 5+ years of experience delivering scalable, 
              high-performance web applications and intuitive UX for global clients. 
              Expert in design systems, AI in UI/UX, React, Next.js, and Accessibility (A11y). 
              Adept at leading Agile teams, mentoring, and driving data-driven solutions. 
              Known for a positive, collaborative spirit.
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
                  View Projects
                </SecondaryButton>
              </motion.div>
            </ButtonsContainer>
          </motion.div>
          
          <motion.div 
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StatsContainer>
              <motion.div variants={itemVariants}>
                <StatItem>
                  <span className="number">5+</span>
                  <span className="label">Years Experience</span>
                </StatItem>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <StatItem>
                  <span className="number">80+</span>
                  <span className="label">Projects Completed</span>
                </StatItem>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <StatItem>
                  <span className="number">10+</span>
                  <span className="label">Global Clients</span>
                </StatItem>
              </motion.div>
            </StatsContainer>
          </motion.div>
        </ContainerHome>
      </motion.div>
    </>
  );
};