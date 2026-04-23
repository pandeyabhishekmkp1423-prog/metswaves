/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-0 h-[130%]">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920" 
            alt="Students in AI Lab" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
      </div>

      <div className="section-padding relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            Leading AI Education in 2024
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Start Your <span className="text-primary">AI-Powered</span> Career Journey
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
          >
            Learn in-demand skills like AI, Design, and Digital Tools with real-world projects and expert mentorship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="btn-primary text-lg">Explore Courses</button>
            <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-semibold py-3 px-8 rounded-full transition-all group">
              <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                <Play className="fill-white ml-1" size={18} />
              </span>
              Book Free Demo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 hidden lg:block"
      >
        <div className="glass-card p-6 flex items-center gap-4 animate-float">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">AI</div>
          <div>
            <p className="text-white text-sm font-medium">New Course</p>
            <p className="text-gray-300 text-xs">GenAI Masterclass</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
