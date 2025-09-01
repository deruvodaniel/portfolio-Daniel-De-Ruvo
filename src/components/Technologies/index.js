import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard,
} from "./technologies.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { technologies } from "../../arrays/arrayTechnologies";
import { useRefs } from "../../context/refsContext";

export const Technologies = () => {
  const { refTechnologies } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? 500 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <h2>Technologies</h2>
        <ContainerTechnologies>
          {technologies.map(({ id, img, text }) => (
            <TechCard key={id}>
              <img className="tech-icon" src={img} alt={text} />
              <span className="tech-name">{text}</span>
            </TechCard>
          ))}
        </ContainerTechnologies>
      </SectionTechnologies>
    </motion.div>
  );
};