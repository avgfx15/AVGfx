import React from 'react';

import { motion } from 'framer-motion';
import servicesBg from '../assets/servicesBG.jpg';

const ServicesComponent = () => {
  const services = [
    {
      title: 'Audio Editing',
      desc: 'Professional audio mixing and mastering services',
    },
    {
      title: 'Video Ads Creation',
      desc: 'High-converting video advertisements',
    },
    { title: 'Logo Animation', desc: 'Dynamic brand identity animations' },
    { title: 'Social Media Reels', desc: 'Engaging content for all platforms' },
    { title: 'Graphic Design', desc: 'Stunning visual designs for your brand' },
    { title: 'Motion Graphics', desc: 'Eye-catching animated graphics' },
  ];

  return (
    // <section className='p-section relative animated-bg grid-pattern section-spacing my-10'>
    <section className='min-h-screen p-section relative animated-bg grid-pattern'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className='orb orb-2'></div>
      <div className='navbar-container relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
          style={{ marginBottom: '1rem' }}
        >
          <span className='bg-gradient-to-r from-[#ff2ed1] to-[#00e5ff] bg-clip-text text-transparent'>
            OUR SERVICES
          </span>
        </motion.h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {services.map((s, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              key={i}
              className='group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-neonPink/50 transition-all duration-300'
              style={{ padding: '2rem' }}
            >
              <div className='w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-neonPink to-neonPurple flex items-center justify-center'>
                <svg
                  className='w-7 h-7 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-white group-hover:text-neonPink transition-colors'>
                {s.title}
              </h3>
              <p className='text-gray-400 mt-3'>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
