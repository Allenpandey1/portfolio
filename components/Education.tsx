'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'The University of Texas at Arlington (UTA)',
      period: 'Expected Graduation: May 2027',
      location: 'Arlington, Texas',
      coursework: [
        'Data Structures & Algorithms',
        'Database Systems',
        'Software Engineering',
        'Web Development',
        'Operating Systems',
        'Computer Networks',
        'Object-Oriented Design',
        'System Design',
      ],
    },
    {
      degree: 'Associate in Science',
      university: 'Dallas College',
      period: '2022 - 2024',
      location: 'Dallas, Texas',
      coursework: [
        'Foundational Computer Science',
        'Mathematics',
        'General Education',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 font-bold text-[#1a1a1a] mb-2">Education</h2>
          <p className="text-[#718096] text-base">Academic background and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-1.5">{edu.degree}</h3>
                  <p className="text-base text-[#00d4ff] font-medium mb-2">{edu.university}</p>
                  <div className="flex flex-wrap gap-4 text-[#718096] text-xs">
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📍</span>
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h4 className="text-base font-semibold text-[#00d4ff] mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-2.5 py-1 bg-[#f7fafc] border border-[#e2e8f0] rounded-md text-[#4a5568] text-xs font-medium hover:border-[#00d4ff] hover:bg-[#00d4ff]/5 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

