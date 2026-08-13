import React from 'react';
import { Cpu, Wifi, Smartphone, Wind, Check, Target } from 'lucide-react';

const Projects = () => {
  const features = [
    "Removes dust, smoke, and harmful gases from indoor air.",
    "Reduces allergies, asthma, and breathing difficulties.",
    "Real-time air quality monitoring.",
    "Smartphone-based remote ON/OFF control.",
    "Suitable for homes, classrooms, offices, and hospitals."
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12 animate-on-scroll">
          <div className="p-3 bg-gradient-to-br from-primary to-rose-600 rounded-lg text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]">
            <Cpu size={28} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-wide">Tech Arsenal</h2>
        </div>
        
        <div className="bg-surface/80 backdrop-blur-sm rounded-2xl border border-borderLight overflow-hidden flex flex-col lg:flex-row group hover:border-primary/50 transition-all duration-500 shadow-2xl animate-on-scroll">
          
          <div className="lg:w-2/5 bg-background p-10 flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 w-48 h-48 bg-surface rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)] border-2 border-secondary/50 flex items-center justify-center rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
              <div className="grid grid-cols-2 gap-6">
                <Wifi size={40} className="text-secondary animate-pulse" />
                <Wind size={40} className="text-white" />
                <Cpu size={40} className="text-primary group-hover:animate-web-swing" />
                <Smartphone size={40} className="text-secondary" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-8 md:p-10 relative">
            <h3 className="text-2xl font-black text-white mb-4">IoT-based Air Purifier</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['ESP32 NodeMCU', 'MQ135 Sensor', 'HEPA Filter', 'UV Light', 'Arduino IDE', 'Embedded C', 'Wi-Fi', 'Blynk IoT App'].map((tech, i) => (
                  <span key={i} className="bg-background border border-borderLight text-textSecondary hover:text-white hover:border-secondary text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Capabilities</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start group/item">
                    <Target className="text-primary shrink-0 mt-0.5 group-hover/item:text-secondary group-hover/item:scale-125 transition-all" size={18} />
                    <span className="text-textSecondary group-hover/item:text-gray-300 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
