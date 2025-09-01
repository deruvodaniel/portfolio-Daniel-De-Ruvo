import React from 'react';
import { motion } from 'framer-motion';
import {
  SectionProjects,
  ContainerProjects,
  Container,
  ImageContainer,
  Img,
  ContainerTexts,
  ProjectTitle,
  ProjectSubtitle,
  ProjectDescription,
  ContainerButtons,
  ProjectButton,
  TechStack,
  TechTag
} from './projects.styles';
import { projects } from '../../arrays/arrayProjects';

export const Projects = () => {
  return (
    <SectionProjects id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>
      
      <ContainerProjects>
        {projects.map((project, index) => (
          <Container
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Img src={project.image} alt={project.title} />
            </ImageContainer>
            
            <ContainerTexts>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <ContainerButtons>
                {project.demo && (
                  <ProjectButton 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    primary
                  >
                    Ver Demo
                  </ProjectButton>
                )}
                {project.github && (
                  <ProjectButton 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </ProjectButton>
                )}
              </ContainerButtons>
            </ContainerTexts>
          </Container>
        ))}
      </ContainerProjects>
    </SectionProjects>
  );
};