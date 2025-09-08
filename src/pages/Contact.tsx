import { m, LazyMotion, domAnimation } from "framer-motion";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
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

  const formVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const socialVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="contact"
        className="w-full overflow-hidden-web flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title="CONTACT" subtitle="Get in touch" />
          </div>
          
          <div className="w-full flex justify-center items-center">
            <m.div
              variants={formVariants}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </div>
        </div>
        
        <m.div className="w-full flex flex-col" variants={socialVariants}>
          <SocialLinks />
          <m.div 
            className="bg-grayscale-950 flex justify-center pb-4 text-green-200"
            variants={footerVariants}
          >
            <m.span
              whileHover={{ 
                scale: 1.05,
                color: "#4ade80",
                transition: { duration: 0.2 }
              }}
            >
              TopTrenDev's Portfolio (<em>Marek Dvojak</em>) © Copyright{" "}
              {new Date().getFullYear()}
            </m.span>
          </m.div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Contact;

