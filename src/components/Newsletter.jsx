import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaHeart, FaStar, FaFeatherAlt, FaCrown } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl"></div>
      
      {/* Floating hearts */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <FaHeart size={40} className="text-secondary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float-delayed">
        <FaHeart size={35} className="text-secondary" />
      </div>
      
      <div className="container-custom mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-secondary p-4 rounded-full shadow-lg">
            <FaFeatherAlt size={32} className="text-primary-dark" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Join the Poetry Circle
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Subscribe for exclusive poems, updates, and literary inspiration from Daphne.
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2">
            <FaEnvelope size={14} className="text-secondary" />
            <span className="text-sm text-white/90">{authorData.email}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-secondary bg-white placeholder:text-dark/40"
            required
          />
          <button type="submit" className="bg-secondary hover:bg-secondary-dark text-primary-dark px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg">
            <FaPaperPlane size={18} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 inline-block mx-auto animate-pulse">
            <p className="text-secondary font-semibold flex items-center gap-2">
              <FaHeart size={18} />
              Thank you for subscribing! 📖✨
              <FaHeart size={18} />
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mt-6 text-white/70 text-sm flex-wrap">
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaStar size={12} className="text-secondary" />
            <span>Weekly poems</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaCrown size={12} className="text-secondary" />
            <span>Exclusive content</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
            <FaBook size={12} className="text-secondary" />
            <span>Book updates</span>
          </div>
        </div>
        
        <p className="text-white/40 text-xs mt-6">
          No spam ever. Unsubscribe anytime.
        </p>
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

export default Newsletter;