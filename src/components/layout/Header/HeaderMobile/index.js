import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Links, ListLinks, Main, MenuButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerNav, DrawerControls, ControlButton, LogoText } from "./headerMobile.styles";
import { useTheme } from "context/themeContext";
import { useI18n } from "context/i18nContext";
import { smoothScrollTo } from "lib/scrollTo";

export const HeaderMobile = ({ refs }) => {
  const { refProjects, refContact, refHome, refExperience, refAboutMe } = refs;
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const { t, toggleLang, lang } = useI18n();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (section) => {
    const el = section?.current;
    if (el) {
      const headerOffset = 70;
      smoothScrollTo(el, { offset: headerOffset, duration: 800 });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <Main>
        <LogoText onClick={() => scrollToSection(refHome)}>
          <img src="/DR-Logo.png" alt="Daniel De Ruvo" width="50" height="50" />
        </LogoText>
        
        <MenuButton 
          onClick={handleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          $isOpen={menuOpen}
        >
          {menuOpen ? <IoClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </MenuButton>
      </Main>

      <Drawer $isOpen={menuOpen}>
        <DrawerOverlay onClick={() => setMenuOpen(false)} $isOpen={menuOpen} />
        <DrawerContent $isOpen={menuOpen}>
          <DrawerHeader>
            <LogoText>
              <img src="/DR-Logo.png" alt="Daniel De Ruvo" width="50" height="50" />
            </LogoText>
            <MenuButton 
              onClick={handleMenu}
              aria-label="Close menu"
              $isOpen={menuOpen}
            >
              <IoClose size={28} />
            </MenuButton>
          </DrawerHeader>

          <DrawerNav role="navigation" aria-label="main">
            <ListLinks>
              <Links onClick={() => scrollToSection(refHome)}>{t('header.about')}</Links>
              <Links onClick={() => scrollToSection(refAboutMe)}>{t('header.skills')}</Links>
              <Links onClick={() => scrollToSection(refExperience)}>{t('header.experience')}</Links>
              <Links onClick={() => scrollToSection(refProjects)}>{t('header.projects')}</Links>
              <Links onClick={() => scrollToSection(refContact)}>{t('header.contact')}</Links>
            </ListLinks>
          </DrawerNav>

          <DrawerControls>
            <ControlButton 
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </ControlButton>
            <ControlButton 
              onClick={toggleLang}
              aria-label="Switch language"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8h14M5 8a6 6 0 0 0 6 6m-6-6a6 6 0 0 1 6 6m0 0a6 6 0 0 0 6-6m-6 6v8m6-14a6 6 0 0 1-6 6m6-6a6 6 0 0 0-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{lang.toUpperCase()}</span>
            </ControlButton>
          </DrawerControls>
        </DrawerContent>
      </Drawer>
    </>
  );
};
