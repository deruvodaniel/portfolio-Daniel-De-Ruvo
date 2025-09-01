import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { RefsContext } from '../../context/refsContext';
import { projects } from '../../arrays/arrayProjects';
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

export const Projects = () => {
  const { refProjects } = useContext(RefsContext);

  return (
    <SectionProjects ref={refProjects}>
      <h2>Projects</h2>
      <ContainerProjects>
        {projects && projects.map((project, index) => (
          <Container
            key={index}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ImageContainer>
              <Img src={project.img} alt={project.title} />
            </ImageContainer>
            <ContainerTexts>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <ProjectDescription>{project.text}</ProjectDescription>
              <ContainerButtons>
                <ProjectButton 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  primary
                >
                  View Project
                </ProjectButton>
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