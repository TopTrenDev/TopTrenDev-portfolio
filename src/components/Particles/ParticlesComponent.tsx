/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: ParticlesComponent.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
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

