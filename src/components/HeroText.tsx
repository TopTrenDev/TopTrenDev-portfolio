import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  return (
    <div
      className="noselect w-fit h-fit text-green-200 absolute z-20 flex flex-col justify-center items-center text-center px-8"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-6 max-w-4xl"
        >
          {/* Main Title */}
          <m.div variants={titleVariants} className="relative">
            <m.h1
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 relative"
              style={{ 
                fontFamily: "Poppins, sans-serif",
                textShadow: "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2), 0 0 60px rgba(34, 197, 94, 0.1)"
              }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.6), 0 0 90px rgba(34, 197, 94, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                Marek Dvojak
              </span>
            </m.h1>
            
            {/* Decorative line */}
            <m.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: "80%",
                transition: { 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeOut"
                }
              }}
            />
          </m.div>
          
          {/* Subtitle */}
          <m.div variants={subtitleVariants} className="relative">
            <m.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-400 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
              whileHover={{ 
                scale: 1.05,
                color: "#4ade80",
                transition: { duration: 0.2 }
              }}
            >
              Blockchain Developer & Rust Engineer
            </m.h2>
          </m.div>
          
          {/* Description */}
          <m.div variants={descriptionVariants} className="relative">
            <m.p
              className="text-lg sm:text-xl text-green-200 max-w-2xl leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Crafting innovative Web3 solutions with Rust smart contracts, 
              Solana ecosystem expertise, and cutting-edge blockchain technology.
            </m.p>
          </m.div>

          {/* Call to Action */}
          <m.div 
            variants={descriptionVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <m.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <m.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </m.svg>
            </m.a>
            
            <m.a
              href="#contact"
              className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <m.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </m.svg>
            </m.a>
          </m.div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default HeroText;

