import React from 'react';

import heroBg1 from '../assets/heroBG1.jpg';

const HeroComponent = () => {
  return (
    <section className='min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20 pb-10'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${heroBg1})` }}
      />

      {/* Grid Pattern Overlay */}

      <div className='absolute inset-0 animated-bg grid-pattern my-10' />

      {/* Content */}
      <div className='navbar-container relative z-10'>
        <h1 className='text-6xl md:text-7xl font-bold neon-text leading-tight'>
          TURN YOUR IDEAS INTO
          <br />
          STUNNING AUDIO •
          <br />
          VIDEO • GRAPHICS
        </h1>

        <p className='mt-6 text-gray-400 text-lg'>
          Professional Creative Studio Since 2015
        </p>

        <div className='mt-8 flex justify-center gap-6'>
          <button className='neon-btn'>Start Your Project</button>

          <button className='border border-purple-500 px-6 py-3 rounded hover:bg-purple-700 transition'>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
