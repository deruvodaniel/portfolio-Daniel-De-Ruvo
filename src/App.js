import { ContainerApp, ContainerSections } from "app.styles";
import { RefsContextProvider } from "context/refsContext";
import { Header } from "components/Header";
import { AboutMe } from "components/AboutMe";
import { Projects } from "components/Projects";
import { Home } from "components/Home/Index";
import { Courses } from "components/Courses";
import { Technologies } from "components/Technologies";
import { Contact } from "components/Contact/Contact";
import { Footer } from "components/Footer/Footer";
import { SvgContainer } from "components/SvgContainer/SvgContainer";

const App = () => {
  return (
    <>
      <RefsContextProvider>
        <ContainerApp>
          <ContainerSections>
            <Header />
            <Home />
            <AboutMe />
            <Courses />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
          </ContainerSections>
        </ContainerApp>
      </RefsContextProvider>
      <SvgContainer />
    </>
  );
};

export default App;
