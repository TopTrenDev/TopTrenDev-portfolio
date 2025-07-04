import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../components/HeroText";
import HeroParticles from "../components/Particles/HeroParticles";
import HeroScroller from "../components/elements/HeroScroller";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
        >
          <HeroText />
          <HeroParticles />
        </m.div>
        <HeroScroller />
      </LazyMotion>
    </div>
  );
};

export default Hero;

