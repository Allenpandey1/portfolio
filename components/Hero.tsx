'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-[#fafbfc] via-[#f0f7ff] to-[#fafbfc]">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#8338ec]/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00d4ff]/30 to-[#8338ec]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#8338ec]/30 to-[#00d4ff]/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10 border border-[#00d4ff]/20 text-sm font-medium text-[#00d4ff]">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
                Hey, I&apos;m Allen Pandey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-[#4a5568] mb-8 font-normal leading-relaxed"
            >
              Computer Science Student & Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[#718096] mb-10 max-w-xl leading-relaxed"
            >
              Building modern, scalable web applications with Python, TypeScript, React, and Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                onClick={() => handleSmoothScroll('#projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#8338ec] text-white font-medium shadow-lg shadow-[#00d4ff]/30 hover:shadow-xl hover:shadow-[#00d4ff]/40 transition-all duration-200 text-base relative overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#8338ec] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.button>
              <motion.button
                onClick={() => handleSmoothScroll('#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-lg border-2 border-[#00d4ff] text-[#00d4ff] font-medium hover:bg-[#00d4ff] hover:text-white transition-all duration-200 text-base relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Graphic Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-br from-[#00d4ff] via-[#8338ec] to-[#00d4ff] border-2 border-white/20 shadow-2xl shadow-[#00d4ff]/30 flex items-center justify-center overflow-hidden relative group">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/40 via-[#8338ec]/40 to-[#00d4ff]/40"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Enhanced geometric patterns */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1.5"/>
                    </pattern>
                    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#8338ec" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Code-inspired visual elements */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
                {/* Enhanced Terminal-like window */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="w-full max-w-sm bg-white/15 backdrop-blur-xl rounded-xl border-2 border-white/30 p-6 shadow-2xl"
                >
                  <div className="flex gap-2 mb-4">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                  <div className="space-y-2 font-mono text-sm text-white">
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <span className="text-[#00d4ff] font-bold">$</span>
                      <span>npm run dev</span>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 ml-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="text-green-400">✓</span>
                      <span>Next.js ready</span>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 ml-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <span className="text-green-400">✓</span>
                      <span>Portfolio loaded</span>
                    </motion.div>
                    <motion.div
                      className="flex gap-2 ml-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <span className="text-[#00d4ff] animate-pulse">●</span>
                      <span>Ready to code!</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced floating code blocks */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 left-8 w-24 h-24 bg-white/15 backdrop-blur-md rounded-xl border-2 border-white/30 flex items-center justify-center shadow-xl"
                >
                  <span className="text-white font-mono text-lg font-bold">{'< />'}</span>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-8 right-8 w-28 h-28 bg-white/15 backdrop-blur-md rounded-xl border-2 border-white/30 flex items-center justify-center shadow-xl"
                >
                  <span className="text-white font-mono text-lg font-bold">{'{ }'}</span>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-1/2 right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
                >
                  <span className="text-white font-mono text-xs">[ ]</span>
                </motion.div>
              </div>

              {/* Enhanced animated background shapes */}
              <motion.div
                className="absolute top-8 right-8 w-40 h-40 bg-white/25 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-48 h-48 bg-white/25 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
