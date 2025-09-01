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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionTechnologies ref={refTechnologies}>
        <h2>Technologies</h2>
        <ContainerTechnologies>
          {technologies && technologies.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: tech.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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
      </SectionTechnologies>
    </motion.div>
  );
};