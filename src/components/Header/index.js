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
    const { smoothScrollTo } = require('lib/scrollTo');
    smoothScrollTo(el, { offset: headerOffset });
  };

  if (width < 1024) return <HeaderMobile refs={refs} />;

  return (
    <Main className={height > 70 && "withBackground"}>
      <LogoContainer onClick={() => scrollToSection(refHome)}>
        <div className="logo-mark" aria-label="Home" role="img">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="60%" stopColor="#00FFA3" />
                <stop offset="100%" stopColor="#7CFFCB" />
              </linearGradient>
            </defs>
            <path d="M4 9h10a0 0 0 0 1 0 0v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Z" stroke="url(#logoGrad)" strokeWidth="1.6" fill="none"/>
            <path d="M14 10h3a2 2 0 0 1 0 4h-3" stroke="url(#logoGrad)" strokeWidth="1.6" fill="none"/>
            <path d="M7 5c0 1 1 1 1 2s-1 1-1 2M10 5c0 1 1 1 1 2s-1 1-1 2" stroke="url(#logoGrad)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
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
        <ToggleButton id="theme-toggle" aria-label="Toggle theme" aria-pressed={theme === 'dark'} onClick={() => { toggleTheme(); const btn = document.getElementById('theme-toggle'); if (btn) { btn.classList.remove('theme-animate'); void btn.offsetWidth; btn.classList.add('theme-animate'); } }}>{theme === 'dark' ? '🌙' : '☀️'}</ToggleButton>
        <ToggleButton aria-label="Switch language" onClick={toggleLang}>{lang.toUpperCase()}</ToggleButton>
      </Controls>
    </Main>
  );
};
