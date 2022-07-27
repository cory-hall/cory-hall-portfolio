import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <About />
    </div>
  );
}

export default App;
