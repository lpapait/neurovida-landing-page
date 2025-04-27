
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="bg-slate-800 text-white py-2">
      <div className="max-w-6xl mx-auto px-4 flex justify-end gap-4">
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-neurovida-pink transition-colors"
        >
          <Instagram size={20} />
          <span className="hidden sm:inline">Instagram</span>
        </a>
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-neurovida-green transition-colors"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
