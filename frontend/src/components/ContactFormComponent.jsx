import React from 'react';
import { motion } from 'framer-motion';
import contactBg from '../assets/contactUSBG.jpg';

const ContactFormComponent = () => {
  return (
    <section className='p-section relative animated-bg grid-pattern my-10 min-h-screen'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className='orb orb-1'></div>
      <div className='w-[80%] relative z-10' style={{ margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
          style={{ marginBottom: '1rem' }}
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
          style={{ marginBottom: '1rem' }}
        >
          Ready to start your project? Let's create something amazing together.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='p-8 md:p-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl mt-16'
          style={{ padding: '1rem 1.5rem' }}
        >
          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}>
              <label
                className='block text-gray-400 mb-2 text-sm font-medium'
                style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
              >
                Your Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'
                style={{ padding: '0.8rem 1rem' }}
              />
            </div>
            <div style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}>
              <label
                className='block text-gray-400 mb-2 text-sm font-medium'
                style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
              >
                Email Address
              </label>
              <input
                type='email'
                placeholder='john@example.com'
                className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'
                style={{ padding: '0.8rem 1rem' }}
              />
            </div>
          </div>

          <div
            className='mb-6'
            style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
          >
            <label
              className='block text-gray-400 mb-2 text-sm font-medium'
              style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
            >
              Project Type
            </label>
            <select
              className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all'
              style={{ padding: '0.8rem 1rem' }}
            >
              <option value=''>Select a service</option>
              <option>Audio Editing</option>
              <option>Video Ads</option>
              <option>Logo Animation</option>
              <option>Social Media</option>
              <option>Graphic Design</option>
              <option>Motion Graphics</option>
            </select>
          </div>

          <div
            className='mb-8'
            style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
          >
            <label
              className='block text-gray-400 mb-2 text-sm font-medium'
              style={{ marginBottom: '0.8rem', padding: '0.8rem 1rem' }}
            >
              Project Details
            </label>
            <textarea
              placeholder='Tell us about your project...'
              rows={5}
              className='w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink/20 transition-all resize-none'
              style={{ padding: '0.8rem 1rem' }}
            />
          </div>
          <div>
            <button
              className='w-full py-4 bg-gradient-to-r from-neonPink to-neonPurple rounded-xl font-semibold text-white text-lg hover:opacity-90 transition-all hover:scale-[1.02] glow'
              style={{ padding: '0.8rem 1rem' }}
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormComponent;
