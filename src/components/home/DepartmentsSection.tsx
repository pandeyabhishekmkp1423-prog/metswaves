/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Palette, BarChart, Code, Video, Layout } from 'lucide-react';

export function DepartmentsSection() {
  const depts = [
    { name: 'AI & Data Science', icon: <Cpu />, count: '24 Courses' },
    { name: 'Creative Arts', icon: <Palette />, count: '18 Courses' },
    { name: 'Digital Growth', icon: <BarChart />, count: '12 Courses' },
    { name: 'Architecture', icon: <Layout />, count: '6 Courses' },
    { name: 'Development', icon: <Code />, count: '32 Courses' },
    { name: 'Media Prod.', icon: <Video />, count: '15 Courses' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {depts.map((dept, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-[2rem] text-center border border-gray-100 shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-gray-50 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              {dept.icon}
            </div>
            <h4 className="font-bold text-navy text-sm mb-1">{dept.name}</h4>
            <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{dept.count}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
