/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Users, Clock } from 'lucide-react';
import { COURSES } from '../../constants';

export function CoursesGrid() {
  return (
    <section id="courses" className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Curriculum</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Explore Our Courses</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          High-end training modules designed to take you from beginner to industry-ready expert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course, idx) => (
          (() => {
            const Icon = course.icon;
            return (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Clock size={14} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {course.students}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-500 mb-8 line-clamp-2">
                {course.description}
              </p>
              
              <button className="flex items-center gap-2 font-bold text-navy group-hover:gap-4 transition-all">
                View Details <ArrowRight size={20} className="text-primary" />
              </button>
            </div>
          </motion.div>
            );
          })()
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="btn-outline">View All Courses</button>
      </div>
    </section>
  );
}
