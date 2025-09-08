import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ImageSlider from "../components/elements/ImageSlider";
import { memoji } from "../constants";
import { introduction } from "../constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    }),
  };

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        
        <LazyMotion features={domAnimation} strict>
          <m.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full flex flex-col-reverse sm:flex-row"
          >
            <m.div 
              variants={textVariants}
              className="w-full md:w-[50%] md:h-full flex items-center mt-100"
            >
              <m.div
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
              >
                {introduction.text.map((text, index) => (
                  <m.div
                    key={index}
                    variants={paragraphVariants}
                    custom={index}
                    className="relative"
                  >
                    {index === 0 ? (
                      <m.span
                        className="text-[#22c55e] inline-block"
                        style={{ fontSize: "1.2em", fontWeight: "900" }}
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: "0 0 20px #22c55e",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {text}
                      </m.span>
                    ) : index === 4 ? (
                      <m.a 
                        href="https://cvdesignr.com/p/6844a48db51d7" 
                        target="_blank"
                        className="inline-block"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span
                          className="text-[#629C34]"
                          style={{ fontSize: "0.95em", fontWeight: "700" }}
                        >
                          {text.split("here")[0]}
                          <span style={{ textDecoration: "underline" }}>here</span>
                          {text.split("here")[1]}
                        </span>
                      </m.a>
                    ) : (
                      <m.span
                        className="text-[#4CAF50] inline-block"
                        style={{ fontSize: "0.95em", fontWeight: "500" }}
                        whileHover={{ 
                          scale: 1.02,
                          color: "#22c55e",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {text}
                      </m.span>
                    )}
                  </m.div>
                ))}
              </m.div>
            </m.div>
            
            <m.div 
              variants={imageVariants}
              className="w-full md:w-[50%] flex h-full items-center justify-center"
            >
              <m.div 
                className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <ImageSlider images={memoji.image} />
              </m.div>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default About;

