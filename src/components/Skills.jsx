import React from 'react';
import { Settings, Zap, ShieldAlert, Activity, PenTool } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Electrical Power Systems', icon: <Zap size={24} /> },
    { name: 'Power Transmission Systems', icon: <Activity size={24} /> },
    { name: 'Circuit Breakers & Isolators', icon: <ShieldAlert size={24} /> },
    { name: 'Electrical Measurements', icon: <PenTool size={24} /> },
    { name: 'Equipment Inspection & Testing', icon: <Settings size={24} /> },
  ];

  return (
    <section id="skills" className="section-padding bg-surface/50 border-y border-borderLight relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-wider">Web of Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-background/80 backdrop-blur-sm border border-borderLight rounded-xl p-6 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:border-secondary transition-all duration-300 flex flex-col items-center text-center gap-4 group animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-4 bg-surface text-secondary border border-borderLight rounded-full group-hover:bg-secondary group-hover:text-white group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-lg">
                {skill.icon}
              </div>
              <h3 className="font-bold text-white text-lg tracking-wide">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
