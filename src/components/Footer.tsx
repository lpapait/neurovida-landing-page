
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {currentYear} Instituto NeuroVida. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
