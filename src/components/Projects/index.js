import {
  SectionProjects,
  ContainerProjects,
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
        <h2>{t('projects.title')}</h2>
        <ContainerProjects>
          {projects.map((project) => (
            <SimpleProjectCard key={project.id} project={project} />
          ))}
        </ContainerProjects>
      </SectionProjects>
    </div>
  );
};
