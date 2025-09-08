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
            whileHover={{
              scale: 1.05,
              rotate: 0,
              y: -5,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="group relative w-[300px] h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-xl border-4 border-green-400 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 mx-2"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-3 p-4 text-center">
              {/* Icon container */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center p-3 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300 shadow-md">
                  <img
                    className="w-10 h-10 object-contain"
                    src={skill.icon}
                    alt={skill.title}
                  />
                </div>
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-green-400/20 scale-0 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              
              {/* Title */}
              <h3
                className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300"
                style={{
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {skill.title}
              </h3>
              
              {/* Description */}
              <p
                className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed px-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                {skill.description}
              </p>
            </div>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-xl border-4 border-green-400/0 group-hover:border-green-400/60 transition-all duration-300"></div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default SkillsCards;

