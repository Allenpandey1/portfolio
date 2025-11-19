'use client';

import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Python',
    'C',
    'PostgreSQL',
    'MongoDB',
    'Tailwind',
    'Git & GitHub',
    'Expo/React Native',
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
    <section className="py-section px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Tech Stack</h2>
          <p className="text-lg text-[#718096]">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.05 }}
              className="px-5 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-base font-medium text-[#4a5568] hover:border-[#00d4ff] hover:text-[#00d4ff] hover:shadow-md transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
