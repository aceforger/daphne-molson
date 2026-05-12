import React from 'react';
import { FaHeart, FaAward, FaBook, FaFeatherAlt, FaCrown, FaStar, FaQuoteLeft, FaTrophy, FaMedal } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  const achievements = authorData.authorBio.achievements;
  const interests = authorData.authorBio.interests;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <FaHeart size={14} className="text-primary" />
            <span className="text-primary font-semibold text-sm">Celebrated Poet & Editor</span>
            <FaHeart size={14} className="text-primary" />
          </div>
          <h2 className="section-title">About Madame Daphne Molson</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="section-subtitle">
            Celebrated poet, editor, and humanitarian whose words have touched readers across the globe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-fuchsia-bg to-white rounded-2xl p-8 shadow-lg border-l-8 border-primary">
              <FaQuoteLeft className="text-primary mb-4" size={32} />
              <p className="text-dark/80 leading-relaxed whitespace-pre-line">
                {authorData.authorBio.fullBio}
              </p>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaTrophy size={24} className="text-secondary" />
                Awards & Recognition
              </h3>
              <div className="space-y-4">
                {authorData.awards.map((award, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-100 group hover:bg-fuchsia-bg/30 p-2 rounded-lg transition-all">
                    <FaMedal className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-primary">{award.name} ({award.year})</p>
                      <p className="text-sm text-dark/60">{award.description}</p>
                    </div>
                    <FaStar className="text-secondary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-primary/5 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaFeatherAlt size={24} className="text-primary" />
                Heritage & Legacy
              </h3>
              <p className="text-dark/70 leading-relaxed mb-4">
                {authorData.authorBio.heritage}
              </p>
              <div className="bg-fuchsia-bg rounded-lg p-4 mt-4">
                <p className="text-sm text-dark/60 italic flex items-center gap-2">
                  <FaHeart className="text-primary" size={12} />
                  United Empire Loyalist family member, married into the legendary Molson Coors family
                  <FaHeart className="text-primary" size={12} />
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-fuchsia-bg to-white rounded-xl p-4 text-center border border-primary/10 hover:shadow-lg transition-all">
                <FaAward className="text-primary mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-primary">Achievements</h4>
                <div className="flex flex-wrap gap-1 justify-center mt-2">
                  {achievements.slice(0, 3).map((achievement, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-dark/60 shadow-sm">{achievement}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-bg to-white rounded-xl p-4 text-center border border-primary/10 hover:shadow-lg transition-all">
                <FaHeart className="text-primary mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-primary">Interests</h4>
                <div className="flex flex-wrap gap-1 justify-center mt-2">
                  {interests.slice(0, 3).map((interest, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-dark/60 shadow-sm">{interest}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaBook size={24} className="text-secondary" />
                <h3 className="text-xl font-display font-bold">Published Works</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Her work has been featured in ILP luxury hardbound anthologies and Sound of Poetry discs and tapes. 
                Invited to International Society of Poets Conventions from 1999 to 2009.
              </p>
              <p className="text-white/80 text-sm mt-3 flex items-center gap-2">
                <FaCrown size={14} className="text-secondary" />
                Find Daphne at {authorData.authorBio.website}
                <FaCrown size={14} className="text-secondary" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;