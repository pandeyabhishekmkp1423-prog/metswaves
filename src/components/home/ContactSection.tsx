/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info + Skills */}
        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8">Have Questions? Talk to Our Experts.</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Whether you are a beginner or a pro looking to switch, our career advisors can help you pick the right path.
          </p>
          
          <div className="space-y-8 mb-12">
            {[
              { icon: <Phone />, label: 'Call Us', val: '+1 (555) 000-1234' },
              { icon: <Mail />, label: 'Email', val: 'admissions@metawaves.ai' },
              { icon: <MapPin />, label: 'Studio', val: '123 AI Boulevard, Silicon Valley, CA' }
            ].map((contact, i) => (
              <div key={i} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{contact.label}</p>
                  <p className="text-navy font-bold text-lg">{contact.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Skill progress visual */}
          <div className="p-8 bg-navy rounded-[2rem] text-white">
            <h4 className="text-xl font-bold mb-6">Course Learning Curve</h4>
            <div className="space-y-6">
              {[
                { label: 'Fundamental AI', val: '90%' },
                { label: 'Advanced Projects', val: '75%' },
                { label: 'Job Readiness', val: '95%' }
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm font-bold">
                    <span>{skill.label}</span>
                    <span className="text-primary">{skill.val}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.val }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-navy mb-8">Apply for Free Demo</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all">
                <option value="">Select Course</option>
                <option value="ai">AI & ML</option>
                <option value="design">UI/UX Design</option>
                <option value="video">Video Editing</option>
              </select>
            </div>
            <textarea 
              rows={4} 
              placeholder="Your Message..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
            ></textarea>
            <button className="btn-primary w-full py-5 flex items-center justify-center gap-2 group">
              Submit Application <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          <p className="text-gray-400 text-xs text-center mt-6">
             By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
