import { m, LazyMotion, domAnimation } from "framer-motion";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
    <div id="contact" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        
        <LazyMotion features={domAnimation} strict>
          <m.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            {/* Contact Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <m.div
                variants={formVariants}
                className="space-y-8"
              >
                <div className={`p-8 rounded-3xl backdrop-blur-xl border ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/70 border-gray-200'
                } shadow-2xl`}>
                  <h3 className={`text-3xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Get In Touch
                  </h3>
                  <p className={`text-lg mb-8 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    I'm always excited to work on new projects and collaborate with amazing people. 
                    Whether you have a question, want to discuss a project, or just want to say hello, 
                    I'd love to hear from you!
                  </p>
                  
                  {/* Contact Info Cards */}
                  <div className="space-y-4">
                    <m.div 
                      className={`flex items-center p-4 rounded-xl ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                      } hover:bg-green-400/10 transition-all duration-300`}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">📧</span>
                      </div>
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Email
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          marekdvojak146@gmail.com
                        </p>
                      </div>
                    </m.div>
                    
                    <m.div 
                      className={`flex items-center p-4 rounded-xl ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                      } hover:bg-green-400/10 transition-all duration-300`}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">🌍</span>
                      </div>
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Location
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          Available Worldwide
                        </p>
                      </div>
                    </m.div>
                    
                    <m.div 
                      className={`flex items-center p-4 rounded-xl ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
                      } hover:bg-green-400/10 transition-all duration-300`}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">⚡</span>
                      </div>
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Response Time
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          Usually within 24 hours
                        </p>
                      </div>
                    </m.div>
                  </div>
                </div>
              </m.div>

              {/* Contact Form */}
              <m.div
                variants={formVariants}
                className="relative"
              >
                <ContactForm />
              </m.div>
            </div>
            
            {/* Social Links and Footer */}
            <m.div className="w-full flex flex-col mt-16" variants={socialVariants}>
              <SocialLinks />
              <m.div 
                className={`flex justify-center py-8 ${
                  isDark ? 'bg-gray-900/50' : 'bg-gray-100/50'
                } backdrop-blur-xl`}
                variants={footerVariants}
              >
            <m.span
              className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}
              whileHover={{ 
                scale: 1.05,
                color: "#4ade80",
                transition: { duration: 0.2 }
              }}
            >
                  Marek Dvojak © Copyright{" "}
                  {new Date().getFullYear()}
                </m.span>
              </m.div>
            </m.div>
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default Contact;

