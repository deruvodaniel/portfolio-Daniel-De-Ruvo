import React, { useEffect } from 'react';
import { ContainerApp, ContainerSections } from './app.styles';
import { RefsContextProvider } from './context/refsContext';
import { ThemeProvider } from './context/themeContext';
import { I18nProvider } from './context/i18nContext';
import { Header } from './components/Header';
import { Home } from './components/Home/Index';
import { AboutMe } from './components/AboutMe';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Courses } from './components/Courses';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Experience } from './components/Experience';
import AnimatedSection from './components/AnimatedSection';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <RefsContextProvider>
          <ContainerApp>
            <Header />
            <ContainerSections>
              <AnimatedSection as="section"><Home /></AnimatedSection>
              <AnimatedSection as="section"><AboutMe /></AnimatedSection>
              <AnimatedSection as="section"><Experience /></AnimatedSection>
              <AnimatedSection as="section"><Technologies /></AnimatedSection>
              <AnimatedSection as="section"><Projects /></AnimatedSection>
              <AnimatedSection as="section"><Courses /></AnimatedSection>
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
