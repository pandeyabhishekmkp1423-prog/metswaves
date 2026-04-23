/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, BookOpen, Layout, Trophy } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      title: 'Expert Mentors',
      desc: 'Learn from top industry professionals and researchers.',
      icon: <Users className="w-8 h-8 text-primary" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Job-Oriented Courses',
      desc: 'Curriculums designed to get you hired in weeks, not years.',
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      color: 'bg-orange-50'
    },
    {
      title: 'Industry Projects',
      desc: 'Work on actual prototypes and real-world business cases.',
      icon: <Layout className="w-8 h-8 text-indigo-100" />,
      color: 'bg-indigo-50'
    },
    {
      title: 'Placement Support',
      desc: 'Dedicated career coaching and interview preparation.',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: 'bg-yellow-50'
    }
  ];

  return (
    <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
