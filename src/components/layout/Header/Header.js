import { useRefs } from "context/refsContext";
import useHeight from "hooks/useHeight";
import useWidth from "hooks/useWidth";
import { ListLinks, Main, Links, LogoContainer, Controls, ToggleButton } from "./header.styles";
import { HeaderMobile } from "./HeaderMobile";
import { useTheme } from "context/themeContext";
import { useI18n } from "context/i18nContext";
import { smoothScrollTo } from "lib/scrollTo";

export const Header = () => {
  const { refs } = useRefs();
  const { refProjects, refContact, refHome, refExperience, refAboutMe } = refs;
  const { width } = useWidth();
  const { height } = useHeight();
  const { toggleTheme, theme } = useTheme();
  const { t, toggleLang, lang } = useI18n();

  const scrollToSection = (section) => {
    const el = section?.current;
    if (!el) return;
    const headerOffset = 90;
    smoothScrollTo(el, { offset: headerOffset, duration: 800 });
  };

  if (width < 1024) return <HeaderMobile refs={refs} />;

  return (
    <Main className={height > 70 ? "withBackground" : ""}>
      <LogoContainer onClick={() => scrollToSection(refHome)}>
        <img src="/DR-Logo.png" alt="Daniel De Ruvo" className="logo-image" width="70" height="70" />
      </LogoContainer>

      <nav role="navigation" aria-label="main">
        <ListLinks>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refHome)} onClick={() => scrollToSection(refHome)} role="link" aria-label="Navigate to About Me section">{t('header.about')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refAboutMe)} onClick={() => scrollToSection(refAboutMe)} role="link" aria-label="Navigate to Skills section">{t('header.skills')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refExperience)} onClick={() => scrollToSection(refExperience)} role="link" aria-label="Navigate to Experience section">{t('header.experience')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refProjects)} onClick={() => scrollToSection(refProjects)} role="link" aria-label="Navigate to Projects section">{t('header.projects')}</Links>
          <Links tabIndex={0} onKeyDown={(e)=> (e.key==='Enter'||e.key===' ') && scrollToSection(refContact)} onClick={() => scrollToSection(refContact)} role="link" aria-label="Navigate to Contact section">{t('header.contact')}</Links>
        </ListLinks>
      </nav>

      <Controls>
        <ToggleButton 
          id="theme-toggle" 
          aria-label="Toggle theme" 
          aria-pressed={theme === 'dark'} 
          onClick={() => { 
            toggleTheme(); 
            const btn = document.getElementById('theme-toggle'); 
            if (btn) { 
              btn.classList.remove('theme-animate'); 
              void btn.offsetWidth; 
              btn.classList.add('theme-animate'); 
            } 
          }}
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="gMoon" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#00FFA3" />
                  <stop offset="100%" stopColor="#7CFFCB" />
                </linearGradient>
              </defs>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="url(#gMoon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="gSun" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="5" stroke="url(#gSun)" strokeWidth="2" fill="none" />
              <line x1="12" y1="1" x2="12" y2="3" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="url(#gSun)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </ToggleButton>
        <ToggleButton aria-label="Switch language" onClick={toggleLang}>{lang.toUpperCase()}</ToggleButton>
      </Controls>
    </Main>
  );
};
