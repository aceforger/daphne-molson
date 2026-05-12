import React, { useState, useEffect } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaBook, 
  FaEnvelope, 
  FaFeatherAlt,
  FaRegHeart,
  FaRegStar,
  FaPenFancy
} from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active tab based on scroll position
      const sections = ['home', 'about', 'book', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome size={16} />, activeIcon: <FaHome size={16} />, id: 'home' },
    { name: 'About', href: '#about', icon: <FaUser size={16} />, activeIcon: <FaUser size={16} />, id: 'about' },
    { name: 'Book', href: '#book', icon: <FaBook size={16} />, activeIcon: <FaBook size={16} />, id: 'book' },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} />, activeIcon: <FaEnvelope size={16} />, id: 'contact' },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/98 shadow-xl backdrop-blur-md py-3' 
        : 'bg-white/95 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo with animated icon */}
        <a 
          href="#home" 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => handleClick(e, '#home', 'home')}
        >
          <div className="relative">
            <FaFeatherAlt className="text-primary group-hover:rotate-12 transition-all duration-500" size={26} />
            <FaRegHeart className="text-accent absolute -top-1 -right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Daphne Molson
          </span>
        </a>

        {/* Desktop Navigation with enhanced icons and animations */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`relative flex items-center gap-2 font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                activeTab === item.id
                  ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5'
                  : 'text-gray-600 hover:text-primary hover:bg-primary/5'
              }`}
            >
              <span className={`transition-transform duration-300 ${
                hoveredTab === item.id ? 'scale-110 rotate-6' : ''
              }`}>
                {activeTab === item.id ? item.activeIcon : item.icon}
              </span>
              <span>{item.name}</span>
              
              {/* Active indicator */}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              )}
              
              {/* Hover effect background */}
              {hoveredTab === item.id && activeTab !== item.id && (
                <span className="absolute inset-0 bg-primary/5 rounded-full -z-10 animate-pulse"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button with animation */}
        <button 
          className={`md:hidden text-primary p-2 rounded-lg transition-all duration-300 ${
            isMenuOpen ? 'bg-primary/10 rotate-90' : 'hover:bg-primary/10'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with smooth animations */}
      <div
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-400 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md shadow-xl">
          <div className="flex flex-col gap-1 py-4 px-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform ${
                  activeTab === item.id
                    ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5 font-semibold'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className={`text-lg transition-transform duration-300 ${
                  activeTab === item.id ? 'scale-110' : ''
                }`}>
                  {activeTab === item.id ? item.activeIcon : item.icon}
                </span>
                <span className="text-base">{item.name}</span>
                {activeTab === item.id && (
                  <span className="ml-auto">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;