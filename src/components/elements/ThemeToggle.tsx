import React from 'react';
import { m } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <m.button
      onClick={toggleTheme}
      className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 border-2 border-green-400 dark:border-green-500 flex items-center justify-center transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-30 shadow-lg hover:shadow-xl"
      whileHover={{ 
        scale: 1.15,
        rotate: [0, -10, 10, 0],
        transition: { 
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ 
        scale: 0.9,
        rotate: -15,
        transition: { duration: 0.1 }
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>
      
      {/* Pulsing ring */}
      <div className="absolute inset-0 rounded-full border-2 border-green-400/0 group-hover:border-green-400/50 transition-all duration-300 group-hover:scale-110"></div>
      {/* Sun Icon */}
      <m.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: theme === 'light' ? 1 : 0,
          scale: theme === 'light' ? 1 : 0.5,
          rotate: theme === 'light' ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      </m.div>

      {/* Moon Icon */}
      <m.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
          scale: theme === 'dark' ? 1 : 0.5,
          rotate: theme === 'dark' ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <svg
          className="w-6 h-6 text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </m.div>

      {/* Background glow effect */}
      <m.div
        className="absolute inset-0 rounded-full bg-green-400 opacity-0"
        animate={{
          opacity: theme === 'light' ? 0.1 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
    </m.button>
  );
};

export default ThemeToggle;
