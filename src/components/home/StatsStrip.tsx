/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { STATS } from '../../constants';

export function StatsStrip() {
  return (
    <section className="bg-primary py-12 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {STATS.map((stat, idx) => (
          (() => {
            const Icon = stat.icon;
            return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <div className="text-white">
                <Icon className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
            <p className="text-blue-100 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
          </motion.div>
            );
          })()
        ))}
      </div>
    </section>
  );
}
