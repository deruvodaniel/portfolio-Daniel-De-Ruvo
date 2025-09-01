import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionAboutMe,
  AboutMeContent,
  AboutMeTitle,
  AboutMeDescription,
  AboutMeBoxLinks,
  SkillsContainer,
  SkillCard
} from './aboutMe.styles';

const skills = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3',
  'Styled Components', 'Material-UI', 'Figma', 'Git', 'Responsive Design'
];

export const AboutMe = () => {
  return (
    <SectionAboutMe id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutMeTitle>Sobre Mí</AboutMeTitle>
        
        <AboutMeContent>
          <AboutMeDescription>
            Soy un <strong>Senior UX Frontend Developer</strong> con más de 5 años de experiencia 
            creando aplicaciones web escalables y de alto rendimiento. Me especializo en React, 
            Next.js y diseño de sistemas, con un enfoque en la experiencia del usuario y la 
            accesibilidad.
          </AboutMeDescription>
          
          <AboutMeDescription>
            He liderado equipos de desarrollo frontend para más de 10 clientes internacionales, 
            implementando soluciones innovadoras que han mejorado las tasas de conversión en un 
            promedio del 40%. Mi experiencia incluye desde startups hasta empresas Fortune 500.
          </AboutMeDescription>

          <SkillsContainer>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard>{skill}</SkillCard>
              </motion.div>
            ))}
          </SkillsContainer>

          <AboutMeBoxLinks>
            <motion.a
              href="https://github.com/deruvodaniel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/deruvodaniel/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </AboutMeBoxLinks>
        </AboutMeContent>
      </motion.div>
    </SectionAboutMe>
  );
};