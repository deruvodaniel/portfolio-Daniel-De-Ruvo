import React from 'react';
import { motion } from 'framer-motion';
import { useRefs } from 'context/refsContext';
import { technologies } from 'arrays/arrayTechnologies';
import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard
} from './technologies.styles';

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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <h2>Technologies</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContainerTechnologies>
            {technologies && technologies.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <TechCard>
                  <img 
                    src={tech.img} 
                    alt={tech.text}
                    className="tech-icon"
                  />
                  <div className="tech-name">{tech.text}</div>
                </TechCard>
              </motion.div>
            ))}
          </ContainerTechnologies>
        </motion.div>
      </SectionTechnologies>
    </motion.div>
  );
};