import React from "react";
import { useRefs } from "context/refsContext";
import { motion } from "framer-motion";
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
} from "./projects.styles";
import { arrayProjects } from "arrays/arrayProjects";

export const Projects = () => {
  const { projectsRef } = useRefs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <SectionProjects ref={projectsRef}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Proyectos
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <ContainerProjects>
          {arrayProjects.map((project, index) => (
            <Container
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ImageContainer>
                <Img src={project.img} alt={project.title} />
              </ImageContainer>
              
              <ContainerTexts>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.text}</ProjectDescription>
                
                {project.technologies && (
                  <TechStack>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                )}
                
                <ContainerButtons>
                  <ProjectButton 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    primary
                  >
                    Ver Demo
                  </ProjectButton>
                  {project.github && (
                    <ProjectButton 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver Código
                    </ProjectButton>
                  )}
                </ContainerButtons>
              </ContainerTexts>
            </Container>
          ))}
        </ContainerProjects>
      </motion.div>
    </SectionProjects>
  );
};