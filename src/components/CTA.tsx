
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-neurovida-blue text-white py-12">
      <div className="section-container text-center">
        <h2 className="text-3xl font-bold mb-8">Follow our results on social media!</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-neurovida-pink hover:bg-gray-100 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg"
          >
            <Instagram className="mr-2" />
            Instagram
          </a>
          
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neurovida-green text-white hover:bg-neurovida-green/90 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg"
          >
            <MessageCircle className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
