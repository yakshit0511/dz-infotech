import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Activity, 
  Users, 
  RefreshCw, 
  Truck, 
  Box, 
  Network, 
  CreditCard, 
  Wallet, 
  TrendingUp, 
  Calculator, 
  LayoutDashboard, 
  FileText, 
  Brain, 
  AlertTriangle 
} from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const Product: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-bg-light dot-grid py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-5xl mx-auto text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-poppins">FLAGSHIP PRODUCT BY DZ INFOTECH</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-poppins font-black text-primary leading-tight">
              ConTrack <span className="text-accent">—</span>
            </h1>
            
            <p className="text-muted-gray text-base sm:text-lg leading-relaxed">
              A mobile-first construction management platform designed specifically for infrastructure contractors. It enables digital site reporting, real-time project tracking, and financial insights that help contractors maintain control over execution and profitability.
            </p>

            <div className="pt-2">
              <a 
                href="https://contracksolutions.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(6, 182, 212, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-accent text-white font-bold px-8 py-4 rounded-full flex items-center gap-2"
                >
                  Visit ConTrack Website
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right graphics */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="relative w-64 h-64 bg-primary rounded-3xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 to-teal-500/20 blur-xl"></div>
              <div className="text-center z-10 space-y-4">
                <div className="w-16 h-16 bg-accent rounded-2xl mx-auto flex items-center justify-center text-white text-3xl font-black">
                  C
                </div>
                <div>
                  <span className="text-sm font-bold block tracking-widest">CONTRACK</span>
                  <span className="text-[10px] text-gray-400 font-mono">v2.5.0-STABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-poppins font-black text-primary italic"
            >
              Intelligence & Control
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-muted-gray text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Essential tools integrated into a unified platform to protect project margins and streamline execution.
            </motion.p>
          </div>

          {/* Core Operations */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent text-left border-l-4 border-accent pl-3">
              Core Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Real-Time Progress Tracking</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Monitor site activity instantly with live updates and visual reports.
                  </p>
                </div>
              </TiltCard>

              {/* Card 2 - Workforce Management */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Smart Workforce Management</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Intelligent tracking and coordination of your field teams.
                  </p>
                </div>
              </TiltCard>

              {/* Card 3 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Task & Workflow Automation</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Streamline repetitive site tasks and digital handoffs.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Resource Management */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent text-left border-l-4 border-accent pl-3">
              Resource Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Intelligent Vehicle Monitoring</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Advanced tracking and telemetry for your fleet and machinery.
                  </p>
                </div>
              </TiltCard>

              {/* Card 2 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Box className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Inventory & Material Control</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Real-time visibility into stock levels and usage patterns.
                  </p>
                </div>
              </TiltCard>

              {/* Card 3 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Network className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Labor Contractor Network</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Centralized management of external labor and vendor partners.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Financial Control - Matches reference image layout! */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent text-left border-l-4 border-accent pl-3">
              Financial Control
            </h3>
            
            {/* Top row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Integrated Payment Tracking */}
              <TiltCard>
                <div className="group bg-white border border-card-border p-8 rounded-3xl text-left space-y-4 h-full shadow-premium hover:bg-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary border border-card-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Integrated Payment Tracking</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Manage all project disbursements and receivables in one place.
                  </p>
                </div>
              </TiltCard>

              {/* Automated Salary Management */}
              <TiltCard>
                <div className="group bg-white border border-card-border p-8 rounded-3xl text-left space-y-4 h-full shadow-premium hover:bg-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary border border-card-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Automated Salary Management</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Streamlined payroll processing for site and office staff.
                  </p>
                </div>
              </TiltCard>

              {/* Live Profit & Loss Insights */}
              <TiltCard>
                <div className="group bg-white border border-card-border p-8 rounded-3xl text-left space-y-4 h-full shadow-premium hover:bg-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary border border-card-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Live Profit & Loss Insights</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Immediate visibility into project financial health and margins.
                  </p>
                </div>
              </TiltCard>
            </div>

            {/* Bottom: 1 standalone card */}
            <div className="max-w-sm">
              <TiltCard>
                <div className="group bg-white border border-card-border p-8 rounded-3xl text-left space-y-4 h-full shadow-premium hover:bg-primary transition-all duration-300">
                  <div className="w-12 h-12 bg-bg-light rounded-xl flex items-center justify-center text-primary border border-card-border group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Advanced Rate Analysis Engine</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Data-driven costing and competitive rate estimation.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Insights & Reporting */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent text-left border-l-4 border-accent pl-3">
              Insights & Reporting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Card 1 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Centralized Analytics Dashboard</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    A single source of truth for all your operational data.
                  </p>
                </div>
              </TiltCard>

              {/* Card 2 */}
              <TiltCard>
                <div className="group bg-bg-light border border-card-border p-6 rounded-2xl text-left space-y-4 h-full hover:bg-primary transition-all duration-300">
                  <div className="w-10 h-10 bg-white border border-card-border rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary font-poppins group-hover:text-white transition-colors duration-300">Instant Report Generation</h4>
                  <p className="text-sm text-muted-gray leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Professional, data-rich reports ready in seconds.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Intelligence Layer */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent text-left border-l-4 border-accent pl-3">
              Intelligence Layer <span className="ml-2 px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[9px] text-accent font-bold tracking-widest uppercase">FUTURE READY</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Card 1 */}
              <TiltCard>
                <div className="bg-white border border-card-border p-6 rounded-2xl text-left space-y-4 h-full opacity-80">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-bg-light border border-card-border rounded-lg flex items-center justify-center text-muted-gray">
                      <Brain className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-accent px-2 py-0.5 rounded bg-accent/15 tracking-widest uppercase">COMING SOON</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary/80 font-poppins">AI-Powered Project Insights</h4>
                  <p className="text-sm text-muted-gray leading-relaxed">
                    Predictive analytics to forecast project outcomes.
                  </p>
                </div>
              </TiltCard>

              {/* Card 2 */}
              <TiltCard>
                <div className="bg-white border border-card-border p-6 rounded-2xl text-left space-y-4 h-full opacity-80">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-bg-light border border-card-border rounded-lg flex items-center justify-center text-muted-gray">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-teal-600 px-2 py-0.5 rounded bg-teal-500/10 tracking-widest uppercase">FUTURE</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary/80 font-poppins">Predictive Cost & Delay Alerts</h4>
                  <p className="text-sm text-muted-gray leading-relaxed">
                    Early warning systems to mitigate financial and schedule risks.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
export default Product;
