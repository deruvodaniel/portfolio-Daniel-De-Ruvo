import React from 'react';
import { RefsContextProvider } from './context/refsContext';
import { Container, Main } from './app.styles';
import Header from './components/Header';
import Home from './components/Home/Index';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SvgContainer from './components/SvgContainer/SvgContainer';
import ModalLoading from './components/ModalLoading';
import ModalMessageForm from './components/ModalMessageForm';

function App() {
  return (
    <RefsContextProvider>
      <Container>
        <Header />
        <Main>
          <Home />
          <AboutMe />
          <Technologies />
          <Projects />
          <Courses />
          <Contact />
        </Main>
        <Footer />
        <SvgContainer />
        <ModalLoading />
        <ModalMessageForm />
      </Container>
    </RefsContextProvider>
  );
}

export default App;