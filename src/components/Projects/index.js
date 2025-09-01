import {
  Container,
  ContainerButtons,
  ContainerProjects,
  ContainerTexts,
  ImageContainer,
  Img,
  ProjectButton,
  ProjectDescription,
  ProjectSubtitle,
  ProjectTitle,
  SectionProjects,
  TechStack,
  TechTag,
} from "./projects.styles";
import { useRefs } from "context/refsContext";
import { projects } from "arrays/arrayProjects";
import { motion } from "framer-motion";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const getTechTags = (subtitle) => {
    return subtitle.split(',').map(tech => tech.trim());
  };

  return (
    <SectionProjects ref={refProjects}>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ContainerProjects>
          {projects.map(({ id, img, title, subtitle, text, link, github, disabled = false }) => (
            <motion.div key={id} variants={itemVariants}>
              <Container>
                <ImageContainer className="hover-lift">
                  <Img src={img} alt={title} />
                </ImageContainer>
                
                <ContainerTexts>
                  <ProjectTitle>{title}</ProjectTitle>
                  <ProjectSubtitle>{subtitle}</ProjectSubtitle>
                  
                  <TechStack>
                    {getTechTags(subtitle).map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  
                  <ProjectDescription>{text}</ProjectDescription>
                  
                  <ContainerButtons>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ProjectButton 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`View ${title} live demo`}
                        primary
                      >
                        Live Demo
                      </ProjectButton>
                    </motion.div>
                    
                    {!disabled && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ProjectButton
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View ${title} source code`}
                        >
                          Source Code
                        </ProjectButton>
                      </motion.div>
                    )}
                  </ContainerButtons>
                </ContainerTexts>
              </Container>
            </motion.div>
          ))}
        </ContainerProjects>
      </motion.div>
    </SectionProjects>
  );
};