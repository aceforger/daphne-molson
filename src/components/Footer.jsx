import React from 'react';
import { FaHeart, FaEnvelope, FaFeatherAlt, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-dark text-white/80 py-10">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <FaFeatherAlt className="text-primary" size={20} />
              <h3 className="text-xl font-display font-bold text-white">Daphne Molson</h3>
            </div>
            <p className="text-sm text-white/60">Poet Laureate | Award-Winning Author</p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#book" className="hover:text-primary transition-colors">Book</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-primary transition-colors"><FaEnvelope size={18} /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          <p>© 2025 Daphne Molson. With Love To Humanity.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            <FaHeart size={10} className="text-primary" /> Poetry that touches the soul <FaHeart size={10} className="text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;