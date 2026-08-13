import React from 'react';
import { Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-4xl mx-auto relative z-10 animate-on-scroll">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-primary to-rose-600 rounded-lg text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <Shield size={28} />
          </div>
          <h2 className="text-3xl font-black text-white tracking-wide uppercase">My Origin Story</h2>
        </div>
        
        <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700"></div>
          
          <p className="text-lg text-textSecondary leading-relaxed">
            Final-year Electrical and Electronics Engineering (EEE) student with hands-on internship experience at Karnataka Power Transmission Corporation Limited (KPTCL), 220 kV Receiving Station, Sirsi. Gained practical exposure to substation equipment, power transmission systems, operation, and maintenance practices.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed mt-4">
            Familiar with transformers, circuit breakers, isolators, protective relays, electrical safety standards, and preventive maintenance procedures. Possess strong analytical, problem-solving, and teamwork skills with a keen interest in building a career in the electrical power and energy sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
