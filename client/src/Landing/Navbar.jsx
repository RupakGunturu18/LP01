// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';
import config from '../utils/config.js';

const Navbar = ({ activeSection }) => {
  // Nav items for internal page scroll links (with their section IDs)
  const navItems = [
    { label: 'Features', to: '/#features', id: 'features' },
    { label: 'Benefits', to: '/#stakeholders', id: 'stakeholders' },
    { label: 'Testimonials', to: '/#testimonials', id: 'testimonials' },
    { label: 'Contact Us', to: '/#contact', id: 'contact' },
  ];

  const navLinkBaseClass = "relative py-2 text-white transition-colors duration-200 group";
  const navLinkFontStyles = {
    fontFamily: '"Lexend Deca", sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
  };

  // State to control navbar visibility based on scroll direction
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setIsNavbarVisible(false); // hide on scroll down
          } else {
            setIsNavbarVisible(true);  // show on scroll up
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  // Dynamic class for active or hover states for section links
  const getLinkClass = (id) =>
    `${navLinkBaseClass} ${activeSection === id ? 'text-purple-300' : 'hover:text-purple-300'}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        transition-transform duration-300
        bg-gray-900/60 backdrop-blur-lg border-b border-white/5
        ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="GenZGalaxy Logo"
              className="w-10 h-10 object-contain"
            />
            <div
              className="flex-shrink-0 text-white"
              style={{
                fontFamily: '"Lexend Deca", sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              {config.APP_NAME || 'GenZGalaxy'}
            </div>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-baseline space-x-10">
              {/* Our Story Link with animation and font styles */}
              <Link
                to="/our"
                className={
                  activeSection === 'our'
                    ? "relative py-2 text-purple-300 transition-colors duration-200 group font-semibold"
                    : "relative py-2 text-white hover:text-purple-300 transition-colors duration-200 group font-semibold"
                }
                style={navLinkFontStyles}
                aria-label="Our Story"
                aria-current={activeSection === 'our' ? 'page' : undefined}
              >
                Our Story
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400/80 transition-transform duration-300 ease-out
                  ${activeSection === 'our' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Link>

              {/* Section Links for smooth scrolling */}
              {navItems.map(({ label, to, id }) => (
                <HashLink
                  key={id}
                  smooth
                  to={to}
                  className={getLinkClass(id)}
                  style={navLinkFontStyles}
                  aria-label={label}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400/80 transition-transform duration-300 ease-out
                    ${activeSection === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </HashLink>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-5">
            <Link
              to="/login"
              className="text-white/90 hover:text-white transition-colors duration-200"
              style={navLinkFontStyles}
              aria-label="Sign in"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
              style={navLinkFontStyles}
              aria-label="Get Started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
