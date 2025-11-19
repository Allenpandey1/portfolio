'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const OpportunityModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#00d4ff]/20 to-[#8338ec]/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#8338ec]/20 to-[#00d4ff]/20 rounded-full blur-3xl"></div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-10 right-10"
                >
                  <Sparkles className="w-8 h-8 text-[#00d4ff] opacity-30" />
                </motion.div>
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute bottom-10 left-10"
                >
                  <Sparkles className="w-6 h-6 text-[#8338ec] opacity-30" />
                </motion.div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              </button>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#8338ec] flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-center text-[#1a1a1a] mb-4"
                >
                  Open to Opportunities
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-center text-[#4a5568] mb-8 font-medium"
                >
                  Internship & Full-Time Positions
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#00d4ff]/10 to-transparent rounded-xl border border-[#00d4ff]/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00d4ff]/80 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Internship Opportunities</h3>
                      <p className="text-base text-[#4a5568]">Ready to learn, contribute, and grow in a professional environment</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#8338ec]/10 to-transparent rounded-xl border border-[#8338ec]/20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8338ec] to-[#8338ec]/80 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Full-Time Positions</h3>
                      <p className="text-base text-[#4a5568]">Seeking roles where I can make a meaningful impact and advance my career</p>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#8338ec] text-white font-semibold text-center hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="#resume"
                    onClick={closeModal}
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-[#00d4ff] text-[#00d4ff] font-semibold text-center hover:bg-[#00d4ff] hover:text-white transition-all"
                  >
                    View Resume
                  </a>
                </motion.div>

                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-center gap-2 mt-6"
                >
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-sm text-[#718096] font-medium">Currently Available</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OpportunityModal;

