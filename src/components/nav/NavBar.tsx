import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { createPortal } from "react-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants/index.js";
import { avatar } from "../../assets/index.js";
import ThemeToggle from "../elements/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const logoVariants = {
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

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`
          ${styles.paddingX} w-full flex items-center py-4
          fixed top-0 transition-all duration-500
          ${scrolled 
            ? 'bg-gradient-to-r from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-green-400/30' 
            : 'bg-transparent'
          }
        `}
        style={{
          zIndex: 999999,
          boxShadow: scrolled 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(34, 197, 94, 0.1)' 
            : 'none'
        }}
        data-theme={theme}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <m.div
            variants={logoVariants}
            whileHover={{ 
              scale: 1.15,
              rotate: 5,
              transition: { 
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            whileTap={{ 
              scale: 0.9,
              rotate: -10,
              transition: { duration: 0.1 }
            }}
          >
            <Link
              to="/"
              className="flex items-center group relative"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-400/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                
                {/* Main logo container */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={avatar}
                    alt="Marek Dvojak"
                    className="w-12 h-12 object-contain rounded-xl transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500 delay-100"></div>
              </div>
            </Link>
          </m.div>
          
          {/* Desktop Navigation */}
          <m.ul
            className="list-none hidden lg:flex flex-row gap-8 items-center"
          >
            {navLinks.map((link, index) => {
              return (
                <m.li
                  key={link.id}
                  variants={linkVariants}
                  custom={index}
                  className="relative group"
                  onClick={() => setActive(link.title)}
                  whileHover={{ 
                    scale: 1.08,
                    y: -3,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    y: 0,
                    transition: { duration: 0.1 }
                  }}
                >
                  <a 
                    href={`#${link.id}`} 
                    className={`
                      relative z-10 px-6 py-3 rounded-xl font-semibold text-lg
                      transition-all duration-300 cursor-pointer group
                      ${active === link.title 
                        ? 'text-white dark:text-gray-900' 
                        : 'text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-300'
                      }
                    `}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-green-500/20 to-green-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    
                    {/* Text with gradient effect */}
                    <span className="relative z-10 bg-gradient-to-r from-current to-current bg-clip-text">
                      {link.title}
                    </span>
                    
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </a>
                  
                  {active === link.title && (
                    <m.div
                      className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-xl shadow-lg shadow-green-400/25"
                      layoutId="activeTab"
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30,
                        duration: 0.5
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl animate-pulse"></div>
                    </m.div>
                  )}
                  
                  {/* Floating indicator */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                </m.li>
              );
            })}
            
            {/* Theme Toggle */}
            <m.div
              variants={linkVariants}
              custom={navLinks.length}
              className="ml-4"
            >
              <ThemeToggle />
            </m.div>
          </m.ul>
          
          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <ThemeToggle />
            
            <m.button
              className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              onClick={() => setToggle(!toggle)}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: -10,
                transition: { duration: 0.1 }
              }}
              aria-label="Toggle menu"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <m.div
                className="relative w-6 h-6 flex flex-col justify-center items-center"
                animate={toggle ? "open" : "closed"}
              >
                <m.span
                  className="block w-5 h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 rounded-full transition-all duration-300"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                />
                <m.span
                  className="block w-5 h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 rounded-full transition-all duration-300 mt-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <m.span
                  className="block w-5 h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-300 dark:to-gray-400 rounded-full transition-all duration-300 mt-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                />
              </m.div>
              
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
            </m.button>
            
            {toggle && createPortal(
              <>
                {/* Backdrop overlay to isolate from background */}
                <m.div
                  className="fixed inset-0 bg-black/30"
                  style={{ zIndex: 999998 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setToggle(false)}
                />
                
                {/* Mobile menu */}
                <m.div
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed top-20 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 min-w-[220px] backdrop-blur-xl"
                  style={{
                    zIndex: 999999,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)'
                  }}
                >
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-green-500/10 to-green-400/5 rounded-2xl"></div>
                
                <ul className="list-none flex flex-col gap-3 relative z-10">
                  {navLinks.map((link, index) => {
                    return (
                      <m.li
                        key={link.id}
                        initial={{ opacity: 0, x: 30, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          scale: 1,
                          transition: { 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                          }
                        }}
                        className="group relative"
                        onClick={() => {
                          setActive(link.title);
                          setToggle(!toggle);
                        }}
                        whileHover={{ 
                          x: 8,
                          scale: 1.02,
                          transition: { 
                            duration: 0.2,
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                      >
                        <a 
                          href={`#${link.id}`}
                          className={`
                            relative block font-semibold text-base px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group
                            ${active === link.title 
                              ? 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-400 shadow-lg shadow-green-400/25' 
                              : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600'
                            }
                          `}
                        >
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-green-500/20 to-green-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                          
                          {/* Text with gradient effect */}
                          <span className="relative z-10 bg-gradient-to-r from-current to-current bg-clip-text">
                            {link.title}
                          </span>
                          
                          {/* Active indicator */}
                          {active === link.title && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          )}
                          
                          {/* Hover indicator */}
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-green-400 group-hover:h-8 transition-all duration-300 rounded-r-full"></div>
                        </a>
                      </m.li>
                    );
                  })}
                </ul>
                
                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-40 delay-100"></div>
                </m.div>
              </>,
              document.body
            )}
          </div>
        </div>
      </m.nav>
    </LazyMotion>
  );
};

export default Navbar;
