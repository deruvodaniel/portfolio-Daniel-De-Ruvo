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

  return (
    <>
      <motion.div
        style={{ zIndex: 50 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        viewport={{ once: true }}
      >
        <ContainerHome ref={refHome}>
          <TextHome>Hi, my name is</TextHome>
          <TitleHome>DANIEL DE RUVO</TitleHome>
          <DescriptionHome>
            Hardworking Frontend Developer with proven experience in Vue.js and Javascript. Helping companies create and maintain a better code base for reusability. Capable of continuous learning from senior developers. Adept in creating Web apps design, installation, testing and maintenance of software systems.Ready to apply my passion for coding to a talented engineering team to develop quality solutions.
          </DescriptionHome>
          <ButtonHome onClick={() => scrollToSection(refContact)}>
            Contact
          </ButtonHome>
        </ContainerHome>
      </motion.div>
    </>
  );
};
