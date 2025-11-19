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
    <section id="contact" className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#fef3f7] via-white to-[#f0f9ff]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">Get In Touch</h2>
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
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white rounded-xl border border-[#e2e8f0] p-6 text-center hover:shadow-md hover:border-[#00d4ff]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8338ec]/10 flex items-center justify-center group-hover:from-[#00d4ff]/20 group-hover:to-[#8338ec]/20 transition-all">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{contact.label}</h3>
                <p className="text-base text-[#718096]">{contact.value}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
