import React from 'react';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Completed internship training in substation equipment, operation, and maintenance.",
    "Observed transformers, circuit breakers, isolators, bus bars, and protective relays.",
    "Gained practical exposure to power transmission systems and switchyard operations.",
    "Learned preventive maintenance procedures and equipment inspection practices.",
    "Studied electrical safety standards, operational procedures, and fault identification techniques.",
    "Developed basic knowledge of substation maintenance documentation and power system operations."
  ];

  return (
    <section id="experience" className="section-padding bg-surface/50 border-y border-borderLight relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12 animate-on-scroll">
          <div className="p-3 bg-gradient-to-br from-secondary to-blue-600 rounded-lg text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-wide">Field Experience</h2>
        </div>
        
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-borderLight p-8 md:p-10 shadow-2xl hover:border-primary/50 transition-colors duration-500 animate-on-scroll">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-8 border-b border-borderLight">
            <div>
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 tracking-wide">Electrical Engineering Intern</h3>
              <p className="text-lg text-secondary font-bold">Karnataka Power Transmission Corporation Limited (KPTCL)</p>
              <div className="flex items-center gap-2 text-textSecondary mt-2 text-sm font-medium">
                <MapPin size={16} className="text-primary" />
                <span>220 kV Receiving Station, Esale, Sirsi</span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-primary/30 text-primary font-bold shrink-0 shadow-[0_0_10px_rgba(225,29,72,0.1)]">
              <Calendar size={18} />
              <span>Dec 2023 – Apr 2024</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Action Report:</h4>
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex gap-3 items-start group">
                  <Zap className="text-secondary shrink-0 mt-0.5 group-hover:text-primary transition-colors group-hover:animate-pulse" size={20} />
                  <span className="text-textSecondary leading-relaxed group-hover:text-gray-300 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
