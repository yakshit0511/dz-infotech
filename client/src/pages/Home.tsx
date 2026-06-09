import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  HardHat, 
  Plus, 
  Rocket, 
  Activity, 
  TrendingUp, 
  Users, 
  DollarSign 
} from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const Home: React.FC = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* SECTION 1 - HERO */}
      <section className="relative bg-bg-light dot-grid py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-poppins">DZ INFOTECH</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black text-primary leading-tight">
              Building Smart Digital Solutions for <br />
              <span className="text-accent italic font-light tracking-wide">Real-World</span> Industries.
            </h1>
            
            <p className="text-muted-gray text-base sm:text-lg max-w-xl leading-relaxed">
              We design and develop technology that simplifies operations, improves efficiency, and gives businesses complete control over their workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-primary text-white font-medium px-8 py-3.5 rounded-full hover:bg-primary/95 transition-all shadow-md"
                >
                  Explore Our Products
                </motion.button>
              </Link>
              <a href="https://contracksolutions.in/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(13, 27, 42, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full transition-all"
                >
                  View ConTrack
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Floating Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Gradient Glow Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-teal-400/25 rounded-3xl blur-3xl opacity-60 animate-pulse-slow"></div>
            
            {/* Dashboard Card with Float */}
            <div className="relative w-full max-w-md bg-primary rounded-2xl shadow-2xl border border-white/10 text-white overflow-hidden animate-float">
              
              {/* Window Controls */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-black/20">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-400 font-mono ml-4">dzinfotech-dashboard.app</span>
              </div>
              
              {/* Fake Dashboard Content */}
              <div className="p-5 space-y-4 font-sans text-left">
                {/* Stats Header */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Total Profit</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold text-green-400">+24.8%</span>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Active Fleet</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold text-accent">98.2%</span>
                      <Activity className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>

                {/* SVG Live Chart */}
                <div className="p-3.5 bg-white/5 rounded-lg border border-white/5 space-y-2">
                  <span className="text-[11px] text-gray-400 font-medium block">Resource Efficiency</span>
                  <div className="h-24 w-full flex items-end justify-between gap-1 pt-4">
                    {/* Simulated bars */}
                    <div className="w-full bg-accent/20 rounded h-12 relative group hover:bg-accent/40 transition-all">
                      <div className="absolute bottom-0 left-0 w-full bg-accent rounded h-3/4"></div>
                    </div>
                    <div className="w-full bg-teal-400/20 rounded h-16 relative">
                      <div className="absolute bottom-0 left-0 w-full bg-teal-400 rounded h-1/2"></div>
                    </div>
                    <div className="w-full bg-accent/20 rounded h-20 relative">
                      <div className="absolute bottom-0 left-0 w-full bg-accent rounded h-4/5"></div>
                    </div>
                    <div className="w-full bg-teal-400/20 rounded h-14 relative">
                      <div className="absolute bottom-0 left-0 w-full bg-teal-400 rounded h-3/5"></div>
                    </div>
                    <div className="w-full bg-accent/20 rounded h-24 relative">
                      <div className="absolute bottom-0 left-0 w-full bg-accent rounded h-full"></div>
                    </div>
                  </div>
                </div>

                {/* Mini List */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Operational Status</span>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span className="text-xs font-semibold">Field Site B attendance</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 font-bold border border-green-500/30">Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-xs font-semibold">Payment Voucher approved</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 font-bold border border-green-500/30">Synced</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - WHAT WE DO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <h2 className="text-xs font-extrabold tracking-[0.25em] text-accent uppercase font-poppins">WHAT WE DO</h2>
            <h3 className="text-3xl sm:text-4xl font-poppins font-extrabold text-primary">
              We bridge the gap between complex operational challenges and simple digital experiences.
            </h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <TiltCard>
              <div className="h-full bg-white rounded-xl p-6 border border-card-border flex flex-col text-left space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary font-poppins">Custom Software</h4>
                <p className="text-sm text-muted-gray leading-relaxed">
                  Tailored enterprise solutions designed to solve specific industry bottlenecks.
                </p>
              </div>
            </TiltCard>

            {/* Card 2 */}
            <TiltCard>
              <div className="h-full bg-white rounded-xl p-6 border border-card-border flex flex-col text-left space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary font-poppins">Mobile Apps</h4>
                <p className="text-sm text-muted-gray leading-relaxed">
                  Powerful, offline-first mobile tools that empower field and site operations.
                </p>
              </div>
            </TiltCard>

            {/* Card 3 */}
            <TiltCard>
              <div className="h-full bg-white rounded-xl p-6 border border-card-border flex flex-col text-left space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary font-poppins">Workflow Automation</h4>
                <p className="text-sm text-muted-gray leading-relaxed">
                  Eliminating manual errors by digitizing fragmented communication and reporting.
                </p>
              </div>
            </TiltCard>

            {/* Card 4 */}
            <TiltCard>
              <div className="h-full bg-white rounded-xl p-6 border border-card-border flex flex-col text-left space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-primary font-poppins">AI-Based Solutions</h4>
                <p className="text-sm text-muted-gray leading-relaxed">
                  Future-ready intelligence layers that provide predictive insights for growth.
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - THE VISION (Split Layout) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 text-left"
          >
            <div className="text-xs font-extrabold tracking-[0.25em] text-accent uppercase font-poppins">THE VISION</div>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-primary leading-tight">
              Solving Real Operational <span className="text-accent italic font-light">Problems</span> with Technology.
            </h2>
            <p className="text-muted-gray text-base leading-relaxed">
              DZ Infotech was founded with the vision of solving real operational problems using technology. We focus on building practical, scalable solutions that help businesses gain control, visibility, and efficiency.
            </p>
            <p className="text-muted-gray text-base leading-relaxed">
              We believe that technology shouldn't be complex; it should be an enabler. By observing daily struggles in industries like construction, we've learned how to build tools that users actually want to use.
            </p>
            <Link to="/about" className="inline-block pt-2">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(13, 27, 42, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-primary text-primary font-bold px-8 py-3 rounded-full transition-all"
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Card Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <TiltCard className="w-full max-w-md">
              <div className="bg-primary rounded-2xl p-8 text-white min-h-[320px] flex flex-col justify-between relative overflow-hidden">
                {/* Decorative network grid lines in background */}
                <div className="absolute inset-0 opacity-15">
                  <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="2" strokeDasharray="5 5" />
                    <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" />
                    <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="2" />
                    <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                
                {/* Tech node indicator */}
                <div className="flex justify-between items-center z-10">
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40">
                    <span className="w-3.5 h-3.5 rounded-full bg-accent"></span>
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-accent font-bold">DZ SYNC ENGINE</span>
                </div>

                {/* Italic quote */}
                <blockquote className="text-xl sm:text-2xl font-poppins italic font-light leading-relaxed text-left z-10 pt-12">
                  "Transforming how industries operate through digital intelligence."
                </blockquote>
                
                <div className="flex justify-between items-end z-10 mt-8">
                  <span className="text-xs text-gray-400 font-mono">BHAVNAGAR // GUJARAT</span>
                  <span className="text-xs text-accent font-bold tracking-widest">EST. 2025</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - OUR PRODUCTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-poppins font-extrabold text-primary italic"
            >
              Our Products
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-muted-gray text-base sm:text-lg max-w-xl mx-auto"
            >
              Scalable innovations built for tough operational environments.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LEFT CARD - ConTrack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TiltCard className="h-full">
                <div className="bg-primary text-white rounded-2xl p-8 border border-white/5 text-left flex flex-col justify-between h-full space-y-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold tracking-widest text-accent uppercase font-poppins px-3 py-1 rounded bg-accent/10 border border-accent/20">
                        FLAGSHIP PRODUCT
                      </span>
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                        <HardHat className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-3xl font-poppins font-black">ConTrack</h3>
                      <h4 className="text-accent font-bold font-poppins text-sm tracking-wide">
                        Construction & Financial Intelligence
                      </h4>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      A mobile-first construction management platform designed to help contractors manage projects, track resources, and improve profitability.
                    </p>

                    <ul className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-4 border-t border-white/10">
                      {["Real-Time Tracking", "Financial Insights", "Resource Management", "Site Reporting"].map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="https://contracksolutions.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full pt-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#0D1B2A" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-accent text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      Visit ConTrack
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                </div>
              </TiltCard>
            </motion.div>

            {/* RIGHT CARD - Future Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-card-border text-left flex flex-col justify-between h-full space-y-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold tracking-widest text-muted-gray uppercase font-poppins px-3 py-1 rounded bg-gray-100 border border-gray-200">
                        PIPELINE
                      </span>
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-muted-gray border border-gray-200">
                        <Plus className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-3xl font-poppins font-black text-muted-gray">Future Solutions</h3>
                    </div>

                    <p className="text-muted-gray text-sm leading-relaxed">
                      We are actively developing new intelligence tools for warehouse management, logistics, and more. Stay tuned.
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <button className="w-full bg-gray-100 text-muted-gray cursor-not-allowed font-bold py-3.5 rounded-xl border border-gray-200" disabled>
                      Coming Soon
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - OUR VISION BANNER (Dark Navy Full Width) */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center space-y-8">
          {/* Rocket Icon Container */}
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg mb-2">
            <Rocket className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-poppins italic font-light tracking-wide max-w-2xl leading-tight">
            Our Vision
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
            We aim to build a suite of intelligent digital tools that transform how industries operate, starting with construction and expanding into multiple sectors worldwide.
          </p>

          <div className="border-t border-white/10 pt-10 w-full max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-[11px] font-bold tracking-[0.25em] text-accent">
              <span>AUTOMATE</span>
              <span>INTEGRATE</span>
              <span>SCALE</span>
              <span>PROTECT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-card-border p-8 sm:p-12 shadow-premium hover:shadow-premium-hover transition-shadow duration-300 flex flex-col lg:flex-row justify-between items-center gap-8 text-left"
          >
            <div className="space-y-3 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-poppins font-black text-primary">
                Ready to Digitize Your Industry?
              </h3>
              <p className="text-muted-gray text-sm sm:text-base leading-relaxed">
                Join the growing list of businesses scaling with DZ Infotech intelligence.
              </p>
            </div>
            
            <Link to="/partner" className="w-full lg:w-auto flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(232, 98, 42, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full lg:w-auto bg-primary text-white hover:bg-accent font-bold px-8 py-4 rounded-full transition-all duration-300 text-center"
              >
                Schedule a Meeting
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Home;
