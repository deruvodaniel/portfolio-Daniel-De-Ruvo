import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionTechnologies,
  ContainerTechnologies,
  TechCard
} from './technologies.styles';
import { technologies } from '../../arrays/arrayTechnologies';

export const Technologies = () => {
  return (
    <SectionTechnologies id="technologies">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Tecnologías
      </motion.h2>
      
      <ContainerTechnologies>
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TechCard>
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </TechCard>
          </motion.div>
        ))}
      </ContainerTechnologies>
    </SectionTechnologies>
  );
};