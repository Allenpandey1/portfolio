'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Allen_Pandey_Resume.pdf';
    link.download = 'Allen_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeData = {
    summary: `Computer Science student at The University of Texas at Arlington with expertise in full-stack development. 
    Proficient in Python, TypeScript, React, and Next.js. Passionate about building scalable web applications and 
    solving complex problems with modern technologies. Seeking internship and full-time opportunities to contribute 
    to impactful products and grow as a developer.`,
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'The University of Texas at Arlington (UTA)',
        location: 'Arlington, Texas',
        period: 'Expected Graduation: May 2027',
        coursework: [
          'Data Structures & Algorithms',
          'Database Systems',
          'Software Engineering',
          'Web Development',
          'Operating Systems',
          'Computer Networks',
          'Object-Oriented Design',
          'Systems Programming',
        ],
      },
      {
        degree: 'Associate in Science',
        institution: 'Dallas College',
        location: 'Dallas, Texas',
        period: '2022 - 2024',
      },
    ],
    technicalSkills: {
      'Programming Languages': ['Python', 'JavaScript / TypeScript', 'C', 'SQL', 'HTML / CSS'],
      'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Expo / React Native'],
      'Databases & Tools': ['PostgreSQL', 'MongoDB', 'Git & GitHub', 'Docker', 'REST API Design'],
      'Cloud & Deployment': ['Vercel', 'Netlify', 'Render', 'AWS (Basics)', 'CI/CD'],
    },
    projects: [
      {
        name: 'AccessAid',
        description: 'Accessibility-focused mobile app built using React Native and AI. Includes OCR, text reader, dark mode, and API pipeline to read text from camera images and uploaded files.',
        technologies: ['React Native', 'Expo', 'TypeScript', 'OCR API', 'Flask'],
      },
    ],
    experience: [
      {
        title: 'Software Developer — AccessAid Project',
        company: 'Capstone Project',
        period: '2024 - Present',
        responsibilities: [
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
        responsibilities: [
          'Coursework: Systems Programming, Assembly (CSE 2312), Linear Programming, Technical Communication',
          'Experience with C, Python, React, Next.js, Linux development',
        ],
      },
    ],
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="py-section px-6 lg:px-8 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-[#00d4ff]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">Resume</h2>
          </div>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8338ec] text-white font-semibold hover:shadow-lg transition-all shadow-md text-lg"
          >
            <Download className="w-6 h-6" />
            Download Resume PDF
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-12 md:p-16 lg:p-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 pb-10 border-b-2 border-[#e2e8f0]">
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">ALLEN PANDEY</h1>
            <p className="text-2xl text-[#4a5568] font-medium mb-3">Computer Science Student & Full-Stack Developer</p>
            <p className="text-lg text-[#718096]">Arlington, Texas | Open to Internship & Full-Time Opportunities</p>
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-6 uppercase tracking-wider">Summary</h3>
            <p className="text-lg text-[#4a5568] leading-relaxed">{resumeData.summary}</p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-8 uppercase tracking-wider">Education</h3>
            <div className="space-y-10">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-[#1a1a1a] mb-2">{edu.degree}</h4>
                      <p className="text-[#00d4ff] font-semibold text-lg mb-2">{edu.institution}</p>
                      <p className="text-[#718096] text-base">{edu.location}</p>
                    </div>
                    <span className="text-[#718096] text-base font-semibold mt-3 md:mt-0 bg-[#f7fafc] px-4 py-2 rounded-lg">{edu.period}</span>
                  </div>
                  {edu.coursework && (
                    <div className="mt-6">
                      <p className="text-[#4a5568] text-base font-semibold mb-4">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-3">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-[#f7fafc] to-[#ffffff] border border-[#e2e8f0] rounded-lg text-[#4a5568] text-base font-medium hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 transition-all"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-8 uppercase tracking-wider">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(resumeData.technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-[#f7fafc] rounded-xl p-6 border border-[#e2e8f0]">
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-5">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-[#4a5568] text-base font-medium hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-8 uppercase tracking-wider">Experience</h3>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="bg-[#f7fafc] rounded-xl p-8 border border-[#e2e8f0]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">{exp.title}</h4>
                      <p className="text-[#00d4ff] font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="text-[#718096] text-base font-semibold mt-3 md:mt-0 bg-white px-4 py-2 rounded-lg">{exp.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-[#4a5568] text-lg flex items-start leading-relaxed">
                        <span className="text-[#00d4ff] mr-3 mt-2 text-xl">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-[#00d4ff] mb-8 uppercase tracking-wider">Projects</h3>
            <div className="space-y-8">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="bg-[#f7fafc] rounded-xl p-8 border border-[#e2e8f0]">
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">{project.name}</h4>
                  <p className="text-[#4a5568] text-lg leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-[#4a5568] text-base font-medium hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
