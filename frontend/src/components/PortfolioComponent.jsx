import React from 'react';

import { motion } from 'framer-motion';
import portfolioBg from '../assets/PortfolioBG.jpg';

const PortfolioComponent = () => {
  const works = [
    { title: 'Video Advertisement', category: 'Commercial' },
    { title: 'Logo Animation', category: 'Branding' },
    { title: 'Social Media Reel', category: 'Social Media' },
    { title: 'Corporate Video', category: 'Business' },
    { title: 'Brand Promotion', category: 'Marketing' },
    { title: 'Graphic Design', category: 'Design' },
  ];

  return (
    <section className='min-h-screen p-section relative animated-bg grid-pattern'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${portfolioBg})` }}
      />
      <div className='orb orb-1'></div>
      <div className='navbar-container relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
          style={{ marginBottom: '1rem' }}
        >
          <span className='bg-gradient-to-r from-[#00e5ff] to-[#7a5cff] bg-clip-text text-transparent'>
            FEATURED WORK
          </span>
        </motion.h2>

        {/* Simple Grid - Show All 6 Items */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
          {works.map((w, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              key={i}
              className='group p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-neonBlue/50 transition-all duration-300 cursor-pointer'
            >
              <div className='h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center group-hover:from-neonPink/20 group-hover:to-neonPurple/20 transition-all'>
                <svg
                  className='w-16 h-16 text-gray-600 group-hover:text-neonPink transition-colors'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 className='text-xl font-semibold text-white group-hover:text-neonBlue transition-colors'>
                  {w.title}
                </h3>
                <p className='text-gray-400 mt-1'>{w.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
