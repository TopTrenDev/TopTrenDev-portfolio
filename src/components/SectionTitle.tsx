/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: SectionTitle.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-[#f7911d] p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: "Morganite Black" }}
        >
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;

