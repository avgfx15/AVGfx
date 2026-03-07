import { useState } from 'react';
import { useTheme, themeOptions } from './ThemeComponent';

const Navbar = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Services', href: '#services' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const currentThemeObj =
    themeOptions.find((t) => t.value === currentTheme) || themeOptions[0];

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo Section */}
        <div className='navbar-logo'>
          <div className='logo-icon'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='32' height='32' rx='8' fill='currentColor' />
              <path
                d='M8 12L16 8L24 12V20L16 24L8 20V12Z'
                stroke='white'
                strokeWidth='2'
                fill='none'
              />
              <circle cx='16' cy='16' r='4' fill='white' />
            </svg>
          </div>
          <div className='logo-text'>
            <span className='company-name'>AVGfx</span>
            <span className='company-tagline'>Video Graphics</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='navbar-links'>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className='nav-link'>
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Selector */}
        <div className='navbar-theme'>
          <div className='theme-selector'>
            <button
              className='theme-button'
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
            >
              <div
                className='theme-color-preview'
                style={{ backgroundColor: currentThemeObj.color }}
              />
              <span className='theme-label'>{currentThemeObj.name}</span>
              <svg
                className={`dropdown-arrow ${isThemeDropdownOpen ? 'open' : ''}`}
                width='12'
                height='12'
                viewBox='0 0 12 12'
              >
                <path
                  d='M3 4.5L6 7.5L9 4.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  fill='none'
                />
              </svg>
            </button>

            {isThemeDropdownOpen && (
              <div className='theme-dropdown'>
                {themeOptions.map((theme) => (
                  <button
                    key={theme.value}
                    className={`theme-option ${currentTheme === theme.value ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(theme.value);
                      setIsThemeDropdownOpen(false);
                    }}
                  >
                    <div
                      className='theme-option-color'
                      style={{ backgroundColor: theme.color }}
                    />
                    <span>{theme.name}</span>
                    {currentTheme === theme.value && (
                      <svg
                        className='check-icon'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                      >
                        <path
                          d='M13.5 4.5L6 12L2.5 8.5'
                          stroke='currentColor'
                          strokeWidth='2'
                          fill='none'
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='mobile-menu-button'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-nav-links'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='mobile-nav-link'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='mobile-theme-section'>
          <span className='mobile-theme-label'>Select Theme</span>
          <div className='mobile-theme-grid'>
            {themeOptions.map((theme) => (
              <button
                key={theme.value}
                className={`mobile-theme-option ${currentTheme === theme.value ? 'active' : ''}`}
                onClick={() => {
                  setTheme(theme.value);
                  setIsMenuOpen(false);
                }}
                title={theme.name}
              >
                <div style={{ backgroundColor: theme.color }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
