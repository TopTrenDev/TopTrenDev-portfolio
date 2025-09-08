import { m, LazyMotion, domAnimation } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { title, subtitle } = props;

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

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[#22c55e] p-6 noselect"
      >
        <m.span
          variants={subtitleVariants}
          className="opacity-50 block mb-2"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            letterSpacing: "0.1em",
          }}
          whileHover={{ 
            opacity: 1,
            scale: 1.05,
            color: "#4ade80",
            transition: { duration: 0.3 }
          }}
        >
          {subtitle}
        </m.span>
        
        <m.h2
          variants={titleVariants}
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl relative"
          style={{ fontFamily: "Morganite Black" }}
        >
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <m.span 
                key={index} 
                variants={letterVariants}
                className="inline-block cursor-pointer"
                whileHover={{ 
                  scale: 1.2,
                  y: -10,
                  color: "#4ade80",
                  textShadow: "0 0 30px #22c55e",
                  transition: { 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400
                  }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { duration: 0.1 }
                }}
              >
                {char}
              </m.span>
            );
          })}
          
          {/* Decorative line */}
          <m.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ 
              width: "100%",
              transition: { 
                duration: 1,
                delay: 0.8,
                ease: "easeOut"
              }
            }}
          />
        </m.h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;

