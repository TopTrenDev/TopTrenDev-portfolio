import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { useState } from "react";
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
  return (
    <Tilt
      options={{
        max: 40,
        scale: 1,
        speed: 450,
      }}
      className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
    >
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="relative">
          {image.indexOf("mp4") > 0 ? (
            <video
              className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
              autoPlay
            >
              <source src={image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
            />
          )}

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
        </div>
        <div className="mt-3">
          <h3 className="text-grayscale-50 font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-snug">
            {description}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1"></div>
        <div className="mt-3 flex justify-center items-center">
          <a
            className="shadow-md drop-shadow-green p-2 bg-tertiary rounded-lg flex justify-center"
            href={demo_link}
            target="_blank"
          >
            Go to Website
          </a>
        </div>
      </motion.div>
    </Tilt>
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

  return (
    <div className="w-full">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-1 mx-1 rounded-full text-lg font-semibold border ${
              activeCategory === category
                ? "bg-tertiary text-[#275527] border-[#275527]"
                : "bg-transparent text-secondary border-secondary"
            } hover:bg-tertiary hover:text-white transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;

