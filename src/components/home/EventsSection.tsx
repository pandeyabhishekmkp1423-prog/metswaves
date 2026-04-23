/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '../../constants';

export function EventsSection() {
  return (
    <section id="events" className="section-padding bg-slate-50">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Workshops & Events</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Upcoming Industry Meetups</h2>
        </div>
        <button className="btn-outline">View Calendar</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
          >
            <div className="relative h-48">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Latest Event
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {event.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {event.time}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="flex items-center gap-2 text-gray-500 mb-8">
                <MapPin size={18} /> {event.location}
              </p>
              <button className="flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                Register Free <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
