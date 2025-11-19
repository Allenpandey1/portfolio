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
    <section id="experience" className="py-section px-6 lg:px-8 bg-[#f0fdfe]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Experience</h2>
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
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{exp.title}</h3>
                  <p className="text-lg text-[#00d4ff] font-medium">{exp.company}</p>
                </div>
                <span className="text-base text-[#718096] font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-base text-[#4a5568] flex items-start leading-relaxed">
                    <span className="text-[#00d4ff] mr-2 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
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
