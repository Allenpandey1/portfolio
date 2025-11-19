'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90, levelText: 'Advanced' },
        { name: 'JavaScript / TypeScript', level: 95, levelText: 'Advanced' },
        { name: 'SQL', level: 85, levelText: 'Proficient' },
        { name: 'C++', level: 70, levelText: 'Intermediate' },
        { name: 'HTML / CSS', level: 95, levelText: 'Advanced' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        { name: 'React & Next.js', level: 90, levelText: 'Advanced' },
        { name: 'Express.js', level: 92, levelText: 'Advanced' },
        { name: 'Node.js', level: 90, levelText: 'Advanced' },
        { name: 'Tailwind CSS', level: 85, levelText: 'Proficient' },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL & MongoDB', level: 88, levelText: 'Proficient' },
        { name: 'Git & GitHub', level: 95, levelText: 'Advanced' },
        { name: 'Docker', level: 75, levelText: 'Intermediate' },
        { name: 'REST API Design', level: 92, levelText: 'Advanced' },
      ],
    },
    {
      title: 'Cloud & Deployment',
      icon: '☁️',
      skills: [
        { name: 'AWS / Azure', level: 82, levelText: 'Proficient' },
        { name: 'Vercel & Netlify', level: 85, levelText: 'Proficient' },
        { name: 'Render', level: 88, levelText: 'Proficient' },
        { name: 'CI/CD', level: 78, levelText: 'Intermediate' },
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
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 font-bold text-[#1a1a1a] mb-2">Technical Skills</h2>
          <p className="text-[#718096] text-base">Technologies I use to build exceptional software</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-5 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[#4a5568] text-sm font-medium">{skill.name}</span>
                      <span className="text-xs px-2.5 py-0.5 bg-[#00d4ff]/10 text-[#00d4ff] rounded-md font-medium">
                        {skill.levelText}
                      </span>
                    </div>
                    <div className="w-full bg-[#f7fafc] rounded-full h-1.5 overflow-hidden border border-[#e2e8f0]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00d4ff] to-[#8338ec] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

