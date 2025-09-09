import { m, LazyMotion, domAnimation } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
// import { githubIcon } from "../assets";

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
  source_code_link: string;
  demo_link?: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  image,
  // source_code_link,
  demo_link,
}: ProjectCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative group"
      >
        <Tilt
          options={{
            max: 15,
            scale: 1.02,
            speed: 1000,
            transition: true,
            axis: null,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
          }}
          className={`shadow-2xl p-5 rounded-xl sm:w-[300px] w-[100%] backdrop-blur-sm border transition-all duration-300 ${
            isDark
              ? 'bg-gray-800/50 border-gray-700 hover:border-green-400/40 hover:bg-gray-800/70'
              : 'bg-white/70 border-gray-200 hover:border-green-400/40 hover:bg-white/90'
          }`}
        >
          <m.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {image.indexOf("mp4") > 0 ? (
              <m.video
                variants={imageVariants}
                className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                autoPlay
                muted
                loop
                playsInline
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </m.video>
            ) : (
              <m.img
                variants={imageVariants}
                src={image}
                alt={name}
                className="w-full h-full md:h-[200px] object-cover rounded-lg relative group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Overlay effect */}
            <m.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </m.div>
          
          <m.div variants={contentVariants} className="mt-3">
            <m.h3 
              className={`font-bold text-2xl group-hover:text-green-400 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {name}
            </m.h3>
            <m.p className={`mt-2 text-[14px] leading-snug group-hover:text-green-300 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {description}
            </m.p>
          </m.div>
          
          <m.div variants={contentVariants} className="mt-3 flex justify-center items-center">
            <m.a
              className="shadow-md drop-shadow-green p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-lg flex justify-center items-center gap-2 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
              href={demo_link}
              target="_blank"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <m.span>Go to Website</m.span>
              <m.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </m.svg>
            </m.a>
          </m.div>
        </Tilt>
      </m.div>
    </LazyMotion>
  );
};

// const Works = () => {
//   return (
//     <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
//       {projects.map((project, index) => (
//         <ProjectCard key={`project-${index}`} index={index} {...project} />
//       ))}
//     </div>
//   );
// };

const categories = [
  "All",
  "Solana",
  "Ethereum",
  "Aptos Chain",
  "AI",
  "Web",
  "Smart Contract",
];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => {
          const cat = project.category;
          if (Array.isArray(cat)) {
            return cat.some(
              (c: string) => c.toLowerCase() === activeCategory.toLowerCase()
            );
          } else {
            return cat.toLowerCase() === activeCategory.toLowerCase();
          }
        });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div className="w-full" variants={containerVariants} initial="hidden" animate="visible">
        {/* Category Buttons */}
        <m.div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <m.button
              key={category}
              variants={buttonVariants}
              custom={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2 mx-1 rounded-full text-lg font-semibold border relative overflow-hidden ${
                activeCategory === category
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 shadow-lg shadow-green-500/25"
                  : `bg-transparent border ${
                      isDark 
                        ? 'text-gray-300 border-gray-600 hover:border-green-400 hover:text-green-400' 
                        : 'text-gray-700 border-gray-300 hover:border-green-400 hover:text-green-600'
                    }`
              } transition-all duration-300`}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 5px 15px rgba(34, 197, 94, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <m.span className="relative z-10">{category}</m.span>
              {activeCategory === category && (
                <m.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </m.button>
          ))}
        </m.div>

        {/* Project Cards */}
        <m.div 
          variants={projectsVariants}
          className="mt-5 flex flex-wrap justify-center gap-6 w-full"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Works;

