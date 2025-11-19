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
    <section className="min-h-screen flex items-center px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] mb-8 leading-tight tracking-tight"
            >
              Hey, I&apos;m Allen Pandey 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-[#4a5568] mb-8 font-normal leading-relaxed"
            >
              Computer Science Student & Full-Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-[#718096] mb-10 max-w-xl leading-relaxed"
            >
              Building modern, scalable web applications with Python, TypeScript, React, and Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4"
            >
              <button
                onClick={() => handleSmoothScroll('#projects')}
                className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#8338ec] text-white font-medium hover:opacity-90 transition-all duration-200 text-base"
              >
                View Projects
              </button>
              <button
                onClick={() => handleSmoothScroll('#contact')}
                className="px-7 py-3.5 rounded-lg border border-[#e2e8f0] text-[#4a5568] font-medium hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-200 text-base"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Graphic Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="w-full h-96 md:h-[500px] rounded-2xl bg-gradient-to-br from-[#00d4ff] via-[#8338ec] to-[#00d4ff] border border-[#e2e8f0] shadow-2xl flex items-center justify-center overflow-hidden relative">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/30 via-[#8338ec]/30 to-[#00d4ff]/30"></div>
              
              {/* Geometric patterns */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Code-inspired visual elements */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
                {/* Terminal-like window */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 shadow-xl"
                >
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="space-y-2 font-mono text-sm text-white/90">
                    <div className="flex gap-2">
                      <span className="text-[#00d4ff]">$</span>
                      <span>npm run dev</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-green-400">✓</span>
                      <span>Next.js ready</span>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="text-green-400">✓</span>
                      <span>Portfolio loaded</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating code blocks */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
                >
                  <span className="text-white font-mono text-xs">{'< />'}</span>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center"
                >
                  <span className="text-white font-mono text-xs">{'{ }'}</span>
                </motion.div>
              </div>

              {/* Animated background shapes */}
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
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
