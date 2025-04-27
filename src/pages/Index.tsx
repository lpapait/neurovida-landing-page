
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Methods from '../components/Methods';
import Expertise from '../components/Expertise';
import Locations from '../components/Locations';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <About />
        <Methods />
        <Expertise />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
