import React, { useEffect, Suspense, lazy } from 'react';
import { ContainerApp, ContainerSections } from './app.styles';
import { RefsContextProvider } from './context/refsContext';
import { ThemeProvider } from './context/themeContext';
import { I18nProvider } from './context/i18nContext';
import { Header, Footer } from './components/layout';
import { Home, AboutMe, Contact, Experience } from './components/sections';
import { AnimatedSection, ParallaxBackground } from './components/ui';
import './index.css';

const Projects = lazy(() => import('./components/sections').then(m => ({ default: m.Projects })));

function App() {
  useEffect(() => {
    // Temporalmente deshabilitado para debugging de scroll
    // const { initLenis } = require('./lib/lenis');
    // const cleanupLenis = initLenis();

    // let rAF;
    // const onScroll = () => {
    //   if (rAF) return;
    //   rAF = requestAnimationFrame(() => {
    //     document.documentElement.style.setProperty('--scrollY', String(window.scrollY || 0));
    //     rAF = null;
    //   });
    // };
    // window.addEventListener('scroll', onScroll, { passive: true });
    // onScroll();

    // return () => {
    //   window.removeEventListener('scroll', onScroll);
    //   cleanupLenis && cleanupLenis();
    // };
  }, []);

  return (
    <ThemeProvider>
      <I18nProvider>
        <RefsContextProvider>
          <ContainerApp>
            <ParallaxBackground />
            <a href="#main" className="skip-link">Skip to content</a>
            <Header />
            <ContainerSections id="main">
              <AnimatedSection as="section"><Home /></AnimatedSection>
              <AnimatedSection as="section"><AboutMe /></AnimatedSection>
              <AnimatedSection as="section"><Experience /></AnimatedSection>
              <Suspense fallback={null}>
                <AnimatedSection as="section" $cv="visible" $cis="auto 3200px"><Projects /></AnimatedSection>
              </Suspense>
              <AnimatedSection as="section"><Contact /></AnimatedSection>
              <Footer />
            </ContainerSections>
          </ContainerApp>
        </RefsContextProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
