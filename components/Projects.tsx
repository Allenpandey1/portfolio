'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AccessAid',
      description: 'Accessibility-focused mobile app built using React Native and AI. Includes OCR, text reader, dark mode, and API pipeline to read text from camera images and uploaded files.',
      tech: ['React Native', 'Expo', 'TypeScript', 'OCR API', 'Flask'],
      github: 'https://github.com/Allenpandey1',
      demo: '#',
    },
    {
      id: 2,
      title: 'Coming Soon',
      description: 'New project coming soon.',
      tech: ['TBD'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Coming Soon',
      description: 'New project coming soon.',
      tech: ['TBD'],
      github: '#',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#f8f5ff] via-white to-[#f0f9ff]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Projects</h2>
          <p className="text-lg text-[#718096]">Showcasing my best work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl border-2 border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300 group"
            >
              {/* Enhanced Image/Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-[#00d4ff] via-[#8338ec] to-[#00d4ff] flex items-center justify-center border-b border-[#e2e8f0] relative overflow-hidden group">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/50 via-[#8338ec]/50 to-[#00d4ff]/50"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Enhanced decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${project.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="2" fill="white" />
                      </pattern>
                      <linearGradient id={`gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#8338ec" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
                  </svg>
                </div>

                {/* Enhanced Icon/Visual based on project */}
                <div className="relative z-10">
                  {project.title === 'AccessAid' ? (
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-24 h-24 rounded-2xl bg-white/25 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                    >
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="w-24 h-24 rounded-2xl bg-white/25 backdrop-blur-md border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"
                    >
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Enhanced floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/70 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}

                {/* Glowing orbs */}
                <motion.div
                  className="absolute top-2 right-2 w-16 h-16 bg-white/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-20 h-20 bg-white/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{project.title}</h3>
                <p className="text-base text-[#4a5568] mb-5 leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#f7fafc] to-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#4a5568] hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-gradient-to-r hover:from-[#00d4ff]/10 hover:to-[#8338ec]/10 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Links */}
                <div className="flex gap-3">
                  {project.title !== 'Coming Soon' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white hover:from-[#00d4ff] hover:to-[#8338ec] transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-[#e2e8f0] text-[#4a5568] hover:border-[#00d4ff] hover:text-[#00d4ff] hover:bg-[#00d4ff]/5 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
