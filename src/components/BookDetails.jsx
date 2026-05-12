import React from 'react';
import { FaBook, FaHeart, FaFeatherAlt, FaQuoteLeft, FaStar, FaLeaf, FaPeace } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-white to-rose/10">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">With Love To Humanity</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">A poetic journey through the heart of human experience</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8 shadow-xl border border-primary/20">
              {/* Book Cover Image */}
              <div className="mb-6 relative">
                <img 
                  src="/images/love.jpg"
                  alt="With Love To Humanity - Book Cover"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-2xl border-2 border-white/50"
                />
                <div className="absolute -top-3 -right-3 bg-primary text-white rounded-full p-2 shadow-lg">
                  <FaHeart size={16} />
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-3">
                  <FaHeart className="text-primary" size={20} />
                  <FaFeatherAlt className="text-primary/70" size={20} />
                  <FaHeart className="text-primary" size={20} />
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-xl font-display font-bold text-primary mb-2">{book.fullTitle}</h3>
                  <div className="w-16 h-0.5 bg-primary mx-auto my-2"></div>
                  <p className="text-gray-600 text-sm">By Daphne Molson</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <FaStar className="text-yellow-500" size={14} />
                    <FaStar className="text-yellow-500" size={14} />
                    <FaStar className="text-yellow-500" size={14} />
                    <FaStar className="text-yellow-500" size={14} />
                    <FaStar className="text-yellow-500" size={14} />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg">
                <FaQuoteLeft size={20} />
              </div>
            </div>
          </div>

          <div>
            <div className="prose text-gray-700 mb-6">
              <p className="leading-relaxed text-lg">{book.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <FaBook size={20} />
                Poetic Forms Included:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {book.details.includes.map((form, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-primary/10">
                    {form === 'Haiku' && <FaLeaf className="text-primary" />}
                    {form === 'Haikai no Renga' && <FaPeace className="text-primary" />}
                    {(form === 'Contemporary Poetry' || form === 'Nature Verses') && <FaHeart className="text-primary" />}
                    <span className="text-sm text-gray-700">{form}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-rose/20 rounded-xl p-5 shadow-md mb-6 border-l-4 border-primary">
              <FaQuoteLeft className="text-primary mb-2" size={20} />
              <p className="text-gray-700 italic mb-3">
                "Daphne's pleasant poems have forms of Japanese haiku-hokku, haikai no renga natures that describe events, thoughts on life, death, war, peace, children, kingdom, marriage, love..."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 text-center">
                Buy With Love To Humanity
              </button>
              <button className="btn-outline flex-1 text-center">
                Read Sample Poems
              </button>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <FaStar className="text-yellow-500" />
                <span>Award-Winning Collection</span>
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;