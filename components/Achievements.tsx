'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, GraduationCap, Code2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code2,
      title: 'Full-Stack Developer',
      description: 'Building end-to-end web applications with modern technologies',
      color: 'from-blue-500 to-cyan-500',
      badge: 'Active',
    },
    {
      icon: GraduationCap,
      title: 'Computer Science Student',
      description: 'Pursuing Bachelor\'s at UTA with focus on software engineering',
      color: 'from-purple-500 to-pink-500',
      badge: 'Current',
    },
    {
      icon: Target,
      title: 'Accessibility Advocate',
      description: 'Created AccessAid - an accessibility-focused mobile application',
      color: 'from-green-500 to-emerald-500',
      badge: 'Project',
    },
    {
      icon: Star,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices',
      color: 'from-orange-500 to-yellow-500',
      badge: 'Ongoing',
    },
  ];

  const skills = [
    { name: 'Frontend Development', level: 85, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'Backend Development', level: 80, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Mobile Development', level: 75, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { name: 'Database Design', level: 70, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#fafbfc] via-[#f0f7ff] to-[#fafbfc] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8338ec] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Trophy className="w-8 h-8 text-[#00d4ff] mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
              Achievements & Skills
            </span>
          </h2>
          <p className="text-lg text-[#718096] max-w-2xl mx-auto">
            Highlights of my journey and expertise in software development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-6 hover:border-[#00d4ff]/50 hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`} />
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#00d4ff] transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                          {achievement.badge}
                        </span>
                      </div>
                      <p className="text-base text-[#4a5568] leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl border-2 border-[#e2e8f0] p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
              Technical Proficiency
            </span>
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#00d4ff] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-[#718096]">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-[#f7fafc] rounded-full overflow-hidden border border-[#e2e8f0]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full shadow-lg relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

