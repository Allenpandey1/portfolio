'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer — AccessAid',
      company: 'Capstone Project',
      period: '2024 - Present',
      points: [
        'Implemented OCR-based text recognition',
        'Added dark mode and accessibility settings',
        'Built API integration to read text from camera and uploaded images',
        'Improved navigation and UI flow',
      ],
    },
    {
      title: 'Computer Science Student',
      company: 'University of North Texas (UNT)',
      period: '2024 - Present',
      points: [
        'Coursework: Systems Programming, Assembly (CSE 2312), Linear Programming, Technical Communication',
        'Experience with C, Python, React, Next.js, Linux development',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#fefefe] via-[#f8f9fa] to-[#fefefe] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8338ec] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-[#718096]">My professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 md:p-8 shadow-md hover:shadow-2xl hover:shadow-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00d4ff] to-[#8338ec] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#00d4ff] transition-colors">{exp.title}</h3>
                  <p className="text-lg text-[#00d4ff] font-medium">{exp.company}</p>
                </div>
                <span className="text-base text-[#718096] font-medium mt-2 md:mt-0 bg-[#f7fafc] px-3 py-1 rounded-lg">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-base text-[#4a5568] flex items-start leading-relaxed"
                  >
                    <span className="text-[#00d4ff] mr-3 mt-1 text-lg font-bold">▸</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
