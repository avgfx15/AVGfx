import React from 'react';
import { motion } from 'framer-motion';
import pricingBg from '../assets/pricingBG.jpg';

const PricingComponent = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹1,000',
      features: ['Audio Editing', 'Basic Video', '48hr Delivery'],
      popular: false,
    },
    {
      name: 'Standard',
      price: '₹5,000',
      features: [
        'Video Ads',
        'Logo Animation',
        'Social Media',
        '24hr Delivery',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹15,000',
      features: [
        'Full Production',
        'Motion Graphics',
        'All Formats',
        '12hr Delivery',
      ],
      popular: false,
    },
  ];

  return (
    <section className='p-section relative animated-bg grid-pattern my-10'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30'
        style={{ backgroundImage: `url(${pricingBg})` }}
      />
      <div className='orb orb-2'></div>
      <div className='navbar-container relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-20 text-white'
        >
          <span className='bg-gradient-to-r from-[#ff2ed1] to-[#ff7a18] bg-clip-text text-transparent'>
            PRICING PLANS
          </span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16'>
          {plans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? 'bg-gray-900/80 border-neonBlue glow'
                  : 'bg-gray-900/50 border-gray-800 hover:border-neonPink/50'
              } backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neonBlue to-neonPurple px-4 py-3 rounded-full text-sm font-semibold'>
                  Most Popular
                </div>
              )}
              <h3 className='text-2xl font-bold text-white'>{plan.name}</h3>
              <p className='text-4xl font-bold mt-4 bg-gradient-to-r from-neonPink to-neonBlue bg-clip-text text-transparent'>
                {plan.price}
              </p>
              <ul className='mt-6 space-y-3'>
                {plan.features.map((f, j) => (
                  <li key={j} className='flex items-center gap-2 text-gray-400'>
                    <svg
                      className='w-5 h-5 text-neonPink'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neonBlue to-neonPurple text-white hover:opacity-90'
                    : 'border border-neonPink text-neonPink hover:bg-neonPink/10'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
