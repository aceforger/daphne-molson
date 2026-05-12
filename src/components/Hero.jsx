import React from 'react';
import { FaArrowRight, FaChevronRight, FaHeart, FaFeatherAlt, FaStar, FaCrown } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white via-fuchsia-bg/30 to-white">
      {/* Fuchsia pink decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-secondary/5 via-transparent to-primary/5"></div>
      
      {/* Floating hearts */}
      <div className="absolute top-40 left-20 opacity-20 animate-float">
        <FaHeart size={50} className="text-primary" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20 animate-float-delayed">
        <FaHeart size={40} className="text-secondary" />
      </div>
      
      {/* Floating feather */}
      <div className="absolute top-1/3 right-10 opacity-15 animate-float">
        <FaFeatherAlt size={45} className="text-primary" />
      </div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <FaCrown size={14} className="text-secondary" />
              <span>Golden Poet Award Winner 2006</span>
              <FaCrown size={14} className="text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {authorData.fullName}
              <span className="block text-primary-light text-2xl md:text-3xl mt-2">Poet Laureate</span>
            </h1>
            <p className="text-lg text-dark/70 mb-8 leading-relaxed">
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-white p-6 border-2 border-primary/30">
              <div className="relative">
                <img 
                  src="/images/daphne.jpg"
                  alt="Daphne Molson"
                  className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-2xl shadow-xl"
                  style={{ maxHeight: '450px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg">
                  <FaFeatherAlt size={24} />
                </div>
              </div>
              
              {/* Decorative hearts */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm shadow-md">
                  ❤️
                </div>
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark text-sm shadow-md">
                  ✨
                </div>
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white text-sm shadow-md">
                  🏆
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;