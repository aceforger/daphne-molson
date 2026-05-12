import React from 'react';
import { FaArrowRight, FaChevronRight, FaHeart, FaFeatherAlt } from 'react-icons/fa';
import { RiAwardFill } from 'react-icons/ri';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white via-rose/30 to-white">
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <RiAwardFill size={16} />
              <span>Golden Poet Award Winner 2006</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-primary-light text-2xl md:text-3xl mt-2">Poet Laureate</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Award-winning poet, multibillionaire editor, and creator of extraordinary contributions to poetic literacy worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="btn-primary flex items-center justify-center gap-2 group">
                Explore With Love To Humanity
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-outline flex items-center justify-center gap-2">
                Discover Her Journey
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-primary/5 to-secondary/20 p-8">
              <div className="absolute top-4 right-4 text-primary">
                <FaHeart className="text-primary/30" size={40} />
              </div>
              <img 
                src="/images/daphne.jpg"
                alt="Daphne Molson"
                className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                style={{ maxHeight: '450px' }}
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-primary rounded-full p-3 shadow-lg">
                <FaFeatherAlt size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;