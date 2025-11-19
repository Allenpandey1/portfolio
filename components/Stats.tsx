'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code, FolderKanban, Calendar, Zap, TrendingUp, Award } from 'lucide-react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Code,
      value: 5,
      suffix: '+',
      label: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      description: 'Proficient in multiple languages',
    },
    {
      icon: FolderKanban,
      value: 10,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500',
      description: 'Personal & academic projects',
    },
    {
      icon: Calendar,
      value: 2,
      suffix: '+',
      label: 'Years of Experience',
      color: 'from-green-500 to-emerald-500',
      description: 'Building & learning',
    },
    {
      icon: Zap,
      value: 12,
      suffix: '+',
      label: 'Technologies Mastered',
      color: 'from-orange-500 to-red-500',
      description: 'Frameworks & tools',
    },
  ];

  const Counter = ({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isInView, end, duration]);

    return (
      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
        {count}{suffix}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="py-section px-6 lg:px-8 bg-gradient-to-br from-[#f0f7ff] via-[#e8f4ff] to-[#f0f7ff] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8338ec]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <TrendingUp className="w-8 h-8 text-[#00d4ff] mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            <span className="bg-gradient-to-r from-[#1a1a1a] via-[#00d4ff] to-[#8338ec] bg-clip-text text-transparent">
              By The Numbers
            </span>
          </h2>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
            A snapshot of my journey in tech and development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-[#e2e8f0] p-8 text-center hover:border-[#00d4ff]/50 hover:shadow-2xl hover:shadow-[#00d4ff]/20 transition-all duration-300 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d4ff]/0 to-[#8338ec]/0 group-hover:from-[#00d4ff]/10 group-hover:to-[#8338ec]/10 transition-all duration-300 -z-10 blur-xl" />
                  
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-[#4a5568]">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

