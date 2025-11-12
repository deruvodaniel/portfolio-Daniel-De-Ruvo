import {
  SectionProjects,
  ContainerProjects,
  ProjectsTitle,
} from "./projects.styles";
import { projects } from "../../arrays/arrayProjects";
import SimpleProjectCard from "components/SimpleProjectCard";
import { useRefs } from "../../context/refsContext";
import { useI18n } from "context/i18nContext";

export const Projects = () => {
  const { refProjects } = useRefs();
  const { t } = useI18n();

  return (
    <div>
      <SectionProjects ref={refProjects}>
        <ProjectsTitle>{t('projects.title')}</ProjectsTitle>
        <ContainerProjects>
          {projects.map((project) => (
            <SimpleProjectCard key={project.id} project={project} />
          ))}
        </ContainerProjects>
      </SectionProjects>
    </div>
  );
};
