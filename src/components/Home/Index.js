import { useRefs } from "context/refsContext";
import {
  ButtonHome,
  ContainerHome,
  DescriptionHome,
  TextHome,
  TitleHome,
} from "./home.styles";
import { motion } from "framer-motion";

export const Home = () => {
  const { refHome, refContact } = useRefs();

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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
            <TextHome>Hi, my name is</TextHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TitleHome>DANIEL DE RUVO</TitleHome>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <DescriptionHome>
              Passionate Frontend Developer specializing in modern web technologies. I create exceptional digital experiences with React, Vue.js, and cutting-edge tools. Always eager to learn and contribute to innovative projects that make a difference.
            </DescriptionHome>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ButtonHome onClick={() => scrollToSection(refContact)}>
              Let's Connect
            </ButtonHome>
          </motion.div>
        </ContainerHome>
      </motion.div>
    </>
  );
};
