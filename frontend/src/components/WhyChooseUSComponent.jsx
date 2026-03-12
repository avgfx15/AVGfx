import React from 'react';
import { motion } from 'framer-motion';
import whyChooseBg from '../assets/whyChooseBG.jpg';

const WhyChooseUSComponent = () => {
  const features = [
    {
      title: '10+ Years Experience',
      desc: 'Serving clients since 2015 with proven expertise',
      icon: '⭐',
    },
    {
      title: 'Creative Motion Effects',
      desc: 'Professional animations and visual effects',
      icon: '✨',
    },
    {
      title: 'High Quality Output',
      desc: 'Industry standard tools and workflows',
      icon: '🏆',
    },
  ];

  return (
    <section className='p-section relative animated-bg grid-pattern my-10'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${whyChooseBg})` }}
      />
      <div className='orb orb-3'></div>
      <div className='w-[80%] relative z-10' style={{ margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
          style={{ marginBottom: '1rem' }}
        >
          <span className='bg-gradient-to-r from-[#7a5cff] to-[#ff2ed1] bg-clip-text text-transparent'>
            Why Choose AVGFX
          </span>
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-8 mt-16'>
          {features.map((f, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={i}
              className='text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-neonPurple/50 transition-all duration-300'
              style={{ padding: '1rem' }}
            >
              <div className='text-5xl mb-4'>{f.icon}</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                {f.title}
              </h3>
              <p className='text-gray-400'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUSComponent;
