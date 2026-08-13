import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Electrical & Electronics Engineering (EEE)",
      institution: "SDM Institute of Technology (SDMIT), Ujire, Dakshina Kannada",
      timeline: "Present",
    },
    {
      degree: "Diploma in Electrical & Electronics Engineering (EEE)",
      institution: "M.E.S. R.N. Shetty Polytechnic, Sirsi, Uttara Kannada",
      timeline: "Completed",
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-on-scroll">
          <div className="p-3 bg-gradient-to-br from-primary to-rose-600 rounded-lg text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <GraduationCap size={28} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-wide">Training & Education</h2>
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-primary">
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-on-scroll" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-white shadow-[0_0_10px_rgba(59,130,246,0.6)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-primary transition-colors duration-300">
                <GraduationCap size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-borderLight shadow-lg hover:border-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                <div className="flex items-center gap-2 text-primary font-bold mb-2 text-sm uppercase tracking-wider">
                  <Calendar size={14} />
                  <span>{edu.timeline}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-1 leading-snug">{edu.degree}</h3>
                <p className="text-textSecondary">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
