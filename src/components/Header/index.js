import { useRefs } from "context/refsContext";
import useHeight from "hooks/useHeight";
import useWidth from "hooks/useWidth";
import { ListLinks, Main, Links, LogoContainer } from "./header.styles";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
  const { refs } = useRefs();
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies } = refs;
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
      <LogoContainer onClick={() => scrollToSection(refHome)}>
        <div className="logo-text">DR</div>
      </LogoContainer>
      
      <nav role="main" aria-label="main">
        <ListLinks>
          <Links
            onClick={() => scrollToSection(refHome)}
            role="link"
            aria-label="Navigate to Home section"
          >
            Home
          </Links>
          <Links
            onClick={() => scrollToSection(refAboutMe)}
            role="link"
            aria-label="Navigate to About Me section"
          >
            About
          </Links>
          <Links
            onClick={() => scrollToSection(refTechnologies)}
            role="link"
            aria-label="Navigate to Technologies section"
          >
            Skills
          </Links>
          <Links
            onClick={() => scrollToSection(refProjects)}
            role="link"
            aria-label="Navigate to Projects section"
          >
            Projects
          </Links>
          <Links
            onClick={() => scrollToSection(refContact)}
            role="link"
            aria-label="Navigate to Contact section"
          >
            Contact
          </Links>
        </ListLinks>
      </nav>
    </Main>
  );
};