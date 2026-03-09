import React from 'react';
import whyChooseBg from '../assets/whyChooseBG.jpg';

const AboutPage = () => {
  return (
    // <div className='min-h-screen pt-20'>
    <div className='min-h-screen p-section relative animated-bg grid-pattern'>
      {/* Full Screen About Section */}
      <section className='min-h-[calc(100vh-80px)] flex items-center justify-center relative animated-bg grid-pattern'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20'
          style={{ backgroundImage: `url(${whyChooseBg})` }}
        />
        <div className='navbar-container relative z-10 py-20'>
          <div className='text-center'>
            <h1 className='text-5xl md:text-7xl font-bold neon-text mb-6'>
              ABOUT <span className='text-neonPink'>AVGFX</span>
            </h1>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto mb-8'>
              Professional Creative Studio Since 2015
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
              <div className='p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl'>
                <h3 className='text-4xl font-bold text-neonPink mb-2'>10+</h3>
                <p className='text-gray-400'>Years Experience</p>
              </div>
              <div className='p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl'>
                <h3 className='text-4xl font-bold text-neonBlue mb-2'>500+</h3>
                <p className='text-gray-400'>Projects Completed</p>
              </div>
              <div className='p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl'>
                <h3 className='text-4xl font-bold text-neonPurple mb-2'>
                  200+
                </h3>
                <p className='text-gray-400'>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
