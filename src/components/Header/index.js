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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="60%" stopColor="#00FFA3" />
                <stop offset="100%" stopColor="#7CFFCB" />
              </linearGradient>
            </defs>
            <path d="M8.5 7.5a3 3 0 0 1 3-3c2.2 0 4 1.8 4 4v.2c1.4.3 2.5 1.6 2.5 3.1 0 1.6-1.2 2.9-2.7 3.1-.3 1.8-1.9 3.2-3.8 3.2-2.1 0-3.9-1.7-3.9-3.9v-6.7Z" stroke="url(#logoGrad)" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            <path d="M9 9h2m2 0h2M9 12h3m2 0h1M10 15h2" stroke="url(#logoGrad)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </div>
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
