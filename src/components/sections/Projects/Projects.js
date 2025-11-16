import {
  SectionProjects,
  ContainerProjects,
  ProjectsTitle,
  FeaturedContainer,
} from "./projects.styles";
import { projects } from "../../../arrays/arrayProjects";
import FeaturedProjectCard from "components/ui/FeaturedProjectCard";
import ProjectsCarousel from "components/ui/ProjectsCarousel/ProjectsCarousel";
import { useRefs } from "../../../context/refsContext";
import { useI18n } from "context/i18nContext";
import { motion } from "framer-motion";

export const Projects = () => {
  const { refProjects } = useRefs();
  const { t } = useI18n();

  // El primer proyecto es el destacado
  const [featuredProject, ...regularProjects] = projects;

  return (
    <div>
      <SectionProjects ref={refProjects}>
        <ProjectsTitle>{t('projects.title')}</ProjectsTitle>
        <ContainerProjects>
          {/* Featured Project */}
          <FeaturedContainer
            as={motion.div}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeaturedProjectCard project={featuredProject} />
          </FeaturedContainer>

          {/* Carousel de proyectos regulares */}
          <ProjectsCarousel projects={regularProjects} />
        </ContainerProjects>
      </SectionProjects>
    </div>
  );
};
