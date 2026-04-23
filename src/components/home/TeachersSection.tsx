/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { MENTORS } from '../../constants';

export function TeachersSection() {
  return (
    <section className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Mentors & Experts</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Learn From The Best</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Our instructors aren't just teachers; they are builders, designers and AI engineers currently working in the field.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MENTORS.map((mentor, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative mb-6 overflow-hidden rounded-[2rem]">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with Socials */}
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform"><Instagram size={18} /></a>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-navy mb-1">{mentor.name}</h3>
              <p className="text-primary font-medium">{mentor.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
