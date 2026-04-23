/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export function GallerySection() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', span: 'col-span-1' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', span: 'col-span-1' },
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Life at Metawaves</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Campus & Culture</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`relative overflow-hidden rounded-3xl group ${img.span}`}
          >
            <img 
              src={img.src} 
              alt="Campus" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold tracking-widest text-sm uppercase">Moment {idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
