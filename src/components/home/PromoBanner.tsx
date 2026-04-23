/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export function PromoBanner() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-r from-primary to-accent rounded-[3rem] overflow-hidden p-12 lg:p-20 text-white"
      >
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block py-1.5 px-4 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Early Bird Offer
            </span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Get <span className="text-navy">25% Off</span> on All Premium Courses
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Transform your skills and get job-ready in 2024. Offer ends in 48 hours! Use code: <span className="font-bold border-b-2 border-white">META25</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="bg-navy text-white hover:bg-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105">
                Redeem Offer
              </button>
              <button className="bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105">
                Talk to Advisor
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center text-center animate-float">
               <div>
                  <p className="text-lg uppercase opacity-80">Limited</p>
                  <p className="text-5xl lg:text-7xl font-black">25%</p>
                  <p className="text-2xl font-bold uppercase tracking-widest">OFF</p>
               </div>
            </div>
            {/* Dots pattern */}
            <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-2 opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
