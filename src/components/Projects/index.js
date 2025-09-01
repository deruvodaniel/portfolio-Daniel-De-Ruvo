import React from 'react';
import { motion } from 'framer-motion';
import { useRefs } from 'context/refsContext';
import { projects } from 'arrays/arrayProjects';
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
  ProjectButton
} from './projects.styles';

export const Projects = () => {
  const { refProjects } = useRefs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionProjects ref={refProjects}>
        <h2>Featured Projects</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContainerProjects>
            {projects && projects.map((project, index) => (
              <Container
                key={project.id}
                variants={projectVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ImageContainer>
                    <Img src={project.img} alt={project.title} />
                  </ImageContainer>
                </motion.div>
                
                <ContainerTexts>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  <ProjectDescription>{project.text}</ProjectDescription>
                  <ContainerButtons>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ProjectButton 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        primary
                      >
                        View Live
                      </ProjectButton>
                    </motion.div>
                    {project.github && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ProjectButton 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </ProjectButton>
                      </motion.div>
                    )}
                  </ContainerButtons>
                </ContainerTexts>
              </Container>
            ))}
          </ContainerProjects>
        </motion.div>
      </SectionProjects>
    </motion.div>
  );
};