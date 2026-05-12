import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Book', href: '#book' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-display font-bold text-primary">
          Daphne Molson
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-primary font-medium transition-colors">
              {item.name}
            </a>
          ))}
          {/* <a href="#contact" className="btn-primary text-sm px-6 py-2">
            Get in Touch
          </a> */}
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-primary text-lg" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            {/* <a href="#contact" className="btn-primary text-sm px-6 py-2" onClick={() => setIsMenuOpen(false)}>
              Get in Touch
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;