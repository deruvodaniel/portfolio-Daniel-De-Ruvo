import { useRefs } from "context/refsContext";
import useHeight from "hooks/useHeight";
import useWidth from "hooks/useWidth";
import { ListLinks, Main, Links, LogoContainer, Controls, ToggleButton } from "./header.styles";
import { HeaderMobile } from "./HeaderMobile";
import { useTheme } from "context/themeContext";
import { useI18n } from "context/i18nContext";

export const Header = () => {
  const { refs } = useRefs();
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies, refExperience } = refs;
  const { width } = useWidth();
  const { height } = useHeight();
  const { toggleTheme, theme } = useTheme();
  const { t, toggleLang, lang } = useI18n();

  const scrollToSection = (section) => {
    const el = section?.current;
    if (!el) return;
    const headerOffset = 110;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  if (width < 1024) return <HeaderMobile refs={refs} />;

  return (
    <Main className={height > 70 && "withBackground"}>
      <LogoContainer onClick={() => scrollToSection(refHome)}>
        <div className="logo-text">DR</div>
      </LogoContainer>

      <nav role="navigation" aria-label="main">
        <ListLinks>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refHome)} onClick={() => scrollToSection(refHome)} role="link" aria-label="Navigate to Home section">{t('header.home')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refAboutMe)} onClick={() => scrollToSection(refAboutMe)} role="link" aria-label="Navigate to About Me section">{t('header.about')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refExperience)} onClick={() => scrollToSection(refExperience)} role="link" aria-label="Navigate to Experience section">{t('header.experience')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refTechnologies)} onClick={() => scrollToSection(refTechnologies)} role="link" aria-label="Navigate to Technologies section">{t('header.skills')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refProjects)} onClick={() => scrollToSection(refProjects)} role="link" aria-label="Navigate to Projects section">{t('header.projects')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refContact)} onClick={() => scrollToSection(refContact)} role="link" aria-label="Navigate to Contact section">{t('header.contact')}</Links>
        </ListLinks>
      </nav>

      <Controls>
        <ToggleButton aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '☀️'}</ToggleButton>
        <ToggleButton aria-label="Switch language" onClick={toggleLang}>{lang.toUpperCase()}</ToggleButton>
      </Controls>
    </Main>
  );
};
