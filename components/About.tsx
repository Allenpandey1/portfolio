'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Globe, GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      period: 'Born & Raised',
      location: 'Gorkha, Nepal',
      description: 'Historic district famous for natural beauty and birthplace of King Prithvi Narayan Shah',
      year: 'Early Years',
    },
    {
      period: 'Living & Schooling',
      location: 'Kathmandu, Nepal',
      description: 'Lived in Kathmandu for 10 years, completed schooling at Siddhartha Banasthali Institute',
      year: '~10 Years',
    },
    {
      period: 'High School',
      location: 'NCCS, Nepal',
      description: 'National College of Computer Studies — Business + Computer Science major',
      year: 'High School',
    },
    {
      period: 'Moved to USA',
      location: 'United States',
      description: 'Started new journey in America',
      year: 'Jan 2022',
    },
    {
      period: 'Business Studies',
      location: 'UNK, Nebraska',
      description: 'University of Nebraska at Kearney — Business Administration',
      year: '5 Months',
    },
    {
      period: 'Associate Degree',
      location: 'Dallas College, Texas',
      description: 'Pursued Associate in Science',
      year: '2022-2024',
    },
    {
      period: 'Current Studies',
      location: 'UTA, Texas',
      description: 'Bachelor of Science in Computer Science',
      year: '2024 - Present',
    },
  ];

  const quickFacts = [
    { icon: MapPin, label: 'Hometown', value: 'Gorkha, Nepal' },
    { icon: Globe, label: 'Languages', value: 'English, Nepali' },
    { icon: GraduationCap, label: 'Current School', value: 'University of Texas at Arlington' },
    { icon: Calendar, label: 'Graduation', value: 'Expected May 2027' },
  ];

  const education = [
    {
      school: 'The University of Texas at Arlington (UTA)',
      degree: 'Bachelor of Science in Computer Science',
      period: '2024 - Present',
      location: 'Arlington, Texas',
      status: 'Current',
    },
    {
      school: 'Dallas College',
      degree: 'Associate in Science',
      period: '2022 - 2024',
      location: 'Dallas, Texas',
      status: 'Completed',
    },
    {
      school: 'University of Nebraska at Kearney (UNK)',
      degree: 'Business Administration',
      period: '2022 (5 months)',
      location: 'Kearney, Nebraska',
      status: 'Transferred',
    },
    {
      school: 'National College of Computer Studies (NCCS)',
      degree: 'Business + Computer Science',
      period: 'High School',
      location: 'Kathmandu, Nepal',
      status: 'Completed',
    },
    {
      school: 'Siddhartha Banasthali Institute',
      degree: 'Primary & Secondary Education',
      period: 'School Years',
      location: 'Kathmandu, Nepal',
      status: 'Completed',
      link: 'https://www.sbn.edu.np/',
    },
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
    <section id="about" className="py-section px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#4a5568] leading-relaxed mb-6">
              I&apos;m <strong className="text-[#1a1a1a]">Allen Pandey</strong>, a Computer Science student at The University of Texas at Arlington with a unique journey that spans from the historic hills of <strong className="text-[#00d4ff]">Gorkha, Nepal</strong> to the tech hubs of Texas.
            </p>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-6">
              Born in <strong className="text-[#1a1a1a]">Gorkha</strong> — a district renowned for its natural beauty and rich history as the birthplace of King Prithvi Narayan Shah — I spent my formative years in Kathmandu, where I completed my education at Siddhartha Banasthali Institute, one of Nepal&apos;s top schools.
            </p>
            <p className="text-lg text-[#4a5568] leading-relaxed">
              After completing high school at NCCS with a focus on Business and Computer Science, I moved to the United States in January 2022. My path led me through business studies at UNK, then to Dallas College, and finally to UTA, where I&apos;m now pursuing my passion for Computer Science. This journey has shaped my perspective, adaptability, and drive to build meaningful technology solutions.
            </p>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 text-center">Quick Facts</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl border border-[#e2e8f0] p-6 text-center hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#4a5568] mb-1">{fact.label}</h4>
                  <p className="text-base font-medium text-[#1a1a1a]">{fact.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#8338ec] to-[#00d4ff] hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#00d4ff] to-[#8338ec] rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2 hidden md:block"></div>
                  
                  {/* Content */}
                  <div className={`bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-1 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-[#1a1a1a]">{item.period}</h4>
                      <span className="text-sm text-[#718096] font-medium bg-[#f7fafc] px-2 py-1 rounded">{item.year}</span>
                    </div>
                    <p className="text-base text-[#00d4ff] font-medium mb-2">{item.location}</p>
                    <p className="text-sm text-[#4a5568] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    edu.status === 'Current' ? 'bg-green-100 text-green-700' :
                    edu.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">
                  {edu.link ? (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">
                      {edu.school}
                    </a>
                  ) : (
                    edu.school
                  )}
                </h4>
                <p className="text-base text-[#00d4ff] font-medium mb-2">{edu.degree}</p>
                <div className="flex items-center gap-2 text-sm text-[#718096] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#718096]">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
