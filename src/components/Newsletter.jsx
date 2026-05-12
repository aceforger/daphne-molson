import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaHeart } from 'react-icons/fa';
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
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-custom mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white text-primary p-4 rounded-full">
            <FaHeart size={32} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Join the Poetry Circle
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Subscribe for exclusive poems, updates, and literary inspiration from Daphne.
        </p>
        <p className="text-sm text-white/70 mb-8">
          {authorData.email}
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-secondary bg-white"
            required
          />
          <button type="submit" className="bg-secondary hover:bg-secondary/80 text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
            <FaPaperPlane size={18} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-green-300 mt-4 animate-pulse">
            Thank you for subscribing! 📖✨
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;