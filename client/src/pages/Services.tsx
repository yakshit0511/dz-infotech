import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Code2,
  Layers,
  Fingerprint
} from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const Services: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-bg-light dot-grid py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase font-poppins">PROFESSIONAL SERVICES</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-primary leading-tight">
            Digital Excellence for <span className="text-accent italic font-light">Modern</span> Industries.
          </h1>
          
          <p className="text-muted-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between complex operational challenges and simple, scalable digital experiences through expert engineering.
          </p>
        </div>
      </section>

      {/* SERVICE 1 - CUSTOM SOFTWARE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent">
              <Cpu className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-poppins font-black text-primary">
              Custom Software Development
            </h2>
            
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              We build tailored enterprise-grade software designed to solve specific business bottlenecks and scale with your growth.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {['Enterprise Architecture', 'Cloud-Native Solutions', 'Legacy Modernization', 'API Integration'].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary/90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/partner">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(13, 27, 42, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image/IDE Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <TiltCard className="w-full max-w-md">
              <div className="bg-primary rounded-xl overflow-hidden shadow-2xl border border-white/10 text-white font-mono text-xs text-left">
                {/* Code Window Top bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-[10px] text-gray-500">software_service.ts</span>
                </div>
                
                {/* Code Body */}
                <div className="p-5 space-y-2.5 min-h-[260px] bg-black/20 text-gray-300">
                  <p className="text-gray-500">// Initialize Enterprise API Interface</p>
                  <p><span className="text-purple-400">import</span> {'{ CloudService }'} <span className="text-purple-400">from</span> <span className="text-green-300">"@dzinfotech/cloud"</span>;</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-300">config</span> = CloudService.<span className="text-yellow-200">configure</span>({'{'}</p>
                  <p className="pl-4">cluster: <span className="text-green-300">"ap-south-1"</span>,</p>
                  <p className="pl-4">encryption: <span className="text-orange-400">true</span>,</p>
                  <p className="pl-4">scaleLimit: <span className="text-orange-400">10000</span></p>
                  <p>{'});'}</p>
                  <p><span className="text-purple-400">export async function</span> <span className="text-yellow-200">resolveBottleneck</span>(data) {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">return await</span> CloudService.<span className="text-yellow-200">pipeline</span>(data)</p>
                  <p className="pl-8">.<span className="text-yellow-200">optimizeFlow</span>()</p>
                  <p className="pl-8">.<span className="text-yellow-200">secureAccess</span>();</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SERVICE 2 - MOBILE APP (Flip Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <TiltCard className="w-full max-w-sm">
              {/* Phone Graphic */}
              <div className="relative mx-auto border-[8px] border-primary rounded-[36px] bg-white h-[480px] w-[240px] shadow-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Speaker/Camera notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-28 bg-primary rounded-b-xl z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
                </div>
                
                {/* Phone screen content */}
                <div className="pt-8 px-4 flex-grow flex flex-col justify-between text-left pb-4 bg-bg-light">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-gray-500 font-mono">DZ CONTRAK APP</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    </div>

                    <div className="bg-primary text-white p-3 rounded-xl space-y-1 shadow">
                      <span className="text-[9px] text-accent font-bold uppercase tracking-wider block">Today's DPR</span>
                      <span className="text-base font-extrabold block">Site A Progress</span>
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden mt-1.5">
                        <div className="h-full bg-accent rounded-full w-4/5"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] text-gray-500 font-bold block">FEATURES DETECTED</span>
                      <div className="flex gap-1.5 flex-wrap">
                        {['GPS Tracked', 'Offline Sync', 'Camera API'].map((tag) => (
                          <span key={tag} className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border rounded-xl p-3 shadow-sm space-y-2 text-primary">
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Offline Sync Status</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">12 Reports Queued</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20">Pending Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2"
          >
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent">
              <Smartphone className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-poppins font-black text-primary">
              Mobile App Development
            </h2>
            
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              High-performance, offline-first mobile applications built for field operations and seamless user experiences on iOS and Android.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Flutter & React Native', 'Offline Data Sync', 'GPS & Telemetry', 'User-Centric UI/UX'].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary/90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/partner">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(13, 27, 42, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE 3 - WORKFLOW AUTOMATION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent">
              <Zap className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-poppins font-black text-primary">
              Workflow Automation
            </h2>
            
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              Digitize fragmented communication and manual processes to eliminate errors and improve operational transparency.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Process Mapping', 'Automated Reporting', 'Resource Optimization', 'Real-time Notifications'].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary/90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/partner">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(13, 27, 42, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <TiltCard className="w-full max-w-md">
              <div className="bg-primary rounded-xl p-6 text-white text-left space-y-6 min-h-[300px] flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">PIPELINE FLOW GRAPH</span>
                
                {/* SVG Visual Flow diagram */}
                <div className="w-full h-32 relative flex items-center justify-between px-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-accent z-10">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex-grow h-0.5 border-t-2 border-dashed border-white/20 relative mx-2">
                    <span className="absolute left-1/2 -top-1 w-2.5 h-2.5 rounded-full bg-accent animate-ping"></span>
                  </div>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white z-10">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-grow h-0.5 border-t-2 border-dashed border-white/20 relative mx-2">
                    <span className="absolute left-1/3 -top-1 w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
                  </div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-teal-400 z-10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-mono">{"FLOW: SITE_UPDATE -> ERP_SYNC"}</span>
                  <span className="text-green-400 font-bold uppercase">Success</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* SERVICE 4 - AI & DATA INTELLIGENCE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Illustration */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <TiltCard className="w-full max-w-md">
              <div className="bg-primary text-white rounded-xl p-8 text-left space-y-6 min-h-[300px] flex flex-col justify-between border border-white/10 shadow-2xl relative overflow-hidden">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">AI PREDICTIVE ANALYTICS</span>
                
                {/* SVG Neural Node network */}
                <div className="h-32 w-full flex items-center justify-center relative">
                  <svg className="w-full h-full" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                    {/* Node connections */}
                    <line x1="40" y1="60" x2="110" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="40" y1="60" x2="110" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="110" y1="30" x2="190" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="110" y1="90" x2="190" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="110" y1="30" x2="190" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="110" y1="90" x2="190" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="190" y1="30" x2="260" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <line x1="190" y1="90" x2="260" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                    {/* Nodes */}
                    <circle cx="40" cy="60" r="10" fill="#06B6D4" />
                    <circle cx="110" cy="30" r="8" fill="#1E3A8A" stroke="white" strokeWidth="2" />
                    <circle cx="110" cy="90" r="8" fill="#1E3A8A" stroke="white" strokeWidth="2" />
                    <circle cx="190" cy="30" r="8" fill="#1E3A8A" stroke="white" strokeWidth="2" />
                    <circle cx="190" cy="90" r="8" fill="#1E3A8A" stroke="white" strokeWidth="2" />
                    <circle cx="260" cy="60" r="12" fill="#2DD4BF" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-xs border-t border-white/10 pt-4">
                  <span className="text-gray-400">DELAY PROBABILITY:</span>
                  <span className="text-teal-400 font-extrabold">2.4% (EXCELLENT)</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2"
          >
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <h2 className="text-3xl font-poppins font-black text-primary">
              AI & Data Intelligence
            </h2>
            
            <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
              Future-ready intelligence layers that provide predictive insights, helping you make data-driven decisions to protect your margins.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Anomaly Detection'].map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary/90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/partner">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 15px rgba(13, 27, 42, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUILT FOR SCALE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase font-poppins">Built for Scale & Impact.</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-8 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Agile Development</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Fast-paced iterations focused on delivering value early and refining based on real-world feedback.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-8 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Scalable Infrastructure</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Cloud-native architectures designed to support high volume data and thousands of concurrent users.
                </p>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="group bg-bg-light border border-card-border p-8 rounded-2xl space-y-4 h-full hover:bg-primary transition-all duration-300">
                <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Fingerprint className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-primary group-hover:text-white transition-colors duration-300">Data Privacy</h3>
                <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Enterprise-grade security and role-based access control built into the core of every solution.
                </p>
              </div>
            </TiltCard>
          </div>

          <div className="pt-4">
            <Link to="/partner">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(13, 27, 42, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white font-bold px-8 py-4 rounded-full"
              >
                Start a Project with Us
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
