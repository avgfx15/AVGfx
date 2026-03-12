import React from 'react';
import HeroComponent from '../components/HeroComponent';
import ServicesComponent from '../components/ServicesComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import WhyChooseUSComponent from '../components/WhyChooseUSComponent';
import ContactFormComponent from '../components/ContactFormComponent';
import PricingComponent from '../components/PricingComponent';

const HomePage = () => {
  return (
    <div className='w-full'>
      <HeroComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <WhyChooseUSComponent />
      <PricingComponent />
      <ContactFormComponent />
    </div>
  );
};

export default HomePage;
