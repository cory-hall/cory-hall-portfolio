import Particles from "react-particles";
import { loadFull } from 'tsparticles';

import options from './utils/particles.json'

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from './components/Footer';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Header />
      <Landing>
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        /> */}
      </Landing>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
