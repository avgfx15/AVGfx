import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import heroBg1 from '../assets/heroBG1.jpg';

const NavbarComponent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? 'text-neonPink' : 'text-white';

  const navStyle = {
    backgroundImage: `url(${heroBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  return (
    <nav className='fixed top-0 left-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800/50 items-center navbar'>
      <div className='navbar-container'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='text-xl sm:text-2xl font-bold neon'>
            AVGFX
          </Link>

          {/* Desktop Navigation - centered */}
          <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-sm font-medium'>
            <li>
              <Link
                to='/'
                className={`hover:text-neonPink transition-all duration-300 ${isActive('/')}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={`hover:text-neonPink transition-all duration-300 ${isActive('/about')}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/services'
                className={`hover:text-neonPink transition-all duration-300 ${isActive('/services')}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='/portfolio'
                className={`hover:text-neonPink transition-all duration-300 ${isActive('/portfolio')}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className={`hover:text-neonPink transition-all duration-300 ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Button - Desktop */}
          <button className='hidden md:block bg-gradient-to-r from-neonPink to-neonPurple px-4 sm:px-6 py-2 rounded-full font-semibold text-sm glow hover:scale-105 transition-transform'>
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-800'>
            <ul className='space-y-3 text-center'>
              <li>
                <Link
                  to='/'
                  className={`block py-2 hover:text-neonPink transition-colors ${isActive('/')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className={`block py-2 hover:text-neonPink transition-colors ${isActive('/about')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className={`block py-2 hover:text-neonPink transition-colors ${isActive('/services')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/portfolio'
                  className={`block py-2 hover:text-neonPink transition-colors ${isActive('/portfolio')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className={`block py-2 hover:text-neonPink transition-colors ${isActive('/contact')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className='w-full bg-gradient-to-r from-neonPink to-neonPurple px-6 py-2 rounded-full font-semibold mt-2'>
                  Get Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
