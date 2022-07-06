import {
  Container,
  ContainerBoxImg,
  ContainerButtons,
  ContainerImg,
  ContainerProjects,
  ContainerTexts,
  Img,
  ProjectButton,
  ProjectDescription,
  ProjectSubtitle,
  ProjectTitle,
  SectionProjects,
} from "./projects.styles";
import useWidth from "hooks/useWidth";
import { useRefs } from "context/refsContext";
import { projects } from "arrays/arrayProjects";


export const Projects = () => {
  const { width } = useWidth();
  const { refProjects } = useRefs();

  return (
    <>
      <SectionProjects ref={refProjects}>
        <h2>Projects</h2>
        <ContainerProjects>
          {projects.map(
            ({ id, img, title, subtitle, text, link, github, disabled = false }) => {
              return (
                <Container
                  key={id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.7, duration: 1.5 }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {width > 1300 ? (
                    <ContainerBoxImg>
                      <ContainerImg>
                        <img src={img} alt={title} />
                      </ContainerImg>
                    </ContainerBoxImg>
                  ) : (
                    <Img src={img} alt={title} />
                  )}
                  <ContainerTexts>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectSubtitle>{subtitle}</ProjectSubtitle>
                    <ProjectDescription>{text}</ProjectDescription>
                    <ContainerButtons>
                      <ProjectButton title={link} href={link} target="_blank">
                        PREVIEW
                      </ProjectButton>
                      <ProjectButton
                        title={github}
                        href={github}
                        disabled={disabled}
                        target="_blank"
                      >
                        Github
                      </ProjectButton>
                    </ContainerButtons>
                  </ContainerTexts>
                </Container>
              );
            }
          )}
        </ContainerProjects>
      </SectionProjects>
    </>
  );
};
