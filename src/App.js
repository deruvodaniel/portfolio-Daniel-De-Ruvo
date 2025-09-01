import React from 'react';
import { RefsContextProvider } from './context/refsContext';
import { ContainerApp, ContainerSections } from './app.styles';
import { Header } from './components/Header';
import { Home } from './components/Home/Index';
import { AboutMe } from './components/AboutMe';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Courses } from './components/Courses';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { SvgContainer } from './components/SvgContainer/SvgContainer';

function App() {
  return (
    <RefsContextProvider>
      <ContainerApp>
        <Header />
        <ContainerSections>
          <Home />
          <AboutMe />
          <Technologies />
          <Projects />
          <Courses />
          <Contact />
        </ContainerSections>
        <Footer />
        <SvgContainer />
        <div id="modal-loading"></div>
        <div id="modal-confirm"></div>
      </ContainerApp>
    </RefsContextProvider>
  );
}

export default App;