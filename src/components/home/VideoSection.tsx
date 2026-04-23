/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Student Experience</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
            See How We Teach <br /> The Next Generation
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Take a virtual tour of our campus and listen to our graduates who are now leading tech revolutions at top multinational companies.
          </p>
          <ul className="space-y-4 mb-10">
            {['Hands-on Lab Training', 'Real Client Projects', 'Active Industry Networking'].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-navy font-semibold">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                  <Play size={10} className="fill-white" />
                </div>
                {text}
              </li>
            ))}
          </ul>
          <button className="btn-primary">Learn More</button>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group cursor-pointer"
        >
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
              alt="Video Preview" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-navy/20 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
                <Play className="text-primary fill-primary ml-1" size={32} />
              </motion.div>
            </div>
          </div>
          
          {/* Stats bar floating under video */}
          <div className="absolute -bottom-8 left-12 right-12 bg-white rounded-2xl shadow-xl p-6 flex items-center justify-around border border-gray-100 hidden sm:flex">
            <div className="text-center">
              <p className="text-2xl font-bold text-navy">95%</p>
              <p className="text-gray-400 text-xs uppercase font-bold">Success Rate</p>
            </div>
            <div className="w-px h-10 bg-gray-100"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-navy">24/7</p>
              <p className="text-gray-400 text-xs uppercase font-bold">Lab Access</p>
            </div>
            <div className="w-px h-10 bg-gray-100"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-navy">1-on-1</p>
              <p className="text-gray-400 text-xs uppercase font-bold">Mentoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
