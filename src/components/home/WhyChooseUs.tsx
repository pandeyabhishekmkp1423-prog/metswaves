/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Zap, Target, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
  const highlights = [
    {
      title: 'Real Projects',
      desc: 'No theoretical fluff. You build products that actual people use.',
      icon: <Target className="text-white" />
    },
    {
      title: 'AI Tools Training',
      desc: 'Master the latest tools like Cursor, Midjourney, and LLMs directly.',
      icon: <Cpu className="text-white" />
    },
    {
      title: 'Portfolio Building',
      desc: 'Exit with a world-class portfolio that recruiters can\'t ignore.',
      icon: <Sparkles className="text-white" />
    },
    {
      title: 'Career Guidance',
      desc: 'Resume reviews and mock interviews with FAANG engineers.',
      icon: <Zap className="text-white" />
    }
  ];

  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            The Metawaves Edge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            We Help You Build <span className="text-primary italic">Real Careers</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            In a world shaped by AI, traditional degrees aren't enough. We bridge the gap between education and high-stakes performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 glass-card border-none bg-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Ready to reshape your future?</h3>
            <p className="text-gray-400">Join 5,000+ graduates already working at top tech firms.</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-primary">Enroll Now</button>
            <button className="px-8 py-3 text-white font-semibold hover:text-primary transition-colors">Explore All Perks</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
