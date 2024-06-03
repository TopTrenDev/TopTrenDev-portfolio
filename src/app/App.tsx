/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import NavBar from "../components/nav/NavBar";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

