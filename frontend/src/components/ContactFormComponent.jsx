import React from 'react';
import { motion } from 'framer-motion';
import contactBg from '../assets/contactUSBG.jpg';

const ContactFormComponent = () => {
  return (
    <section className='p-section relative animated-bg grid-pattern my-10'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className='orb orb-1'></div>
      <div className='navbar-container relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
        >
          <span className='bg-gradient-to-r from-[#00e5ff] to-[#ff2ed1] bg-clip-text text-transparent'>
            Contact Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-center text-gray-400 mb-12 text-lg'
        >
          Ready to start your project? Let's create something amazing together.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='p-8 md:p-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl mt-16'
        >
          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-gray-400 mb-2 text-sm font-medium'>
                Your Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'
              />
            </div>
            <div>
              <label className='block text-gray-400 mb-2 text-sm font-medium'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='john@example.com'
                className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-400 mb-2 text-sm font-medium'>
              Project Type
            </label>
            <select className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'>
              <option value=''>Select a service</option>
              <option>Audio Editing</option>
              <option>Video Ads</option>
              <option>Logo Animation</option>
              <option>Social Media</option>
              <option>Graphic Design</option>
              <option>Motion Graphics</option>
            </select>
          </div>

          <div className='mb-8'>
            <label className='block text-gray-400 mb-2 text-sm font-medium'>
              Project Details
            </label>
            <textarea
              placeholder='Tell us about your project...'
              rows={5}
              className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all resize-none'
            />
          </div>

          <button className='w-full py-4 bg-gradient-to-r from-neonPink to-neonPurple rounded-xl font-semibold text-white text-lg hover:opacity-90 transition-all hover:scale-[1.02] glow'>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormComponent;
