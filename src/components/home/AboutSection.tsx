/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image Collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" 
                alt="Students" 
                className="rounded-3xl shadow-lg w-full aspect-square object-cover"
              />
              <div className="bg-primary p-6 rounded-3xl text-white">
                <Star className="mb-4" />
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-blue-100 text-sm">Years of Excellence</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" 
                alt="Tech Learning" 
                className="rounded-3xl shadow-lg w-full aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" 
                alt="Collaboration" 
                className="rounded-3xl shadow-lg w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 />
              </div>
              <div>
                <p className="text-navy font-bold">Certified AI Lab</p>
                <p className="text-gray-500 text-xs text-nowrap">Industry Standard V8.2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Metawaves AI</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 leading-tight">
            Our Learning System Inspires Growth
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            We aren't just another education center. We are a talent incubator designed for the AI age. Our methodology combines rigorous technical training with real-world application.
          </p>
          
          <div className="space-y-6 mb-10">
            {[
              { title: 'Personalized Learning Paths', desc: 'AI-driven assessment for each student.' },
              { title: 'Live Interaction with Mentors', desc: 'Real-time feedback and direct doubt solving.' },
              { title: 'Global Community Access', desc: 'Connect with 10k+ alumni worldwide.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-lg">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  );
}
