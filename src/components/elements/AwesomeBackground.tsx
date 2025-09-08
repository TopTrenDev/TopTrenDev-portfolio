import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const AwesomeBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient background - theme responsive */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black' 
            : 'bg-gradient-to-br from-[#e4e2dd] via-[#f0eee8] to-[#e4e2dd]'
        }`} />
        
        {/* Enhanced day theme base pattern */}
        {!isDark && (
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
              `,
            }}
          />
        )}
        
        {/* Animated gradient overlays - theme responsive */}
        <m.div
          className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-tr from-green-900/20 via-transparent to-blue-900/20'
              : 'bg-gradient-to-tr from-green-100/20 via-transparent to-green-200/20'
          }`}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating geometric shapes - theme responsive */}
        {[...Array(12)].map((_, i) => (
          <m.div
            key={i}
            className={`absolute w-32 h-32 border rounded-full ${
              isDark 
                ? 'border-green-400/20' 
                : 'border-green-400/15'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              rotate: [0, 360, -180, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Enhanced day theme floating elements */}
        {!isDark && (
          <>
            {/* Floating hexagons for day theme */}
            {[...Array(6)].map((_, i) => (
              <m.div
                key={`hex-${i}`}
                className="absolute w-24 h-24 border-2 border-green-400/20 rotate-45"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
                animate={{
                  x: [0, 80, -60, 0],
                  y: [0, -80, 60, 0],
                  rotate: [45, 225, 45, 45],
                  scale: [1, 1.3, 0.7, 1],
                }}
                transition={{
                  duration: 18 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5,
                }}
              />
            ))}
            
            {/* Floating diamonds for day theme */}
            {[...Array(8)].map((_, i) => (
              <m.div
                key={`diamond-${i}`}
                className="absolute w-16 h-16 border border-green-400/25 rotate-45"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 120, -80, 0],
                  y: [0, -120, 80, 0],
                  rotate: [45, 315, 45, 45],
                  scale: [1, 1.4, 0.6, 1],
                }}
                transition={{
                  duration: 20 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2,
                }}
              />
            ))}
          </>
        )}
        
        {/* Floating squares - theme responsive */}
        {[...Array(8)].map((_, i) => (
          <m.div
            key={`square-${i}`}
            className={`absolute w-16 h-16 border rotate-45 ${
              isDark 
                ? 'border-blue-400/30' 
                : 'border-green-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 80, -60, 0],
              rotate: [45, 225, 45, 45],
              scale: [1, 1.5, 0.5, 1],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Floating triangles - theme responsive */}
        {[...Array(6)].map((_, i) => (
          <m.div
            key={`triangle-${i}`}
            className={`absolute w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent ${
              isDark 
                ? 'border-b-green-400/20' 
                : 'border-b-green-400/15'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 120, -80, 0],
              y: [0, -120, 80, 0],
              rotate: [0, 180, 360, 0],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        ))}
        
        {/* Animated grid pattern - theme responsive */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-15'}`}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: isDark ? `
                linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
              ` : `
                linear-gradient(rgba(34, 197, 94, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Pulsing orbs - theme responsive */}
        {[...Array(5)].map((_, i) => (
          <m.div
            key={`orb-${i}`}
            className={`absolute w-64 h-64 rounded-full blur-xl ${
              isDark 
                ? 'bg-gradient-to-r from-green-400/10 to-blue-400/10' 
                : 'bg-gradient-to-r from-green-400/08 to-green-400/12'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1, 1],
              opacity: isDark ? [0.3, 0.8, 0.3, 0.3] : [0.4, 0.9, 0.4, 0.4],
              x: [0, 50, -30, 0],
              y: [0, -30, 50, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Animated lines - theme responsive */}
        {[...Array(4)].map((_, i) => (
          <m.div
            key={`line-${i}`}
            className={`absolute h-px bg-gradient-to-r from-transparent to-transparent ${
              isDark 
                ? 'via-green-400/30' 
                : 'via-green-400/20'
            }`}
            style={{
              width: `${200 + i * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              x: [0, 200, -200, 0],
              y: [0, -200, 200, 0],
              opacity: [0, 1, 0, 0],
              scaleX: [0, 1, 0, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
        
        {/* Floating code symbols - theme responsive */}
        {['{', '}', '<', '>', '(', ')', '[', ']'].map((symbol, i) => (
          <m.div
            key={`symbol-${i}`}
            className={`absolute text-6xl font-mono font-bold ${
              isDark 
                ? 'text-green-400/20' 
                : 'text-green-400/15'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 150, -100, 0],
              y: [0, -150, 100, 0],
              rotate: [0, 360, -180, 0],
              scale: [0.5, 1.2, 0.8, 0.5],
              opacity: isDark ? [0.1, 0.3, 0.1, 0.1] : [0.2, 0.4, 0.2, 0.2],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.5,
            }}
          >
            {symbol}
          </m.div>
        ))}
        
        {/* Animated mesh gradient - theme responsive */}
        <m.div
          className={`absolute inset-0 ${isDark ? 'opacity-30' : 'opacity-20'}`}
          style={{
            background: isDark ? `
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)
            ` : `
              radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles - theme responsive */}
        {[...Array(20)].map((_, i) => (
          <m.div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              isDark 
                ? 'bg-green-400' 
                : 'bg-green-400/70'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
        
        {/* Enhanced day theme special effects */}
        {!isDark && (
          <>
            {/* Animated wave patterns */}
            {[...Array(3)].map((_, i) => (
              <m.div
                key={`wave-${i}`}
                className="absolute w-full h-32 opacity-20"
                style={{
                  top: `${20 + i * 30}%`,
                  background: `linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)`,
                  clipPath: 'polygon(0 50%, 100% 0%, 100% 100%, 0 100%)',
                }}
                animate={{
                  x: [-100, 100, -100],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
              />
            ))}
            
            {/* Floating tech symbols for day theme */}
            {['</>', '{}', '[]', '()', '=>', '++', '--', '=='].map((symbol, i) => (
              <m.div
                key={`tech-${i}`}
                className="absolute text-4xl text-green-400/20 font-mono font-bold"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -100, 50, 0],
                  rotate: [0, 180, 360, 0],
                  scale: [0.8, 1.2, 0.8, 0.8],
                  opacity: [0.1, 0.3, 0.1, 0.1],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.8,
                }}
              >
                {symbol}
              </m.div>
            ))}
            
            {/* Animated connection lines for day theme */}
            {[...Array(5)].map((_, i) => (
              <m.div
                key={`connection-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
                style={{
                  width: `${300 + i * 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
                animate={{
                  x: [0, 200, -200, 0],
                  y: [0, -200, 200, 0],
                  opacity: [0, 0.8, 0, 0],
                  scaleX: [0, 1, 0, 0],
                }}
                transition={{
                  duration: 6 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.2,
                }}
              />
            ))}
            
            {/* Floating gradient orbs for day theme */}
            {[...Array(4)].map((_, i) => (
              <m.div
                key={`gradient-orb-${i}`}
                className="absolute w-40 h-40 rounded-full blur-2xl"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${15 + i * 15}%`,
                  background: `radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)`,
                }}
                animate={{
                  scale: [1, 1.8, 1, 1],
                  opacity: [0.3, 0.7, 0.3, 0.3],
                  x: [0, 60, -40, 0],
                  y: [0, -40, 60, 0],
                }}
                transition={{
                  duration: 8 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 2.5,
                }}
              />
            ))}
          </>
        )}
        
        {/* Animated noise texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Enhanced day theme interactive effects */}
        {!isDark && (
          <>
            {/* Pulsing center glow for day theme */}
            <m.div
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Floating data streams for day theme */}
            {[...Array(3)].map((_, i) => (
              <m.div
                key={`stream-${i}`}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-green-400/40 to-transparent"
                style={{
                  left: `${20 + i * 30}%`,
                  top: '0%',
                }}
                animate={{
                  y: [-100, 100],
                  opacity: [0, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5,
                }}
              />
            ))}
          </>
        )}
      </div>
    </LazyMotion>
  );
};

export default AwesomeBackground;
