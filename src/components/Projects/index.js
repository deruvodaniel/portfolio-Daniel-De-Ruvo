import React from 'react';
import { motion } from 'framer-motion';
import { useRefs } from 'context/refsContext';
import { projects } from 'arrays/arrayProjects';
import {
  SectionProjects,
  ContainerProjects,
  ProjectItem,
  ProjectMeta,
  ProjectYear,
  ProjectCategory,
  TechStack,
  TechStackTitle,
  TechList,
  TechTag,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
  ProjectLink
} from './projects.styles';

export const Projects = () => {
  const { refProjects } = useRefs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  // Extract tech stack from subtitle
  const extractTechStack = (subtitle) => {
    return subtitle.split(',').map(tech => tech.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <SectionProjects ref={refProjects}>
        <h2>Selected Work</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContainerProjects>
            {projects && projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
              >
                <ProjectItem index={index + 1}>
                  <ProjectMeta>
                    <ProjectYear>2024</ProjectYear>
                    <ProjectCategory>Web Application</ProjectCategory>
                    <TechStack>
                      <TechStackTitle>Technologies</TechStackTitle>
                      <TechList>
                        {extractTechStack(project.subtitle).map((tech, techIndex) => (
                          <TechTag key={techIndex}>{tech}</TechTag>
                        ))}
                      </TechList>
                    </TechStack>
                  </ProjectMeta>
                  
                  <ProjectContent>
                    <motion.div
                      whileHover={{ x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectTitle>{project.title}</ProjectTitle>
                    </motion.div>
                    
                    <ProjectDescription>{project.text}</ProjectDescription>
                    
                    <ProjectLinks>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ProjectLink 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Live
                        </ProjectLink>
                      </motion.div>
                      
                      {project.github && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ProjectLink 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </ProjectLink>
                        </motion.div>
                      )}
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectItem>
              </motion.div>
            ))}
          </ContainerProjects>
        </motion.div>
      </SectionProjects>
    </motion.div>
  );
};