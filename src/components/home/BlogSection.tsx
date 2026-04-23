/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

export function BlogSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Hub</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-navy">Latest From Our Blog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden rounded-[2.5rem] mb-8 shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-navy text-xs font-bold uppercase tracking-widest">
                <Calendar size={14} className="text-primary" /> {post.date}
              </div>
            </div>
            <h3 className="text-2xl font-extrabold text-navy mb-4 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <button className="flex items-center gap-2 font-bold text-navy group-hover:gap-4 transition-all">
              Read More <ArrowRight size={20} className="text-primary" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
