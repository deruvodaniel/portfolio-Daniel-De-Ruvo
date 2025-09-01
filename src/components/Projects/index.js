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
  ProjectLink,
} from "./projects.styles";
import { motion } from "framer-motion";
import useWidth from "../../hooks/useWidth";
import { projects } from "../../arrays/arrayProjects";
import { useRefs } from "../../context/refsContext";

export const Projects = () => {
  const { refProjects } = useRefs();
  const { width } = useWidth();
  const initial = width > 700 ? 500 : 0;

  const getTechStack = (subtitle) => {
    return subtitle.split(', ').map(tech => tech.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: initial }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionProjects ref={refProjects}>
        <h2>Selected Work</h2>
        <ContainerProjects>
          {projects.map(({ id, title, subtitle, text, link, github }, index) => (
            <ProjectItem key={id} index={index + 1}>
              <ProjectMeta>
                <ProjectYear>2024</ProjectYear>
                <ProjectCategory>Web Application</ProjectCategory>
                <TechStack>
                  <TechStackTitle>Tech Stack</TechStackTitle>
                  <TechList>
                    {getTechStack(subtitle).map((tech, i) => (
                      <TechTag key={i}>{tech}</TechTag>
                    ))}
                  </TechList>
                </TechStack>
              </ProjectMeta>
              
              <ProjectContent>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{text}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
                    Live Site
                  </ProjectLink>
                  <ProjectLink href={github} target="_blank" rel="noopener noreferrer">
                    Source Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ContainerProjects>
      </SectionProjects>
    </motion.div>
  );
};