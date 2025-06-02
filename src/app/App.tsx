/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: App.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
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

