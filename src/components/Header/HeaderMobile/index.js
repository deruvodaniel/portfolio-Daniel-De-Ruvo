import { useRef, useState } from "react";
import { Links, ListLinks, LogoMenu, Main, Controls, ToggleButton, LogoText } from "./headerMobile.styles";
import { useTheme } from "context/themeContext";
import { useI18n } from "context/i18nContext";

const iconMenu = "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379488/portfolio%20daniel/menu_uw4rjt.png";
const iconClose = "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379624/portfolio%20daniel/cerrar_zhp6o1.png";

export const HeaderMobile = ({ refs }) => {
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies, refExperience } = refs;
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef(null);
  const { toggleTheme, theme } = useTheme();
  const { t, toggleLang, lang } = useI18n();

  const handleMenu = () => {
    if (menu.current.classList.contains("open") === false) {
      menu.current.classList.add("open");
      setMenuOpen(true);
    } else {
      menu.current.classList.remove("open");
      setMenuOpen(false);
    }
  };

  const scrollToSection = (section) => {
    const el = section?.current;
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    if (menu.current) menu.current.classList.remove("open");
    setMenuOpen(false);
  };

  return (
    <Main ref={menu}>
      <LogoText onClick={() => scrollToSection(refHome)} aria-label="logo Daniel">DR</LogoText>
      <Controls>
        <ToggleButton id="theme-toggle-mobile" aria-label="Toggle theme" aria-pressed={theme === 'dark'} onClick={() => { toggleTheme(); const btn = document.getElementById('theme-toggle-mobile'); if (btn) { btn.classList.remove('theme-animate'); void btn.offsetWidth; btn.classList.add('theme-animate'); } }}>{theme === 'dark' ? '🌙' : '☀️'}</ToggleButton>
        <ToggleButton aria-label="Switch language" onClick={toggleLang}>{lang.toUpperCase()}</ToggleButton>
        <LogoMenu
          alt="menu"
          aria-label="menu"
          onClick={handleMenu}
          width="35px"
          height="35px"
          src={menuOpen ? iconClose : iconMenu}
        />
      </Controls>
      {menuOpen && (
        <nav role="navigation" aria-label="main">
          <ListLinks>
            <Links onClick={() => scrollToSection(refHome)}>{t('header.home')}</Links>
            <Links onClick={() => scrollToSection(refAboutMe)}>{t('header.about')}</Links>
            <Links onClick={() => scrollToSection(refExperience)}>{t('header.experience')}</Links>
            <Links onClick={() => scrollToSection(refTechnologies)}>
              {t('header.skills')}
            </Links>
            <Links onClick={() => scrollToSection(refProjects)}>{t('header.projects')}</Links>
            <Links onClick={() => scrollToSection(refContact)}>{t('header.contact')}</Links>
          </ListLinks>
        </nav>
      )}
    </Main>
  );
};
