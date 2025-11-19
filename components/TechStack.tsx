'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Zap, 
  Layers,
  GitBranch,
  Smartphone
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'React', icon: Zap, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: Globe, color: 'from-gray-800 to-gray-600' },
    { name: 'TypeScript', icon: Code2, color: 'from-blue-500 to-blue-700' },
    { name: 'JavaScript', icon: Code2, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', icon: Terminal, color: 'from-green-500 to-green-700' },
    { name: 'Python', icon: Code2, color: 'from-blue-500 to-yellow-500' },
    { name: 'C', icon: Code2, color: 'from-blue-600 to-blue-800' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-600 to-indigo-600' },
    { name: 'MongoDB', icon: Database, color: 'from-green-500 to-green-700' },
    { name: 'Tailwind', icon: Layers, color: 'from-cyan-400 to-blue-500' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'from-gray-700 to-gray-900' },
    { name: 'Expo/React Native', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f8f9fa] to-[#fefefe] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00d4ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#8338ec] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg text-[#718096]">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05, rotate: [0, -5, 5, 0] }}
                className="group relative"
              >
                <div className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 hover:border-[#00d4ff] hover:shadow-xl hover:shadow-[#00d4ff]/20 transition-all duration-300 cursor-default h-full flex flex-col items-center justify-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#4a5568] group-hover:text-[#00d4ff] transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
