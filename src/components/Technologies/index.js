import React from "react";
import { useRefs } from "context/refsContext";
import { motion } from "framer-motion";
import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard
} from "./technologies.styles";
import { arrayTechnologies } from "arrays/arrayTechnologies";

export const Technologies = () => {
  const { technologiesRef } = useRefs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <SectionTechnologies ref={technologiesRef}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Tecnologías
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ContainerTechnologies>
          {arrayTechnologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TechCard
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="tech-icon">
                  <img src={tech.img} alt={tech.text} />
                </div>
                <h3>{tech.text}</h3>
              </TechCard>
            </motion.div>
          ))}
        </ContainerTechnologies>
      </motion.div>
    </SectionTechnologies>
  );
};