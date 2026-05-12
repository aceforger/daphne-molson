import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import BookDetails from './BookDetails';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <BookDetails />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;