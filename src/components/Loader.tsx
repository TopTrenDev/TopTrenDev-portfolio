import { m, LazyMotion, domAnimation } from "framer-motion";

const Loader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const spinnerVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-screen h-screen overflow-hidden bg-gradient-to-br from-green-600 to-green-800 flex flex-col items-center justify-center relative"
      >
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <m.div
              key={i}
              className="absolute w-2 h-2 bg-green-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main spinner */}
        <m.div
          variants={spinnerVariants}
          className="relative mb-8"
        >
          <m.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-24 h-24 border-4 border-green-300 border-t-transparent rounded-full"
          />
          
          {/* Inner spinning ring */}
          <m.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 border-2 border-green-400 border-b-transparent rounded-full"
          />
        </m.div>

        {/* Loading dots */}
        <m.div className="flex gap-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <m.div
              key={i}
              variants={dotVariants}
              custom={i}
              className="w-3 h-3 bg-green-300 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </m.div>

        {/* Loading text */}
        <m.div variants={textVariants} className="text-center">
          <m.h2
            className="text-2xl font-bold text-green-100 mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            TopTrenDev
          </m.h2>
          <m.p
            className="text-green-200 text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Loading amazing experiences...
          </m.p>
        </m.div>

        {/* Progress bar */}
        <m.div
          className="w-64 h-1 bg-green-800 rounded-full mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <m.div
            className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Loader;

