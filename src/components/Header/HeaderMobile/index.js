import { useRef, useState } from "react";
import { Links, ListLinks, LogoMenu, Main, Controls, ToggleButton } from "./headerMobile.styles";
import { useTheme } from "context/themeContext";
import { useI18n } from "context/i18nContext";

const iconMenu = "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379488/portfolio%20daniel/menu_uw4rjt.png";
const iconClose = "https://res.cloudinary.com/dn7qsxzdf/image/upload/v1652379624/portfolio%20daniel/cerrar_zhp6o1.png";

export const HeaderMobile = ({ refs }) => {
  const { refAboutMe, refProjects, refContact, refHome, refTechnologies } = refs;
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
    if (section !== null && section.current !== null) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    menu.current.classList.remove("open");
    setMenuOpen(false);
  };

  return (
    <Main ref={menu}>
      <img
        src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1653404223/portfolio%20daniel/LOGO_DR_six97a.svg"
        width="65px"
        onClick={() => scrollToSection(refHome)}
        height="45px"
        aria-label="logo Daniel"
      />
      <Controls>
        <ToggleButton aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? '🌙' : '☀️'}</ToggleButton>
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
