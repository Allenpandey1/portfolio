'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'allenpandeyofficial@gmail.com',
      href: 'mailto:allenpandeyofficial@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Allenpandey1',
      href: 'https://github.com/Allenpandey1',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@yourusername',
      href: '#',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Connect with me',
      href: '#',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      value: '@yourusername',
      href: '#',
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
    <section id="contact" className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#fef3f7] via-white to-[#f0f9ff] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-[#718096] max-w-xl mx-auto">
            Feel free to reach out if you&apos;d like to collaborate or have any questions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="bg-white rounded-xl border-2 border-[#e2e8f0] p-6 text-center hover:shadow-2xl hover:shadow-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-[#8338ec]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8338ec] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#00d4ff] transition-colors relative z-10">{contact.label}</h3>
                <p className="text-base text-[#718096] group-hover:text-[#4a5568] transition-colors relative z-10">{contact.value}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
