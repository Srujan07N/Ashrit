import React from 'react';
import { Mail, Phone, Send, Zap } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-surface/50 border-t border-borderLight relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest">Send a Signal</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-textSecondary max-w-2xl mx-auto font-medium">
            I am currently seeking internship and entry-level opportunities in the electrical power and energy sector. 
            Ready to swing into action!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-0 bg-background rounded-2xl border border-borderLight shadow-2xl overflow-hidden animate-on-scroll">
          
          <div className="lg:col-span-2 bg-gradient-to-br from-primary to-rose-700 text-white p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Web Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJ3ZWIiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoODBNNDAgMHY4ME0xMS43IDExLjdsNTYuNiA1Ni42TTExLjcgNjguM2w1Ni42LTU2LjYiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3dlYikiLz48L3N2Zz4=')] opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-6 tracking-wide uppercase">Comms Channel</h3>
              <p className="text-white/80 mb-10 font-medium">
                Looking forward to connecting with professionals and exploring opportunities in the power systems industry.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:ashritks786@gmail.com" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                    <Mail size={24} />
                  </div>
                  <span className="font-bold tracking-wide break-all">ashritks786@gmail.com</span>
                </a>
                
                <a href="tel:+919611294491" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                    <Phone size={24} />
                  </div>
                  <span className="font-bold tracking-wide">+91 96112 94491</span>
                </a>
                
                <a href="https://www.linkedin.com/in/ashrit-ks-51423a366/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                    <FaLinkedin size={24} />
                  </div>
                  <span className="font-bold tracking-wide">LinkedIn Profile</span>
                </a>
              </div>
            </div>
            
            <div className="mt-16 relative z-10">
              <div className="flex items-center gap-2 mb-2 text-white/70">
                <Zap size={16} />
                <span className="text-sm uppercase tracking-widest font-black">Base of Operations</span>
              </div>
              <p className="font-bold text-lg">Sirsi, Karnataka, India</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 p-10 lg:p-12">
            <h3 className="text-2xl font-black text-white mb-8 tracking-wide">Dispatch Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-textSecondary uppercase tracking-widest">Alias / Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-borderLight bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="Peter Parker"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-textSecondary uppercase tracking-widest">Signal / Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-borderLight bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="peter@dailybugle.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-textSecondary uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-borderLight bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-white placeholder-gray-500"
                  placeholder="Mission Briefing"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-textSecondary uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg border border-borderLight bg-surface focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                  placeholder="We need you for a mission..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-secondary text-white px-8 py-4 rounded-lg font-black tracking-wide uppercase hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 group"
              >
                <span>Deploy Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
