/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: SkillsCards.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../constants";

const SkillsCards = () => {
  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {skills.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[300px] h-[300px] flex flex-col items-center  bg-green-500 rounded-xl border-4 border-green-400 cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-green-200">
              <img
                className="h-[100px] flex justify-center items-center w-[100px]  bg-grayscale-25 rounded-[50%] p-1 object-contain"
                src={skill.icon}
                alt={skill.title}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {skill.title}
              </span>
              <span
                className="text-center bg-green-500 text-green-200 rounded-xl text-sm p-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                {skill.description}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;

