import NavBar from "../components/nav/NavBar";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import { ThemeProvider } from "../contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
}

export default App;

