/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: HeroParticles.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;

