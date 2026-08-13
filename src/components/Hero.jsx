import React from 'react';
import { Download, Mail, Zap, Crosshair } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/image.png';
import resumeFile from '../assets/Resume.docx';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Decorative Web Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3ZWIiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoODBNNDAgMHY4ME0xMS43IDExLjdsNTYuNiA1Ni42TTExLjcgNjguM2w1Ni42LTU2LjYiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCN3ZWIpIi8+PC9zdmc+')] opacity-50 z-0 rotate-12 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-primary/30 text-primary text-sm font-bold uppercase tracking-wider animate-on-scroll shadow-[0_0_15px_rgba(225,29,72,0.2)]">
            <Crosshair size={16} className="animate-spin-slow" />
            <span>Ready for Action</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-on-scroll">
            ASHRIT KS
          </h1>
          <h2 className="text-2xl text-textPrimary font-bold animate-on-scroll delay-100">
            Electrical & Electronics Engineering Student
          </h2>
          <p className="text-lg text-textSecondary max-w-lg animate-on-scroll delay-200">
            Aspiring Power Systems & Energy Engineer based in Sirsi, Karnataka. 
            With great power systems comes great responsibility!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-on-scroll delay-300">
            <a 
              href={resumeFile}
              download="Ashrit_KS_Resume.docx"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/ashrit-ks-51423a366/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-secondary text-secondary px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="mailto:ashritks786@gmail.com"
              className="inline-flex items-center gap-2 bg-surface border border-borderLight text-textPrimary px-6 py-3 rounded-lg font-bold hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-on-scroll delay-500">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-surface flex items-center justify-center shadow-[0_0_50px_rgba(225,29,72,0.3)] border-4 border-primary overflow-hidden group">
            {/* Professional avatar placeholder */}
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-primary/20 transition-colors duration-500"></div>
            <Zap size={150} className="text-secondary/30 absolute group-hover:text-primary/40 group-hover:scale-110 transition-all duration-500" />
            <img 
              src={profileImg} 
              alt="Ashrit KS Avatar" 
              className="w-full h-full object-cover z-10 scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
