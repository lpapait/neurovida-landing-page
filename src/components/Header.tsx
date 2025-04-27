
import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header>
      <SocialLinks />
      <div className="bg-slate-100 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Logo />
          <h1 className="text-4xl md:text-5xl font-bold mb-3 mt-6 text-neurovida-blue">Instituto NeuroVida</h1>
          <h2 className="text-xl md:text-2xl font-normal text-gray-700">Neurofunctional and Cognitive Rehabilitation</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
