/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ParticlesComponent.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";

interface ParticlesComponentProps {
  particlesOptions: any;
  className: string;
  id: string;
}

const ParticlesComponent = (props: ParticlesComponentProps) => {
  const { particlesOptions, className, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine: Engine) => {
    if (!isInitialized) {
      await loadFull(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    []
  );

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesComponent;

