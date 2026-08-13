import React from 'react';
import { Bug } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-borderLight py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10">
        <div className="mb-4 text-primary animate-spider-bounce">
          <Bug size={32} />
        </div>
        <p className="text-textSecondary font-medium tracking-wide">
          © {new Date().getFullYear()} ASHRIT KS — With Great Power Systems, Comes Great Responsibility
        </p>
      </div>
    </footer>
  );
};

export default Footer;
