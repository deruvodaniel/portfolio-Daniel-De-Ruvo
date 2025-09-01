import { useRefs } from "context/refsContext";
import useHeight from "hooks/useHeight";
import useWidth from "hooks/useWidth";
import { ListLinks, Main, Links } from "./header.styles";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const { refs } = useRefs();
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies } =
    refs;
  const { width } = useWidth();
  const { height } = useHeight();

  const scrollToSection = (section) => {
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  if (width < 1024) return <HeaderMobile refs={refs} />;

  return (
    <Main className={height > 70 && "withBackground"}>
      <img
        alt="Logo Daniel"
        aria-label="Logo Daniel"
        title="Home"
        src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
        width="140px"
        height="120px"
        onClick={() => scrollToSection(refHome)}
        style={{ filter: 'drop-shadow(0 0 10px rgba(89, 201, 165, 0.3))' }}
      />
      <nav role="main" aria-label="main">
        <ListLinks>
          <Links
            onClick={() => scrollToSection(refHome)}
            role="link"
            aria-label="link Home"
          >
            Home
          </Links>
          <Links
            onClick={() => scrollToSection(refAboutMe)}
            role="link"
            aria-label="link About me"
          >
            About Me
          </Links>
          <Links
            onClick={() => scrollToSection(refTechnologies)}
            role="link"
            aria-label="link Technologies"
          >
            Technologies
          </Links>
          <Links
            onClick={() => scrollToSection(refProjects)}
            role="link"
            aria-label="link projects"
          >
            Projects
          </Links>
          <Links
            onClick={() => scrollToSection(refContact)}
            role="link"
            aria-label="link contact"
          >
            Contact
          </Links>
        </ListLinks>
      </nav>
    </Main>
  );
};
