import { useRefs } from "context/refsContext";
import {
  ContainerTechnologies,
  SectionTechnologies,
  TechCard,
} from "./technologies.styles";
import { motion } from "framer-motion";
import { technologies } from "arrays/arrayTechnologies";

export const Technologies = () => {
  const { refTechnologies } = useRefs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Technologies & Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContainerTechnologies>
            {technologies.map(({ id, img, text }) => (
              <motion.div key={id} variants={itemVariants}>
                <TechCard className="hover-lift">
                  <img 
                    src={img} 
                    alt={text}
                    title={text}
                    className="tech-icon"
                  />
                  <div className="tech-name">{text}</div>
                </TechCard>
              </motion.div>
            ))}
          </ContainerTechnologies>
        </motion.div>
      </SectionTechnologies>
    </motion.div>
  );
};