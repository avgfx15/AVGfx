import React from 'react';

// Import Styling
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import WhatsAppButtonComponent from './components/WhatsAppButtonComponent';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div
        className='min-h-screen flex flex-col w-full'
        style={{ margin: '0 auto' }}
      >
        <NavbarComponent />

        <main className='flex-1 w-full'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>

        <WhatsAppButtonComponent />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
