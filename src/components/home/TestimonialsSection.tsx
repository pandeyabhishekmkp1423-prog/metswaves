/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-navy overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
         <Quote className="absolute top-20 right-20 w-96 h-96 -rotate-12" />
      </div>

      <div className="text-center mb-20 relative z-10">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Success Stories</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">Trusted by Students <br /> Worldwide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative"
          >
            <Quote className="text-primary opacity-20 absolute top-8 right-8" size={64} />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
              ))}
            </div>
            <p className="text-gray-300 text-lg italic mb-10 leading-relaxed">
              "{testimonial.comment}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-full border-2 border-primary"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-primary text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
