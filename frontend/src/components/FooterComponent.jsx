import React from 'react';
import { Link } from 'react-router';

const FooterComponent = () => {
  return (
    <footer
      className='py-12 sm:py-16 bg-gray-900 border-t border-gray-800'
      style={{ padding: '1.5rem 0' }}
    >
      <div className='w-[80%]' style={{ margin: '0 auto' }}>
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12'
          style={{ paddingBottom: '1.5rem' }}
        >
          <div>
            <h3 className='text-2xl font-bold neon mb-4'>AVGFX</h3>
            <p className='text-gray-400'>
              Professional Creative Studio Since 2015
            </p>
            <p className='text-gray-500 mt-2'>Audio • Video • Graphics</p>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-neonPink transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-neonPink transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='text-gray-400 hover:text-neonPink transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/portfolio'
                  className='text-gray-400 hover:text-neonPink transition-colors'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-neonPink transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Audio Editing</li>
              <li>Video Ads</li>
              <li>Logo Animation</li>
              <li>Motion Graphics</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Email: info@avgfx.in</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <div
          className='border-t border-gray-800 pt-8 text-center text-gray-500'
          style={{ paddingTop: '1.5rem' }}
        >
          <p>© 2015 - 2026 AVGFX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
