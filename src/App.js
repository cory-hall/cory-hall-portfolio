import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
