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
import { projects } from "../../arrays/arrayProjects";
import ParallaxText from "components/ParallaxText";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";

export const Projects = () => {
  const { refProjects } = useRefs();
  const { t } = useI18n();

  const getTechStack = (subtitle) => {
    return subtitle.split(', ').map(tech => tech.trim());
  };

  const getLocalized = (id, fallback) => {
    const key = `projects.items.${id}.text`;
    const res = t(key);
    return res === key ? fallback : res;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionProjects ref={refProjects}>
        <ParallaxText As="h2" amount={44} fade={0.18}>{t('projects.title')}</ParallaxText>
        <ContainerProjects>
          {projects.map(({ id, title, subtitle, text, link, github }, index) => (
            <ProjectItem key={id} index={index + 1}>
              <ProjectMeta>
                <ProjectCategory>{t('projects.category')}</ProjectCategory>
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
                <ProjectDescription>{getLocalized(id, text)}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
                    {t('projects.live')}
                  </ProjectLink>
                  <ProjectLink href={github} target="_blank" rel="noopener noreferrer">
                    {t('projects.source')}
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
