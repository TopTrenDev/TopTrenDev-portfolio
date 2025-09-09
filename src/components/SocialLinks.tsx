import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { icons } from "../constants";
import { useTheme } from "../contexts/ThemeContext";

const SocialLinks = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      name: "GitHub",
      icon: icons.faGithub,
      url: "https://github.com/TopTrenDev",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800"
    },
    {
      name: "Telegram",
      icon: icons.faTelegram,
      url: "https://t.me/TopTrenDev_66",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      name: "Twitter/X",
      icon: icons.faX,
      url: "https://x.com/toptrendev",
      color: "hover:text-white",
      bgColor: "hover:bg-gray-700"
    }
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div 
        className="w-full py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <m.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={`text-2xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Connect With Me
          </h3>
          <p className={`${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's stay connected and build amazing things together!
          </p>
        </m.div>
        
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => (
            <m.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
              } ${link.bgColor} ${link.color}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  className={`text-3xl transition-all duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } group-hover:scale-110`}
                  icon={link.icon}
                />
                <span className={`text-sm font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                } group-hover:text-current transition-colors duration-300`}>
                  {link.name}
                </span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 via-green-500/20 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </m.a>
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default SocialLinks;

