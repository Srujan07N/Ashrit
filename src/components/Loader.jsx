import React, { useEffect, useState } from 'react';
import { Bug } from 'lucide-react'; // Using Bug as a spider proxy

const Loader = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Allow fade out animation to finish
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Web line */}
        <div className="w-0.5 h-32 bg-primary absolute -top-40 animate-spider-bounce"></div>
        
        <div className="animate-spider-bounce z-10 text-primary mt-12 bg-surface p-4 rounded-full shadow-[0_0_30px_rgba(225,29,72,0.5)]">
          <Bug size={64} className="animate-web-swing" />
        </div>
        
        <div className="mt-8 overflow-hidden">
          <h2 className="text-2xl font-bold text-textPrimary tracking-widest animate-fade-in-up">
            <span className="text-primary">SPIDER</span> SENSES TINGLING...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
